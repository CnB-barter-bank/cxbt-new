const hre = require("hardhat");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

async function main() {
  console.log("=== Верификация контрактов CXBT ===\n");

  // Проверяем наличие API ключа
  if (!process.env.BASESCAN_API_KEY) {
    console.warn("⚠️  BASESCAN_API_KEY не установлен в .env файле");
    console.warn("Получите API ключ на https://basescan.org/myapikey");
  }

  // Загружаем информацию о развертывании
  const deploymentFile = path.join(__dirname, "..", "deployments", `${hre.network.name}.json`);
  
  if (!fs.existsSync(deploymentFile)) {
    throw new Error(`Файл развертывания не найден: ${deploymentFile}\nСначала разверните контракты: npx hardhat run scripts/deploy.js --network ${hre.network.name}`);
  }

  const deploymentInfo = JSON.parse(fs.readFileSync(deploymentFile, "utf8"));
  console.log(`📂 Загружена информация о развертывании из: ${deploymentFile}`);
  console.log(`🌐 Сеть: ${deploymentInfo.network} (Chain ID: ${deploymentInfo.chainId})\n`);

  const { facets, diamondAddress } = deploymentInfo;

  // ==================== Верификация Facets ====================

  console.log("--- Верификация Facets ---\n");

  const facetNames = [
    "DiamondCutFacet",
    "DiamondLoupeFacet",
    "OwnershipFacet",
    "ERC20Facet",
    "CXBTFacet"
  ];

  const facetContracts = {};

  for (const facetName of facetNames) {
    const facetAddress = facets[facetName];
    if (!facetAddress) {
      console.log(`⏭️  ${facetName}: пропущен (не развернут)`);
      continue;
    }

    try {
      console.log(`🔍 Верификация ${facetName} (${facetAddress})...`);
      
      await hre.run("verify:verify", {
        address: facetAddress,
        constructorArguments: []
      });

      console.log(`✅ ${facetName} верифицирован\n`);
      facetContracts[facetName] = facetAddress;
      
      // Ждем немного между верификациями
      await sleep(2000);
      
    } catch (error) {
      if (error.message.includes("Already Verified")) {
        console.log(`✅ ${facetName} уже верифицирован\n`);
        facetContracts[facetName] = facetAddress;
      } else {
        console.log(`❌ Ошибка верификации ${facetName}: ${error.message}\n`);
      }
    }
  }

  // ==================== Верификация Diamond ====================

  console.log("--- Верификация Diamond (Proxy) ---\n");

  if (diamondAddress) {
    try {
      console.log(`🔍 Верификация Diamond (${diamondAddress})...`);
      
      await hre.run("verify:verify", {
        address: diamondAddress,
        constructorArguments: [
          deploymentInfo.deployer,           // _contractOwner
          facetContracts["DiamondCutFacet"], // _diamondCutFacet
          facetContracts["DiamondLoupeFacet"] // _diamondLoupeFacet
        ]
      });

      console.log(`✅ Diamond верифицирован\n`);
      
    } catch (error) {
      if (error.message.includes("Already Verified")) {
        console.log(`✅ Diamond уже верифицирован\n`);
      } else {
        console.log(`❌ Ошибка верификации Diamond: ${error.message}\n`);
      }
    }
  }

  // ==================== Итоговая информация ====================

  console.log("=== Верификация завершена ===\n");
  console.log("📊 Ссылки на контракты:");
  
  const baseUrl = hre.network.name === "baseSepolia" 
    ? "https://sepolia.basescan.org/address" 
    : "https://basescan.org/address";

  for (const facetName of facetNames) {
    if (facetContracts[facetName]) {
      console.log(`  • ${facetName}: ${baseUrl}/${facetContracts[facetName]}#code`);
    }
  }
  
  if (diamondAddress) {
    console.log(`  • Diamond: ${baseUrl}/${diamondAddress}#code`);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
