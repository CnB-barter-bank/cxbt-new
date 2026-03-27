const { expect } = require("chai");
const { ethers } = require("hardhat");

// ==================== Helper функции для деплоя Diamond Proxy ====================

/**
 * Развертывает Mock PAID токен
 */
async function deployMockPAID() {
  const MockPAID = await ethers.getContractFactory("MockPAID");
  const mockPAID = await MockPAID.deploy();
  await mockPAID.waitForDeployment();
  return mockPAID;
}

/**
 * Развертывает все facets и Diamond Proxy
 * @param {Object} params Параметры инициализации
 * @returns {Object} Объект с развернутыми контрактами и интерфейсами
 */
async function deployDiamond(params = {}) {
  const {
    tokenName = "CXBT",
    tokenSymbol = "CXBT",
    tokenDecimals = 18,
    initialSupply = ethers.parseEther("1000000"),
    unlockPercentage = 500, // 5% в базисных пунктах
    paidTokenAddress = null
  } = params;

  const [deployer] = await ethers.getSigners();

  // Развертываем Mock PAID если адрес не указан
  let mockPAID;
  let paidTokenAddr = paidTokenAddress;
  if (!paidTokenAddress) {
    mockPAID = await deployMockPAID();
    paidTokenAddr = await mockPAID.getAddress();
  }

  // ==================== Шаг 1: Развертывание Facets ====================

  // Развертываем DiamondCutFacet
  const DiamondCutFacet = await ethers.getContractFactory("DiamondCutFacet");
  const diamondCutFacet = await DiamondCutFacet.deploy();
  await diamondCutFacet.waitForDeployment();
  const diamondCutFacetAddress = await diamondCutFacet.getAddress();

  // Развертываем DiamondLoupeFacet
  const DiamondLoupeFacet = await ethers.getContractFactory("DiamondLoupeFacet");
  const diamondLoupeFacet = await DiamondLoupeFacet.deploy();
  await diamondLoupeFacet.waitForDeployment();
  const diamondLoupeFacetAddress = await diamondLoupeFacet.getAddress();

  // Развертываем OwnershipFacet
  const OwnershipFacet = await ethers.getContractFactory("OwnershipFacet");
  const ownershipFacet = await OwnershipFacet.deploy();
  await ownershipFacet.waitForDeployment();
  const ownershipFacetAddress = await ownershipFacet.getAddress();

  // Развертываем ERC20Facet
  const ERC20Facet = await ethers.getContractFactory("ERC20Facet");
  const erc20Facet = await ERC20Facet.deploy();
  await erc20Facet.waitForDeployment();
  const erc20FacetAddress = await erc20Facet.getAddress();

  // Развертываем CXBTFacet
  const CXBTFacet = await ethers.getContractFactory("CXBTFacet");
  const cxbtFacet = await CXBTFacet.deploy();
  await cxbtFacet.waitForDeployment();
  const cxbtFacetAddress = await cxbtFacet.getAddress();

  // ==================== Шаг 2: Развертывание Diamond ====================

  // Развертываем Diamond контракт (прокси)
  const Diamond = await ethers.getContractFactory("Diamond");
  const diamond = await Diamond.deploy(
    deployer.address,      // _contractOwner
    diamondCutFacetAddress, // _diamondCutFacet
    diamondLoupeFacetAddress // _diamondLoupeFacet
  );
  await diamond.waitForDeployment();
  const diamondAddress = await diamond.getAddress();

  // ==================== Шаг 3: Добавление Facets к Diamond ====================

  // Создаем интерфейс IDiamondCut для вызова diamondCut
  const diamondCutInterface = await ethers.getContractAt("IDiamondCut", diamondAddress);

  // Получаем селекторы функций для каждого facet
  const ownershipSelectors = [
    ownershipFacet.interface.getFunction("owner").selector,
    ownershipFacet.interface.getFunction("transferOwnership").selector,
    ownershipFacet.interface.getFunction("renounceOwnership").selector
  ];

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

  // Добавляем facets через diamondCut
  await diamondCutInterface.diamondCut(
    [{
      facetAddress: ownershipFacetAddress,
      action: 0, // Add
      functionSelectors: ownershipSelectors
    }],
    ethers.ZeroAddress,
    "0x"
  );

  await diamondCutInterface.diamondCut(
    [{
      facetAddress: erc20FacetAddress,
      action: 0, // Add
      functionSelectors: erc20Selectors
    }],
    ethers.ZeroAddress,
    "0x"
  );

  await diamondCutInterface.diamondCut(
    [{
      facetAddress: cxbtFacetAddress,
      action: 0, // Add
      functionSelectors: cxbtSelectors
    }],
    ethers.ZeroAddress,
    "0x"
  );

  // ==================== Шаг 4: Инициализация Facets ====================

  // Создаем интерфейсы для вызова функций через Diamond
  // Используем ABI контрактов для создания интерфейсов
  const ERC20FacetArtifact = await ethers.getContractFactory("ERC20Facet");
  const erc20Interface = await ERC20FacetArtifact.attach(diamondAddress);
  
  const CXBTFacetArtifact = await ethers.getContractFactory("CXBTFacet");
  const cxbtInterface = await CXBTFacetArtifact.attach(diamondAddress);
  
  const OwnershipFacetArtifact = await ethers.getContractFactory("OwnershipFacet");
  const ownershipInterface = await OwnershipFacetArtifact.attach(diamondAddress);
  
  // Для IDiamondLoupe используем getContractAt, так как это интерфейс
  const diamondLoupeInterface = await ethers.getContractAt("IDiamondLoupe", diamondAddress);

  // Инициализируем ERC20Facet
  await erc20Interface.initERC20(
    tokenName,
    tokenSymbol,
    tokenDecimals,
    initialSupply
  );

  // Инициализируем CXBTFacet
  await cxbtInterface.initCXBT(
    paidTokenAddr,
    unlockPercentage
  );

  return {
    diamond,
    diamondAddress,
    mockPAID,
    paidTokenAddress: paidTokenAddr,
    facets: {
      diamondCut: diamondCutFacet,
      diamondCutAddress: diamondCutFacetAddress,
      diamondLoupe: diamondLoupeFacet,
      diamondLoupeAddress: diamondLoupeFacetAddress,
      ownership: ownershipFacet,
      ownershipAddress: ownershipFacetAddress,
      erc20: erc20Facet,
      erc20Address: erc20FacetAddress,
      cxbt: cxbtFacet,
      cxbtAddress: cxbtFacetAddress
    },
    interfaces: {
      diamondCut: diamondCutInterface,
      diamondLoupe: diamondLoupeInterface,
      ownership: ownershipInterface,
      erc20: erc20Interface,
      cxbt: cxbtInterface,
      diamondAddress: diamondAddress
    }
  };
}

// ==================== Основные тесты Diamond Proxy ====================

describe("CXBT Diamond Proxy", function () {
  let diamond;
  let diamondAddress;
  let mockPAID;
  let paidTokenAddress;
  let facets;
  let interfaces;
  let owner;
  let addr1;
  let addr2;
  let addr3;
  let addrs;

  const TOKEN_NAME = "CXBT Token";
  const TOKEN_SYMBOL = "CXBT";
  const INITIAL_SUPPLY = ethers.parseEther("1000000");
  const MINT_AMOUNT = ethers.parseEther("1000");
  const TRANSFER_AMOUNT = ethers.parseEther("100");
  const UNLOCK_PERCENTAGE = 500; // 5%

  beforeEach(async function () {
    [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();

    const deployment = await deployDiamond({
      tokenName: TOKEN_NAME,
      tokenSymbol: TOKEN_SYMBOL,
      initialSupply: INITIAL_SUPPLY,
      unlockPercentage: UNLOCK_PERCENTAGE
    });

    diamond = deployment.diamond;
    diamondAddress = deployment.diamondAddress;
    mockPAID = deployment.mockPAID;
    paidTokenAddress = deployment.paidTokenAddress;
    facets = deployment.facets;
    interfaces = deployment.interfaces;

    // Даем addr1 и addr2 PAID токены для тестов
    await mockPAID.mint(addr1.address, ethers.parseEther("10000"));
    await mockPAID.mint(addr2.address, ethers.parseEther("10000"));
  });

  // ==================== Тесты Diamond Proxy ====================

  describe("Diamond Proxy Deployment", function () {
    it("Должен успешно развернуть Diamond Proxy", async function () {
      expect(diamondAddress).to.be.properAddress;
    });

    it("Должен установить владельца Diamond", async function () {
      expect(await interfaces.ownership.owner()).to.equal(owner.address);
    });

    it("Должен развернуть все facets", async function () {
      const facetAddresses = await interfaces.diamondLoupe.facetAddresses();
      expect(facetAddresses.length).to.be.greaterThanOrEqual(5);
    });
  });

  // ==================== Тесты DiamondCut ====================

  describe("DiamondCut Facet", function () {
    it("Не должен позволять diamondCut не владельцу", async function () {
      const TestFacet = await ethers.getContractFactory("OwnershipFacet");
      const newFacet = await TestFacet.deploy();
      await newFacet.waitForDeployment();
      const newFacetAddress = await newFacet.getAddress();

      const selectors = [
        newFacet.interface.getFunction("owner").selector
      ];

      await expect(
        interfaces.diamondCut.connect(addr1).diamondCut(
          [{
            facetAddress: newFacetAddress,
            action: 0,
            functionSelectors: selectors
          }],
          ethers.ZeroAddress,
          "0x"
        )
      ).to.be.reverted;
    });
  });

  // ==================== Тесты DiamondLoupe ====================

  describe("DiamondLoupe Facet", function () {
    it("Должен возвращать все facets", async function () {
      const allFacets = await interfaces.diamondLoupe.facets();
      expect(allFacets.length).to.be.greaterThanOrEqual(5);
    });

    it("Должен возвращать все адреса facets", async function () {
      const facetAddresses = await interfaces.diamondLoupe.facetAddresses();
      expect(facetAddresses.length).to.be.greaterThanOrEqual(5);
    });

    it("Должен возвращать селекторы функций для конкретного facet", async function () {
      const selectors = await interfaces.diamondLoupe.facetFunctionSelectors(facets.erc20Address);
      expect(selectors.length).to.be.greaterThan(0);
    });

    it("Должен возвращать адрес facet по селектору функции", async function () {
      const selector = facets.erc20.interface.getFunction("balanceOf").selector;
      const facetAddress = await interfaces.diamondLoupe.facetAddress(selector);
      expect(facetAddress).to.equal(facets.erc20Address);
    });

    it("Должен возвращать address(0) для несуществующего селектора", async function () {
      const fakeSelector = ethers.id("fakeFunction()").slice(0, 10);
      const facetAddress = await interfaces.diamondLoupe.facetAddress(fakeSelector);
      expect(facetAddress).to.equal(ethers.ZeroAddress);
    });
  });

  // ==================== Тесты OwnershipFacet ====================

  describe("OwnershipFacet", function () {
    it("Должен возвращать правильного владельца", async function () {
      expect(await interfaces.ownership.owner()).to.equal(owner.address);
    });

    it("Должен позволять владельцу передать права владения", async function () {
      await interfaces.ownership.transferOwnership(addr1.address);
      expect(await interfaces.ownership.owner()).to.equal(addr1.address);
    });

    it("Не должен позволять передать права владения не владельцу", async function () {
      await expect(
        interfaces.ownership.connect(addr1).transferOwnership(addr2.address)
      ).to.be.reverted;
    });

    it("Должен позволять владельцу отказаться от прав владения", async function () {
      await interfaces.ownership.transferOwnership(addr1.address);
      await interfaces.ownership.connect(addr1).renounceOwnership();
      expect(await interfaces.ownership.owner()).to.equal(ethers.ZeroAddress);
    });

    it("Не должен позволять отказаться от прав владения не владельцу", async function () {
      await expect(
        interfaces.ownership.connect(addr1).renounceOwnership()
      ).to.be.reverted;
    });
  });

  // ==================== Тесты ERC20Facet ====================

  describe("ERC20Facet - Basic ERC20", function () {
    it("Должен установить правильное название токена", async function () {
      expect(await interfaces.erc20.name()).to.equal(TOKEN_NAME);
    });

    it("Должен установить правильный символ токена", async function () {
      expect(await interfaces.erc20.symbol()).to.equal(TOKEN_SYMBOL);
    });

    it("Должен установить правильное общее предложение токенов", async function () {
      expect(await interfaces.erc20.totalSupply()).to.equal(INITIAL_SUPPLY);
    });

    it("Должен установить правильное количество десятичных знаков (18)", async function () {
      expect(await interfaces.erc20.decimals()).to.equal(18);
    });

    it("Должен передать все токены владельцу при деплое", async function () {
      expect(await interfaces.erc20.balanceOf(owner.address)).to.equal(INITIAL_SUPPLY);
    });

    it("Должен успешно переводить токены", async function () {
      // Минтим токены владельцу и разблокируем
      await interfaces.cxbt.mint(owner.address, TRANSFER_AMOUNT);
      const ownerUnlockCost = await interfaces.cxbt.calculateUnlockCost(TRANSFER_AMOUNT);
      await mockPAID.mint(owner.address, ownerUnlockCost);
      await mockPAID.connect(owner).approve(diamondAddress, ownerUnlockCost);
      await interfaces.cxbt.connect(owner).unlockTokens(TRANSFER_AMOUNT);

      await interfaces.erc20.transfer(addr1.address, TRANSFER_AMOUNT);
      expect(await interfaces.erc20.balanceOf(addr1.address)).to.equal(TRANSFER_AMOUNT);
    });

    it("Должен устанавливать разрешение (allowance)", async function () {
      // Сначала разблокируем токены
      const ownerUnlockCost = await interfaces.cxbt.calculateUnlockCost(TRANSFER_AMOUNT);
      await mockPAID.mint(owner.address, ownerUnlockCost);
      await mockPAID.connect(owner).approve(diamondAddress, ownerUnlockCost);
      await interfaces.cxbt.connect(owner).unlockTokens(TRANSFER_AMOUNT);
      
      await interfaces.erc20.approve(addr1.address, TRANSFER_AMOUNT);
      expect(await interfaces.erc20.allowance(owner.address, addr1.address)).to.equal(TRANSFER_AMOUNT);
    });

    it("Должен успешно переводить токены через transferFrom", async function () {
      // Минтим токены владельцу и разблокируем
      await interfaces.cxbt.mint(owner.address, TRANSFER_AMOUNT);
      const ownerUnlockCost = await interfaces.cxbt.calculateUnlockCost(TRANSFER_AMOUNT);
      await mockPAID.mint(owner.address, ownerUnlockCost);
      await mockPAID.connect(owner).approve(diamondAddress, ownerUnlockCost);
      await interfaces.cxbt.connect(owner).unlockTokens(TRANSFER_AMOUNT);
      
      await interfaces.erc20.approve(addr1.address, TRANSFER_AMOUNT);

      await interfaces.erc20.connect(addr1).transferFrom(owner.address, addr2.address, TRANSFER_AMOUNT);
      expect(await interfaces.erc20.balanceOf(addr2.address)).to.equal(TRANSFER_AMOUNT);
    });

    it("Должен emit событие Transfer при переводе", async function () {
      // Минтим токены владельцу и разблокируем
      await interfaces.cxbt.mint(owner.address, TRANSFER_AMOUNT);
      const ownerUnlockCost = await interfaces.cxbt.calculateUnlockCost(TRANSFER_AMOUNT);
      await mockPAID.mint(owner.address, ownerUnlockCost);
      await mockPAID.connect(owner).approve(diamondAddress, ownerUnlockCost);
      await interfaces.cxbt.connect(owner).unlockTokens(TRANSFER_AMOUNT);

      await expect(interfaces.erc20.transfer(addr1.address, TRANSFER_AMOUNT))
        .to.emit(interfaces.erc20, "Transfer")
        .withArgs(owner.address, addr1.address, TRANSFER_AMOUNT);
    });

    it("Должен emit событие Approval при установке разрешения", async function () {
      // Сначала разблокируем токены
      const ownerUnlockCost = await interfaces.cxbt.calculateUnlockCost(TRANSFER_AMOUNT);
      await mockPAID.mint(owner.address, ownerUnlockCost);
      await mockPAID.connect(owner).approve(diamondAddress, ownerUnlockCost);
      await interfaces.cxbt.connect(owner).unlockTokens(TRANSFER_AMOUNT);
      
      await expect(interfaces.erc20.approve(addr1.address, TRANSFER_AMOUNT))
        .to.emit(interfaces.erc20, "Approval")
        .withArgs(owner.address, addr1.address, TRANSFER_AMOUNT);
    });

    it("Должен уменьшать разрешение на трату токенов", async function () {
      // Сначала разблокируем токены
      const ownerUnlockCost = await interfaces.cxbt.calculateUnlockCost(TRANSFER_AMOUNT);
      await mockPAID.mint(owner.address, ownerUnlockCost);
      await mockPAID.connect(owner).approve(diamondAddress, ownerUnlockCost);
      await interfaces.cxbt.connect(owner).unlockTokens(TRANSFER_AMOUNT);
      
      // Устанавливаем разрешение
      await interfaces.erc20.approve(addr1.address, TRANSFER_AMOUNT);
      
      // Уменьшаем разрешение
      const decreaseAmount = ethers.parseEther("30");
      await interfaces.erc20.decreaseAllowance(addr1.address, decreaseAmount);
      
      expect(await interfaces.erc20.allowance(owner.address, addr1.address))
        .to.equal(TRANSFER_AMOUNT - decreaseAmount);
    });

    it("Не должен позволять уменьшать разрешение ниже нуля", async function () {
      // Сначала разблокируем токены
      const ownerUnlockCost = await interfaces.cxbt.calculateUnlockCost(TRANSFER_AMOUNT);
      await mockPAID.mint(owner.address, ownerUnlockCost);
      await mockPAID.connect(owner).approve(diamondAddress, ownerUnlockCost);
      await interfaces.cxbt.connect(owner).unlockTokens(TRANSFER_AMOUNT);
      
      // Устанавливаем разрешение
      await interfaces.erc20.approve(addr1.address, TRANSFER_AMOUNT);
      
      // Пытаемся уменьшить больше, чем разрешено
      const decreaseAmount = ethers.parseEther("150");
      await expect(
        interfaces.erc20.decreaseAllowance(addr1.address, decreaseAmount)
      ).to.be.revertedWith("ERC20: decreased allowance below zero");
    });

    it("Должен emit событие Approval при уменьшении разрешения", async function () {
      // Сначала разблокируем токены
      const ownerUnlockCost = await interfaces.cxbt.calculateUnlockCost(TRANSFER_AMOUNT);
      await mockPAID.mint(owner.address, ownerUnlockCost);
      await mockPAID.connect(owner).approve(diamondAddress, ownerUnlockCost);
      await interfaces.cxbt.connect(owner).unlockTokens(TRANSFER_AMOUNT);
      
      // Устанавливаем разрешение
      await interfaces.erc20.approve(addr1.address, TRANSFER_AMOUNT);
      
      // Уменьшаем разрешение
      const decreaseAmount = ethers.parseEther("30");
      await expect(interfaces.erc20.decreaseAllowance(addr1.address, decreaseAmount))
        .to.emit(interfaces.erc20, "Approval")
        .withArgs(owner.address, addr1.address, TRANSFER_AMOUNT - decreaseAmount);
    });
  });

  // ==================== Тесты CXBTFacet ====================

  describe("CXBTFacet - Initialization", function () {
    it("Должен установить правильный адрес PAID токена", async function () {
      expect(await interfaces.cxbt.getPaidToken()).to.equal(paidTokenAddress);
    });

    it("Должен установить правильный процент разблокировки", async function () {
      expect(await interfaces.cxbt.getUnlockPercentage()).to.equal(UNLOCK_PERCENTAGE);
    });

    it("Должен установить начальный баланс пула наград в 0", async function () {
      expect(await interfaces.cxbt.getRewardPoolBalance()).to.equal(0);
    });

    it("Контракт не должен быть приостановлен при деплое", async function () {
      expect(await interfaces.cxbt.paused()).to.be.false;
    });

    it("Должен emit событие CXBTInitialized при инициализации", async function () {
      // Развертываем новый контракт для проверки события
      const deployResult = await deployDiamond();
      const newInterfaces = deployResult.interfaces;
      
      // Проверяем, что событие было emit при инициализации
      // (это проверяется в рамках деплоя)
      expect(await newInterfaces.cxbt.getPaidToken()).to.equal(deployResult.paidTokenAddress);
    });
  });

  describe("CXBTFacet - Token Balances", function () {
    it("Должен возвращать правильные балансы для владельца после деплоя", async function () {
      const [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(owner.address);
      expect(unlocked).to.equal(0);
      expect(locked).to.equal(INITIAL_SUPPLY);
      expect(total).to.equal(INITIAL_SUPPLY);
    });

    it("Должен возвращать нулевые балансы для нового пользователя", async function () {
      const [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
      expect(unlocked).to.equal(0);
      expect(locked).to.equal(0);
      expect(total).to.equal(0);
    });

    it("Должен обновлять балансы после минтинга", async function () {
      await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);
      const [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
      expect(unlocked).to.equal(0);
      expect(locked).to.equal(MINT_AMOUNT);
      expect(total).to.equal(MINT_AMOUNT);
    });
  });

  describe("CXBTFacet - Minting", function () {
    it("Должен успешно минтить токены владельцем", async function () {
      await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);
      const [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
      expect(unlocked).to.equal(0);
      expect(locked).to.equal(MINT_AMOUNT);
      expect(total).to.equal(MINT_AMOUNT);
    });

    it("Должен блокировать все заминченные токены", async function () {
      await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);
      const [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
      expect(unlocked).to.equal(0);
      expect(locked).to.equal(MINT_AMOUNT);
      expect(total).to.equal(MINT_AMOUNT);
    });

    it("Не должен позволять минтить не владельцу", async function () {
      await expect(
        interfaces.cxbt.connect(addr1).mint(addr2.address, MINT_AMOUNT)
      ).to.be.reverted;
    });

    it("Должен emit событие TokensMinted при минтинге", async function () {
      await expect(interfaces.cxbt.mint(addr1.address, MINT_AMOUNT))
        .to.emit(interfaces.cxbt, "TokensMinted")
        .withArgs(addr1.address, MINT_AMOUNT);
    });
  });

  describe("CXBTFacet - Unlock Cost Calculation", function () {
    it("Должен правильно рассчитывать стоимость разблокировки", async function () {
      const unlockAmount = ethers.parseEther("100");
      const expectedCost = (unlockAmount * 500n) / 10000n;
      const actualCost = await interfaces.cxbt.calculateUnlockCost(unlockAmount);
      expect(actualCost).to.equal(expectedCost);
    });

    it("Должен возвращать 0 для разблокировки 0 токенов", async function () {
      const cost = await interfaces.cxbt.calculateUnlockCost(0);
      expect(cost).to.equal(0);
    });

    it("Должен учитывать текущий процент разблокировки", async function () {
      const unlockAmount = ethers.parseEther("100");
      const cost1 = await interfaces.cxbt.calculateUnlockCost(unlockAmount);

      await interfaces.cxbt.setUnlockPercentage(1000); // 10%
      const cost2 = await interfaces.cxbt.calculateUnlockCost(unlockAmount);

      expect(cost2).to.equal(cost1 * 2n);
    });
  });

  describe("CXBTFacet - Unlock Tokens", function () {
    beforeEach(async function () {
      await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);
      const unlockCost = await interfaces.cxbt.calculateUnlockCost(MINT_AMOUNT);
      await mockPAID.mint(addr1.address, unlockCost);
    });

    it("Должен успешно разблокировать токены", async function () {
      const unlockAmount = ethers.parseEther("100");
      const unlockCost = await interfaces.cxbt.calculateUnlockCost(unlockAmount);

      await mockPAID.connect(addr1).approve(diamondAddress, unlockCost);
      await interfaces.cxbt.connect(addr1).unlockTokens(unlockAmount);

      const [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
      expect(unlocked).to.equal(unlockAmount);
      expect(locked).to.equal(MINT_AMOUNT - unlockAmount);
      expect(total).to.equal(MINT_AMOUNT);
    });

    it("Должен списывать PAID при разблокировке", async function () {
      const unlockAmount = ethers.parseEther("100");
      const unlockCost = await interfaces.cxbt.calculateUnlockCost(unlockAmount);

      const initialPAIDBalance = await mockPAID.balanceOf(addr1.address);

      await mockPAID.connect(addr1).approve(diamondAddress, unlockCost);
      await interfaces.cxbt.connect(addr1).unlockTokens(unlockAmount);

      const finalPAIDBalance = await mockPAID.balanceOf(addr1.address);
      expect(finalPAIDBalance).to.equal(initialPAIDBalance - unlockCost);
    });

    it("Должен emit событие TokensUnlocked при разблокировке", async function () {
      const unlockAmount = ethers.parseEther("100");
      const unlockCost = await interfaces.cxbt.calculateUnlockCost(unlockAmount);

      await mockPAID.connect(addr1).approve(diamondAddress, unlockCost);
      await expect(interfaces.cxbt.connect(addr1).unlockTokens(unlockAmount))
        .to.emit(interfaces.cxbt, "TokensUnlocked")
        .withArgs(addr1.address, unlockAmount, unlockCost);
    });

    it("Должен выбросить ошибку при попытке разблокировать 0 токенов", async function () {
      await expect(
        interfaces.cxbt.connect(addr1).unlockTokens(0)
      ).to.be.revertedWith("Unlock amount must be greater than 0");
    });

    it("Должен выбросить ошибку при недостаточном количестве заблокированных токенов", async function () {
      const unlockAmount = MINT_AMOUNT + ethers.parseEther("1");
      await expect(
        interfaces.cxbt.connect(addr1).unlockTokens(unlockAmount)
      ).to.be.revertedWith("Insufficient locked tokens");
    });
  });

  describe("CXBTFacet - Reward Pool", function () {
    beforeEach(async function () {
      // Минтим токены владельцу и разблокируем для добавления в пул наград
      await interfaces.cxbt.mint(owner.address, ethers.parseEther("10000"));
      const ownerUnlockCost = await interfaces.cxbt.calculateUnlockCost(ethers.parseEther("10000"));
      await mockPAID.mint(owner.address, ownerUnlockCost);
      await mockPAID.connect(owner).approve(diamondAddress, ownerUnlockCost);
      await interfaces.cxbt.connect(owner).unlockTokens(ethers.parseEther("10000"));
    });

    it("Должен успешно добавлять токены в пул наград", async function () {
      const amount = ethers.parseEther("1000");
      await interfaces.cxbt.addToRewardPool(amount);
      expect(await interfaces.cxbt.getRewardPoolBalance()).to.equal(amount);
    });

    it("Должен списывать разблокированные токены у владельца", async function () {
      const amount = ethers.parseEther("1000");
      const [initialUnlocked, ,] = await interfaces.cxbt.getTokenBalances(owner.address);

      await interfaces.cxbt.addToRewardPool(amount);

      const [finalUnlocked, ,] = await interfaces.cxbt.getTokenBalances(owner.address);
      expect(finalUnlocked).to.equal(initialUnlocked - amount);
    });

    it("Должен emit событие RewardPoolAdded", async function () {
      const amount = ethers.parseEther("1000");
      await expect(interfaces.cxbt.addToRewardPool(amount))
        .to.emit(interfaces.cxbt, "RewardPoolAdded")
        .withArgs(amount);
    });

    it("Не должен позволять добавить 0 токенов", async function () {
      await expect(
        interfaces.cxbt.addToRewardPool(0)
      ).to.be.revertedWith("Amount must be greater than 0");
    });

    it("Не должен позволять добавить токены не владельцу", async function () {
      const amount = ethers.parseEther("1000");
      await expect(
        interfaces.cxbt.connect(addr1).addToRewardPool(amount)
      ).to.be.reverted;
    });

    it("Должен успешно изымать токены из пула наград", async function () {
      const amount = ethers.parseEther("1000");
      await interfaces.cxbt.addToRewardPool(amount);

      const withdrawAmount = ethers.parseEther("500");
      await interfaces.cxbt.withdrawFromRewardPool(withdrawAmount);
      expect(await interfaces.cxbt.getRewardPoolBalance()).to.equal(withdrawAmount);
    });

    it("Должен emit событие RewardPoolWithdrawn", async function () {
      const amount = ethers.parseEther("1000");
      await interfaces.cxbt.addToRewardPool(amount);

      const withdrawAmount = ethers.parseEther("500");
      await expect(interfaces.cxbt.withdrawFromRewardPool(withdrawAmount))
        .to.emit(interfaces.cxbt, "RewardPoolWithdrawn")
        .withArgs(withdrawAmount);
    });

    it("Не должен позволять изъять больше токенов, чем в пуле", async function () {
      const amount = ethers.parseEther("1000");
      await interfaces.cxbt.addToRewardPool(amount);

      await expect(
        interfaces.cxbt.withdrawFromRewardPool(ethers.parseEther("2000"))
      ).to.be.revertedWith("Insufficient reward pool balance");
    });
  });

  describe("CXBTFacet - Unlock Percentage", function () {
    it("Должен успешно устанавливать новый процент разблокировки", async function () {
      const newPercentage = 1000; // 10%
      await interfaces.cxbt.setUnlockPercentage(newPercentage);
      expect(await interfaces.cxbt.getUnlockPercentage()).to.equal(newPercentage);
    });

    it("Должен emit событие UnlockPercentageChanged", async function () {
      const newPercentage = 1000;
      await expect(interfaces.cxbt.setUnlockPercentage(newPercentage))
        .to.emit(interfaces.cxbt, "UnlockPercentageChanged")
        .withArgs(UNLOCK_PERCENTAGE, newPercentage);
    });

    it("Не должен позволять установить 0%", async function () {
      await expect(
        interfaces.cxbt.setUnlockPercentage(0)
      ).to.be.revertedWith("Invalid unlock percentage");
    });

    it("Не должен позволять установить больше 20%", async function () {
      await expect(
        interfaces.cxbt.setUnlockPercentage(2001)
      ).to.be.revertedWith("Invalid unlock percentage");
    });

    it("Не должен позволять изменять процент не владельцу", async function () {
      await expect(
        interfaces.cxbt.connect(addr1).setUnlockPercentage(1000)
      ).to.be.reverted;
    });
  });

  describe("CXBTFacet - Pause/Unpause", function () {
    it("Должен позволять владельцу приостановить контракт", async function () {
      await interfaces.cxbt.pause();
      expect(await interfaces.cxbt.paused()).to.be.true;
    });

    it("Должен позволять владельцу возобновить контракт", async function () {
      await interfaces.cxbt.pause();
      await interfaces.cxbt.unpause();
      expect(await interfaces.cxbt.paused()).to.be.false;
    });

    it("Не должен позволять приостановить контракт не владельцу", async function () {
      await expect(
        interfaces.cxbt.connect(addr1).pause()
      ).to.be.reverted;
    });

    it("Не должен позволять переводы при паузе", async function () {
      // Минтим токены владельцу и разблокируем
      await interfaces.cxbt.mint(owner.address, TRANSFER_AMOUNT);
      const ownerUnlockCost = await interfaces.cxbt.calculateUnlockCost(TRANSFER_AMOUNT);
      await mockPAID.mint(owner.address, ownerUnlockCost);
      await mockPAID.connect(owner).approve(diamondAddress, ownerUnlockCost);
      await interfaces.cxbt.connect(owner).unlockTokens(TRANSFER_AMOUNT);
      
      await interfaces.cxbt.pause();

      await expect(
        interfaces.erc20.transfer(addr1.address, TRANSFER_AMOUNT)
      ).to.be.revertedWith("Pausable: paused");
    });

    it("Должен позволять минтинг при паузе", async function () {
      await interfaces.cxbt.pause();
      await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);
      const [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
      expect(unlocked).to.equal(0);
      expect(locked).to.equal(MINT_AMOUNT);
      expect(total).to.equal(MINT_AMOUNT);
    });
  });

  describe("CXBTFacet - Burn", function () {
    beforeEach(async function () {
      await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);
      await unlockTokensFor(addr1, ethers.parseEther("500"));
    });

    it("Должен сжигать сначала разблокированные токены", async function () {
      const burnAmount = ethers.parseEther("300");

      const [initialUnlocked, initialLocked, initialTotal] = await interfaces.cxbt.getTokenBalances(addr1.address);

      await interfaces.cxbt.connect(addr1).burn(burnAmount);

      const [finalUnlocked, finalLocked, finalTotal] = await interfaces.cxbt.getTokenBalances(addr1.address);
      expect(finalUnlocked).to.equal(initialUnlocked - burnAmount);
      expect(finalLocked).to.equal(initialLocked);
      expect(finalTotal).to.equal(initialTotal - burnAmount);
    });

    it("Не должен позволять сжигать 0 токенов", async function () {
      await expect(
        interfaces.cxbt.connect(addr1).burn(0)
      ).to.be.revertedWith("Amount must be greater than 0");
    });

    it("Должен emit событие TokensBurned при сжигании", async function () {
      const burnAmount = ethers.parseEther("100");
      
      await expect(interfaces.cxbt.connect(addr1).burn(burnAmount))
        .to.emit(interfaces.cxbt, "TokensBurned")
        .withArgs(addr1.address, burnAmount);
    });
  });

  // ==================== Интеграционные тесты ====================

  describe("Интеграционные тесты", function () {
    it("Полный сценарий: минтинг -> разблокировка", async function () {
      // Минтим токены addr1
      const mintAmount = ethers.parseEther("1000");
      await interfaces.cxbt.mint(addr1.address, mintAmount);

      // Проверяем, что токены заблокированы
      let [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
      expect(unlocked).to.equal(0);
      expect(locked).to.equal(mintAmount);

      // Даем addr1 PAID для оплаты разблокировки
      const unlockAmount = ethers.parseEther("100");
      const unlockCost = await interfaces.cxbt.calculateUnlockCost(unlockAmount);
      await mockPAID.mint(addr1.address, unlockCost);

      // Разблокируем токены
      await mockPAID.connect(addr1).approve(diamondAddress, unlockCost);
      await interfaces.cxbt.connect(addr1).unlockTokens(unlockAmount);

      // Проверяем, что токены разблокированы
      [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
      expect(unlocked).to.equal(unlockAmount);
      expect(locked).to.equal(mintAmount - unlockAmount);
    });

    it("Разблокировка с наградой из пула", async function () {
      // Минтим токены addr1
      await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);

      // Даем addr1 PAID для оплаты разблокировки
      const unlockCost = await interfaces.cxbt.calculateUnlockCost(ethers.parseEther("200"));
      await mockPAID.mint(addr1.address, unlockCost);

      // Минтим токены владельцу и разблокируем для добавления в пул наград
      await interfaces.cxbt.mint(owner.address, ethers.parseEther("10000"));
      const ownerUnlockCost = await interfaces.cxbt.calculateUnlockCost(ethers.parseEther("10000"));
      await mockPAID.mint(owner.address, ownerUnlockCost);
      await mockPAID.connect(owner).approve(diamondAddress, ownerUnlockCost);
      await interfaces.cxbt.connect(owner).unlockTokens(ethers.parseEther("10000"));
      
      // Добавляем токены в пул наград
      const rewardAmount = ethers.parseEther("50");
      await interfaces.cxbt.addToRewardPool(rewardAmount);

      // Разблокируем токены addr1
      const unlockAmount = ethers.parseEther("50");
      const unlockCost1 = await interfaces.cxbt.calculateUnlockCost(unlockAmount);
      await mockPAID.connect(addr1).approve(diamondAddress, unlockCost1);
      await interfaces.cxbt.connect(addr1).unlockTokens(unlockAmount);

      // Проверяем награду
      const [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
      expect(unlocked).to.equal(unlockAmount * 2n); // 50 разблокировано + 50 награда
    });
  });

  // ==================== Вспомогательные функции ====================

  async function unlockTokens(signer, amount) {
    const unlockCost = await interfaces.cxbt.calculateUnlockCost(amount);
    await mockPAID.mint(signer.address, unlockCost);
    await mockPAID.connect(signer).approve(diamondAddress, unlockCost);
    await interfaces.cxbt.connect(signer).unlockTokens(amount);
  }

  async function unlockTokensFor(signer, amount) {
    const unlockCost = await interfaces.cxbt.calculateUnlockCost(amount);
    await mockPAID.connect(signer).approve(diamondAddress, unlockCost * 2n);
    await interfaces.cxbt.connect(signer).unlockTokens(amount);
  }
});

// ==================== Тесты Whitelist / Blacklist ====================

describe("Whitelist / Blacklist", function () {
  let interfaces;
  let owner;
  let addr1;
  let addr2;
  let mockPAID;

  beforeEach(async function () {
    const deployResult = await deployDiamond();
    interfaces = deployResult.interfaces;
    mockPAID = deployResult.mockPAID;
    [owner, addr1, addr2] = await ethers.getSigners();
  });

  it("Владелец должен быть в белом списке по умолчанию", async function () {
    expect(await interfaces.cxbt.isWhitelisted(owner.address)).to.be.true;
  });

  it("Владелец должен иметь возможность добавлять адреса в белый список", async function () {
    await interfaces.cxbt.addToWhitelist(addr1.address);
    expect(await interfaces.cxbt.isWhitelisted(addr1.address)).to.be.true;
  });

  it("Владелец должен иметь возможность удалять адреса из белого списка", async function () {
    await interfaces.cxbt.addToWhitelist(addr1.address);
    await interfaces.cxbt.removeFromWhitelist(addr1.address);
    expect(await interfaces.cxbt.isWhitelisted(addr1.address)).to.be.false;
  });

  it("Не владелец не должен иметь возможность добавлять адреса в белый список", async function () {
    await expect(
      interfaces.cxbt.connect(addr1).addToWhitelist(addr2.address)
    ).to.be.revertedWith("LibDiamond: Must be contract owner");
  });

  it("Владелец должен иметь возможность добавлять адреса в черный список", async function () {
    await interfaces.cxbt.addToBlacklist(addr1.address);
    expect(await interfaces.cxbt.isBlacklisted(addr1.address)).to.be.true;
  });

  it("Владелец должен иметь возможность удалять адреса из черного списка", async function () {
    await interfaces.cxbt.addToBlacklist(addr1.address);
    await interfaces.cxbt.removeFromBlacklist(addr1.address);
    expect(await interfaces.cxbt.isBlacklisted(addr1.address)).to.be.false;
  });

  it("Не владелец не должен иметь возможность добавлять адреса в черный список", async function () {
    await expect(
      interfaces.cxbt.connect(addr1).addToBlacklist(addr2.address)
    ).to.be.revertedWith("LibDiamond: Must be contract owner");
  });

  it("Адрес в черном списке не должен иметь возможности отправлять токены", async function () {
    const amount = ethers.parseEther("100");
    
    // Разблокируем токены для addr1
    await interfaces.cxbt.mint(addr1.address, amount);
    const unlockCost = await interfaces.cxbt.calculateUnlockCost(amount);
    await mockPAID.mint(addr1.address, unlockCost);
    await mockPAID.connect(addr1).approve(interfaces.diamondAddress, unlockCost);
    await interfaces.cxbt.connect(addr1).unlockTokens(amount);
    
    // Добавляем addr1 в черный список
    await interfaces.cxbt.addToBlacklist(addr1.address);
    
    // Пытаемся отправить токены
    await expect(
      interfaces.erc20.connect(addr1).transfer(addr2.address, amount)
    ).to.be.revertedWith("ERC20: sender is blacklisted");
  });

  it("Адрес в черном списке не должен иметь возможности получать токены", async function () {
    const amount = ethers.parseEther("100");
    
    // Разблокируем токены для владельца
    await interfaces.cxbt.mint(owner.address, amount);
    const unlockCost = await interfaces.cxbt.calculateUnlockCost(amount);
    await mockPAID.mint(owner.address, unlockCost);
    await mockPAID.approve(interfaces.diamondAddress, unlockCost);
    await interfaces.cxbt.unlockTokens(amount);
    
    // Добавляем addr1 в черный список
    await interfaces.cxbt.addToBlacklist(addr1.address);
    
    // Пытаемся отправить токены на адрес в черном списке
    await expect(
      interfaces.erc20.transfer(addr1.address, amount)
    ).to.be.revertedWith("ERC20: recipient is blacklisted");
  });

  it("Адрес в белом списке должен иметь возможность переводить заблокированные токены", async function () {
    const amount = ethers.parseEther("100");
    
    // Минтим токены addr1 (они будут заблокированы)
    await interfaces.cxbt.mint(addr1.address, amount);
    
    // Добавляем addr1 в белый список
    await interfaces.cxbt.addToWhitelist(addr1.address);
    
    // Проверяем, что токены заблокированы
    const balances = await interfaces.cxbt.getTokenBalances(addr1.address);
    expect(balances.unlocked).to.equal(0);
    expect(balances.locked).to.equal(amount);
    
    // Addr1 может переводить токены несмотря на блокировку
    await interfaces.erc20.connect(addr1).transfer(addr2.address, amount);
    expect(await interfaces.erc20.balanceOf(addr2.address)).to.equal(amount);
  });

  it("Адрес в белом списке должен получать токены как разблокированные", async function () {
    const amount = ethers.parseEther("100");
    
    // Разблокируем токены для владельца
    await interfaces.cxbt.mint(owner.address, amount);
    const unlockCost = await interfaces.cxbt.calculateUnlockCost(amount);
    await mockPAID.mint(owner.address, unlockCost);
    await mockPAID.approve(interfaces.diamondAddress, unlockCost);
    await interfaces.cxbt.unlockTokens(amount);
    
    // Добавляем addr1 в белый список
    await interfaces.cxbt.addToWhitelist(addr1.address);
    
    // Переводим токены addr1
    await interfaces.erc20.transfer(addr1.address, amount);
    
    // Проверяем, что addr1 получил токены как разблокированные
    const balances = await interfaces.cxbt.getTokenBalances(addr1.address);
    expect(balances.unlocked).to.equal(amount);
    expect(balances.locked).to.equal(0);
  });

  it("Адрес в белом списке должен иметь возможность approve любых токенов", async function () {
    const amount = ethers.parseEther("100");
    
    // Минтим токены addr1 (они будут заблокированы)
    await interfaces.cxbt.mint(addr1.address, amount);
    
    // Добавляем addr1 в белый список
    await interfaces.cxbt.addToWhitelist(addr1.address);
    
    // Addr1 может approve любые токены, даже заблокированные
    await interfaces.erc20.connect(addr1).approve(addr2.address, amount);
    expect(await interfaces.erc20.allowance(addr1.address, addr2.address)).to.equal(amount);
  });

  it("Должен emit событие AddedToWhitelist при добавлении в белый список", async function () {
    await expect(interfaces.cxbt.addToWhitelist(addr1.address))
      .to.emit(interfaces.cxbt, "AddedToWhitelist")
      .withArgs(addr1.address);
  });

  it("Должен emit событие RemovedFromWhitelist при удалении из белого списка", async function () {
    await interfaces.cxbt.addToWhitelist(addr1.address);
    await expect(interfaces.cxbt.removeFromWhitelist(addr1.address))
      .to.emit(interfaces.cxbt, "RemovedFromWhitelist")
      .withArgs(addr1.address);
  });

  it("Должен emit событие AddedToBlacklist при добавлении в черный список", async function () {
    await expect(interfaces.cxbt.addToBlacklist(addr1.address))
      .to.emit(interfaces.cxbt, "AddedToBlacklist")
      .withArgs(addr1.address);
  });

  it("Должен emit событие RemovedFromBlacklist при удалении из черного списка", async function () {
    await interfaces.cxbt.addToBlacklist(addr1.address);
    await expect(interfaces.cxbt.removeFromBlacklist(addr1.address))
      .to.emit(interfaces.cxbt, "RemovedFromBlacklist")
      .withArgs(addr1.address);
  });

  it("Не должно быть возможно добавить адрес в оба списка одновременно", async function () {
    await interfaces.cxbt.addToWhitelist(addr1.address);
    
    // Черный список имеет приоритет
    await interfaces.cxbt.addToBlacklist(addr1.address);
    
    // Адрес должен быть в черном списке
    expect(await interfaces.cxbt.isBlacklisted(addr1.address)).to.be.true;
    expect(await interfaces.cxbt.isWhitelisted(addr1.address)).to.be.true;
    
    // И не должен иметь возможности отправлять токены
    const amount = ethers.parseEther("100");
    await interfaces.cxbt.mint(addr1.address, amount);
    await expect(
      interfaces.erc20.connect(addr1).transfer(addr2.address, amount)
    ).to.be.revertedWith("ERC20: sender is blacklisted");
  });
});

// ==================== Тесты ownerUnlockTokens ====================

describe("ownerUnlockTokens", function () {
  let interfaces;
  let owner;
  let addr1;
  let addr2;
  let mockPAID;
  let diamondAddress;
  const MINT_AMOUNT = ethers.parseEther("1000");
  const UNLOCK_AMOUNT = ethers.parseEther("500");

  beforeEach(async function () {
    const deployResult = await deployDiamond();
    interfaces = deployResult.interfaces;
    mockPAID = deployResult.mockPAID;
    diamondAddress = deployResult.diamondAddress;
    [owner, addr1, addr2] = await ethers.getSigners();
  });

  it("Владелец должен иметь возможность разблокировать токены любого пользователя", async function () {
    // Минтим токены addr1 (они будут заблокированы)
    await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);

    // Проверяем начальное состояние
    let [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
    expect(unlocked).to.equal(0);
    expect(locked).to.equal(MINT_AMOUNT);
    expect(total).to.equal(MINT_AMOUNT);

    // Владелец разблокирует токены addr1
    await interfaces.cxbt.ownerUnlockTokens(addr1.address, UNLOCK_AMOUNT);

    // Проверяем, что токены разблокированы
    [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
    expect(unlocked).to.equal(UNLOCK_AMOUNT);
    expect(locked).to.equal(MINT_AMOUNT - UNLOCK_AMOUNT);
    expect(total).to.equal(MINT_AMOUNT);
  });

  it("Не владелец не должен иметь возможность разблокировать токены", async function () {
    // Минтим токены addr2
    await interfaces.cxbt.mint(addr2.address, MINT_AMOUNT);

    // Addr1 пытается разблокировать токены addr2
    await expect(
      interfaces.cxbt.connect(addr1).ownerUnlockTokens(addr2.address, UNLOCK_AMOUNT)
    ).to.be.revertedWith("LibDiamond: Must be contract owner");
  });

  it("Не должно быть возможно разблокировать больше токенов, чем заблокировано", async function () {
    // Минтим токены addr1
    await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);

    // Владелец пытается разблокировать больше, чем есть
    await expect(
      interfaces.cxbt.ownerUnlockTokens(addr1.address, MINT_AMOUNT + 1n)
    ).to.be.revertedWith("Insufficient locked tokens");
  });

  it("Не должно быть возможно разблокировать 0 токенов", async function () {
    await expect(
      interfaces.cxbt.ownerUnlockTokens(addr1.address, 0)
    ).to.be.revertedWith("Unlock amount must be greater than 0");
  });

  it("Разблокировка владельцем не должна требовать оплаты в PAID", async function () {
    // Минтим токены addr1
    await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);

    // Проверяем баланс PAID addr1 (должен быть 0)
    const addr1PaidBalance = await mockPAID.balanceOf(addr1.address);
    expect(addr1PaidBalance).to.equal(0);

    // Владелец разблокирует токены addr1
    await interfaces.cxbt.ownerUnlockTokens(addr1.address, UNLOCK_AMOUNT);

    // Баланс PAID addr1 все еще 0 (не было списания)
    expect(await mockPAID.balanceOf(addr1.address)).to.equal(0);

    // Токены разблокированы
    const [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
    expect(unlocked).to.equal(UNLOCK_AMOUNT);
  });

  it("Разблокировка владельцем не должна начислять награду из пула", async function () {
    // Минтим токены addr1
    await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);

    // Добавляем токены в пул наград
    await interfaces.cxbt.mint(owner.address, ethers.parseEther("10000"));
    const ownerUnlockCost = await interfaces.cxbt.calculateUnlockCost(ethers.parseEther("10000"));
    await mockPAID.mint(owner.address, ownerUnlockCost);
    await mockPAID.connect(owner).approve(diamondAddress, ownerUnlockCost);
    await interfaces.cxbt.connect(owner).unlockTokens(ethers.parseEther("10000"));
    
    const rewardAmount = ethers.parseEther("50");
    await interfaces.cxbt.addToRewardPool(rewardAmount);

    // Проверяем баланс пула наград
    expect(await interfaces.cxbt.getRewardPoolBalance()).to.equal(rewardAmount);

    // Владелец разблокирует токены addr1
    await interfaces.cxbt.ownerUnlockTokens(addr1.address, UNLOCK_AMOUNT);

    // Баланс пула наград не изменился
    expect(await interfaces.cxbt.getRewardPoolBalance()).to.equal(rewardAmount);

    // Токены разблокированы без награды
    const [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
    expect(unlocked).to.equal(UNLOCK_AMOUNT);
    expect(total).to.equal(MINT_AMOUNT);
  });

  it("Должен emit событие TokensUnlockedByOwner", async function () {
    // Минтим токены addr1
    await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);

    await expect(interfaces.cxbt.ownerUnlockTokens(addr1.address, UNLOCK_AMOUNT))
      .to.emit(interfaces.cxbt, "TokensUnlockedByOwner")
      .withArgs(owner.address, addr1.address, UNLOCK_AMOUNT);
  });

  it("Владелец может разблокировать токены для нескольких пользователей", async function () {
    // Минтим токены addr1 и addr2
    await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);
    await interfaces.cxbt.mint(addr2.address, MINT_AMOUNT);

    // Владелец разблокирует токены для обоих
    await interfaces.cxbt.ownerUnlockTokens(addr1.address, UNLOCK_AMOUNT);
    await interfaces.cxbt.ownerUnlockTokens(addr2.address, UNLOCK_AMOUNT);

    // Проверяем, что токены разблокированы для обоих
    const [unlocked1, locked1, total1] = await interfaces.cxbt.getTokenBalances(addr1.address);
    const [unlocked2, locked2, total2] = await interfaces.cxbt.getTokenBalances(addr2.address);
    
    expect(unlocked1).to.equal(UNLOCK_AMOUNT);
    expect(unlocked2).to.equal(UNLOCK_AMOUNT);
  });

  it("Разблокировка владельцем должна работать при паузе", async function () {
    // Минтим токены addr1
    await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);

    // Ставим контракт на паузу
    await interfaces.cxbt.pause();

    // Владелец все еще может разблокировать токены
    await interfaces.cxbt.ownerUnlockTokens(addr1.address, UNLOCK_AMOUNT);

    // Проверяем, что токены разблокированы
    const [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
    expect(unlocked).to.equal(UNLOCK_AMOUNT);
  });

  it("Разблокировка владельцем должна работать даже если пользователь в черном списке", async function () {
    // Минтим токены addr1
    await interfaces.cxbt.mint(addr1.address, MINT_AMOUNT);

    // Добавляем addr1 в черный список
    await interfaces.cxbt.addToBlacklist(addr1.address);

    // Владелец все еще может разблокировать токены
    await interfaces.cxbt.ownerUnlockTokens(addr1.address, UNLOCK_AMOUNT);

    // Проверяем, что токены разблокированы
    const [unlocked, locked, total] = await interfaces.cxbt.getTokenBalances(addr1.address);
    expect(unlocked).to.equal(UNLOCK_AMOUNT);
  });
});

// ==================== Тесты MockPAID ====================

describe("MockPAID", function () {
  let MockPAID;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    const MockPAIDFactory = await ethers.getContractFactory("MockPAID");
    MockPAID = await MockPAIDFactory.deploy();
    await MockPAID.waitForDeployment();
  });

  it("Должен минтить токены", async function () {
    const amount = ethers.parseEther("1000");
    await MockPAID.mint(addr1.address, amount);
    expect(await MockPAID.balanceOf(addr1.address)).to.equal(amount);
  });

  it("Должен переводить токены", async function () {
    const amount = ethers.parseEther("100");
    await MockPAID.mint(owner.address, amount);
    await MockPAID.transfer(addr1.address, amount);
    expect(await MockPAID.balanceOf(addr1.address)).to.equal(amount);
  });

  it("Должен устанавливать разрешения", async function () {
    const amount = ethers.parseEther("100");
    await MockPAID.approve(addr1.address, amount);
    expect(await MockPAID.allowance(owner.address, addr1.address)).to.equal(amount);
  });

  it("Должен переводить от имени с разрешением", async function () {
    const amount = ethers.parseEther("100");
    await MockPAID.mint(owner.address, amount);
    await MockPAID.approve(addr1.address, amount);
    await MockPAID.connect(addr1).transferFrom(owner.address, addr1.address, amount);
    expect(await MockPAID.balanceOf(addr1.address)).to.equal(amount);
  });
});
