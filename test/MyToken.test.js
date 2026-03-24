const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CXBT", function () {
  let CXBT;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  const TOKEN_NAME = "My Token";
  const TOKEN_SYMBOL = "MTK";
  const INITIAL_SUPPLY = ethers.parseEther("1000000"); // 1,000,000 токенов
  const MINT_AMOUNT = ethers.parseEther("1000"); // 1,000 токенов
  const TRANSFER_AMOUNT = ethers.parseEther("100"); // 100 токенов

  beforeEach(async function () {
    // Получаем аккаунты
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    // Деплоим контракт
    const CXBT = await ethers.getContractFactory("CXBT");
    CXBT = await CXBT.deploy(TOKEN_NAME, TOKEN_SYMBOL, INITIAL_SUPPLY);
    await CXBT.waitForDeployment();
  });

  describe("Деплой контракта", function () {
    it("Должен установить правильное название токена", async function () {
      expect(await CXBT.name()).to.equal(TOKEN_NAME);
    });

    it("Должен установить правильный символ токена", async function () {
      expect(await CXBT.symbol()).to.equal(TOKEN_SYMBOL);
    });

    it("Должен установить правильное общее предложение токенов", async function () {
      expect(await CXBT.totalSupply()).to.equal(INITIAL_SUPPLY);
    });

    it("Должен установить правильное количество десятичных знаков (18)", async function () {
      expect(await CXBT.decimals()).to.equal(18);
    });

    it("Должен передать все токены владельцу при деплое", async function () {
      expect(await CXBT.balanceOf(owner.address)).to.equal(INITIAL_SUPPLY);
    });

    it("Должен установить владельца контракта", async function () {
      expect(await CXBT.owner()).to.equal(owner.address);
    });

    it("Контракт не должен быть приостановлен при деплое", async function () {
      expect(await CXBT.paused()).to.be.false;
    });
  });

  describe("Перевод токенов (transfer)", function () {
    it("Должен успешно перевести токены между аккаунтами", async function () {
      await CXBT.transfer(addr1.address, TRANSFER_AMOUNT);
      expect(await CXBT.balanceOf(addr1.address)).to.equal(TRANSFER_AMOUNT);
    });

    it("Должен уменьшить баланс отправителя при переводе", async function () {
      const initialBalance = await CXBT.balanceOf(owner.address);
      await CXBT.transfer(addr1.address, TRANSFER_AMOUNT);
      expect(await CXBT.balanceOf(owner.address)).to.equal(
        initialBalance - TRANSFER_AMOUNT
      );
    });

    it("Должен выбросить ошибку при переводе больше чем баланс", async function () {
      const largeAmount = INITIAL_SUPPLY + ethers.parseEther("1");
      await expect(
        CXBT.transfer(addr1.address, largeAmount)
      ).to.be.revertedWithCustomError(CXBT, "ERC20InsufficientBalance");
    });

    it("Должен выбросить ошибку при переводе на нулевой адрес", async function () {
      await expect(
        CXBT.transfer(ethers.ZeroAddress, TRANSFER_AMOUNT)
      ).to.be.revertedWithCustomError(CXBT, "ERC20InvalidReceiver");
    });

    it("Должен emit событие Transfer при успешном переводе", async function () {
      await expect(CXBT.transfer(addr1.address, TRANSFER_AMOUNT))
        .to.emit(CXBT, "Transfer")
        .withArgs(owner.address, addr1.address, TRANSFER_AMOUNT);
    });
  });

  describe("Разрешение и перевод от имени (approve, transferFrom)", function () {
    beforeEach(async function () {
      // Владелец одобряет addr1 для использования TRANSFER_AMOUNT токенов
      await CXBT.connect(owner).approve(addr1.address, TRANSFER_AMOUNT);
    });

    it("Должен установить правильное разрешение (allowance)", async function () {
      expect(await CXBT.allowance(owner.address, addr1.address)).to.equal(
        TRANSFER_AMOUNT
      );
    });

    it("Должен emit событие Approval при установке разрешения", async function () {
      await expect(CXBT.approve(addr1.address, TRANSFER_AMOUNT))
        .to.emit(CXBT, "Approval")
        .withArgs(owner.address, addr1.address, TRANSFER_AMOUNT);
    });

    it("Должен успешно перевести токены через transferFrom с разрешением", async function () {
      await CXBT
        .connect(addr1)
        .transferFrom(owner.address, addr2.address, TRANSFER_AMOUNT);
      expect(await CXBT.balanceOf(addr2.address)).to.equal(TRANSFER_AMOUNT);
    });

    it("Должен уменьшить разрешение после transferFrom", async function () {
      await CXBT
        .connect(addr1)
        .transferFrom(owner.address, addr2.address, TRANSFER_AMOUNT);
      expect(await CXBT.allowance(owner.address, addr1.address)).to.equal(0);
    });

    it("Должен выбросить ошибку при transferFrom без достаточного разрешения", async function () {
      await expect(
        CXBT
          .connect(addr1)
          .transferFrom(owner.address, addr2.address, TRANSFER_AMOUNT + 1n)
      ).to.be.revertedWithCustomError(CXBT, "ERC20InsufficientAllowance");
    });

    it("Должен выбросить ошибку при transferFrom если у отправителя недостаточно токенов", async function () {
      await CXBT.connect(addr2).approve(owner.address, TRANSFER_AMOUNT);
      await expect(
        CXBT
          .connect(owner)
          .transferFrom(addr2.address, addr1.address, TRANSFER_AMOUNT)
      ).to.be.revertedWithCustomError(CXBT, "ERC20InsufficientBalance");
    });

    it("Должен позволить увеличить разрешение", async function () {
      const newAllowance = TRANSFER_AMOUNT * 2n;
      await CXBT.approve(addr1.address, newAllowance);
      expect(await CXBT.allowance(owner.address, addr1.address)).to.equal(
        newAllowance
      );
    });

    it("Должен позволить уменьшить разрешение", async function () {
      const reducedAllowance = TRANSFER_AMOUNT / 2n;
      await CXBT.approve(addr1.address, reducedAllowance);
      expect(await CXBT.allowance(owner.address, addr1.address)).to.equal(
        reducedAllowance
      );
    });

    it("Должен emit событие Transfer при успешном transferFrom", async function () {
      await expect(
        CXBT
          .connect(addr1)
          .transferFrom(owner.address, addr2.address, TRANSFER_AMOUNT)
      )
        .to.emit(CXBT, "Transfer")
        .withArgs(owner.address, addr2.address, TRANSFER_AMOUNT);
    });
  });

  describe("Минтинг токенов (mint)", function () {
    it("Должен успешно минтить токены владельцем", async function () {
      await CXBT.mint(addr1.address, MINT_AMOUNT);
      expect(await CXBT.balanceOf(addr1.address)).to.equal(MINT_AMOUNT);
    });

    it("Должен увеличивать totalSupply при минтинге", async function () {
      const initialSupply = await CXBT.totalSupply();
      await CXBT.mint(addr1.address, MINT_AMOUNT);
      expect(await CXBT.totalSupply()).to.equal(initialSupply + MINT_AMOUNT);
    });

    it("Должен emit событие Transfer при минтинге (от нулевого адреса)", async function () {
      await expect(CXBT.mint(addr1.address, MINT_AMOUNT))
        .to.emit(CXBT, "Transfer")
        .withArgs(ethers.ZeroAddress, addr1.address, MINT_AMOUNT);
    });

    it("Не должен позволять минтить не владельцу", async function () {
      await expect(
        CXBT.connect(addr1).mint(addr2.address, MINT_AMOUNT)
      ).to.be.revertedWithCustomError(CXBT, "OwnableUnauthorizedAccount");
    });

    it("Должен позволять владельцу минтить на любой адрес", async function () {
      await CXBT.mint(addr1.address, MINT_AMOUNT);
      await CXBT.mint(addr2.address, MINT_AMOUNT);
      expect(await CXBT.balanceOf(addr1.address)).to.equal(MINT_AMOUNT);
      expect(await CXBT.balanceOf(addr2.address)).to.equal(MINT_AMOUNT);
    });
  });

  describe("Пауза и разпауза (pause, unpause)", function () {
    it("Должен позволить владельцу поставить контракт на паузу", async function () {
      await CXBT.pause();
      expect(await CXBT.paused()).to.be.true;
    });

    it("Должен emit событие Paused при установке паузы", async function () {
      await expect(CXBT.pause())
        .to.emit(CXBT, "Paused")
        .withArgs(owner.address);
    });

    it("Должен позволить владельцу снять контракт с паузы", async function () {
      await CXBT.pause();
      await CXBT.unpause();
      expect(await CXBT.paused()).to.be.false;
    });

    it("Должен emit событие Unpaused при снятии паузы", async function () {
      await CXBT.pause();
      await expect(CXBT.unpause())
        .to.emit(CXBT, "Unpaused")
        .withArgs(owner.address);
    });

    it("Не должен позволять ставить на паузу не владельцу", async function () {
      await expect(CXBT.connect(addr1).pause()).to.be.revertedWithCustomError(
        CXBT,
        "OwnableUnauthorizedAccount"
      );
    });

    it("Не должен позволять снимать с паузы не владельцу", async function () {
      await CXBT.pause();
      await expect(CXBT.connect(addr1).unpause()).to.be.revertedWithCustomError(
        CXBT,
        "OwnableUnauthorizedAccount"
      );
    });
  });

  describe("Блокировка переводов при паузе", function () {
    beforeEach(async function () {
      // Ставим контракт на паузу
      await CXBT.pause();
    });

    it("Должен блокировать transfer при паузе", async function () {
      await expect(
        CXBT.transfer(addr1.address, TRANSFER_AMOUNT)
      ).to.be.revertedWithCustomError(CXBT, "EnforcedPause");
    });

    it("Должен блокировать transferFrom при паузе", async function () {
      // Снимаем паузу, чтобы сделать approve
      await CXBT.unpause();
      await CXBT.approve(addr1.address, TRANSFER_AMOUNT);
      // Ставим паузу обратно
      await CXBT.pause();
      
      await expect(
        CXBT
          .connect(addr1)
          .transferFrom(owner.address, addr2.address, TRANSFER_AMOUNT)
      ).to.be.revertedWithCustomError(CXBT, "EnforcedPause");
    });

    it("Должен блокировать approve при паузе", async function () {
      await expect(
        CXBT.approve(addr1.address, TRANSFER_AMOUNT)
      ).to.be.revertedWithCustomError(CXBT, "EnforcedPause");
    });

    it("Должен разрешить переводы после снятия паузы", async function () {
      await CXBT.unpause();
      await CXBT.transfer(addr1.address, TRANSFER_AMOUNT);
      expect(await CXBT.balanceOf(addr1.address)).to.equal(TRANSFER_AMOUNT);
    });

    it("Должен разрешать минтинг при паузе", async function () {
      await CXBT.mint(addr1.address, MINT_AMOUNT);
      expect(await CXBT.balanceOf(addr1.address)).to.equal(MINT_AMOUNT);
    });
  });

  describe("Проверка прав доступа", function () {
    it("Только владелец может минтить токены", async function () {
      await expect(
        CXBT.connect(addr1).mint(addr2.address, MINT_AMOUNT)
      ).to.be.revertedWithCustomError(CXBT, "OwnableUnauthorizedAccount");
    });

    it("Владелец может минтить токены", async function () {
      await CXBT.mint(addr1.address, MINT_AMOUNT);
      expect(await CXBT.balanceOf(addr1.address)).to.equal(MINT_AMOUNT);
    });

    it("Только владелец может ставить контракт на паузу", async function () {
      await expect(CXBT.connect(addr1).pause()).to.be.revertedWithCustomError(
        CXBT,
        "OwnableUnauthorizedAccount"
      );
    });

    it("Владелец может ставить контракт на паузу", async function () {
      await CXBT.pause();
      expect(await CXBT.paused()).to.be.true;
    });

    it("Только владелец может снимать контракт с паузы", async function () {
      await CXBT.pause();
      await expect(CXBT.connect(addr1).unpause()).to.be.revertedWithCustomError(
        CXBT,
        "OwnableUnauthorizedAccount"
      );
    });

    it("Владелец может снимать контракт с паузы", async function () {
      await CXBT.pause();
      await CXBT.unpause();
      expect(await CXBT.paused()).to.be.false;
    });

    it("Не владелец не может передать владение контрактом", async function () {
      await expect(
        CXBT.connect(addr1).transferOwnership(addr2.address)
      ).to.be.revertedWithCustomError(CXBT, "OwnableUnauthorizedAccount");
    });

    it("Владелец может передать владение контрактом", async function () {
      await CXBT.transferOwnership(addr1.address);
      expect(await CXBT.owner()).to.equal(addr1.address);
    });
  });

  describe("Интеграционные тесты", function () {
    it("Полный сценарий: деплой -> перевод -> разрешение -> transferFrom -> минтинг -> пауза -> разпауза", async function () {
      // Проверяем начальный баланс
      expect(await CXBT.balanceOf(owner.address)).to.equal(INITIAL_SUPPLY);

      // Перевод токенов
      await CXBT.transfer(addr1.address, TRANSFER_AMOUNT);
      expect(await CXBT.balanceOf(addr1.address)).to.equal(TRANSFER_AMOUNT);

      // Установка разрешения
      await CXBT.connect(addr1).approve(owner.address, TRANSFER_AMOUNT);
      expect(
        await CXBT.allowance(addr1.address, owner.address)
      ).to.equal(TRANSFER_AMOUNT);

      // TransferFrom
      await CXBT
        .connect(owner)
        .transferFrom(addr1.address, addr2.address, TRANSFER_AMOUNT);
      expect(await CXBT.balanceOf(addr2.address)).to.equal(TRANSFER_AMOUNT);
      expect(await CXBT.balanceOf(addr1.address)).to.equal(0);

      // Минтинг новых токенов
      await CXBT.mint(addr1.address, MINT_AMOUNT);
      expect(await CXBT.balanceOf(addr1.address)).to.equal(MINT_AMOUNT);

      // Пауза
      await CXBT.pause();
      expect(await CXBT.paused()).to.be.true;

      // Перевод должен быть заблокирован
      await expect(
        CXBT.transfer(addr1.address, TRANSFER_AMOUNT)
      ).to.be.revertedWithCustomError(CXBT, "EnforcedPause");

      // Разпауза
      await CXBT.unpause();
      expect(await CXBT.paused()).to.be.false;

      // Перевод должен работать снова
      await CXBT.transfer(addr1.address, TRANSFER_AMOUNT);
      expect(await CXBT.balanceOf(addr1.address)).to.equal(
        MINT_AMOUNT + TRANSFER_AMOUNT
      );
    });

    it("Множественные переводы между разными аккаунтами", async function () {
      const amount1 = ethers.parseEther("100");
      const amount2 = ethers.parseEther("200");
      const amount3 = ethers.parseEther("50");

      await CXBT.transfer(addr1.address, amount1);
      await CXBT.transfer(addr2.address, amount2);

      expect(await CXBT.balanceOf(addr1.address)).to.equal(amount1);
      expect(await CXBT.balanceOf(addr2.address)).to.equal(amount2);
      expect(await CXBT.balanceOf(owner.address)).to.equal(
        INITIAL_SUPPLY - amount1 - amount2
      );

      // Перевод от addr1 к addr2
      await CXBT.connect(addr1).transfer(addr2.address, amount3);
      expect(await CXBT.balanceOf(addr1.address)).to.equal(amount1 - amount3);
      expect(await CXBT.balanceOf(addr2.address)).to.equal(amount2 + amount3);
    });
  });
});
