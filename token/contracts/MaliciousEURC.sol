// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/**
 * @title MaliciousPAID
 * @dev Вредоносный контракт для тестирования реентерантности
 */
contract MaliciousPAID {
    using SafeERC20 for IERC20;

    address public cxbtToken;
    address public paidToken;
    bool public attacking;

    constructor(address _cxbtToken) {
        cxbtToken = _cxbtToken;
    }

    /**
     * @dev Устанавливает адрес PAID токена
     */
    function setPaidToken(address _paidToken) external {
        paidToken = _paidToken;
    }

    /**
     * @dev Одобряем PAID для разблокировки
     */
    function approvePAID(uint256 amount) external {
        IERC20(paidToken).approve(cxbtToken, amount);
    }

    /**
     * @dev Атака на функцию unlockTokens через реентерантность
     */
    function attack(uint256 unlockAmount) external {
        attacking = true;
        
        // Рассчитываем стоимость разблокировки
        uint256 paidCost = (unlockAmount * 500) / 10000; // 5%
        
        // Одобряем перевод PAID
        IERC20(paidToken).safeTransferFrom(msg.sender, address(this), paidCost);
        IERC20(paidToken).approve(cxbtToken, paidCost);
        
        // Вызываем unlockTokens
        (bool success, bytes memory data) = cxbtToken.call(
            abi.encodeWithSignature("unlockTokens(uint256)", unlockAmount)
        );
        
        attacking = false;
    }

    /**
     * @dev Функция receive для перехвата перевода токенов
     */
    receive() external payable {
        if (attacking) {
            // Пытаемся снова вызвать unlockTokens (реентерантность)
            (bool success, bytes memory data) = cxbtToken.call(
                abi.encodeWithSignature("unlockTokens(uint256)", 100)
            );
        }
    }

    /**
     * @dev Функция onTokenTransfer для перехвата перевода токенов
     */
    function onTokenTransfer(address from, uint256 amount, bytes calldata data) external returns (bool) {
        if (attacking) {
            // Пытаемся снова вызвать unlockTokens (реентерантность)
            (bool success, bytes memory data2) = cxbtToken.call(
                abi.encodeWithSignature("unlockTokens(uint256)", 100)
            );
        }
        return true;
    }
}
