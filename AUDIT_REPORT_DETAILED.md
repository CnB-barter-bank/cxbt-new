# 🔒 Детальный аудит безопасности токена CXBT

**Дата:** 2026-03-24  
**Версия контракта:** 1.0  
**Стандарт:** ERC-20 с Diamond Proxy (EIP-2535)

---

## 📋 Резюме аудита

### ⚠️ КРИТИЧЕСКИЕ УЯЗВИМОСТИ: 5
### 🔴 ВЫСОКИЕ УЯЗВИМОСТИ: 4
### 🟡 СРЕДНИЕ УЯЗВИМОСТИ: 3
### 🟢 НИЗКИЕ УЯЗВИМОСТИ: 2

---

## 🚨 КРИТИЧЕСКИЕ УЯЗВИМОСТИ

### 1. **Мошенническая схема "Pay-to-Unlock" (Плати за разблокировку)**

**Степень риска:** ⚠️ КРИТИЧЕСКИЙ  
**Файл:** [`contracts/facets/CXBTFacet.sol`](contracts/facets/CXBTFacet.sol:138-172)  
**Функция:** [`unlockTokens()`](contracts/facets/CXBTFacet.sol:138)

**Описание:**
Токен CXBT реализует мошенническую схему, где пользователи вынуждены платить 5% от суммы разблокируемых токенов, чтобы получить доступ к СВОИМ средствам.

```solidity
// Строка 151-159 в CXBTFacet.sol
uint256 cost = calculateUnlockCost(unlockAmount);
cxbtS.paidToken.safeTransferFrom(msg.sender, address(this), cost);
if (cost > 0) {
    cxbtS.paidToken.safeTransfer(LibDiamond.contractOwner(), cost);
}
```

**Атакующий сценарий:**
1. Владелец контракта минтит токены и продает их пользователям
2. Пользователи получают токены как ЗАБЛОКИРОВАННЫЕ
3. Для разблокировки пользователи должны заплатить 5% в PAID токенах
4. Эти 5% сразу переводятся владельцу контракта
5. Владелец получает прибыль дважды: от продажи токенов и от разблокировки

**Рекомендация:** ⛔ ЭТОТ КОНТРАКТ ЯВЛЯЕТСЯ МОШЕННИЧЕСКИМ. НЕ РАЗВЕРТЫВАТЬ ЕГО.

---

### 2. **Получатели токенов получают их заблокированными**

**Степень риска:** ⚠️ КРИТИЧЕСКИЙ  
**Файл:** [`contracts/facets/ERC20Facet.sol`](contracts/facets/ERC20Facet.sol:195-216)  
**Функция:** [`_transfer()`](contracts/facets/ERC20Facet.sol:195)

**Описание:**
При переводе токенов получатель получает их как ЗАБЛОКИРОВАННЫЕ, что требует от него оплаты за разблокировку.

```solidity
// Строки 212-213 в ERC20Facet.sol
// Получатель получает токены в общем балансе, но НЕ в unlockedBalance (заблокированы)
// unlockedBalance[to] остаётся без изменений
```

**Атакующий сценарий:**
1. Пользователь A переводит токены пользователю B
2. Пользователь B получает токены как заблокированные
3. Пользователь B должен заплатить 5% за разблокировку
4. Это создает цепочку платежей владельцу контракта

**Рекомендация:** ⛔ ИЗМЕНИТЬ ЛОГИКУ: получатель должен получать токены как разблокированные.

---

### 3. **Отсутствие защиты инициализации**

**Степень риска:** ⚠️ КРИТИЧЕСКИЙ  
**Файл:** [`contracts/facets/CXBTFacet.sol`](contracts/facets/CXBTFacet.sol:94-103)  
**Функция:** [`initCXBT()`](contracts/facets/CXBTFacet.sol:94)

**Описание:**
Функция инициализации не защищена модификатором `onlyOwner`, что позволяет любому адресу инициализировать контракт.

```solidity
// Строка 94 в CXBTFacet.sol
function initCXBT(address _paidToken, uint256 _unlockPercentage) external {
    // Нет модификатора onlyOwner!
    CXBTStorage storage s = ds();
    require(address(s.paidToken) == address(0), "Already initialized");
```

**Атакующий сценарий:**
1. Злоумышленник вызывает `initCXBT` первым
2. Устанавливает свой PAID токен
3. Все платежи за разблокировку пойдут злоумышленнику

**Рекомендация:** Добавить модификатор `onlyOwner` к функции инициализации.

---

### 4. **Полный контроль владельца над пулом наград**

**Степень риска:** ⚠️ КРИТИЧЕСКИЙ  
**Файл:** [`contracts/facets/CXBTFacet.sol`](contracts/facets/CXBTFacet.sol:180-221)  
**Функции:** [`addToRewardPool()`](contracts/facets/CXBTFacet.sol:180), [`withdrawFromRewardPool()`](contracts/facets/CXBTFacet.sol:205)

**Описание:**
Владелец может манипулировать пулом наград по своему усмотрению без ограничений.

```solidity
// Строки 180-197 в CXBTFacet.sol
function addToRewardPool(uint256 amount) external override onlyOwner {
    // Владелец может добавить токены в пул
    cxbtS.rewardPoolBalance += amount;
}

// Строки 205-221 в CXBTFacet.sol
function withdrawFromRewardPool(uint256 amount) external override onlyOwner {
    // Владелец может изъять токены из пула
    cxbtS.rewardPoolBalance -= amount;
}
```

**Атакующий сценарий:**
1. Владелец добавляет токены в пул для привлечения пользователей
2. Пользователи разблокируют токены в ожидании награды
3. Владелец изымает все токены из пула
4. Пользователи теряют ожидаемые награды

**Рекомендация:** Добавить временные блокировки или ограничения на изъятие из пула.

---

### 5. **Mint работает даже при паузе**

**Степень риска:** ⚠️ КРИТИЧЕСКИЙ  
**Файл:** [`contracts/facets/CXBTFacet.sol`](contracts/facets/CXBTFacet.sol:345-347)  
**Функция:** [`mint()`](contracts/facets/CXBTFacet.sol:345)

**Описание:**
Владелец может минтить токены даже когда контракт на паузе, что создает неравенство.

```solidity
// Строки 345-347 в CXBTFacet.sol
function mint(address to, uint256 amount) external override onlyOwner {
    _mintWithoutPause(to, amount);
}
```

**Атакующий сценарий:**
1. Владелец ставит контракт на паузу
2. Пользователи не могут разблокировать или переводить токены
3. Владелец минтит новые токены для себя
4. Владелец снимает паузу и продает токены

**Рекомендация:** Добавить проверку паузы к функции mint.

---

## 🔴 ВЫСОКИЕ УЯЗВИМОСТИ

### 6. **Отсутствие ограничения на максимальный totalSupply**

**Степень риска:** 🔴 ВЫСОКИЙ  
**Файл:** [`contracts/facets/CXBTFacet.sol`](contracts/facets/CXBTFacet.sol:326-337)  
**Функция:** [`_mintWithoutPause()`](contracts/facets/CXBTFacet.sol:326)

**Описание:**
Владелец может минтить неограниченное количество токенов, что может привести к инфляции.

```solidity
// Строки 326-337 в CXBTFacet.sol
function _mintWithoutPause(address to, uint256 amount) internal {
    ERC20Storage storage s = erc20Ds();
    s._balances[to] += amount;
    s._totalSupply += amount;
    // Нет проверки максимального totalSupply!
}
```

**Рекомендация:** Добавить константу `MAX_SUPPLY` и проверку при минтинге.

---

### 7. **Burn не проверяет паузу**

**Степень риска:** 🔴 ВЫСОКИЙ  
**Файл:** [`contracts/facets/CXBTFacet.sol`](contracts/facets/CXBTFacet.sol:293-319)  
**Функция:** [`burn()`](contracts/facets/CXBTFacet.sol:293)

**Описание:**
Функция burn работает даже когда контракт на паузе, что может быть использовано для обхода ограничений.

```solidity
// Строки 293-319 в CXBTFacet.sol
function burn(uint256 amount) external override {
    // Нет модификатора whenNotPaused!
    require(amount > 0, "Amount must be greater than 0");
```

**Рекомендация:** Добавить модификатор `whenNotPaused` к функции burn.

---

### 8. **Отсутствие защиты от Reentrancy в пуле наград**

**Степень риска:** 🔴 ВЫСОКИЙ  
**Файл:** [`contracts/facets/CXBTFacet.sol`](contracts/facets/CXBTFacet.sol:180-221)  
**Функции:** [`addToRewardPool()`](contracts/facets/CXBTFacet.sol:180), [`withdrawFromRewardPool()`](contracts/facets/CXBTFacet.sol:205)

**Описание:**
Функции управления пулом наград не имеют защиты от повторного входа (reentrancy).

```solidity
// Нет модификатора nonReentrant!
function addToRewardPool(uint256 amount) external override onlyOwner {
function withdrawFromRewardPool(uint256 amount) external override onlyOwner {
```

**Рекомендация:** Добавить модификатор `nonReentrant` к функциям управления пулом.

---

### 9. **Проблема с approve и разблокированными токенами**

**Степень риска:** 🔴 ВЫСОКИЙ  
**Файл:** [`contracts/facets/ERC20Facet.sol`](contracts/facets/ERC20Facet.sol:224-233)  
**Функция:** [`_approve()`](contracts/facets/ERC20Facet.sol:224)

**Описание:**
Функция approve ограничивает только разблокированные токены, что создает проблемы с UX.

```solidity
// Строка 229 в ERC20Facet.sol
require(amount <= ds()._unlockedBalance[owner], "ERC20: approve amount exceeds unlocked balance");
```

**Рекомендация:** Разрешить approve для всех токенов, но проверять при transfer.

---

## 🟡 СРЕДНИЕ УЯЗВИМОСТИ

### 10. **Владелец может менять процент разблокировки**

**Степень риска:** 🟡 СРЕДНИЙ  
**Файл:** [`contracts/facets/CXBTFacet.sol`](contracts/facets/CXBTFacet.sol:228-236)  
**Функция:** [`setUnlockPercentage()`](contracts/facets/CXBTFacet.sol:228)

**Описание:**
Владелец может изменить процент разблокировки в любой момент до 20%.

```solidity
// Строки 228-236 в CXBTFacet.sol
function setUnlockPercentage(uint256 newPercentage) external override onlyOwner {
    require(newPercentage > 0 && newPercentage <= 2000, "Invalid unlock percentage");
    CXBTStorage storage s = ds();
    uint256 oldPercentage = s.unlockPercentage;
    s.unlockPercentage = newPercentage;
}
```

**Рекомендация:** Добавить временной lock или уведомление перед изменением.

---

### 11. **Отсутствие событий для критических операций**

**Степень риска:** 🟡 СРЕДНИЙ  
**Файл:** [`contracts/facets/CXBTFacet.sol`](contracts/facets/CXBTFacet.sol)

**Описание:**
Некоторые критические операции не генерируют события, что затрудняет мониторинг.

**Отсутствующие события:**
- Mint (нет события для отслеживания минтинга)
- Burn (событие Transfer, но не специфичное)
- Изменение PAID токена (если будет добавлено)

**Рекомендация:** Добавить события для всех критических операций.

---

### 12. **Проблема с transferFrom и approve**

**Степень риска:** 🟡 СРЕДНИЙ  
**Файл:** [`contracts/facets/ERC20Facet.sol`](contracts/facets/ERC20Facet.sol:150-155)  
**Функция:** [`transferFrom()`](contracts/facets/ERC20Facet.sol:150)

**Описание:**
Функция transferFrom использует allowance, но approve ограничен разблокированными токенами.

```solidity
// Строки 150-155 в ERC20Facet.sol
function transferFrom(address from, address to, uint256 amount) external override whenNotPaused returns (bool) {
    address spender = msg.sender;
    _spendAllowance(from, spender, amount);
    _transfer(from, to, amount);
    return true;
}
```

**Рекомендация:** Пересмотреть логику approve и transferFrom.

---

## 🟢 НИЗКИЕ УЯЗВИМОСТИ

### 13. **Отсутствие проверки на нулевой адрес**

**Степень риска:** 🟢 НИЗКИЙ  
**Файл:** [`contracts/facets/CXBTFacet.sol`](contracts/facets/CXBTFacet.sol:345-347)  
**Функция:** [`mint()`](contracts/facets/CXBTFacet.sol:345)

**Описание:**
Функция mint не проверяет, что адрес получателя не является нулевым.

```solidity
// Строки 345-347 в CXBTFacet.sol
function mint(address to, uint256 amount) external override onlyOwner {
    _mintWithoutPause(to, amount);
    // Нет проверки to != address(0)
}
```

**Рекомендация:** Добавить проверку `require(to != address(0), "Cannot mint to zero address")`.

---

### 14. **Отсутствие документации NatSpec**

**Степень риска:** 🟢 НИЗКИЙ  
**Файл:** Все файлы контрактов

**Описание:**
Некоторые функции не имеют полной документации NatSpec.

**Рекомендация:** Добавить полную документацию NatSpec для всех публичных функций.

---

## 📊 Общий анализ архитектуры

### Паттерн Diamond Proxy (EIP-2535)

**Плюсы:**
- ✅ Модульная архитектура
- ✅ Возможность обновления без миграции
- ✅ Разделение ответственности между facets

**Минусы:**
- ❌ Сложность отладки
- ❌ Риск ошибок при обновлении facets
- ❌ Требует тщательного тестирования

### Безопасность прав доступа

**Проблемы:**
- ❌ Владелец имеет полный контроль над контрактом
- ❌ Нет механизма multi-sig или timelock
- ❌ Нет ограничений на критические операции

---

## 🛡️ Рекомендации по безопасности

### Немедленные действия:

1. **⛔ НЕ РАЗВЕРТЫВАТЬ** этот контракт в production
2. Пересмотреть всю архитектуру токена
3. Убрать механизм "pay-to-unlock"
4. Изменить логику так, чтобы получатели получали разблокированные токены

### Если необходимо сохранить функционал блокировки:

1. Добавить модификатор `onlyOwner` к функциям инициализации
2. Добавить защиту от reentrancy к функциям пула наград
3. Добавить проверку паузы к функции mint и burn
4. Добавить ограничение на максимальный totalSupply
5. Добавить timelock для критических операций
6. Реализовать multi-sig для управления контрактом

---

## 📝 Заключение

Этот контракт содержит **множественные критические уязвимости** и реализует **мошенническую схему "pay-to-unlock"**. Владелец контракта имеет полный контроль над всеми аспектами токена, включая:

- Процент разблокировки (до 20%)
- Возможность минтинга неограниченного количества токенов
- Управление пулом наград
- Возможность ставить контракт на паузу

**РЕКОМЕНДАЦИЯ: НЕ ИСПОЛЬЗОВАТЬ ЭТОТ КОНТРАКТ**

Если цель проекта - создать честный токен, необходимо полностью переработать архитектуру и убрать мошеннические механизмы.

---

## 🔗 Связанные файлы

- [`contracts/facets/CXBTFacet.sol`](contracts/facets/CXBTFacet.sol) - Основной контракт токена
- [`contracts/facets/ERC20Facet.sol`](contracts/facets/ERC20Facet.sol) - ERC20 функционал
- [`contracts/libraries/LibDiamond.sol`](contracts/libraries/LibDiamond.sol) - Библиотека Diamond
- [`contracts/Diamond.sol`](contracts/Diamond.sol) - Diamond Proxy

---

**Аудитор:** AI Security Auditor  
**Дата завершения:** 2026-03-24
