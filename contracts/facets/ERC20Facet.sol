// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../interfaces/IERC20Facet.sol";
import "../libraries/LibDiamond.sol";

// CXBT Storage position для доступа к whitelist/blacklist
bytes32 constant CXBT_STORAGE_POSITION = keccak256("cxbt.facet.storage");

/**
 * @dev Тип storage для доступа к whitelist/blacklist из CXBTFacet
 * Используем uint256 для доступа к storage по смещению
 */
uint256 constant WHITELIST_SLOT_OFFSET = 4; // Смещение whitelist в CXBTStorage (после paidToken, unlockPercentage, rewardPoolBalance, paused)
uint256 constant BLACKLIST_SLOT_OFFSET = 5; // Смещение blacklist в CXBTStorage

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
     * @dev Проверяет, находится ли адрес в белом списке
     * @param account Адрес для проверки
     * @return true если адрес в белом списке
     */
    function _isWhitelisted(address account) internal view returns (bool) {
        // Используем staticcall для вызова функции isWhitelisted из CXBTFacet
        // Функция возвращает bool, поэтому декодируем результат
        (bool success, bytes memory data) = address(this).staticcall(
            abi.encodeWithSignature("isWhitelisted(address)", account)
        );
        if (!success || data.length == 0) {
            return false;
        }
        return abi.decode(data, (bool));
    }

    /**
     * @dev Проверяет, находится ли адрес в черном списке
     * @param account Адрес для проверки
     * @return true если адрес в черном списке
     */
    function _isBlacklisted(address account) internal view returns (bool) {
        // Используем staticcall для вызова функции isBlacklisted из CXBTFacet
        // Функция возвращает bool, поэтому декодируем результат
        (bool success, bytes memory data) = address(this).staticcall(
            abi.encodeWithSignature("isBlacklisted(address)", account)
        );
        if (!success || data.length == 0) {
            return false;
        }
        return abi.decode(data, (bool));
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
        
        // Проверяем черный список
        require(!_isBlacklisted(from), "ERC20: sender is blacklisted");
        require(!_isBlacklisted(to), "ERC20: recipient is blacklisted");
        
        ERC20Storage storage s = ds();
        
        // Если отправитель в белом списке, он может переводить любые токены
        // Иначе проверяем unlockedBalance отправителя (можно перевести только разблокированные токены)
        bool fromWhitelisted = _isWhitelisted(from);
        if (!fromWhitelisted) {
            uint256 fromUnlocked = s._unlockedBalance[from];
            require(fromUnlocked >= amount, "ERC20: transfer amount exceeds unlocked balance");
            s._unlockedBalance[from] = fromUnlocked - amount;
        } else {
            // Если отправитель в белом списке, списываем из unlockedBalance если есть, иначе из общего баланса
            uint256 fromBalance = s._balances[from];
            require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        }
        
        // Обновляем общий баланс
        s._balances[from] -= amount;
        s._balances[to] += amount;
        
        // Если получатель в белом списке, он получает токены как разблокированные
        if (_isWhitelisted(to)) {
            s._unlockedBalance[to] += amount;
        }
        // Иначе получатель получает токены в общем балансе, но НЕ в unlockedBalance (заблокированы)
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
        
        // Если владелец в белом списке, он может одобрить любые токены
        // Иначе проверяем, что пользователь не одобряет больше токенов, чем у него разблокировано
        bool ownerWhitelisted = _isWhitelisted(owner);
        if (!ownerWhitelisted) {
            require(amount <= ds()._unlockedBalance[owner], "ERC20: approve amount exceeds unlocked balance");
        }
        
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
        
        // Если владелец не в белом списке, проверяем лимит
        if (!_isWhitelisted(owner)) {
            require(newAllowance <= ds()._unlockedBalance[owner], "ERC20: approve amount exceeds unlocked balance");
        }
        
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
