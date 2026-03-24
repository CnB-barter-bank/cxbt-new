// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../interfaces/IERC20Facet.sol";
import "../libraries/LibDiamond.sol";

/**
 * @title ERC20Facet
 * @dev Facet для стандартных функций ERC20 токена
 */
contract ERC20Facet is IERC20Facet {
    bytes32 constant ERC20_STORAGE_POSITION = keccak256("erc20.facet.storage");

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
    function ds() internal pure returns (ERC20Storage storage s) {
        bytes32 position = ERC20_STORAGE_POSITION;
        assembly {
            s.slot := position
        }
    }

    // Модификатор для проверки паузы
    modifier whenNotPaused() {
        // Проверяем статус паузы через CXBTFacet
        (bool success, bytes memory data) = address(this).staticcall(
            abi.encodeWithSignature("paused()")
        );
        require(success && data.length > 0, "Failed to check pause status");
        bool paused = abi.decode(data, (bool));
        require(!paused, "Pausable: paused");
        _;
    }

    modifier onlyOwner() {
        LibDiamond.enforceIsContractOwner();
        _;
    }

    /**
     * @dev Инициализация ERC20 facet
     * @param name Название токена
     * @param symbol Символ токена (тикер)
     * @param decimals Количество десятичных знаков
     * @param initialSupply Начальное количество токенов
     */
    function initERC20(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 initialSupply
    ) external {
        ERC20Storage storage s = ds();
        require(bytes(s._name).length == 0, "Already initialized");
        
        s._name = name;
        s._symbol = symbol;
        s._decimals = decimals;
        s._totalSupply = initialSupply;
        
        // Минтинг токенов добавляет их в общий баланс, но НЕ в unlockedBalance (токены заблокированы)
        s._balances[msg.sender] = initialSupply;
        // unlockedBalance остаётся 0, токены заблокированы
        
        emit Transfer(address(0), msg.sender, initialSupply);
    }

    /**
     * @dev Возвращает количество токенов, которыми владеет аккаунт
     * @param account Адрес аккаунта
     * @return Общее количество токенов (unlocked + locked)
     */
    function balanceOf(address account) external view override returns (uint256) {
        return ds()._balances[account];
    }

    /**
     * @dev Возвращает количество разблокированных токенов аккаунта
     * @param account Адрес аккаунта
     * @return Количество разблокированных токенов
     */
    function unlockedBalanceOf(address account) external view returns (uint256) {
        return ds()._unlockedBalance[account];
    }

    /**
     * @dev Возвращает количество заблокированных токенов аккаунта
     * @param account Адрес аккаунта
     * @return Количество заблокированных токенов
     */
    function lockedBalanceOf(address account) external view returns (uint256) {
        ERC20Storage storage s = ds();
        return s._balances[account] - s._unlockedBalance[account];
    }

    /**
     * @dev Перемещает количество токенов с адреса вызывающего на другой адрес
     * @param to Адрес получателя
     * @param amount Количество токенов для перевода
     * @return Возвращает true при успешном выполнении
     */
    function transfer(address to, uint256 amount) external override whenNotPaused returns (bool) {
        _transfer(msg.sender, to, amount);
        return true;
    }

    /**
     * @dev Возвращает оставшееся количество токенов, которые spender может потратить от имени owner
     * @param owner Адрес владельца токенов
     * @param spender Адрес спонсора
     * @return Оставшееся количество токенов для траты
     */
    function allowance(address owner, address spender) external view override returns (uint256) {
        return ds()._allowances[owner][spender];
    }

    /**
     * @dev Устанавливает количество токенов, которые spender может потратить от имени владельца
     * @param spender Адрес спонсора
     * @param amount Количество токенов для разрешения
     * @return Возвращает true при успешном выполнении
     */
    function approve(address spender, uint256 amount) external override whenNotPaused returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }

    /**
     * @dev Перемещает количество токенов с адреса from на адрес to с использованием механизма разрешения
     * @param from Адрес отправителя
     * @param to Адрес получателя
     * @param amount Количество токенов для перевода
     * @return Возвращает true при успешном выполнении
     */
    function transferFrom(address from, address to, uint256 amount) external override whenNotPaused returns (bool) {
        address spender = msg.sender;
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Возвращает общее количество токенов
     * @return Общее количество токенов
     */
    function totalSupply() external view override returns (uint256) {
        return ds()._totalSupply;
    }

    /**
     * @dev Возвращает название токена
     * @return Название токена
     */
    function name() external view override returns (string memory) {
        return ds()._name;
    }

    /**
     * @dev Возвращает символ токена
     * @return Символ токена
     */
    function symbol() external view override returns (string memory) {
        return ds()._symbol;
    }

    /**
     * @dev Возвращает количество десятичных знаков токена
     * @return Количество десятичных знаков
     */
    function decimals() external view override returns (uint8) {
        return ds()._decimals;
    }

    /**
     * @dev Внутренняя функция для перевода токенов
     * @param from Адрес отправителя
     * @param to Адрес получателя
     * @param amount Количество токенов для перевода
     */
    function _transfer(address from, address to, uint256 amount) internal {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");
        
        ERC20Storage storage s = ds();
        
        // Проверяем unlockedBalance отправителя (можно перевести только разблокированные токены)
        uint256 fromUnlocked = s._unlockedBalance[from];
        require(fromUnlocked >= amount, "ERC20: transfer amount exceeds unlocked balance");
        
        // Списываем из unlockedBalance у отправителя
        s._unlockedBalance[from] = fromUnlocked - amount;
        
        // Обновляем общий баланс
        s._balances[from] -= amount;
        s._balances[to] += amount;
        
        // Получатель получает токены в общем балансе, но НЕ в unlockedBalance (заблокированы)
        // unlockedBalance[to] остаётся без изменений
        
        emit Transfer(from, to, amount);
    }

    /**
     * @dev Внутренняя функция для установки разрешения
     * @param owner Адрес владельца токенов
     * @param spender Адрес спонсора
     * @param amount Количество токенов для разрешения
     */
    function _approve(address owner, address spender, uint256 amount) internal {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");
        
        // Проверяем, что пользователь не одобряет больше токенов, чем у него разблокировано
        require(amount <= ds()._unlockedBalance[owner], "ERC20: approve amount exceeds unlocked balance");
        
        ds()._allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Внутренняя функция для траты разрешения
     * @param owner Адрес владельца токенов
     * @param spender Адрес спонсора
     * @param amount Количество токенов для траты
     */
    function _spendAllowance(address owner, address spender, uint256 amount) internal {
        uint256 currentAllowance = ds()._allowances[owner][spender];
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Увеличивает разрешение на трату токенов
     * @param spender Адрес спонсора
     * @param addedValue Количество токенов для добавления
     * @return Возвращает true при успешном выполнении
     */
    function increaseAllowance(address spender, uint256 addedValue) external whenNotPaused returns (bool) {
        address owner = msg.sender;
        uint256 newAllowance = ds()._allowances[owner][spender] + addedValue;
        require(newAllowance <= ds()._unlockedBalance[owner], "ERC20: approve amount exceeds unlocked balance");
        _approve(owner, spender, newAllowance);
        return true;
    }

    /**
     * @dev Уменьшает разрешение на трату токенов
     * @param spender Адрес спонсора
     * @param subtractedValue Количество токенов для вычитания
     * @return Возвращает true при успешном выполнении
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) external whenNotPaused returns (bool) {
        address owner = msg.sender;
        uint256 currentAllowance = ds()._allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }
        return true;
    }
}
