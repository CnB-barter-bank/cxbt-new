const hre = require("hardhat");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Функция для получения цены газа с увеличением
async function getGasPrice(provider, multiplier = 1.2) {
  const feeData = await provider.getFeeData();
  if (feeData.maxFeePerGas) {
    // EIP-1559 (Base использует это)
    return {
      maxFeePerGas: feeData.maxFeePerGas * BigInt(Math.floor(multiplier * 100)) / BigInt(100),
      maxPriorityFeePerGas: feeData.maxPriorityFeePerGas * BigInt(Math.floor(multiplier * 100)) / BigInt(100)
    };
  } else {
    // Legacy
    return {
      gasPrice: feeData.gasPrice * BigInt(Math.floor(multiplier * 100)) / BigInt(100)
    };
  }
}

async function main() {
  // Проверяем наличие необходимых переменных окружения
  if (!process.env.DEPLOYER_PRIVATE_KEY) {
    throw new Error("DEPLOYER_PRIVATE_KEY не установлен в .env файле");
  }

  // Создаем signer из приватного ключа
  const deployer = new hre.ethers.Wallet(process.env.DEPLOYER_PRIVATE_KEY, hre.ethers.provider);

  console.log("Проверка и исправление белого списка с аккаунта:", deployer.address);

  // Получаем адрес Diamond из аргументов командной строки или из .env
  let diamondAddress = process.env.DIAMOND_ADDRESS;

  // Если адрес не указан, пробуем загрузить из файла деплоя
  if (!diamondAddress) {
    const deploymentFile = path.join(__dirname, "..", "deployments", `${hre.network.name}.json`);
    if (fs.existsSync(deploymentFile)) {
      const deploymentInfo = JSON.parse(fs.readFileSync(deploymentFile, "utf8"));
      diamondAddress = deploymentInfo.diamondAddress;
      console.log("Адрес Diamond загружен из файла:", deploymentFile);
    } else {
      throw new Error("DIAMOND_ADDRESS не указан. Укажите адрес через аргумент командной строки или в .env файле");
    }
  }

  console.log("Адрес Diamond:", diamondAddress);

  // Проверяем, что Diamond существует
  const diamondCode = await hre.ethers.provider.getCode(diamondAddress);
  if (diamondCode === "0x") {
    throw new Error("Diamond не найден по указанному адресу");
  }

  // Создаем интерфейсы для работы с Diamond
  const cxbtFacetInterface = await hre.ethers.getContractAt("CXBTFacet", diamondAddress);
  const diamondLoupe = await hre.ethers.getContractAt("IDiamondLoupe", diamondAddress);

  // ==================== Шаг 1: Проверка владельца ====================

  console.log("\n--- Проверка владельца ---");
  const ownerInterface = await hre.ethers.getContractAt("OwnershipFacet", diamondAddress);
  const owner = await ownerInterface.owner();
  console.log("Владелец Diamond:", owner);

  if (owner.toLowerCase() !== deployer.address.toLowerCase()) {
    console.log("✗ Вы НЕ являетесь владельцем Diamond");
    console.log("  Владелец:", owner);
    console.log("  Вы:", deployer.address);
    throw new Error("Вы не являетесь владельцем Diamond");
  }
  console.log("✓ Вы являетесь владельцем Diamond");

  // ==================== Шаг 2: Проверка белого списка владельца ====================

  console.log("\n--- Проверка белого списка владельца ---");
  try {
    const isWhitelisted = await cxbtFacetInterface.isWhitelisted(owner);
    console.log("Владелец в белом списке:", isWhitelisted);

    if (!isWhitelisted) {
      console.log("⚠ Владелец НЕ в белом списке. Добавляем...");
      const gasOptions = await getGasPrice(hre.ethers.provider, 1.2);
      await cxbtFacetInterface.addToWhitelist(owner, gasOptions);
      console.log("✓ Владелец добавлен в белый список");
    } else {
      console.log("✓ Владелец уже в белом списке");
    }
  } catch (error) {
    console.log("✗ Ошибка при проверке белого списка:", error.message);
    console.log("  Возможно, функции addToWhitelist/isWhitelisted не добавлены в Diamond");
  }

  // ==================== Шаг 3: Проверка всех функций CXBTFacet ====================

  console.log("\n--- Проверка функций CXBTFacet в Diamond ---");

  const expectedCxbtFunctions = [
    "initCXBT",
    "getTokenBalances",
    "calculateUnlockCost",
    "unlockTokens",
    "ownerUnlockTokens",
    "addToRewardPool",
    "withdrawFromRewardPool",
    "setUnlockPercentage",
    "mint",
    "pause",
    "unpause",
    "paused",
    "getPaidToken",
    "getUnlockPercentage",
    "getRewardPoolBalance",
    "burn",
    "addToWhitelist",
    "removeFromWhitelist",
    "addToBlacklist",
    "removeFromBlacklist",
    "isWhitelisted",
    "isBlacklisted"
  ];

  // Получаем все facets
  const facets = await diamondLoupe.facets();

  // Находим CXBTFacet
  let cxbtFacetAddress = null;
  for (const facet of facets) {
    for (const selector of facet.functionSelectors) {
      try {
        const func = await diamondLoupe.facetAddress(selector);
        if (func.toLowerCase() !== hre.ethers.ZeroAddress.toLowerCase()) {
          // Проверяем, есть ли функция initCXBT в этом facet
          const CXBTFacetFactory = await hre.ethers.getContractFactory("CXBTFacet");
          const initCXBTSelector = CXBTFacetFactory.interface.getFunction("initCXBT").selector;
          if (facet.functionSelectors.includes(initCXBTSelector)) {
            cxbtFacetAddress = facet.facetAddress;
            break;
          }
        }
      } catch (e) {
        // Игнорируем ошибки
      }
    }
    if (cxbtFacetAddress) break;
  }

  if (!cxbtFacetAddress) {
    console.log("✗ CXBTFacet не найден в Diamond!");
    return;
  }

  console.log("CXBTFacet адрес:", cxbtFacetAddress);

  // Получаем селекторы функций CXBTFacet
  const CXBTFacetFactory = await hre.ethers.getContractFactory("CXBTFacet");
  const cxbtFacetFunctions = await diamondLoupe.facetFunctionSelectors(cxbtFacetAddress);

  console.log("\nПроверка функций CXBTFacet:");
  const missingFunctions = [];

  for (const funcName of expectedCxbtFunctions) {
    try {
      const selector = CXBTFacetFactory.interface.getFunction(funcName).selector;
      const isPresent = cxbtFacetFunctions.includes(selector);
      
      if (isPresent) {
        console.log(`  ✓ ${funcName}`);
      } else {
        console.log(`  ✗ ${funcName} - ОТСУТСТВУЕТ!`);
        missingFunctions.push(funcName);
      }
    } catch (error) {
      console.log(`  ✗ ${funcName} - ОШИБКА: ${error.message}`);
      missingFunctions.push(funcName);
    }
  }

  if (missingFunctions.length > 0) {
    console.log("\n⚠ ВНИМАНИЕ: Следующие функции отсутствуют в Diamond:");
    missingFunctions.forEach(func => console.log(`  - ${func}`));
    console.log("\nДля добавления этих функций выполните:");
    console.log(`  npx hardhat run scripts/upgrade.js --network ${hre.network.name}`);
  } else {
    console.log("\n✓ Все функции CXBTFacet присутствуют в Diamond");
  }

  // ==================== Шаг 4: Проверка функций ERC20Facet ====================

  console.log("\n--- Проверка функций ERC20Facet в Diamond ---");

  const expectedErc20Functions = [
    "initERC20",
    "balanceOf",
    "unlockedBalanceOf",
    "lockedBalanceOf",
    "transfer",
    "allowance",
    "approve",
    "transferFrom",
    "totalSupply",
    "name",
    "symbol",
    "decimals",
    "increaseAllowance",
    "decreaseAllowance"
  ];

  // Находим ERC20Facet
  let erc20FacetAddress = null;
  for (const facet of facets) {
    for (const selector of facet.functionSelectors) {
      try {
        // Проверяем, есть ли функция initERC20 в этом facet
        const ERC20FacetFactory = await hre.ethers.getContractFactory("ERC20Facet");
        const initERC20Selector = ERC20FacetFactory.interface.getFunction("initERC20").selector;
        if (facet.functionSelectors.includes(initERC20Selector)) {
          erc20FacetAddress = facet.facetAddress;
          break;
        }
      } catch (e) {
        // Игнорируем ошибки
      }
    }
    if (erc20FacetAddress) break;
  }

  if (!erc20FacetAddress) {
    console.log("✗ ERC20Facet не найден в Diamond!");
    return;
  }

  console.log("ERC20Facet адрес:", erc20FacetAddress);

  // Получаем селекторы функций ERC20Facet
  const ERC20FacetFactory = await hre.ethers.getContractFactory("ERC20Facet");
  const erc20FacetFunctions = await diamondLoupe.facetFunctionSelectors(erc20FacetAddress);

  console.log("\nПроверка функций ERC20Facet:");
  const missingErc20Functions = [];

  for (const funcName of expectedErc20Functions) {
    try {
      const selector = ERC20FacetFactory.interface.getFunction(funcName).selector;
      const isPresent = erc20FacetFunctions.includes(selector);
      
      if (isPresent) {
        console.log(`  ✓ ${funcName}`);
      } else {
        console.log(`  ✗ ${funcName} - ОТСУТСТВУЕТ!`);
        missingErc20Functions.push(funcName);
      }
    } catch (error) {
      console.log(`  ✗ ${funcName} - ОШИБКА: ${error.message}`);
      missingErc20Functions.push(funcName);
    }
  }

  if (missingErc20Functions.length > 0) {
    console.log("\n⚠ ВНИМАНИЕ: Следующие функции отсутствуют в Diamond:");
    missingErc20Functions.forEach(func => console.log(`  - ${func}`));
    console.log("\nДля добавления этих функций выполните:");
    console.log(`  npx hardhat run scripts/upgrade.js --network ${hre.network.name}`);
  } else {
    console.log("\n✓ Все функции ERC20Facet присутствуют в Diamond");
  }

  // ==================== Шаг 5: Итог ====================

  console.log("\n--- Итог ---");
  if (missingFunctions.length === 0 && missingErc20Functions.length === 0) {
    console.log("✓ Все функции присутствуют в Diamond");
    console.log("✓ Владелец в белом списке");
  } else {
    console.log("⚠ Некоторые функции отсутствуют. Выполните апгрейд:");
    console.log(`  npx hardhat run scripts/upgrade.js --network ${hre.network.name}`);
  }
}

// Запуск скрипта и обработка ошибок
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
