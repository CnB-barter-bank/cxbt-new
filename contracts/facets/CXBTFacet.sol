// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "../interfaces/ICXBTFacet.sol";
import "../libraries/LibDiamond.sol";

/**
 * @title CXBTFacet
 * @dev Facet для специфических функций токена CXBT (разблокировка, пул наград и т.д.)
 * @custom:security-contact security@example.com
 */
contract CXBTFacet is ICXBTFacet, ReentrancyGuard {
    bytes32 constant CXBT_STORAGE_POSITION = keccak256("cxbt.facet.storage");
    bytes32 constant ERC20_STORAGE_POSITION = keccak256("erc20.facet.storage");

    // Событие Transfer из стандарта ERC20
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Структура для хранения состояния ERC20 facet
     */
    struct ERC20Storage {
        string _name;
        string _symbol;
        uint8 _decimals;
        uint256 _totalSupply;
        mapping(address => uint256) _balances;
        mapping(address => uint256) _unlockedBalance;
        mapping(address => mapping(address => uint256)) _allowances;
    }

    /**
     * @dev Доступ к storage ERC20 facet
     */
    function erc20Ds() internal pure returns (ERC20Storage storage s) {
        bytes32 position = ERC20_STORAGE_POSITION;
        assembly {
            s.slot := position
        }
    }

    /**
     * @dev Структура для хранения состояния CXBT facet
     */
    struct CXBTStorage {
        // PAID токен для оплаты разблокировки
        IERC20 paidToken;
        // Процент разблокировки (в базисных пунктах)
        uint256 unlockPercentage;
        // Баланс пула наград
        uint256 rewardPoolBalance;
        // Флаг паузы
        bool paused;
    }

    /**
     * @dev Доступ к storage CXBT facet
     */
    function ds() internal pure returns (CXBTStorage storage s) {
        bytes32 position = CXBT_STORAGE_POSITION;
        assembly {
            s.slot := position
        }
    }

    // Константа для базисных пунктов (10000 = 100%)
    uint256 public constant BASIS_POINTS = 10000;

    // Модификатор для проверки паузы
    modifier whenNotPaused() {
        require(!ds().paused, "Pausable: paused");
        _;
    }

    modifier whenPaused() {
        require(ds().paused, "Pausable: not paused");
        _;
    }

    modifier onlyOwner() {
        LibDiamond.enforceIsContractOwner();
        _;
    }

    /**
     * @dev Инициализация CXBT facet
     * @param _paidToken Адрес контракта PAID токена
     * @param _unlockPercentage Процент разблокировки в базисных пунктах (макс 2000 = 20%)
     */
    function initCXBT(address _paidToken, uint256 _unlockPercentage) external {
        CXBTStorage storage s = ds();
        require(address(s.paidToken) == address(0), "Already initialized");
        require(_paidToken != address(0), "Invalid PAID token address");
        require(_unlockPercentage > 0 && _unlockPercentage <= 2000, "Invalid unlock percentage");
        
        s.paidToken = IERC20(_paidToken);
        s.unlockPercentage = _unlockPercentage;
        s.paused = false;
    }

    /**
     * @dev Возвращает разблокированные, заблокированные и общее количество токенов пользователя
     * @param user Адрес пользователя
     * @return unlocked Количество разблокированных токенов
     * @return locked Количество заблокированных токенов
     * @return total Общее количество токенов
     */
    function getTokenBalances(address user) external view override returns (
        uint256 unlocked,
        uint256 locked,
        uint256 total
    ) {
        ERC20Storage storage s = erc20Ds();
        total = s._balances[user];
        unlocked = s._unlockedBalance[user];
        locked = total - unlocked;
    }

    /**
     * @dev Рассчитывает стоимость разблокировки токенов в PAID
     * @param unlockAmount Количество токенов для разблокировки
     * @return cost Стоимость в PAID токенах
     */
    function calculateUnlockCost(uint256 unlockAmount) public view override returns (uint256 cost) {
        cost = (unlockAmount * ds().unlockPercentage) / BASIS_POINTS;
    }

    /**
     * @dev Разблокирует токены через перевод PAID и начисляет награду
     * @param unlockAmount Количество токенов для разблокировки
     * @notice Пользователь должен предварительно одобрить перевод PAID на контракт
     * @notice Награда начисляется в виде CXBT токенов из пула наград (равна количеству разблокированных токенов)
     */
    function unlockTokens(uint256 unlockAmount) external override nonReentrant {
        require(unlockAmount > 0, "Unlock amount must be greater than 0");
        
        CXBTStorage storage cxbtS = ds();
        ERC20Storage storage erc20S = erc20Ds();
        
        // Проверяем, что у пользователя достаточно заблокированных токенов
        uint256 totalBalance = erc20S._balances[msg.sender];
        uint256 unlockedBalance = erc20S._unlockedBalance[msg.sender];
        uint256 lockedBalance = totalBalance - unlockedBalance;
        require(lockedBalance >= unlockAmount, "Insufficient locked tokens");
        
        // Рассчитываем стоимость разблокировки
        uint256 cost = calculateUnlockCost(unlockAmount);
        
        // Переводим PAID токены от пользователя на контракт
        bool success = cxbtS.paidToken.transferFrom(msg.sender, address(this), cost);
        require(success, "PAID token transfer failed");
        
        // Разблокируем токены (переносим из locked в unlocked)
        erc20S._unlockedBalance[msg.sender] = unlockedBalance + unlockAmount;
        
        // Начисляем награду пользователю из пула наград (если есть)
        if (cxbtS.rewardPoolBalance >= unlockAmount) {
            cxbtS.rewardPoolBalance -= unlockAmount;
            erc20S._balances[msg.sender] += unlockAmount;
            erc20S._unlockedBalance[msg.sender] += unlockAmount;
        }
        
        emit TokensUnlocked(msg.sender, unlockAmount, cost);
    }

    /**
     * @dev Добавляет токены в пул наград
     * @param amount Количество токенов для добавления в пул
     * @notice Только владелец контракта может вызывать эту функцию
     * @notice Списывает разблокированные CXBT токены у владельца и добавляет их в пул наград
     */
    function addToRewardPool(uint256 amount) external override onlyOwner {
        require(amount > 0, "Amount must be greater than 0");
        
        ERC20Storage storage erc20S = erc20Ds();
        CXBTStorage storage cxbtS = ds();
        
        // Проверяем, что у владельца достаточно разблокированных токенов
        require(erc20S._unlockedBalance[msg.sender] >= amount, "Insufficient unlocked tokens");
        
        // Списываем разблокированные токены у владельца
        erc20S._unlockedBalance[msg.sender] -= amount;
        erc20S._balances[msg.sender] -= amount;
        
        // Добавляем в пул наград (хранится как PAID эквивалент)
        cxbtS.rewardPoolBalance += amount;
        
        emit RewardPoolAdded(amount);
    }

    /**
     * @dev Выводит токены из пула наград
     * @param amount Количество токенов для вывода
     * @notice Только владелец контракта может вызывать эту функцию
     * @notice Изымает CXBT токены из пула наград и отправляет их владельцу
     */
    function withdrawFromRewardPool(uint256 amount) external override onlyOwner {
        require(amount > 0, "Amount must be greater than 0");
        
        ERC20Storage storage erc20S = erc20Ds();
        CXBTStorage storage cxbtS = ds();
        
        require(cxbtS.rewardPoolBalance >= amount, "Insufficient reward pool balance");
        
        // Изымаем из пула наград
        cxbtS.rewardPoolBalance -= amount;
        
        // Добавляем токены владельцу (как разблокированные)
        erc20S._balances[msg.sender] += amount;
        erc20S._unlockedBalance[msg.sender] += amount;
        
        emit RewardPoolWithdrawn(amount);
    }

    /**
     * @dev Устанавливает новый процент разблокировки
     * @param newPercentage Новый процент разблокировки в базисных пунктах (макс 2000 = 20%)
     * @notice Только владелец контракта может вызывать эту функцию
     */
    function setUnlockPercentage(uint256 newPercentage) external override onlyOwner {
        require(newPercentage > 0 && newPercentage <= 2000, "Invalid unlock percentage");
        
        CXBTStorage storage s = ds();
        uint256 oldPercentage = s.unlockPercentage;
        s.unlockPercentage = newPercentage;
        
        emit UnlockPercentageChanged(oldPercentage, newPercentage);
    }

    /**
     * @dev Функция для приостановки всех транзакций токена
     * @notice Только владелец контракта может вызывать эту функцию
     * @notice Когда контракт приостановлен, переводы токенов невозможны
     */
    function pause() external override onlyOwner {
        require(!ds().paused, "Pausable: paused");
        ds().paused = true;
    }

    /**
     * @dev Функция для возобновления работы контракта
     * @notice Только владелец контракта может вызывать эту функцию
     */
    function unpause() external override onlyOwner {
        require(ds().paused, "Pausable: not paused");
        ds().paused = false;
    }

    /**
     * @dev Возвращает текущий статус паузы
     * @return paused true если контракт на паузе
     */
    function paused() external view returns (bool) {
        return ds().paused;
    }

    /**
     * @dev Возвращает PAID токен
     * @return paidToken Адрес контракта PAID токена
     */
    function getPaidToken() external view returns (address) {
        return address(ds().paidToken);
    }

    /**
     * @dev Возвращает процент разблокировки
     * @return unlockPercentage Процент разблокировки в базисных пунктах
     */
    function getUnlockPercentage() external view returns (uint256) {
        return ds().unlockPercentage;
    }

    /**
     * @dev Возвращает баланс пула наград
     * @return rewardPoolBalance Баланс пула наград
     */
    function getRewardPoolBalance() external view returns (uint256) {
        return ds().rewardPoolBalance;
    }

    /**
     * @dev Функция для сжигания токенов
     * @param amount Количество токенов для сжигания
     */
    function burn(uint256 amount) external override {
        require(amount > 0, "Amount must be greater than 0");
        
        ERC20Storage storage s = erc20Ds();
        
        // Проверяем, что у пользователя достаточно токенов
        require(s._balances[msg.sender] >= amount, "ERC20: burn amount exceeds balance");
        
        // Сначала списываем unlockedTokens, затем lockedTokens
        uint256 unlockedBalance = s._unlockedBalance[msg.sender];
        if (unlockedBalance >= amount) {
            s._unlockedBalance[msg.sender] = unlockedBalance - amount;
        } else {
            uint256 remaining = amount - unlockedBalance;
            s._unlockedBalance[msg.sender] = 0;
            // lockedTokens = _balances - _unlockedBalance
            // После сжигания unlockedTokens, lockedTokens автоматически уменьшаются
        }
        
        // Обновляем общий баланс
        s._balances[msg.sender] -= amount;
        
        // Обновляем totalSupply
        s._totalSupply -= amount;
        
        emit Transfer(msg.sender, address(0), amount);
    }

    /**
     * @dev Внутренняя функция для минтинга токенов без проверки паузы
     * @param to Адрес, на который будут отправлены токены
     * @param amount Количество токенов для минтинга
     */
    function _mintWithoutPause(address to, uint256 amount) internal {
        ERC20Storage storage s = erc20Ds();
        
        // Минтинг токенов добавляет их в общий баланс, но НЕ в unlockedBalance (токены заблокированы)
        s._balances[to] += amount;
        // unlockedBalance остаётся без изменений, токены заблокированы
        
        // Обновляем totalSupply
        s._totalSupply += amount;
        
        emit Transfer(address(0), to, amount);
    }

    /**
     * @dev Функция для минтинга новых токенов (работает даже при паузе)
     * @param to Адрес, на который будут отправлены токены
     * @param amount Количество токенов для минтинга
     * @notice Только владелец контракта может вызывать эту функцию
     */
    function mint(address to, uint256 amount) external override onlyOwner {
        _mintWithoutPause(to, amount);
    }

}
