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

  console.log("Развертывание Diamond Proxy с аккаунта:", deployer.address);
  console.log("Баланс деплоера:", (await hre.ethers.provider.getBalance(deployer.address)).toString());

  // Параметры токена из .env
  const tokenName = process.env.TOKEN_NAME || "CXBT";
  const tokenSymbol = process.env.TOKEN_SYMBOL || "CXBT";
  const tokenDecimals = parseInt(process.env.TOKEN_DECIMALS || "6");
  const initialSupply = hre.ethers.parseUnits(process.env.INITIAL_SUPPLY || "10000000", tokenDecimals);

  // Параметры CXBT из .env
  const unlockPercentage = parseInt(process.env.UNLOCK_PERCENTAGE || "1000");

  // Адрес платежного контракта из .env
  let paidTokenAddress = process.env.PAID_TOKEN_ADDRESS;

  // Для тестов используем MockEURC, если адрес не указан или это тестовая сеть
  if (hre.network.name === "hardhat" || hre.network.name === "localhost") {
    if (!paidTokenAddress || paidTokenAddress === "0x0000000000000000000000000000000000000000") {
      console.log("\nРазвертывание MockEURC для тестирования...");
      const MockEURC = await hre.ethers.getContractFactory("MockEURC");
      const mockEURC = await MockEURC.deploy();
      await mockEURC.waitForDeployment();
      paidTokenAddress = await mockEURC.getAddress();
      console.log("MockEURC развернут по адресу:", paidTokenAddress);
    }
  } else {
    // Для продакшена проверяем, что адрес указан
    if (!paidTokenAddress || paidTokenAddress === "0x0000000000000000000000000000000000000000") {
      throw new Error("PAID_TOKEN_ADDRESS не установлен в .env файле для продакшен сети!");
    }
  }

  console.log("\n--- Параметры деплоя ---");
  console.log("Название токена:", tokenName);
  console.log("Символ токена:", tokenSymbol);
  console.log("Десятичные знаки:", tokenDecimals);
  console.log("Начальное количество токенов:", hre.ethers.formatUnits(initialSupply, tokenDecimals));
  console.log("Процент разблокировки:", unlockPercentage / 100, "%");
  console.log("PAID токен:", paidTokenAddress);

  // ==================== Шаг 1: Развертывание Facets ====================

  console.log("\n--- Развертывание Facets ---");

  // a. Развертываем DiamondCutFacet
  console.log("\na. Развертывание DiamondCutFacet...");
  const DiamondCutFacet = await hre.ethers.getContractFactory("DiamondCutFacet");
  const diamondCutFacet = await DiamondCutFacet.connect(deployer).deploy();
  await diamondCutFacet.waitForDeployment();
  const diamondCutFacetAddress = await diamondCutFacet.getAddress();
  console.log("   DiamondCutFacet развернут по адресу:", diamondCutFacetAddress);

  // b. Развертываем DiamondLoupeFacet
  console.log("\nb. Развертывание DiamondLoupeFacet...");
  const DiamondLoupeFacet = await hre.ethers.getContractFactory("DiamondLoupeFacet");
  const diamondLoupeFacet = await DiamondLoupeFacet.connect(deployer).deploy();
  await diamondLoupeFacet.waitForDeployment();
  const diamondLoupeFacetAddress = await diamondLoupeFacet.getAddress();
  console.log("   DiamondLoupeFacet развернут по адресу:", diamondLoupeFacetAddress);

  // c. Развертываем OwnershipFacet
  console.log("\nc. Развертывание OwnershipFacet...");
  const OwnershipFacet = await hre.ethers.getContractFactory("OwnershipFacet");
  const ownershipFacet = await OwnershipFacet.connect(deployer).deploy();
  await ownershipFacet.waitForDeployment();
  const ownershipFacetAddress = await ownershipFacet.getAddress();
  console.log("   OwnershipFacet развернут по адресу:", ownershipFacetAddress);

  // d. Развертываем ERC20Facet
  console.log("\nd. Развертывание ERC20Facet...");
  const ERC20Facet = await hre.ethers.getContractFactory("ERC20Facet");
  const erc20Facet = await ERC20Facet.connect(deployer).deploy();
  await erc20Facet.waitForDeployment();
  const erc20FacetAddress = await erc20Facet.getAddress();
  console.log("   ERC20Facet развернут по адресу:", erc20FacetAddress);

  // e. Развертываем CXBTFacet
  console.log("\ne. Развертывание CXBTFacet...");
  const CXBTFacet = await hre.ethers.getContractFactory("CXBTFacet");
  const cxbtFacet = await CXBTFacet.connect(deployer).deploy();
  await cxbtFacet.waitForDeployment();
  const cxbtFacetAddress = await cxbtFacet.getAddress();
  console.log("   CXBTFacet развернут по адресу:", cxbtFacetAddress);

  // ==================== Шаг 2: Развертывание Diamond ====================

  console.log("\n--- Развертывание Diamond (Proxy) ---");

  // f. Развертываем Diamond контракт (прокси)
  console.log("\nf. Развертывание Diamond контракта...");
  const Diamond = await hre.ethers.getContractFactory("Diamond");
  const diamond = await Diamond.connect(deployer).deploy(
    deployer.address,      // _contractOwner
    diamondCutFacetAddress, // _diamondCutFacet
    diamondLoupeFacetAddress // _diamondLoupeFacet
  );
  await diamond.waitForDeployment();
  const diamondAddress = await diamond.getAddress();
  console.log("   Diamond развернут по адресу:", diamondAddress);

  // ==================== Шаг 3: Добавление Facets к Diamond ====================

  console.log("\n--- Добавление Facets к Diamond ---");

  // Создаем интерфейсы для работы с Diamond
  const diamondCutFacetContract = await hre.ethers.getContractAt("IDiamondCut", diamondAddress);

  // Получаем селекторы функций для каждого facet
  console.log("\nПолучение селекторов функций...");

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

  // g. Используем diamondCut для добавления всех facets к Diamond
  console.log("\ng. Добавление facets через diamondCut...");

  // Добавляем OwnershipFacet
  console.log("   Добавление OwnershipFacet...");
  const ownershipCut = [{
    facetAddress: ownershipFacetAddress,
    action: 0, // Add
    functionSelectors: ownershipSelectors
  }];

  await diamondCutFacetContract.connect(deployer).diamondCut(ownershipCut, hre.ethers.ZeroAddress, "0x");
  console.log("   ✓ OwnershipFacet добавлен");

  // Добавляем ERC20Facet
  console.log("   Добавление ERC20Facet...");
  const erc20Cut = [{
    facetAddress: erc20FacetAddress,
    action: 0, // Add
    functionSelectors: erc20Selectors
  }];

  await diamondCutFacetContract.connect(deployer).diamondCut(erc20Cut, hre.ethers.ZeroAddress, "0x");
  console.log("   ✓ ERC20Facet добавлен");

  // Добавляем CXBTFacet
  console.log("   Добавление CXBTFacet...");
  const cxbtCut = [{
    facetAddress: cxbtFacetAddress,
    action: 0, // Add
    functionSelectors: cxbtSelectors
  }];

  await diamondCutFacetContract.connect(deployer).diamondCut(cxbtCut, hre.ethers.ZeroAddress, "0x");
  console.log("   ✓ CXBTFacet добавлен");

  // ==================== Шаг 4: Инициализация Facets ====================

  console.log("\n--- Инициализация Facets ---");

  // Создаем интерфейсы для вызова функций через Diamond
  const erc20FacetInterface = await hre.ethers.getContractAt("ERC20Facet", diamondAddress);
  const cxbtFacetInterface = await hre.ethers.getContractAt("CXBTFacet", diamondAddress);

  // h. Инициализируем facets
  console.log("\nh. Инициализация facets...");

  // Инициализируем ERC20Facet
  console.log("   Инициализация ERC20Facet...");
  await erc20FacetInterface.connect(deployer).initERC20(
    tokenName,
    tokenSymbol,
    tokenDecimals,
    initialSupply
  );
  console.log("   ✓ ERC20Facet инициализирован");

  // Инициализируем CXBTFacet
  console.log("   Инициализация CXBTFacet...");
  await cxbtFacetInterface.connect(deployer).initCXBT(
    paidTokenAddress,
    unlockPercentage
  );
  console.log("   ✓ CXBTFacet инициализирован");

  // ==================== Шаг 5: Сохранение адреса Diamond в JSON файл ====================

  console.log("\n--- Сохранение адреса Diamond ---");

  const deploymentInfo = {
    network: hre.network.name,
    chainId: (await hre.ethers.provider.getNetwork()).chainId.toString(),
    diamondAddress: diamondAddress,
    deployer: deployer.address,
    facets: {
      DiamondCutFacet: diamondCutFacetAddress,
      DiamondLoupeFacet: diamondLoupeFacetAddress,
      OwnershipFacet: ownershipFacetAddress,
      ERC20Facet: erc20FacetAddress,
      CXBTFacet: cxbtFacetAddress
    },
    token: {
      name: tokenName,
      symbol: tokenSymbol,
      decimals: tokenDecimals,
      initialSupply: initialSupply.toString()
    },
    paidToken: paidTokenAddress,
    unlockPercentage: unlockPercentage,
    deployedAt: new Date().toISOString()
  };

  // Создаем директорию deployments если её нет
  const deploymentsDir = path.join(__dirname, "..", "deployments");
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir, { recursive: true });
  }

  // Сохраняем в файл
  const deploymentFile = path.join(deploymentsDir, `${hre.network.name}.json`);
  fs.writeFileSync(deploymentFile, JSON.stringify(deploymentInfo, null, 2));
  console.log("   ✓ Информация о деплое сохранена в:", deploymentFile);

  // ==================== Шаг 6: Вывод адресов и верификация ====================

  console.log("\n--- Адреса всех развернутых контрактов ---");
  console.log("DiamondCutFacet:   ", diamondCutFacetAddress);
  console.log("DiamondLoupeFacet: ", diamondLoupeFacetAddress);
  console.log("OwnershipFacet:    ", ownershipFacetAddress);
  console.log("ERC20Facet:        ", erc20FacetAddress);
  console.log("CXBTFacet:         ", cxbtFacetAddress);
  console.log("Diamond (Proxy):   ", diamondAddress);

  // Проверка состояния токена
  console.log("\n--- Проверка состояния токена ---");
  const name = await erc20FacetInterface.name();
  const symbol = await erc20FacetInterface.symbol();
  const decimals = await erc20FacetInterface.decimals();
  const totalSupply = await erc20FacetInterface.totalSupply();
  const deployerBalance = await erc20FacetInterface.balanceOf(deployer.address);

  console.log("Название:", name);
  console.log("Символ:", symbol);
  console.log("Десятичные знаки:", decimals);
  console.log("Общее количество токенов:", hre.ethers.formatUnits(totalSupply, tokenDecimals));
  console.log("Баланс деплоера:", hre.ethers.formatUnits(deployerBalance, tokenDecimals));

  // Проверка состояния CXBT
  console.log("\n--- Проверка состояния CXBT ---");
  const paidToken = await cxbtFacetInterface.getPaidToken();
  const unlockPct = await cxbtFacetInterface.getUnlockPercentage();
  const paused = await cxbtFacetInterface.paused();

  console.log("PAID токен:", paidToken);
  console.log("Процент разблокировки:", unlockPct / 100, "%");
  console.log("На паузе:", paused);

  // ==================== Шаг 7: Верификация Facets через DiamondLoupe ====================

  console.log("\n--- Верификация Facets через DiamondLoupe ---");

  const diamondLoupe = await hre.ethers.getContractAt("IDiamondLoupe", diamondAddress);

  // Получаем все facets
  const facets = await diamondLoupe.facets();
  console.log("\nКоличество facets:", facets.length);

  for (let i = 0; i < facets.length; i++) {
    const facet = facets[i];
    console.log(`\nFacet #${i + 1}:`);
    console.log("  Адрес:", facet.facetAddress);
    console.log("  Количество функций:", facet.functionSelectors.length);

    // Определяем имя facet по адресу
    let facetName = "Unknown";
    if (facet.facetAddress.toLowerCase() === diamondCutFacetAddress.toLowerCase()) {
      facetName = "DiamondCutFacet";
    } else if (facet.facetAddress.toLowerCase() === diamondLoupeFacetAddress.toLowerCase()) {
      facetName = "DiamondLoupeFacet";
    } else if (facet.facetAddress.toLowerCase() === ownershipFacetAddress.toLowerCase()) {
      facetName = "OwnershipFacet";
    } else if (facet.facetAddress.toLowerCase() === erc20FacetAddress.toLowerCase()) {
      facetName = "ERC20Facet";
    } else if (facet.facetAddress.toLowerCase() === cxbtFacetAddress.toLowerCase()) {
      facetName = "CXBTFacet";
    }
    console.log("  Имя:", facetName);
  }

  // Получаем все адреса facets
  const facetAddresses = await diamondLoupe.facetAddresses();
  console.log("\nАдреса всех facets:", facetAddresses);

  // Проверяем, что все facets добавлены
  console.log("\n--- Проверка facets ---");
  const expectedFacets = [
    { name: "DiamondCutFacet", address: diamondCutFacetAddress },
    { name: "DiamondLoupeFacet", address: diamondLoupeFacetAddress },
    { name: "OwnershipFacet", address: ownershipFacetAddress },
    { name: "ERC20Facet", address: erc20FacetAddress },
    { name: "CXBTFacet", address: cxbtFacetAddress }
  ];

  for (const expected of expectedFacets) {
    const found = facetAddresses.some(addr => addr.toLowerCase() === expected.address.toLowerCase());
    if (found) {
      console.log(`✓ ${expected.name} (${expected.address}) найден в Diamond`);
    } else {
      console.log(`✗ ${expected.name} (${expected.address}) НЕ найден в Diamond!`);
    }
  }

  // Проверка владельца
  console.log("\n--- Проверка владельца ---");
  const ownerInterface = await hre.ethers.getContractAt("OwnershipFacet", diamondAddress);
  const owner = await ownerInterface.owner();
  console.log("Владелец Diamond:", owner);
  if (owner.toLowerCase() === deployer.address.toLowerCase()) {
    console.log("✓ Деплоер является владельцем");
  } else {
    console.log("✗ Деплоер НЕ является владельцем!");
  }

  console.log("\n--- Деплой Diamond Proxy завершен успешно ---");
}

// Запуск скрипта и обработка ошибок
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
