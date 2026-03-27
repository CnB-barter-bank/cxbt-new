// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/******************************************************************************\
* Author: Nick Mudge <nick@perfectabstractions.com> (https://twitter.com/mudgen)
* EIP-2535 Diamonds: https://eips.ethereum.org/EIPS/eip-2535
/******************************************************************************/

import { IDiamondCut } from "./interfaces/IDiamondCut.sol";
import { IDiamondLoupe } from "./interfaces/IDiamondLoupe.sol";
import { LibDiamond } from "./libraries/LibDiamond.sol";

// This is used in constructor arguments in `diamondInit` to initialize the diamond.
// The `diamondCut` function executes `diamondInit` code to initialize state variables.
// Read more about diamondCut function: https://eips.ethereum.org/EIPS/eip-2535#diamond-interface
contract DiamondInit {
    // You can add parameters to this function in order to pass in
    // data to set your own state variables
    function init() external {
        // adding ERC165 data
        LibDiamond.DiamondStorage storage ds = LibDiamond.diamondStorage();
        // adding ERC165 data
        ds.supportedInterfaces[type(IDiamondCut).interfaceId] = true;
        ds.supportedInterfaces[0x01ffc9a7] = true; // ERC165
    }
}

contract Diamond {
    // The contract owner is the only account that can call the diamondCut function.
    // The owner can also transfer ownership to another address.
    // The owner is set in the constructor.

    constructor(address _contractOwner, address _diamondCutFacet, address _diamondLoupeFacet) payable {
        LibDiamond.setContractOwner(_contractOwner);
        
        // Add the diamondCut external function from the diamondCutFacet
        IDiamondCut.FacetCut[] memory diamondCut = new IDiamondCut.FacetCut[](2);
        
        bytes4[] memory diamondCutSelectors = new bytes4[](1);
        diamondCutSelectors[0] = IDiamondCut.diamondCut.selector;
        diamondCut[0] = IDiamondCut.FacetCut({
            facetAddress: _diamondCutFacet,
            action: IDiamondCut.FacetCutAction.Add,
            functionSelectors: diamondCutSelectors
        });
        
        // Add the diamondLoupe functions from the diamondLoupeFacet
        bytes4[] memory diamondLoupeSelectors = new bytes4[](4);
        diamondLoupeSelectors[0] = IDiamondLoupe.facets.selector;
        diamondLoupeSelectors[1] = IDiamondLoupe.facetFunctionSelectors.selector;
        diamondLoupeSelectors[2] = IDiamondLoupe.facetAddresses.selector;
        diamondLoupeSelectors[3] = IDiamondLoupe.facetAddress.selector;
        diamondCut[1] = IDiamondCut.FacetCut({
            facetAddress: _diamondLoupeFacet,
            action: IDiamondCut.FacetCutAction.Add,
            functionSelectors: diamondLoupeSelectors
        });
        
        // Initialize the diamond
        DiamondInit diamondInit = new DiamondInit();
        bytes memory initCalldata = abi.encodeWithSelector(DiamondInit.init.selector);
        
        LibDiamond.diamondCut(diamondCut, address(diamondInit), initCalldata);
    }

    // Find facet for function that is called and execute the
    // function if a facet is found and return any value.
    fallback() external payable {
        LibDiamond.DiamondStorage storage ds;
        bytes32 position = LibDiamond.DIAMOND_STORAGE_POSITION;
        assembly {
            ds.slot := position
        }
        address facet = ds.selectorToFacetAndPosition[msg.sig].facetAddress;
        require(facet != address(0), "Diamond: Function does not exist");
        
        // Execute external function from facet using delegatecall and return any value.
        assembly {
            // copy function selector and any arguments
            calldatacopy(0, 0, calldatasize())
            // execute function call using the facet
            let result := delegatecall(gas(), facet, 0, calldatasize(), 0, 0)
            // get any return value
            returndatacopy(0, 0, returndatasize())
            // return any return value or error back to the caller
            switch result
            case 0 {
                revert(0, returndatasize())
            }
            default {
                return(0, returndatasize())
            }
        }
    }

    // A function to receive ether. Ether sent to the fallback function is also
    // received by this function.
    receive() external payable {}
}
