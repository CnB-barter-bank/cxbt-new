# Тестовая среда CXBT Frontend

## Установка зависимостей

```bash
npm install
```

## Запуск тестов

### Запуск всех тестов
```bash
npm run test
```

### Запуск тестов с визуальным интерфейсом
```bash
npm run test:ui
```

### Запуск тестов с coverage отчетом
```bash
npm run test:coverage
```

## Структура папки tests/

```
tests/
├── setup.js              # Глобальный setup файл для тестов
├── components/           # Тесты для Vue компонентов
│   └── LandingPage.test.js
├── stores/              # Тесты для Pinia stores
├── utils/               # Тесты для утилит и helpers
└── README.md            # Этот файл
```

## Написание тестов

### Пример теста компонента

```javascript
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MyComponent from '@/components/MyComponent.vue'

describe('MyComponent', () => {
  it('рендерится корректно', () => {
    const wrapper = mount(MyComponent)
    expect(wrapper.exists()).toBe(true)
  })
})
```

### Пример теста Pinia store

```javascript
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMyStore } from '@/stores/myStore'

describe('MyStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('возвращает начальное состояние', () => {
    const store = useMyStore()
    expect(store.value).toBe('initial')
  })
})
```

## Coverage

Требуемое покрытие кода: **90%**

Coverage отчеты генерируются в папке `coverage/` после запуска `npm run test:coverage`.

- `coverage/index.html` - HTML отчет
- `coverage/lcov.info` - LCOV формат для CI/CD
- `coverage/coverage-final.json` - JSON формат

## Полезные команды

- `npm run test -- --run` - Запустить тесты один раз без watch режима
- `npm run test -- --reporter=verbose` - Подробный вывод результатов
- `npm run test -- path/to/test.test.js` - Запустить конкретный тестовый файл
