# Исправление проблемы с addToWhitelist

## Описание проблемы

При попытке вызвать функцию `addToWhitelist` возникает ошибка:
```
Моделирование транзакции не удалось (revert: Diamond: Function does not exist #-39000)
```

При выполнении апгрейда может возникать ошибка:
```
ProviderError: replacement transaction underpriced
```

Эта ошибка возникает, когда транзакция отправляется с ценой газа ниже текущей рыночной цены или когда несколько транзакций с одинаковым nonce отправляются с неправильными ценами газа.

## Причина проблемы

### 1. Отсутствующие функции

В скриптах деплоя и апгрейда отсутствовали следующие функции CXBTFacet:
- `addToWhitelist` - добавление адреса в белый список
- `removeFromWhitelist` - удаление адреса из белого списка
- `addToBlacklist` - добавление адреса в черный список
- `removeFromBlacklist` - удаление адреса из черного списка
- `isWhitelisted` - проверка нахождения в белом списке
- `isBlacklisted` - проверка нахождения в черном списке
- `ownerUnlockTokens` - разблокировка токенов владельцем

Также отсутствовали функции ERC20Facet:
- `unlockedBalanceOf` - получение разблокированного баланса
- `lockedBalanceOf` - получение заблокированного баланса

### 2. Неправильная цена газа

Скрипт апгрейда не использовал правильные параметры газа для сети Base (EIP-1559), что приводило к ошибке "replacement transaction underpriced".

## Решение

### Исправление ошибки "replacement transaction underpriced"

Скрипты обновлены для использования правильных параметров газа для сети Base:

1. **Функция `getGasPrice`** - автоматически определяет тип сети и использует EIP-1559 (maxFeePerGas, maxPriorityFeePerGas) для сетей Base или legacy gasPrice для других сетей.

2. **Retry логика** - при неудачной попытке деплоя скрипт автоматически повторяет с увеличенной ценой газа.

3. **Задержки между транзакциями** - добавлена задержка 3 секунды между развертыванием facets для предотвращения конфликтов nonce.

Если вы все еще получаете ошибку "replacement transaction underpriced", попробуйте:
- Подождать несколько минут перед повторной попыткой
- Увеличить множитель цены газа в скрипте (измените `1.2` на `1.5` или выше)
- Проверить, что нет других ожидающих транзакций от того же адреса


### Шаг 1: Проверка текущего состояния

Запустите скрипт проверки:

```bash
# Для локальной сети
npm run check

# Для сети Base
npm run check:base

# Для сети Base Sepolia
npm run check:sepolia
```

Этот скрипт:
1. Проверит, что вы являетесь владельцем Diamond
2. Проверит, находитесь ли вы в белом списке (и добавит, если нет)
3. Проверит наличие всех функций CXBTFacet и ERC20Facet в Diamond

### Шаг 2: Выполнение апгрейда (если нужно)

Если скрипт проверки покажет, что некоторые функции отсутствуют, выполните апгрейд:

```bash
# Для локальной сети
npm run upgrade

# Для сети Base
npm run upgrade:base

# Для сети Base Sepolia
npm run upgrade:sepolia
```

Этот скрипт:
1. Развернет новые версии всех facets
2. Заменит старые facets на новые через diamondCut
3. Добавит все недостающие функции

### Шаг 3: Повторная проверка

После апгрейда снова запустите скрипт проверки:

```bash
npm run check:base
```

## Использование функций после исправления

### Добавление адреса в белый список

```javascript
await cxbtFacet.addToWhitelist(address);
```

### Проверка нахождения в белом списке

```javascript
const isWhitelisted = await cxbtFacet.isWhitelisted(address);
```

### Добавление адреса в черный список

```javascript
await cxbtFacet.addToBlacklist(address);
```

### Разблокировка токенов владельцем

```javascript
await cxbtFacet.ownerUnlockTokens(userAddress, amount);
```

## Важные замечания

1. **Владелец по умолчанию в белом списке**: При инициализации CXBTFacet через функцию `initCXBT`, владелец автоматически добавляется в белый список.

2. **Правильное название функции**: Функция называется `addToWhitelist` (с маленькой буквой `l`), а не `addToWhiteList` (с большой буквой `L`).

3. **Только владелец может управлять списками**: Функции `addToWhitelist`, `removeFromWhitelist`, `addToBlacklist`, `removeFromBlacklist` могут вызываться только владельцем Diamond.

## Проверка через DiamondLoupe

Вы можете проверить, какие функции доступны в Diamond, используя DiamondLoupe:

```javascript
const diamondLoupe = await ethers.getContractAt("IDiamondLoupe", diamondAddress);

// Получить все facets
const facets = await diamondLoupe.facets();

// Получить функции для конкретного facet
const cxbtFacetAddress = "0x...";
const selectors = await diamondLoupe.facetFunctionSelectors(cxbtFacetAddress);
```

## Тестирование

Для проверки всех функций whitelist/blacklist запустите тесты:

```bash
npm test
```

Тесты находятся в файле `test/CXBT.test.js` в разделе "Whitelist / Blacklist".
