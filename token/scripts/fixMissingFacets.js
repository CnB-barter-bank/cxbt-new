const hre = require("hardhat");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// Функция ожидания между транзакциями
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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

// Определение селекторов функций для каждого facet
function getFacetSelectors(facetName, facetContract) {
  const selectors = [];
  
  switch (facetName) {
    case "DiamondCutFacet":
      // DiamondCutFacet обычно не имеет публичных функций кроме diamondCut
      // который добавляется при создании Diamond
      break;
      
    case "DiamondLoupeFacet":
      // DiamondLoupeFacet функции
      selectors.push(
        facetContract.interface.getFunction("facets").selector,
        facetContract.interface.getFunction("facetFunctionSelectors").selector,
        facetContract.interface.getFunction("facetAddresses").selector,
        facetContract.interface.getFunction("facetAddress").selector
      );
      break;
      
    case "OwnershipFacet":
      selectors.push(
        facetContract.interface.getFunction("owner").selector,
        facetContract.interface.getFunction("transferOwnership").selector,
        facetContract.interface.getFunction("renounceOwnership").selector
      );
      break;
      
    case "ERC20Facet":
      selectors.push(
        facetContract.interface.getFunction("initERC20").selector,
        facetContract.interface.getFunction("balanceOf").selector,
        facetContract.interface.getFunction("unlockedBalanceOf").selector,
        facetContract.interface.getFunction("lockedBalanceOf").selector,
        facetContract.interface.getFunction("transfer").selector,
        facetContract.interface.getFunction("allowance").selector,
        facetContract.interface.getFunction("approve").selector,
        facetContract.interface.getFunction("transferFrom").selector,
        facetContract.interface.getFunction("totalSupply").selector,
        facetContract.interface.getFunction("name").selector,
        facetContract.interface.getFunction("symbol").selector,
        facetContract.interface.getFunction("decimals").selector,
        facetContract.interface.getFunction("increaseAllowance").selector,
        facetContract.interface.getFunction("decreaseAllowance").selector
      );
      break;
      
    case "CXBTFacet":
      selectors.push(
        facetContract.interface.getFunction("initCXBT").selector,
        facetContract.interface.getFunction("getTokenBalances").selector,
        facetContract.interface.getFunction("calculateUnlockCost").selector,
        facetContract.interface.getFunction("unlockTokens").selector,
        facetContract.interface.getFunction("ownerUnlockTokens").selector,
        facetContract.interface.getFunction("addToRewardPool").selector,
        facetContract.interface.getFunction("withdrawFromRewardPool").selector,
        facetContract.interface.getFunction("setUnlockPercentage").selector,
        facetContract.interface.getFunction("mint").selector,
        facetContract.interface.getFunction("pause").selector,
        facetContract.interface.getFunction("unpause").selector,
        facetContract.interface.getFunction("paused").selector,
        facetContract.interface.getFunction("getPaidToken").selector,
        facetContract.interface.getFunction("getUnlockPercentage").selector,
        facetContract.interface.getFunction("getRewardPoolBalance").selector,
        facetContract.interface.getFunction("burn").selector,
        facetContract.interface.getFunction("addToWhitelist").selector,
        facetContract.interface.getFunction("removeFromWhitelist").selector,
        facetContract.interface.getFunction("addToBlacklist").selector,
        facetContract.interface.getFunction("removeFromBlacklist").selector,
        facetContract.interface.getFunction("isWhitelisted").selector,
        facetContract.interface.getFunction("isBlacklisted").selector
      );
      break;
      
    default:
      throw new Error(`Неизвестный facet: ${facetName}`);
  }
  
  return selectors;
}

// Получение названия facet по адресу
function getFacetNameByAddress(address, facets) {
  for (const [name, addr] of Object.entries(facets)) {
    if (addr.toLowerCase() === address.toLowerCase()) {
      return name;
    }
  }
  return "Unknown";
}

async function main() {
  console.log("=== Скрипт для добавления недостающих facets в Diamond ===\n");
  
  // Проверяем наличие необходимых переменных окружения
  if (!process.env.DEPLOYER_PRIVATE_KEY) {
    throw new Error("DEPLOYER_PRIVATE_KEY не установлен в .env файле");
  }

  // Создаем signer из приватного ключа
  const deployer = new hre.ethers.Wallet(process.env.DEPLOYER_PRIVATE_KEY, hre.ethers.provider);
  console.log("Аккаунт деплоера:", deployer.address);
  console.log("Баланс деплоера:", hre.ethers.formatEther(await hre.ethers.provider.getBalance(deployer.address)), "ETH\n");

  // Определяем сеть
  const networkName = hre.network.name;
  console.log("Сеть:", networkName);
  
  // Читаем deployments файл
  const deploymentFile = path.join(__dirname, "..", "deployments", `${networkName}.json`);
  
  if (!fs.existsSync(deploymentFile)) {
    throw new Error(`Файл деплоя не найден: ${deploymentFile}`);
  }
  
  const deploymentInfo = JSON.parse(fs.readFileSync(deploymentFile, "utf8"));
  console.log("Diamond адрес:", deploymentInfo.diamondAddress);
  console.log("Facets из deployments:");
  for (const [name, address] of Object.entries(deploymentInfo.facets)) {
    console.log(`  ${name}: ${address}`);
  }
  console.log("");

  // Подключаемся к Diamond через DiamondLoupe
  console.log("--- Проверка текущего состояния Diamond ---");
  const diamondLoupe = await hre.ethers.getContractAt("IDiamondLoupe", deploymentInfo.diamondAddress);
  
  // Получаем текущие facets в Diamond
  const currentFacets = await diamondLoupe.facets();
  const currentFacetAddresses = await diamondLoupe.facetAddresses();
  
  console.log(`Текущее количество facets в Diamond: ${currentFacets.length}`);
  console.log("Текущие facets:");
  for (const facet of currentFacets) {
    const name = getFacetNameByAddress(facet.facetAddress, deploymentInfo.facets);
    console.log(`  ${name} (${facet.facetAddress}): ${facet.functionSelectors.length} функций`);
  }
  console.log("");

  // Определяем недостающие facets
  console.log("--- Поиск недостающих facets ---");
  const missingFacets = [];
  
  for (const [facetName, expectedAddress] of Object.entries(deploymentInfo.facets)) {
    const found = currentFacetAddresses.some(addr => addr.toLowerCase() === expectedAddress.toLowerCase());
    if (!found) {
      missingFacets.push({ name: facetName, address: expectedAddress });
      console.log(`✗ ${facetName} (${expectedAddress}) - ОТСУТСТВУЕТ`);
    } else {
      console.log(`✓ ${facetName} (${expectedAddress}) - найден`);
    }
  }
  console.log("");

  if (missingFacets.length === 0) {
    console.log("✅ Все facets присутствуют в Diamond. Добавление не требуется.");
    return;
  }

  console.log(`--- Будут добавлены ${missingFacets.length} недостающих facets ---`);
  
  // Подключаемся к Diamond через IDiamondCut
  const diamondCut = await hre.ethers.getContractAt("IDiamondCut", deploymentInfo.diamondAddress);
  
  // Для каждого недостающего facet создаем diamondCut операцию
  const facetCuts = [];
  
  for (const missingFacet of missingFacets) {
    console.log(`\nПодготовка ${missingFacet.name}...`);
    
    // Получаем контракт facet
    let facetContract;
    try {
      facetContract = await hre.ethers.getContractAt(missingFacet.name, missingFacet.address);
    } catch (error) {
      console.error(`Ошибка при подключении к ${missingFacet.name}: ${error.message}`);
      continue;
    }
    
    // Получаем селекторы функций
    const selectors = getFacetSelectors(missingFacet.name, facetContract);
    console.log(`  Селекторы функций (${selectors.length}):`);
    for (const selector of selectors) {
      console.log(`    ${selector}`);
    }
    
    // Создаем FacetCut
    facetCuts.push({
      facetAddress: missingFacet.address,
      action: 0, // Add
      functionSelectors: selectors
    });
  }
  
  if (facetCuts.length === 0) {
    console.log("Нет facets для добавления.");
    return;
  }

  console.log("\n--- Выполнение diamondCut ---");
  console.log("Количество операций:", facetCuts.length);
  
  try {
    const gasOptions = await getGasPrice(hre.ethers.provider, 1.3);
    console.log("Gas options:", gasOptions);
    
    console.log("\nОтправка транзакции...");
    const tx = await diamondCut.connect(deployer).diamondCut(
      facetCuts,
      hre.ethers.ZeroAddress,
      "0x",
      gasOptions
    );
    
    console.log("Транзакция отправлена. Хеш:", tx.hash);
    console.log("Ожидание подтверждения...");
    
    const receipt = await tx.wait();
    console.log("✅ Транзакция подтверждена!");
    console.log("Блок:", receipt.blockNumber);
    console.log("Gas использовано:", receipt.gasUsed.toString());
    
  } catch (error) {
    console.error("❌ Ошибка при выполнении diamondCut:", error.message);
    throw error;
  }

  // Ждем некоторое время для подтверждения изменений
  await sleep(5000);

  // Проверяем результат
  console.log("\n--- Проверка результата ---");
  const newFacets = await diamondLoupe.facets();
  const newFacetAddresses = await diamondLoupe.facetAddresses();
  
  console.log(`Новое количество facets в Diamond: ${newFacets.length}`);
  
  let allAdded = true;
  for (const missingFacet of missingFacets) {
    const found = newFacetAddresses.some(addr => addr.toLowerCase() === missingFacet.address.toLowerCase());
    if (found) {
      console.log(`✓ ${missingFacet.name} (${missingFacet.address}) - успешно добавлен`);
    } else {
      console.log(`✗ ${missingFacet.name} (${missingFacet.address}) - НЕ добавлен`);
      allAdded = false;
    }
  }

  if (allAdded) {
    console.log("\n✅ Все недостающие facets успешно добавлены в Diamond!");
  } else {
    console.log("\n⚠️ Некоторые facets не были добавлены. Проверьте логи выше.");
  }
  
  // Выводим полный список facets после добавления
  console.log("\nПолный список facets после добавления:");
  for (const facet of newFacets) {
    const name = getFacetNameByAddress(facet.facetAddress, deploymentInfo.facets);
    console.log(`  ${name} (${facet.facetAddress}): ${facet.functionSelectors.length} функций`);
  }
}

// Запуск скрипта и обработка ошибок
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("\n❌ Ошибка выполнения скрипта:", error.message);
    console.error(error);
    process.exit(1);
  });
