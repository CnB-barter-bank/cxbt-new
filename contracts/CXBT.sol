// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Импорты контрактов из OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title CXBT
 * @dev Стандартный токен ERC-20 с механизмом блокировки/разблокировки и возможностью минтинга и паузы
 * @custom:security-contact security@example.com
 */
contract CXBT is ERC20, ERC20Pausable, Ownable, ReentrancyGuard {
    /**
     * @dev Структура для хранения баланса токенов пользователя
     */
    struct TokenBalance {
        uint256 unlockedTokens;
        uint256 lockedTokens;
    }

    // Маппинг для хранения балансов пользователей
    mapping(address => TokenBalance) private tokenBalances;

    // PAID токен для оплаты разблокировки
    IERC20 public immutable paidToken;

    // Процент разблокировки (в базисных пунктах)
    uint256 public unlockPercentage;

    // Константа для базисных пунктов (10000 = 100%)
    uint256 public constant BASIS_POINTS = 10000;

    // Баланс пула наград
    uint256 public rewardPoolBalance;

    // События для прозрачности операций
    event TokensUnlocked(address indexed user, uint256 amount, uint256 paidPaid);
    event RewardPoolAdded(uint256 amount);
    event RewardPoolWithdrawn(uint256 amount);
    event UnlockPercentageChanged(uint256 oldPercentage, uint256 newPercentage);

    /**
     * @dev Конструктор контракта
     * @param name Название токена
     * @param symbol Символ токена (тикер)
     * @param initialSupply Начальное количество токенов для минтинга
     * @param _paidToken Адрес контракта PAID токена
     * @param _unlockPercentage Процент разблокировки в базисных пунктах (макс 2000 = 20%)
     */
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        address _paidToken,
        uint256 _unlockPercentage
    ) ERC20(name, symbol) Ownable(msg.sender) {
        require(_paidToken != address(0), "Invalid PAID token address");
        require(_unlockPercentage > 0 && _unlockPercentage <= 2000, "Invalid unlock percentage");
        
        paidToken = IERC20(_paidToken);
        unlockPercentage = _unlockPercentage;
        
        _mint(msg.sender, initialSupply);
    }

    /**
     * @dev Возвращает разблокированные, заблокированные и общее количество токенов пользователя
     * @param user Адрес пользователя
     * @return unlocked Количество разблокированных токенов
     * @return locked Количество заблокированных токенов
     * @return total Общее количество токенов
     */
    function getTokenBalances(address user) public view returns (
        uint256 unlocked,
        uint256 locked,
        uint256 total
    ) {
        TokenBalance storage balance = tokenBalances[user];
        unlocked = balance.unlockedTokens;
        locked = balance.lockedTokens;
        total = unlocked + locked;
    }

    /**
     * @dev Рассчитывает стоимость разблокировки токенов в PAID
     * @param unlockAmount Количество токенов для разблокировки
     * @return cost Стоимость в PAID токенах
     */
    function calculateUnlockCost(uint256 unlockAmount) public view returns (uint256 cost) {
        // Стоимость = unlockAmount * unlockPercentage / BASIS_POINTS
        cost = (unlockAmount * unlockPercentage) / BASIS_POINTS;
    }

    /**
     * @dev Разблокирует токены через перевод PAID и начисляет награду
     * @param unlockAmount Количество токенов для разблокировки
     * @notice Пользователь должен предварительно одобрить перевод PAID на контракт
     */
    function unlockTokens(uint256 unlockAmount) public nonReentrant {
        require(unlockAmount > 0, "Unlock amount must be greater than 0");
        
        TokenBalance storage balance = tokenBalances[msg.sender];
        require(balance.lockedTokens >= unlockAmount, "Insufficient locked tokens");
        
        // Рассчитываем стоимость разблокировки
        uint256 paidCost = calculateUnlockCost(unlockAmount);
        require(paidCost > 0, "Invalid unlock cost");
        
        // Переводим PAID от пользователя на контракт
        require(
            paidToken.transferFrom(msg.sender, address(this), paidCost),
            "PAID transfer failed"
        );
        
        // Переводим токены из locked в unlocked
        balance.lockedTokens -= unlockAmount;
        balance.unlockedTokens += unlockAmount;
        
        // Начисляем награду пользователю (равную количеству разблокированных токенов)
        // Награда берется из пула наград, если он есть
        if (rewardPoolBalance >= unlockAmount) {
            rewardPoolBalance -= unlockAmount;
            balance.unlockedTokens += unlockAmount;
        }
        
        emit TokensUnlocked(msg.sender, unlockAmount, paidCost);
    }

    /**
     * @dev Добавляет токены в пул наград
     * @param amount Количество токенов для добавления в пул наград
     * @notice Только владелец контракта может вызывать эту функцию
     */
    function addToRewardPool(uint256 amount) public onlyOwner {
        require(amount > 0, "Amount must be greater than 0");
        
        TokenBalance storage balance = tokenBalances[msg.sender];
        require(balance.unlockedTokens >= amount, "Insufficient unlocked tokens");
        
        balance.unlockedTokens -= amount;
        rewardPoolBalance += amount;
        
        emit RewardPoolAdded(amount);
    }

    /**
     * @dev Изымает токены из пула наград
     * @param amount Количество токенов для изъятия из пула наград
     * @notice Только владелец контракта может вызывать эту функцию
     */
    function withdrawFromRewardPool(uint256 amount) public onlyOwner {
        require(amount > 0, "Amount must be greater than 0");
        require(rewardPoolBalance >= amount, "Insufficient reward pool balance");
        
        rewardPoolBalance -= amount;
        tokenBalances[msg.sender].unlockedTokens += amount;
        
        emit RewardPoolWithdrawn(amount);
    }

    /**
     * @dev Устанавливает новый процент разблокировки
     * @param newPercentage Новый процент разблокировки в базисных пунктах (макс 2000 = 20%)
     * @notice Только владелец контракта может вызывать эту функцию
     */
    function setUnlockPercentage(uint256 newPercentage) public onlyOwner {
        require(newPercentage > 0 && newPercentage <= 2000, "Invalid unlock percentage");
        
        uint256 oldPercentage = unlockPercentage;
        unlockPercentage = newPercentage;
        
        emit UnlockPercentageChanged(oldPercentage, newPercentage);
    }

    /**
     * @dev Внутренняя функция для минтинга токенов без проверки паузы
     * @param to Адрес, на который будут отправлены токены
     * @param amount Количество токенов для минтинга
     */
    function _mintWithoutPause(address to, uint256 amount) internal {
        // Вызываем _update напрямую, минуя whenNotPaused
        // Это автоматически заблокирует токены
        _update(address(0), to, amount);
    }

    /**
     * @dev Функция для минтинга новых токенов (работает даже при паузе)
     * @param to Адрес, на который будут отправлены токены
     * @param amount Количество токенов для минтинга
     * @notice Только владелец контракта может вызывать эту функцию
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mintWithoutPause(to, amount);
    }

    /**
     * @dev Функция для приостановки всех транзакций токена
     * @notice Только владелец контракта может вызывать эту функцию
     * @notice Когда контракт приостановлен, переводы токенов невозможны
     */
    function pause() public onlyOwner {
        _pause();
    }

    /**
     * @dev Функция для возобновления работы контракта
     * @notice Только владелец контракта может вызывать эту функцию
     */
    function unpause() public onlyOwner {
        _unpause();
    }

    /**
     * @dev Функция для сжигания токенов
     * @param amount Количество токенов для сжигания
     */
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    /**
     * @dev Переопределение функции approve для блокировки при паузе
     * @param spender Адрес, которому разрешается тратить токены
     * @param value Количество токенов для разрешения
     * @return Возвращает true при успешном выполнении
     */
    function approve(address spender, uint256 value) public override whenNotPaused returns (bool) {
        return super.approve(spender, value);
    }

    /**
     * @dev Переопределение функции _update для интеграции с Pausable и механизмом блокировки
     * @param from Адрес отправителя
     * @param to Адрес получателя
     * @param value Количество токенов
     */
    function _update(
        address from,
        address to,
        uint256 value
    ) internal override(ERC20, ERC20Pausable) whenNotPaused {
        super._update(from, to, value);
        
        // При минтинге (from == address(0)): токены добавляются в lockedTokens
        if (from == address(0)) {
            tokenBalances[to].lockedTokens += value;
        }
        // При сжигании (to == address(0)): сначала списываем unlockedTokens, затем lockedTokens
        else if (to == address(0)) {
            TokenBalance storage balance = tokenBalances[from];
            if (balance.unlockedTokens >= value) {
                balance.unlockedTokens -= value;
            } else {
                uint256 remaining = value - balance.unlockedTokens;
                balance.unlockedTokens = 0;
                balance.lockedTokens -= remaining;
            }
        }
        // При переводе: проверка unlockedTokens >= value, списание из unlockedTokens, добавление в lockedTokens получателю
        else {
            TokenBalance storage fromBalance = tokenBalances[from];
            require(fromBalance.unlockedTokens >= value, "Insufficient unlocked tokens");
            
            fromBalance.unlockedTokens -= value;
            tokenBalances[to].lockedTokens += value;
        }
    }

}
