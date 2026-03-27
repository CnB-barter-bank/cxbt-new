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

// Функция для развертывания с retry логикой
async function deployWithRetry(factory, deployer, contractName, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`   Попытка ${attempt}/${maxRetries} для ${contractName}...`);
      const gasOptions = await getGasPrice(hre.ethers.provider, 1.1 + (attempt * 0.2));
      const contract = await factory.connect(deployer).deploy(gasOptions);
      await contract.waitForDeployment();
      return contract;
    } catch (error) {
      if (attempt === maxRetries) throw error;
      console.log(`   Ошибка: ${error.message}. Повторная попытка через 5 секунд...`);
      await sleep(5000);
    }
  }
}

async function main() {
  // Проверяем наличие необходимых переменных окружения
  if (!process.env.DEPLOYER_PRIVATE_KEY) {
    throw new Error("DEPLOYER_PRIVATE_KEY не установлен в .env файле");
  }

  // Создаем signer из приватного ключа
  const deployer = new hre.ethers.Wallet(process.env.DEPLOYER_PRIVATE_KEY, hre.ethers.provider);

  console.log("Обновление Diamond с аккаунта:", deployer.address);
  console.log("Баланс деплоера:", (await hre.ethers.provider.getBalance(deployer.address)).toString());

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

  // Проверяем, что деплоер является владельцем
  const ownerInterface = await hre.ethers.getContractAt("OwnershipFacet", diamondAddress);
  const owner = await ownerInterface.owner();
  if (owner.toLowerCase() !== deployer.address.toLowerCase()) {
    throw new Error("Вы не являетесь владельцем Diamond");
  }
  console.log("✓ Вы являетесь владельцем Diamond");

  // ==================== Шаг 1: Развертывание новых Facets ====================

  console.log("\n--- Развертывание новых Facets ---");

  // a. Развертываем новый DiamondCutFacet
  console.log("\na. Развертывание нового DiamondCutFacet...");
  const DiamondCutFacet = await hre.ethers.getContractFactory("DiamondCutFacet");
  const diamondCutFacet = await deployWithRetry(DiamondCutFacet, deployer, "DiamondCutFacet");
  await diamondCutFacet.waitForDeployment();
  const diamondCutFacetAddress = await diamondCutFacet.getAddress();
  console.log("   Новый DiamondCutFacet развернут по адресу:", diamondCutFacetAddress);
  await sleep(3000);

  // b. Развертываем новый DiamondLoupeFacet
  console.log("\nb. Развертывание нового DiamondLoupeFacet...");
  const DiamondLoupeFacet = await hre.ethers.getContractFactory("DiamondLoupeFacet");
  const diamondLoupeFacet = await deployWithRetry(DiamondLoupeFacet, deployer, "DiamondLoupeFacet");
  await diamondLoupeFacet.waitForDeployment();
  const diamondLoupeFacetAddress = await diamondLoupeFacet.getAddress();
  console.log("   Новый DiamondLoupeFacet развернут по адресу:", diamondLoupeFacetAddress);
  await sleep(3000);

  // c. Развертываем новый OwnershipFacet
  console.log("\nc. Развертывание нового OwnershipFacet...");
  const OwnershipFacet = await hre.ethers.getContractFactory("OwnershipFacet");
  const ownershipFacet = await deployWithRetry(OwnershipFacet, deployer, "OwnershipFacet");
  await ownershipFacet.waitForDeployment();
  const ownershipFacetAddress = await ownershipFacet.getAddress();
  console.log("   Новый OwnershipFacet развернут по адресу:", ownershipFacetAddress);
  await sleep(3000);

  // d. Развертываем новый ERC20Facet
  console.log("\nd. Развертывание нового ERC20Facet...");
  const ERC20Facet = await hre.ethers.getContractFactory("ERC20Facet");
  const erc20Facet = await deployWithRetry(ERC20Facet, deployer, "ERC20Facet");
  await erc20Facet.waitForDeployment();
  const erc20FacetAddress = await erc20Facet.getAddress();
  console.log("   Новый ERC20Facet развернут по адресу:", erc20FacetAddress);
  await sleep(3000);

  // e. Развертываем новый CXBTFacet
  console.log("\ne. Развертывание нового CXBTFacet...");
  const CXBTFacet = await hre.ethers.getContractFactory("CXBTFacet");
  const cxbtFacet = await deployWithRetry(CXBTFacet, deployer, "CXBTFacet");
  await cxbtFacet.waitForDeployment();
  const cxbtFacetAddress = await cxbtFacet.getAddress();
  console.log("   Новый CXBTFacet развернут по адресу:", cxbtFacetAddress);
  await sleep(3000);

  // ==================== Шаг 2: Получение текущих Facets из Diamond ====================

  console.log("\n--- Получение текущих Facets из Diamond ---");

  const diamondLoupe = await hre.ethers.getContractAt("IDiamondLoupe", diamondAddress);
  const currentFacets = await diamondLoupe.facets();

  console.log("Текущее количество facets:", currentFacets.length);

  // Создаем карту текущих facets по селекторам
  const currentFacetsMap = new Map();
  for (const facet of currentFacets) {
    for (const selector of facet.functionSelectors) {
      currentFacetsMap.set(selector, facet.facetAddress);
    }
  }

  // ==================== Шаг 3: Подготовка cuts для замены facets ====================

  console.log("\n--- Подготовка cuts для замены facets ---");

  const diamondCutInterface = await hre.ethers.getContractAt("IDiamondCut", diamondAddress);

  // OwnershipFacet селекторы
  const ownershipSelectors = [
    ownershipFacet.interface.getFunction("owner").selector,
    ownershipFacet.interface.getFunction("transferOwnership").selector,
    ownershipFacet.interface.getFunction("renounceOwnership").selector
  ];

  // ERC20Facet селекторы
  const erc20Selectors = [
    erc20Facet.interface.getFunction("initERC20").selector,
    erc20Facet.interface.getFunction("balanceOf").selector,
    erc20Facet.interface.getFunction("unlockedBalanceOf").selector,
    erc20Facet.interface.getFunction("lockedBalanceOf").selector,
    erc20Facet.interface.getFunction("transfer").selector,
    erc20Facet.interface.getFunction("allowance").selector,
    erc20Facet.interface.getFunction("approve").selector,
    erc20Facet.interface.getFunction("transferFrom").selector,
    erc20Facet.interface.getFunction("totalSupply").selector,
    erc20Facet.interface.getFunction("name").selector,
    erc20Facet.interface.getFunction("symbol").selector,
    erc20Facet.interface.getFunction("decimals").selector,
    erc20Facet.interface.getFunction("increaseAllowance").selector,
    erc20Facet.interface.getFunction("decreaseAllowance").selector
  ];

  // CXBTFacet селекторы
  const cxbtSelectors = [
    cxbtFacet.interface.getFunction("initCXBT").selector,
    cxbtFacet.interface.getFunction("getTokenBalances").selector,
    cxbtFacet.interface.getFunction("calculateUnlockCost").selector,
    cxbtFacet.interface.getFunction("unlockTokens").selector,
    cxbtFacet.interface.getFunction("ownerUnlockTokens").selector,
    cxbtFacet.interface.getFunction("addToRewardPool").selector,
    cxbtFacet.interface.getFunction("withdrawFromRewardPool").selector,
    cxbtFacet.interface.getFunction("setUnlockPercentage").selector,
    cxbtFacet.interface.getFunction("mint").selector,
    cxbtFacet.interface.getFunction("pause").selector,
    cxbtFacet.interface.getFunction("unpause").selector,
    cxbtFacet.interface.getFunction("paused").selector,
    cxbtFacet.interface.getFunction("getPaidToken").selector,
    cxbtFacet.interface.getFunction("getUnlockPercentage").selector,
    cxbtFacet.interface.getFunction("getRewardPoolBalance").selector,
    cxbtFacet.interface.getFunction("burn").selector,
    cxbtFacet.interface.getFunction("addToWhitelist").selector,
    cxbtFacet.interface.getFunction("removeFromWhitelist").selector,
    cxbtFacet.interface.getFunction("addToBlacklist").selector,
    cxbtFacet.interface.getFunction("removeFromBlacklist").selector,
    cxbtFacet.interface.getFunction("isWhitelisted").selector,
    cxbtFacet.interface.getFunction("isBlacklisted").selector
  ];

  // DiamondCutFacet селекторы
  const diamondCutSelectors = [
    diamondCutFacet.interface.getFunction("diamondCut").selector
  ];

  // DiamondLoupeFacet селекторы
  const diamondLoupeSelectors = [
    diamondLoupeFacet.interface.getFunction("facets").selector,
    diamondLoupeFacet.interface.getFunction("facetFunctionSelectors").selector,
    diamondLoupeFacet.interface.getFunction("facetAddresses").selector,
    diamondLoupeFacet.interface.getFunction("facetAddress").selector
  ];

  // ==================== Шаг 4: Замена facets в Diamond ====================

  console.log("\n--- Замена facets в Diamond ---");

  const cuts = [];

  // Используем Remove + Add вместо Replace для обхода проверки в старой версии LibDiamond.sol
  // Сначала удаляем старые селекторы, затем добавляем новые
  
  // ВАЖНО: DiamondLoupeFacet обновляется В ПОСЛЕДНЮЮ ОЧЕРЕДЬ
  // Это необходимо для того, чтобы функции facets() и facetAddresses() были доступны
  // во время проверки после diamondCut
  
  console.log("\nПодготовка замены DiamondCutFacet...");
  const diamondCutSelectorsToReplace = [];
  let diamondCutOldAddress = null;
  for (const selector of diamondCutSelectors) {
    const currentAddress = currentFacetsMap.get(selector);
    if (currentAddress && currentAddress.toLowerCase() !== diamondCutFacetAddress.toLowerCase()) {
      console.log(`  Селектор ${selector} будет заменен с ${currentAddress} на ${diamondCutFacetAddress}`);
      diamondCutSelectorsToReplace.push(selector);
      if (!diamondCutOldAddress) diamondCutOldAddress = currentAddress;
    }
  }
  if (diamondCutSelectorsToReplace.length > 0) {
    // Сначала удаляем старые селекторы
    cuts.push({
      facetAddress: diamondCutOldAddress,
      action: 2, // Remove
      functionSelectors: diamondCutSelectorsToReplace
    });
    // Затем добавляем новые селекторы
    cuts.push({
      facetAddress: diamondCutFacetAddress,
      action: 0, // Add
      functionSelectors: diamondCutSelectorsToReplace
    });
  } else {
    console.log("  DiamondCutFacet не требует замены");
  }

  // Заменяем OwnershipFacet
  console.log("\nЗамена OwnershipFacet...");
  const ownershipSelectorsToReplace = [];
  let ownershipOldAddress = null;
  for (const selector of ownershipSelectors) {
    const currentAddress = currentFacetsMap.get(selector);
    if (currentAddress && currentAddress.toLowerCase() !== ownershipFacetAddress.toLowerCase()) {
      console.log(`  Селектор ${selector} заменен с ${currentAddress} на ${ownershipFacetAddress}`);
      ownershipSelectorsToReplace.push(selector);
      if (!ownershipOldAddress) ownershipOldAddress = currentAddress;
    }
  }
  if (ownershipSelectorsToReplace.length > 0) {
    // Сначала удаляем старые селекторы
    cuts.push({
      facetAddress: ownershipOldAddress,
      action: 2, // Remove
      functionSelectors: ownershipSelectorsToReplace
    });
    // Затем добавляем новые селекторы
    cuts.push({
      facetAddress: ownershipFacetAddress,
      action: 0, // Add
      functionSelectors: ownershipSelectorsToReplace
    });
  } else {
    console.log("  OwnershipFacet не требует замены");
  }

  // Заменяем ERC20Facet
  console.log("\nЗамена ERC20Facet...");
  const erc20SelectorsToReplace = [];
  const erc20SelectorsToAdd = [];
  let erc20OldAddress = null;
  for (const selector of erc20Selectors) {
    const currentAddress = currentFacetsMap.get(selector);
    console.log(`  [DEBUG] Обработка селектора ${selector}:`);
    console.log(`    - Текущий адрес: ${currentAddress || 'НЕ НАЙДЕН'}`);
    console.log(`    - Новый адрес: ${erc20FacetAddress}`);
    if (currentAddress === undefined) {
      // Новая функция - добавляем её
      console.log(`  ➕ НОВАЯ ФУНКЦИЯ: Селектор ${selector} будет добавлен на адрес ${erc20FacetAddress}`);
      erc20SelectorsToAdd.push(selector);
    } else if (currentAddress.toLowerCase() !== erc20FacetAddress.toLowerCase()) {
      // Функция существует, но адрес отличается - заменяем её
      console.log(`  🔄 ЗАМЕНА: Селектор ${selector} заменен с ${currentAddress} на ${erc20FacetAddress}`);
      erc20SelectorsToReplace.push(selector);
      if (!erc20OldAddress) erc20OldAddress = currentAddress;
    } else {
      // Функция существует и адрес совпадает - пропускаем
      console.log(`  ✅ ПРОПУЩЕНО: Селектор ${selector} уже на нужном адресе ${erc20FacetAddress}`);
    }
  }
  
  // Логирование после формирования массивов селекторов
  console.log(`\n  [DEBUG] Итоги обработки селекторов ERC20Facet:`);
  console.log(`    - Количество новых функций для добавления: ${erc20SelectorsToAdd.length}`);
  console.log(`    - Количество функций для замены: ${erc20SelectorsToReplace.length}`);
  console.log(`    - Старый адрес ERC20Facet: ${erc20OldAddress || 'НЕ НАЙДЕН'}`);
  console.log(`    - Новый адрес ERC20Facet: ${erc20FacetAddress}`);
  if (erc20SelectorsToAdd.length > 0) {
    console.log(`    - Селекторы для добавления: [${erc20SelectorsToAdd.map(s => `'${s}'`).join(', ')}]`);
  }
  if (erc20SelectorsToReplace.length > 0) {
    console.log(`    - Селекторы для замены: [${erc20SelectorsToReplace.map(s => `'${s}'`).join(', ')}]`);
  }
  
  // Сначала добавляем новые функции
  if (erc20SelectorsToAdd.length > 0) {
    console.log(`\n  Добавление ${erc20SelectorsToAdd.length} новых функций в ERC20Facet...`);
    cuts.push({
      facetAddress: erc20FacetAddress,
      action: 0, // Add
      functionSelectors: erc20SelectorsToAdd
    });
  }
  
  // Затем заменяем существующие функции
  if (erc20SelectorsToReplace.length > 0) {
    console.log(`\n  Замена ${erc20SelectorsToReplace.length} функций в ERC20Facet...`);
    // Сначала удаляем старые селекторы
    cuts.push({
      facetAddress: erc20OldAddress,
      action: 2, // Remove
      functionSelectors: erc20SelectorsToReplace
    });
    // Затем добавляем новые селекторы
    cuts.push({
      facetAddress: erc20FacetAddress,
      action: 0, // Add
      functionSelectors: erc20SelectorsToReplace
    });
  }
  
  if (erc20SelectorsToAdd.length === 0 && erc20SelectorsToReplace.length === 0) {
    console.log("  ERC20Facet не требует изменений");
  } else {
    console.log(`\n  Итого: ${erc20SelectorsToAdd.length} новых функций, ${erc20SelectorsToReplace.length} замен, ${erc20Selectors.length - erc20SelectorsToAdd.length - erc20SelectorsToReplace.length} пропущено`);
  }

  // Заменяем CXBTFacet
  console.log("\nЗамена CXBTFacet...");
  const cxbtSelectorsToReplace = [];
  const cxbtSelectorsToAdd = [];
  let cxbtOldAddress = null;
  for (const selector of cxbtSelectors) {
    const currentAddress = currentFacetsMap.get(selector);
    console.log(`  [DEBUG] Обработка селектора ${selector}:`);
    console.log(`    - Текущий адрес: ${currentAddress || 'НЕ НАЙДЕН'}`);
    console.log(`    - Новый адрес: ${cxbtFacetAddress}`);
    if (currentAddress === undefined) {
      // Новая функция - добавляем её
      console.log(`  ➕ НОВАЯ ФУНКЦИЯ: Селектор ${selector} будет добавлен на адрес ${cxbtFacetAddress}`);
      cxbtSelectorsToAdd.push(selector);
    } else if (currentAddress.toLowerCase() !== cxbtFacetAddress.toLowerCase()) {
      // Функция существует, но адрес отличается - заменяем её
      console.log(`  🔄 ЗАМЕНА: Селектор ${selector} заменен с ${currentAddress} на ${cxbtFacetAddress}`);
      cxbtSelectorsToReplace.push(selector);
      if (!cxbtOldAddress) cxbtOldAddress = currentAddress;
    } else {
      // Функция существует и адрес совпадает - пропускаем
      console.log(`  ✅ ПРОПУЩЕНО: Селектор ${selector} уже на нужном адресе ${cxbtFacetAddress}`);
    }
  }
  
  // Логирование после формирования массивов селекторов
  console.log(`\n  [DEBUG] Итоги обработки селекторов CXBTFacet:`);
  console.log(`    - Количество новых функций для добавления: ${cxbtSelectorsToAdd.length}`);
  console.log(`    - Количество функций для замены: ${cxbtSelectorsToReplace.length}`);
  console.log(`    - Старый адрес CXBTFacet: ${cxbtOldAddress || 'НЕ НАЙДЕН'}`);
  console.log(`    - Новый адрес CXBTFacet: ${cxbtFacetAddress}`);
  if (cxbtSelectorsToAdd.length > 0) {
    console.log(`    - Селекторы для добавления: [${cxbtSelectorsToAdd.map(s => `'${s}'`).join(', ')}]`);
  }
  if (cxbtSelectorsToReplace.length > 0) {
    console.log(`    - Селекторы для замены: [${cxbtSelectorsToReplace.map(s => `'${s}'`).join(', ')}]`);
  }
  
  // Сначала добавляем новые функции
  if (cxbtSelectorsToAdd.length > 0) {
    console.log(`\n  Добавление ${cxbtSelectorsToAdd.length} новых функций в CXBTFacet...`);
    cuts.push({
      facetAddress: cxbtFacetAddress,
      action: 0, // Add
      functionSelectors: cxbtSelectorsToAdd
    });
  }
  
  // Затем заменяем существующие функции
  if (cxbtSelectorsToReplace.length > 0) {
    console.log(`\n  Замена ${cxbtSelectorsToReplace.length} функций в CXBTFacet...`);
    // Сначала удаляем старые селекторы
    cuts.push({
      facetAddress: cxbtOldAddress,
      action: 2, // Remove
      functionSelectors: cxbtSelectorsToReplace
    });
    // Затем добавляем новые селекторы
    cuts.push({
      facetAddress: cxbtFacetAddress,
      action: 0, // Add
      functionSelectors: cxbtSelectorsToReplace
    });
  }
  
  if (cxbtSelectorsToAdd.length === 0 && cxbtSelectorsToReplace.length === 0) {
    console.log("  CXBTFacet не требует изменений");
  } else {
    console.log(`\n  Итого: ${cxbtSelectorsToAdd.length} новых функций, ${cxbtSelectorsToReplace.length} замен, ${cxbtSelectors.length - cxbtSelectorsToAdd.length - cxbtSelectorsToReplace.length} пропущено`);
  }

  // Заменяем DiamondLoupeFacet В ПОСЛЕДНЮЮ ОЧЕРЕДЬ
  console.log("\nЗамена DiamondLoupeFacet (в последнюю очередь)...");
  const diamondLoupeSelectorsToReplace = [];
  let diamondLoupeOldAddress = null;
  for (const selector of diamondLoupeSelectors) {
    const currentAddress = currentFacetsMap.get(selector);
    if (currentAddress && currentAddress.toLowerCase() !== diamondLoupeFacetAddress.toLowerCase()) {
      console.log(`  Селектор ${selector} заменен с ${currentAddress} на ${diamondLoupeFacetAddress}`);
      diamondLoupeSelectorsToReplace.push(selector);
      if (!diamondLoupeOldAddress) diamondLoupeOldAddress = currentAddress;
    }
  }
  if (diamondLoupeSelectorsToReplace.length > 0) {
    // Сначала удаляем старые селекторы
    cuts.push({
      facetAddress: diamondLoupeOldAddress,
      action: 2, // Remove
      functionSelectors: diamondLoupeSelectorsToReplace
    });
    // Затем добавляем новые селекторы
    cuts.push({
      facetAddress: diamondLoupeFacetAddress,
      action: 0, // Add
      functionSelectors: diamondLoupeSelectorsToReplace
    });
  } else {
    console.log("  DiamondLoupeFacet не требует замены");
  }

  // Выполняем diamondCut для замены всех facets
  console.log("\nВыполнение diamondCut для замены всех facets...");
  if (cuts.length === 0) {
    console.log("Нет facets для замены. Все facets уже обновлены.");
  } else {
    console.log(`Количество cuts для выполнения: ${cuts.length}`);
    console.log(`\n  [DEBUG] Подробная информация о cuts:`);
    console.log(`    - Общее количество операций: ${cuts.length}`);
    console.log(`    - Содержимое массива cuts (JSON):`);
    console.log(JSON.stringify(cuts.map(c => ({
      action: c.action === 0 ? 'ADD' : c.action === 1 ? 'REPLACE' : 'REMOVE',
      facetAddress: c.facetAddress,
      functionSelectors: c.functionSelectors.map(s => `'${s}'`)
    })), null, 2));
    
    const gasOptions = await getGasPrice(hre.ethers.provider, 1.2);
    console.log(`\n  [DEBUG] Отправка транзакции diamondCut...`);
    const tx = await diamondCutInterface.connect(deployer).diamondCut(cuts, hre.ethers.ZeroAddress, "0x", gasOptions);
    console.log(`  [DEBUG] Транзакция отправлена. Hash: ${tx.hash}`);
    console.log(`  [DEBUG] Ожидание подтверждения транзакции...`);
    const receipt = await tx.wait();
    console.log(`  [DEBUG] Транзакция подтверждена:`);
    console.log(`    - Hash: ${receipt.hash}`);
    console.log(`    - Status: ${receipt.status === 1 ? 'УСПЕШНО' : 'ОШИБКА'}`);
    console.log(`    - Block number: ${receipt.blockNumber}`);
    console.log(`    - Gas used: ${receipt.gasUsed.toString()}`);
    console.log("✓ Все facets успешно заменены");
  }

  // ==================== Шаг 5: Проверка обновления ====================

  console.log("\n--- Проверка обновления ---");

  // Добавляем задержку после diamondCut для полной обработки изменений блокчейном
  console.log("\n⏳ Ожидание 10 секунд для полной обработки изменений блокчейном...");
  await sleep(10000);
  console.log("✓ Задержка завершена");

  // Пересоздаем интерфейс diamondLoupe после обновления
  const updatedDiamondLoupe = await hre.ethers.getContractAt("IDiamondLoupe", diamondAddress);

  // Детальное логирование: вывод результатов facets() сразу после diamondCut
  console.log("\n--- Детальное логирование facets() ---");
  let updatedFacets;
  try {
    updatedFacets = await updatedDiamondLoupe.facets();
    console.log("✓ facets() вызван успешно");
    console.log(`  Количество facets: ${updatedFacets.length}`);
    for (const facet of updatedFacets) {
      console.log(`  - Facet адрес: ${facet.facetAddress}`);
      console.log(`    Селекторы: [${facet.functionSelectors.map(s => `'${s}'`).join(', ')}]`);
    }
  } catch (error) {
    console.log(`✗ Ошибка при вызове facets(): ${error.message}`);
    updatedFacets = [];
  }

  // Детальное логирование: вывод результатов facetAddresses() сразу после diamondCut
  console.log("\n--- Детальное логирование facetAddresses() ---");
  let facetAddresses;
  try {
    facetAddresses = await updatedDiamondLoupe.facetAddresses();
    console.log("✓ facetAddresses() вызван успешно");
    console.log(`  Количество адресов facets: ${facetAddresses.length}`);
    for (const address of facetAddresses) {
      console.log(`  - ${address}`);
    }
  } catch (error) {
    console.log(`✗ Ошибка при вызове facetAddresses(): ${error.message}`);
    facetAddresses = [];
  }

  // Проверяем, что все новые facets добавлены
  const newFacetAddresses = [
    diamondCutFacetAddress,
    diamondLoupeFacetAddress,
    ownershipFacetAddress,
    erc20FacetAddress,
    cxbtFacetAddress
  ];

  console.log("\n--- Проверка новых facets (через facetAddresses) ---");
  for (const address of newFacetAddresses) {
    const found = facetAddresses.some(addr => addr.toLowerCase() === address.toLowerCase());
    if (found) {
      console.log(`✓ Facet ${address} найден в Diamond`);
    } else {
      console.log(`✗ Facet ${address} НЕ найден в Diamond!`);
    }
  }

  // ==================== Шаг 5.1: Альтернативная проверка facets по селектору ====================

  console.log("\n--- Альтернативная проверка facets по селектору ---");

  // Функция для проверки наличия facet по селектору функции
  async function checkFacetBySelector(facetName, facetAddress, expectedSelectors) {
    console.log(`\nПроверка ${facetName} (${facetAddress})...`);
    let allSelectorsFound = true;

    for (const selector of expectedSelectors) {
      try {
        const foundAddress = await updatedDiamondLoupe.facetAddress(selector);
        if (foundAddress.toLowerCase() === facetAddress.toLowerCase()) {
          console.log(`  ✓ Селектор ${selector} найден на правильном адресе`);
        } else {
          console.log(`  ✗ Селектор ${selector} найден на неверном адресе: ${foundAddress}`);
          allSelectorsFound = false;
        }
      } catch (error) {
        console.log(`  ✗ Селектор ${selector} не найден: ${error.message}`);
        allSelectorsFound = false;
      }
    }

    return allSelectorsFound;
  }

  // Проверяем все facets по селекторам
  const allFacetsValid = (
    await checkFacetBySelector("DiamondCutFacet", diamondCutFacetAddress, diamondCutSelectors) &&
    await checkFacetBySelector("DiamondLoupeFacet", diamondLoupeFacetAddress, diamondLoupeSelectors) &&
    await checkFacetBySelector("OwnershipFacet", ownershipFacetAddress, ownershipSelectors) &&
    await checkFacetBySelector("ERC20Facet", erc20FacetAddress, erc20Selectors) &&
    await checkFacetBySelector("CXBTFacet", cxbtFacetAddress, cxbtSelectors)
  );

  if (allFacetsValid) {
    console.log("\n✓ Все facets успешно проверены по селекторам");
  } else {
    console.log("\n⚠ ВНИМАНИЕ: Некоторые facets не прошли проверку по селекторам");
  }

  // ==================== Шаг 6: Сохранение обновленной информации ====================

  console.log("\n--- Сохранение обновленной информации ---");

  // Загружаем старую информацию о деплое
  const deploymentFile = path.join(__dirname, "..", "deployments", `${hre.network.name}.json`);
  let deploymentInfo = {};

  if (fs.existsSync(deploymentFile)) {
    deploymentInfo = JSON.parse(fs.readFileSync(deploymentFile, "utf8"));
  }

  // Обновляем информацию о facets
  deploymentInfo.facets = {
    DiamondCutFacet: diamondCutFacetAddress,
    DiamondLoupeFacet: diamondLoupeFacetAddress,
    OwnershipFacet: ownershipFacetAddress,
    ERC20Facet: erc20FacetAddress,
    CXBTFacet: cxbtFacetAddress
  };
  deploymentInfo.upgradedAt = new Date().toISOString();
  deploymentInfo.upgradeCount = (deploymentInfo.upgradeCount || 0) + 1;

  // Сохраняем обновленную информацию
  fs.writeFileSync(deploymentFile, JSON.stringify(deploymentInfo, null, 2));
  console.log("✓ Обновленная информация сохранена в:", deploymentFile);

  console.log("\n--- Обновление Diamond завершено успешно ---");
  console.log("\nНовые адреса facets:");
  console.log("DiamondCutFacet:   ", diamondCutFacetAddress);
  console.log("DiamondLoupeFacet: ", diamondLoupeFacetAddress);
  console.log("OwnershipFacet:    ", ownershipFacetAddress);
  console.log("ERC20Facet:        ", erc20FacetAddress);
  console.log("CXBTFacet:         ", cxbtFacetAddress);
}

// Запуск скрипта и обработка ошибок
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
