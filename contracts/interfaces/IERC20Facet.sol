// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IERC20Facet
 * @dev Интерфейс для ERC20 Facet - стандартные функции ERC20 токена
 */
interface IERC20Facet {
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
    ) external;

    /**
     * @dev Возвращает количество разблокированных токенов аккаунта
     * @param account Адрес аккаунта
     * @return Количество разблокированных токенов
     */
    function unlockedBalanceOf(address account) external view returns (uint256);

    /**
     * @dev Возвращает количество заблокированных токенов аккаунта
     * @param account Адрес аккаунта
     * @return Количество заблокированных токенов
     */
    function lockedBalanceOf(address account) external view returns (uint256);

    /**
     * @dev Увеличивает разрешение на трату токенов
     * @param spender Адрес спонсора
     * @param addedValue Количество токенов для добавления
     * @return Возвращает true при успешном выполнении
     */
    function increaseAllowance(address spender, uint256 addedValue) external returns (bool);

    /**
     * @dev Уменьшает разрешение на трату токенов
     * @param spender Адрес спонсора
     * @param subtractedValue Количество токенов для вычитания
     * @return Возвращает true при успешном выполнении
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) external returns (bool);
    /**
     * @dev Возвращает количество токенов, которыми владеет аккаунт
     * @param account Адрес аккаунта
     * @return Количество токенов
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Перемещает количество токенов с адреса вызывающего на другой адрес
     * @param to Адрес получателя
     * @param amount Количество токенов для перевода
     * @return Возвращает true при успешном выполнении
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Возвращает оставшееся количество токенов, которые spender может потратить от имени owner
     * @param owner Адрес владельца токенов
     * @param spender Адрес спонсора
     * @return Оставшееся количество токенов для траты
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Устанавливает количество токенов, которые spender может потратить от имени владельца
     * @param spender Адрес спонсора
     * @param amount Количество токенов для разрешения
     * @return Возвращает true при успешном выполнении
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Перемещает количество токенов с адреса from на адрес to с использованием механизма разрешения
     * @param from Адрес отправителя
     * @param to Адрес получателя
     * @param amount Количество токенов для перевода
     * @return Возвращает true при успешном выполнении
     */
    function transferFrom(address from, address to, uint256 amount) external returns (bool);

    /**
     * @dev Возвращает общее количество токенов
     * @return Общее количество токенов
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Возвращает название токена
     * @return Название токена
     */
    function name() external view returns (string memory);

    /**
     * @dev Возвращает символ токена
     * @return Символ токена
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Возвращает количество десятичных знаков токена
     * @return Количество десятичных знаков
     */
    function decimals() external view returns (uint8);

    // Events
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}
