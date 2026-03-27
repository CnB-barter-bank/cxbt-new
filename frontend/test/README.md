# Unit Tests для CXBT Frontend

## Обзор

Этот каталог содержит unit тесты для компонентов Vue приложения CXBT. Тесты написаны с использованием Vitest и @vue/test-utils.

## Структура

```
test/
├── unit/
│   ├── components/          # Тесты компонентов
│   │   ├── WalletConnect.spec.js
│   │   ├── TokenBalances.spec.js
│   │   ├── UnlockTokens.spec.js
│   │   ├── TransferTokens.spec.js
│   │   └── LanguageSelector.spec.js
│   ├── helpers/            # Хелперы для тестов
│   │   ├── mockStore.js    # Моки для Pinia stores
│   │   ├── mockI18n.js     # Моки для i18n
│   │   └── mockWeb3.js     # Моки для Web3
│   └── setup.js            # Настройка тестовой среды
└── README.md               # Этот файл
```

## Установка зависимостей

Зависимости уже установлены. Если нужно переустановить:

```bash
cd frontend
npm install --save-dev @vitest/ui @vue/test-utils @quasar/quasar-app-extension-testing-unit-vitest happy-dom @vitest/coverage-v8 --legacy-peer-deps
```

## Запуск тестов

### Запуск всех тестов

```bash
npm run test:unit
```

### Запуск тестов в watch режиме

```bash
npm run test:unit:watch
```

### Запуск тестов с UI интерфейсом

```bash
npm run test:unit:ui
```

### Запуск тестов с покрытием кода

```bash
npm run test:unit:coverage
```

Результаты покрытия будут сохранены в директории `coverage/`.

## Покрытие тестов

### WalletConnect.vue

- ✅ Рендеринг компонента
- ✅ Отображение правильных данных
- ✅ Взаимодействие с пользователем (клики, копирование адреса)
- ✅ Вызов правильных методов/действий
- ✅ Отображение правильных сообщений об ошибках
- ✅ Различные состояния (loading, error, success)
- ✅ Различные статусы сети (Base, другая сеть)

### TokenBalances.vue

- ✅ Рендеринг компонента
- ✅ Отображение правильных данных (балансы)
- ✅ Взаимодействие с пользователем (обновление)
- ✅ Различные статусы пользователя (whitelisted, blacklisted, normal)
- ✅ Различные состояния (loading, no wallet)
- ✅ Наблюдение за изменениями кошелька

### UnlockTokens.vue

- ✅ Рендеринг компонента
- ✅ Отображение правильных данных (балансы, стоимость)
- ✅ Взаимодействие с пользователем (ввод количества, approve, unlock)
- ✅ Валидация формы
- ✅ Различные статусы пользователя (whitelisted, blacklisted, normal)
- ✅ Различные состояния (loading, success)
- ✅ Allowance проверка

### TransferTokens.vue

- ✅ Рендеринг компонента
- ✅ Отображение правильных данных (баланс, получатель)
- ✅ Взаимодействие с пользователем (ввод, отправка, maximize)
- ✅ Валидация формы
- ✅ Различные статусы пользователя (whitelisted, blacklisted, normal)
- ✅ Различные состояния (loading, success)
- ✅ Наблюдение за изменениями кошелька

### LanguageSelector.vue

- ✅ Рендеринг компонента
- ✅ Отображение правильных данных (текущий язык)
- ✅ Взаимодействие с пользователем (переключение языка)
- ✅ Отображение активного языка
- ✅ Все доступные языки

## Хелперы для тестов

### mockStore.js

Предоставляет моки для Pinia stores:

- `createMockWalletStore()` - создает мок для wallet store
- `createMockTokensStore()` - создает мок для tokens store
- `createMockI18nStore()` - создает мок для i18n store

### mockI18n.js

Предоставляет моки для i18n:

- `createMockI18n()` - создает экземпляр i18n
- `mockT()` - мок функции перевода

### mockWeb3.js

Предоставляет моки для Web3:

- `createMockProvider()` - создает мок провайдера
- `createMockSigner()` - создает мок подписанта
- `createMockContract()` - создает мок контракта
- `createMockWindowEthereum()` - создает мок window.ethereum
- `setupWeb3Mocks()` - настраивает глобальные моки Web3
- `resetWeb3Mocks()` - сбрасывает моки Web3
- `mockEthers()` - мок библиотеки ethers

## Написание новых тестов

### Пример теста для компонента

```javascript
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import MyComponent from 'src/components/MyComponent.vue'
import { createMockWalletStore } from '../helpers/mockStore'

describe('MyComponent.vue', () => {
  let wrapper
  let mockWalletStore

  beforeEach(() => {
    setActivePinia(createPinia())
    mockWalletStore = createMockWalletStore()
  })

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount()
    }
  })

  it('должен рендерить компонент', () => {
    wrapper = mount(MyComponent, {
      global: {
        mocks: {
          $t: key => key
        },
        provide: {
          walletStore: mockWalletStore
        }
      }
    })

    expect(wrapper.exists()).toBe(true)
  })
})
```

## Конфигурация Vitest

Конфигурация находится в файле `vitest.config.js`:

```javascript
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { quasar } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [vue(), quasar()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./test/unit/setup.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html']
    }
  }
})
```

## Требования к покрытию

- Минимальное покрытие кода: 80%
- Покрытие строк: 80%
- Покрытие веток: 75%
- Покрытие функций: 80%

## Troubleshooting

### Проблема с зависимостями

Если возникают проблемы с зависимостями при установке, используйте флаг `--legacy-peer-deps`:

```bash
npm install --legacy-peer-deps
```

### Проблема с Quasar компонентами

Если тесты не находят Quasar компоненты, убедитесь, что:

1. В `setup.js` правильно настроены плагины
2. В `vitest.config.js` добавлен плагин Quasar

### Проблема с моками

Если моки не работают правильно, убедитесь, что:

1. Моки сбрасываются в `afterEach`
2. Используются правильные методы мокирования (vi.fn(), vi.mock())

## Дополнительные ресурсы

- [Vitest Documentation](https://vitest.dev/)
- [Vue Test Utils Documentation](https://test-utils.vuejs.org/)
- [Quasar Testing](https://testing.quasar.dev/)
- [Pinia Testing](https://pinia.vuejs.org/cookbook/testing.html)
