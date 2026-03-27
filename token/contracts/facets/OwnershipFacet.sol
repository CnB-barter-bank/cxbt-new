// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "../libraries/LibDiamond.sol";

/**
 * @title OwnershipFacet
 * @dev Facet для управления владельцем контракта
 */
contract OwnershipFacet {
    /**
     * @dev Возвращает текущего владельца контракта
     * @return owner Адрес владельца контракта
     */
    function owner() external view returns (address) {
        return LibDiamond.contractOwner();
    }

    /**
     * @dev Передает права владения контрактом новому владельцу
     * @param newOwner Адрес нового владельца
     * @notice Только текущий владелец может вызывать эту функцию
     */
    function transferOwnership(address newOwner) external {
        LibDiamond.enforceIsContractOwner();
        LibDiamond.setContractOwner(newOwner);
    }

    /**
     * @dev Отказывается от прав владения контрактом
     * @notice Только текущий владелец может вызывать эту функцию
     * @notice После отказа владелец устанавливается в address(0)
     */
    function renounceOwnership() external {
        LibDiamond.enforceIsContractOwner();
        LibDiamond.setContractOwner(address(0));
    }
}
