// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title IERC20Facet
 * @dev Интерфейс для ERC20 Facet - стандартные функции ERC20 токена
 */
interface IERC20Facet {
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
