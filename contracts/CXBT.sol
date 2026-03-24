// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Импорты контрактов из OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title CXBT
 * @dev Стандартный токен ERC-20 с возможностью минтинга и паузы
 * @custom:security-contact security@example.com
 */
contract CXBT is ERC20, ERC20Pausable, Ownable {
    /**
     * @dev Конструктор контракта
     * @param name Название токена
     * @param symbol Символ токена (тикер)
     * @param initialSupply Начальное количество токенов для минтинга
     */
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) Ownable(msg.sender) {
        // Минтим начальное количество токенов на адрес владельца
        _mint(msg.sender, initialSupply);
    }

    /**
     * @dev Внутренняя функция для минтинга токенов без проверки паузы
     * @param to Адрес, на который будут отправлены токены
     * @param amount Количество токенов для минтинга
     */
    function _mintWithoutPause(address to, uint256 amount) internal {
        // Вызываем _update из ERC20 напрямую, минуя whenNotPaused
        ERC20._update(address(0), to, amount);
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
     * @dev Переопределение функции approve для блокировки при паузе
     * @param spender Адрес, которому разрешается тратить токены
     * @param value Количество токенов для разрешения
     * @return Возвращает true при успешном выполнении
     */
    function approve(address spender, uint256 value) public override whenNotPaused returns (bool) {
        return super.approve(spender, value);
    }

    /**
     * @dev Переопределение функции _update для интеграции с Pausable
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
    }
}
