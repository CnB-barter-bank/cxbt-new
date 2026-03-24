const hre = require("hardhat");

async function main() {
  // Получаем аккаунт деплоера (первый аккаунт в сети)
  const [deployer] = await hre.ethers.getSigners();

  console.log("Развертывание контракта с аккаунта:", deployer.address);
  console.log("Баланс деплоера:", (await hre.ethers.provider.getBalance(deployer.address)).toString());

  // Параметры контракта
  const tokenName = "CXBT";
  const tokenSymbol = "MTK";
  // Начальное количество токенов: 1_000_000 с учетом 18 decimals
  const initialSupply = hre.ethers.parseUnits("1000000", 18);

  console.log("\n--- Параметры деплоя ---");
  console.log("Название токена:", tokenName);
  console.log("Символ токена:", tokenSymbol);
  console.log("Начальное количество токенов:", hre.ethers.formatUnits(initialSupply, 18));

  // Получаем фабрику контракта
  const CXBT = await hre.ethers.getContractFactory("CXBT");

  // Развертываем контракт
  console.log("\nРазвертывание контракта...");
  const token = await CXBT.deploy(tokenName, tokenSymbol, initialSupply);

  // Ждем завершения деплоя
  await token.waitForDeployment();

  const tokenAddress = await token.getAddress();

  console.log("\n--- Результаты деплоя ---");
  console.log("Адрес контракта:", tokenAddress);

  // Получаем информацию о контракте
  const owner = await token.owner();
  const totalSupply = await token.totalSupply();
  const deployerBalance = await token.balanceOf(deployer.address);

  console.log("Владелец контракта:", owner);
  console.log("Общее количество токенов:", hre.ethers.formatUnits(totalSupply, 18));
  console.log("Баланс владельца:", hre.ethers.formatUnits(deployerBalance, 18));

  // Проверяем, что владелец получил все токены при деплое
  console.log("\n--- Проверка ---");
  if (totalSupply === deployerBalance) {
    console.log("✓ Владелец получил все токены при деплое");
  } else {
    console.log("✗ Ошибка: Владелец не получил все токены");
    console.log("  Ожидаемый баланс:", hre.ethers.formatUnits(totalSupply, 18));
    console.log("  Фактический баланс:", hre.ethers.formatUnits(deployerBalance, 18));
  }

  // Проверяем, что deployer является владельцем
  if (owner.toLowerCase() === deployer.address.toLowerCase()) {
    console.log("✓ Деплоер является владельцем контракта");
  } else {
    console.log("✗ Ошибка: Деплоер не является владельцем");
  }

  console.log("\n--- Деплой завершен успешно ---");
}

// Запуск скрипта и обработка ошибок
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
