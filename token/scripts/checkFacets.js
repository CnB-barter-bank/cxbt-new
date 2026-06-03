const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const deployer = new hre.ethers.Wallet(process.env.DEPLOYER_PRIVATE_KEY, hre.ethers.provider);
  const diamondAddress = "0x90C41F9c7Ee0dA9Ce1760be857a760915B30267b";
  
  console.log("Проверка facets в Diamond:", diamondAddress);
  
  const diamondLoupe = await hre.ethers.getContractAt("IDiamondLoupe", diamondAddress);
  const facets = await diamondLoupe.facets();
  
  console.log("\nFacets в Diamond:");
  for (const facet of facets) {
    console.log(`  Facet: ${facet.facetAddress}, Selectors: ${facet.functionSelectors.length}`);
    for (const selector of facet.functionSelectors) {
      console.log(`    ${selector}`);
    }
  }
  
  const facetAddresses = await diamondLoupe.facetAddresses();
  console.log("\nFacet addresses:");
  for (const addr of facetAddresses) {
    console.log(`  ${addr}`);
  }
}

main().catch(console.error);
