// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title MockPAID
 * @dev Mock токен PAID для тестирования
 */
contract MockPAID is ERC20 {
    constructor() ERC20("Mock PAID", "PAID") {
        // Минтим начальное количество токенов деплоеру
        _mint(msg.sender, 1000000 * 10**decimals());
    }

    /**
     * @dev Минтинг новых токенов (для тестирования)
     */
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
