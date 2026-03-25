const hre = require("hardhat");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

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
  const diamondCutFacet = await DiamondCutFacet.connect(deployer).deploy();
  await diamondCutFacet.waitForDeployment();
  const diamondCutFacetAddress = await diamondCutFacet.getAddress();
  console.log("   Новый DiamondCutFacet развернут по адресу:", diamondCutFacetAddress);

  // b. Развертываем новый DiamondLoupeFacet
  console.log("\nb. Развертывание нового DiamondLoupeFacet...");
  const DiamondLoupeFacet = await hre.ethers.getContractFactory("DiamondLoupeFacet");
  const diamondLoupeFacet = await DiamondLoupeFacet.connect(deployer).deploy();
  await diamondLoupeFacet.waitForDeployment();
  const diamondLoupeFacetAddress = await diamondLoupeFacet.getAddress();
  console.log("   Новый DiamondLoupeFacet развернут по адресу:", diamondLoupeFacetAddress);

  // c. Развертываем новый OwnershipFacet
  console.log("\nc. Развертывание нового OwnershipFacet...");
  const OwnershipFacet = await hre.ethers.getContractFactory("OwnershipFacet");
  const ownershipFacet = await OwnershipFacet.connect(deployer).deploy();
  await ownershipFacet.waitForDeployment();
  const ownershipFacetAddress = await ownershipFacet.getAddress();
  console.log("   Новый OwnershipFacet развернут по адресу:", ownershipFacetAddress);

  // d. Развертываем новый ERC20Facet
  console.log("\nd. Развертывание нового ERC20Facet...");
  const ERC20Facet = await hre.ethers.getContractFactory("ERC20Facet");
  const erc20Facet = await ERC20Facet.connect(deployer).deploy();
  await erc20Facet.waitForDeployment();
  const erc20FacetAddress = await erc20Facet.getAddress();
  console.log("   Новый ERC20Facet развернут по адресу:", erc20FacetAddress);

  // e. Развертываем новый CXBTFacet
  console.log("\ne. Развертывание нового CXBTFacet...");
  const CXBTFacet = await hre.ethers.getContractFactory("CXBTFacet");
  const cxbtFacet = await CXBTFacet.connect(deployer).deploy();
  await cxbtFacet.waitForDeployment();
  const cxbtFacetAddress = await cxbtFacet.getAddress();
  console.log("   Новый CXBTFacet развернут по адресу:", cxbtFacetAddress);

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
    cxbtFacet.interface.getFunction("updateBalances").selector
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

  // Заменяем DiamondCutFacet (в последнюю очередь, чтобы иметь возможность вызывать diamondCut)
  console.log("\nПодготовка замены DiamondCutFacet...");
  for (const selector of diamondCutSelectors) {
    const currentAddress = currentFacetsMap.get(selector);
    if (currentAddress && currentAddress.toLowerCase() !== diamondCutFacetAddress.toLowerCase()) {
      console.log(`  Селектор ${selector} будет заменен с ${currentAddress} на ${diamondCutFacetAddress}`);
    }
  }
  cuts.push({
    facetAddress: diamondCutFacetAddress,
    action: 1, // Replace
    functionSelectors: diamondCutSelectors
  });

  // Заменяем DiamondLoupeFacet
  console.log("\nЗамена DiamondLoupeFacet...");
  for (const selector of diamondLoupeSelectors) {
    const currentAddress = currentFacetsMap.get(selector);
    if (currentAddress && currentAddress.toLowerCase() !== diamondLoupeFacetAddress.toLowerCase()) {
      console.log(`  Селектор ${selector} заменен с ${currentAddress} на ${diamondLoupeFacetAddress}`);
    }
  }
  cuts.push({
    facetAddress: diamondLoupeFacetAddress,
    action: 1, // Replace
    functionSelectors: diamondLoupeSelectors
  });

  // Заменяем OwnershipFacet
  console.log("\nЗамена OwnershipFacet...");
  for (const selector of ownershipSelectors) {
    const currentAddress = currentFacetsMap.get(selector);
    if (currentAddress && currentAddress.toLowerCase() !== ownershipFacetAddress.toLowerCase()) {
      console.log(`  Селектор ${selector} заменен с ${currentAddress} на ${ownershipFacetAddress}`);
    }
  }
  cuts.push({
    facetAddress: ownershipFacetAddress,
    action: 1, // Replace
    functionSelectors: ownershipSelectors
  });

  // Заменяем ERC20Facet
  console.log("\nЗамена ERC20Facet...");
  for (const selector of erc20Selectors) {
    const currentAddress = currentFacetsMap.get(selector);
    if (currentAddress && currentAddress.toLowerCase() !== erc20FacetAddress.toLowerCase()) {
      console.log(`  Селектор ${selector} заменен с ${currentAddress} на ${erc20FacetAddress}`);
    }
  }
  cuts.push({
    facetAddress: erc20FacetAddress,
    action: 1, // Replace
    functionSelectors: erc20Selectors
  });

  // Заменяем CXBTFacet
  console.log("\nЗамена CXBTFacet...");
  for (const selector of cxbtSelectors) {
    const currentAddress = currentFacetsMap.get(selector);
    if (currentAddress && currentAddress.toLowerCase() !== cxbtFacetAddress.toLowerCase()) {
      console.log(`  Селектор ${selector} заменен с ${currentAddress} на ${cxbtFacetAddress}`);
    }
  }
  cuts.push({
    facetAddress: cxbtFacetAddress,
    action: 1, // Replace
    functionSelectors: cxbtSelectors
  });

  // Выполняем diamondCut для замены всех facets
  console.log("\nВыполнение diamondCut для замены всех facets...");
  await diamondCutInterface.connect(deployer).diamondCut(cuts, hre.ethers.ZeroAddress, "0x");
  console.log("✓ Все facets успешно заменены");

  // ==================== Шаг 5: Проверка обновления ====================

  console.log("\n--- Проверка обновления ---");

  const updatedFacets = await diamondLoupe.facets();
  console.log("Количество facets после обновления:", updatedFacets.length);

  // Проверяем, что все новые facets добавлены
  const newFacetAddresses = [
    diamondCutFacetAddress,
    diamondLoupeFacetAddress,
    ownershipFacetAddress,
    erc20FacetAddress,
    cxbtFacetAddress
  ];

  const facetAddresses = await diamondLoupe.facetAddresses();

  console.log("\n--- Проверка новых facets ---");
  for (const address of newFacetAddresses) {
    const found = facetAddresses.some(addr => addr.toLowerCase() === address.toLowerCase());
    if (found) {
      console.log(`✓ Facet ${address} найден в Diamond`);
    } else {
      console.log(`✗ Facet ${address} НЕ найден в Diamond!`);
    }
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
