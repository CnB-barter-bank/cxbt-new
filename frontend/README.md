# CXBT - Vue + Quasar Web3 Application

[![CI/CD](https://github.com/your-username/cxbt-new/workflows/CI/badge.svg)](https://github.com/your-username/cxbt-new/actions/workflows/ci.yml)
[![Tests](https://github.com/your-username/cxbt-new/workflows/Tests/badge.svg)](https://github.com/your-username/cxbt-new/actions/workflows/test.yml)
[![Lint](https://github.com/your-username/cxbt-new/workflows/Lint/badge.svg)](https://github.com/your-username/cxbt-new/actions/workflows/lint.yml)
[![Security](https://github.com/your-username/cxbt-new/workflows/Security/badge.svg)](https://github.com/your-username/cxbt-new/actions/workflows/security.yml)
[![codecov](https://codecov.io/gh/your-username/cxbt-new/branch/main/graph/badge.svg)](https://codecov.io/gh/your-username/cxbt-new)
[![npm version](https://badge.fury.io/js/cxbt.svg)](https://badge.fury.io/js/cxbt)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

CXBT - это одностраничное приложение (SPA) на базе Vue 3 и Quasar Framework v2 для управления токенами в сети Base.

## Описание проекта

CXBT (Crypto X Base Token) - это децентрализованное веб-приложение для взаимодействия с умными контрактами токенов в сети Base. Приложение позволяет пользователям подключать Web3 кошельки, просматривать балансы токенов, разблокировать и переводить токены.

## Возможности

- 🔗 Подключение Web3 кошелька (MetaMask, WalletConnect)
- 💰 Просмотр балансов токенов (PAID, CXBT)
- 🔓 Разблокировка токенов
- ➡️ Перевод токенов
- 🌐 Мультиязычная поддержка (6 языков)
- ✅ Проверка статуса пользователя (whitelist/blacklist)
- 📱 Адаптивный дизайн для мобильных устройств

## Технологии

- **Vue 3** - Progressive JavaScript Framework
- **Quasar Framework v2** - Vue.js based Framework
- **Ethers.js v6** - Ethereum JavaScript Library
- **Vite** - Next Generation Frontend Tooling
- **Pinia** - Vue Store
- **Vue I18n** - Международная локализация
- **WalletConnect** - Протокол подключения кошельков
- **ESLint** - Линтер для JavaScript и Vue
- **Prettier** - Форматтер кода
- **Husky** - Git хуки
- **lint-staged** - Линтинг измененных файлов
- **Commitlint** - Валидация сообщений коммитов
- **TypeScript ESLint** - Анализ TypeScript
- **ESLint Security Plugin** - Проверка безопасности
- **ESLint Import Plugin** - Анализ импортов
- **ESLint JSX A11y Plugin** - Проверка доступности

## CI/CD

Проект использует GitHub Actions для автоматизации процессов непрерывной интеграции и доставки (CI/CD).

### Workflow файлы

В проекте настроены следующие GitHub Actions workflow:

#### 1. CI (`.github/workflows/ci.yml`)

Основной пайплайн непрерывной интеграции, который запускается при push и pull request в ветки `main`, `develop`, `staging`, `production`.

**Выполняемые проверки:**

- Установка зависимостей (`npm ci`)
- Линтинг кода (`npm run lint`)
- Проверка форматирования (`npm run format:check`)
- Проверка типов (`npm run type-check`)
- Запуск тестов с покрытием (`npm run test:ci`)
- Аудит безопасности (`npm run security:audit`)
- Проверка безопасности (`npm run security:check`)
- Загрузка отчётов покрытия в Codecov
- Загрузка артефактов покрытия

#### 2. Tests (`.github/workflows/test.yml`)

Пайплайн для запуска тестов с матричным тестированием на разных версиях Node.js (18.x, 20.x).

**Особенности:**

- Матричное тестирование на Node.js 18.x и 20.x
- Генерация отчётов покрытия
- Интеграция с Codecov
- Комментирование PR с результатами покрытия
- Загрузка артефактов покрытия

#### 3. Lint (`.github/workflows/lint.yml`)

Пайплайн для проверки качества кода.

**Выполняемые проверки:**

- ESLint проверка
- Проверка форматирования Prettier
- Проверка типов TypeScript

#### 4. Security (`.github/workflows/security.yml`)

Пайплайн для проверки безопасности проекта.

**Выполняемые проверки:**

- Аудит зависимостей npm
- Проверка безопасности скриптом
- Сканирование на утечки секретов (Gitleaks)
- Сканирование уязвимостей (Trivy, Snyk)
- CodeQL анализ

Запускается:

- При push и pull request в основные ветки
- Еженедельно по расписанию (каждое воскресенье в 00:00)
- Вручную через `workflow_dispatch`

#### 5. Deploy (`.github/workflows/deploy.yml`)

Пайплайн для деплоя приложения.

**Особенности:**

- Деплой в production при push в ветку `production`
- Деплой в staging/production вручную через `workflow_dispatch`
- Деплой preview для pull requests
- Комментирование PR с URL preview

### Dependabot

Настроен автоматический обновитель зависимостей (`.github/dependabot.yml`).

**Настройки:**

- Проверка обновлений каждую неделю (понедельник, 09:00 по времени Europe/Sofia)
- Группировка обновлений по типам зависимостей
- Автоматическое создание PR для обновлений
- Лейблы: `dependencies`, `npm`, `github-actions`

### Настройка секретов GitHub

Для работы CI/CD пайплайнов необходимо настроить следующие секреты в настройках репозитория (`Settings` → `Secrets and variables` → `Actions`):

| Секрет             | Описание                                      | Обязательный |
| ------------------ | --------------------------------------------- | ------------ |
| `CODECOV_TOKEN`    | Токен для загрузки отчётов покрытия в Codecov | Да           |
| `SNYK_TOKEN`       | Токен для сканирования уязвимостей через Snyk | Нет          |
| `GITLEAKS_LICENSE` | Лицензия для Gitleaks (если требуется)        | Нет          |

**Получение токена Codecov:**

1. Перейдите на [codecov.io](https://codecov.io)
2. Войдите через GitHub
3. Добавьте репозиторий
4. Скопируйте токен из настроек репозитория
5. Добавьте его как секрет `CODECOV_TOKEN`

**Получение токена Snyk:**

1. Перейдите на [snyk.io](https://snyk.io)
2. Зарегистрируйтесь или войдите
3. Скопируйте токен из настроек аккаунта
4. Добавьте его как секрет `SNYK_TOKEN`

### Статусы бейджей

Бейджи в начале README.md показывают текущий статус CI/CD:

- **CI/CD** - Статус основного CI пайплайна
- **Tests** - Статус тестирования
- **Lint** - Статус проверки качества кода
- **Security** - Статус проверки безопасности
- **codecov** - Покрытие кода
- **npm version** - Версия пакета в npm
- **License** - Тип лицензии

### Локальный запуск проверок

Перед пушем в репозиторий рекомендуется запускать те же проверки, что и в CI/CD:

```bash
# Полный комплекс проверок (как в CI)
npm run analyze

# Или по отдельности
npm run lint
npm run format:check
npm run type-check
npm run test:ci
npm run security:audit
npm run security:check
```

### Troubleshooting

#### Проблема: Workflow не запускается

**Решение:**

- Убедитесь, что workflow файлы находятся в `.github/workflows/`
- Проверьте синтаксис YAML файлов
- Убедитесь, что ветка настроена в `on.branches`

#### Проблема: Codecov не загружает отчёты

**Решение:**

- Проверьте, что секрет `CODECOV_TOKEN` настроен
- Убедитесь, что файл `coverage/lcov.info` генерируется
- Проверьте логи workflow для деталей ошибки

#### Проблема: Dependabot не создаёт PR

**Решение:**

- Убедитесь, что Dependabot включён в настройках репозитория
- Проверьте синтаксис `.github/dependabot.yml`
- Убедитесь, что у Dependabot есть доступ к репозиторию

## Установка

### Требования

- Node.js >= 16.x
- npm >= 8.x или yarn >= 1.21.x

### Установка зависимостей

```bash
npm install
```

## Запуск проекта

### Режим разработки

```bash
npm run dev
```

Приложение будет доступно по адресу `http://localhost:9000`

### Сборка для продакшена

```bash
npm run build
```

Собранные файлы будут находиться в папке `dist/spa`

### Линтинг и форматирование кода

Проект использует ESLint и Prettier для поддержания качества кода и единообразного стиля.

#### Доступные команды

```bash
# Проверка кода на ошибки линтинга (только src/)
npm run lint

# Автоматическое исправление ошибок линтинга
npm run lint:fix

# Форматирование кода с Prettier
npm run format

# Проверка форматирования без исправления
npm run format:check
```

#### Конфигурация ESLint

Конфигурация ESLint находится в файле [`.eslintrc.js`](.eslintrc.js) и включает:

- **Vue 3 правила**: Поддержка Vue 3 Composition API, строгие правила для компонентов
- **Quasar правила**: Специфические правила для Quasar компонентов
- **Строгие правила ESLint**: Включены правила для предотвращения распространенных ошибок
- **Интеграция с Prettier**: Конфликтующие правила отключены

Основные правила:

- Использование `const` вместо `var`
- Строгая типизация для пропсов и emits в Vue компонентах
- Отсутствие неиспользуемых переменных
- Единый стиль кода

#### Конфигурация Prettier

Конфигурация Prettier находится в файле [`.prettierrc`](.prettierrc):

```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "trailingComma": "none"
}
```

#### Игнорируемые файлы

Файлы, исключенные из линтинга и форматирования, указаны в:

- [`.eslintignore`](.eslintignore) - для ESLint
- [`.prettierignore`](.prettierignore) - для Prettier

#### Настройка VSCode

Для автоматического форматирования при сохранении в VSCode, настройки находятся в [`.vscode/settings.json`](.vscode/settings.json):

- Автоматическое форматирование при сохранении (`editor.formatOnSave`)
- Автоматическое исправление ошибок ESLint при сохранении
- Prettier как форматтер по умолчанию

#### Рекомендации по использованию

1. **Перед коммитом**: Всегда запускайте `npm run lint:fix` и `npm run format`
2. **В процессе разработки**: Используйте `npm run lint` для проверки кода
3. **В CI/CD**: Добавьте `npm run lint` и `npm run format:check` в пайплайн

## Статический анализ и безопасность

Проект настроен с комплексной системой статического анализа для обеспечения качества кода и безопасности.

### Инструменты статического анализа

#### ESLint плагины

Конфигурация ESLint (`.eslintrc.js`) включает следующие плагины:

- **@typescript-eslint** - Анализ TypeScript кода (даже в JS проекте)
- **eslint-plugin-import** - Проверка правильности импортов и их порядка
- **eslint-plugin-jsx-a11y** - Проверка доступности JSX/Vue компонентов
- **eslint-plugin-security** - Проверка на уязвимости безопасности
- **eslint-plugin-vue** - Специфические правила для Vue 3

### Доступные команды

#### Анализ кода

```bash
# Проверка типов (TypeScript)
npm run type-check

# Анализ уязвимостей зависимостей
npm run audit

# Исправление уязвимостей зависимостей
npm run audit:fix

# Принудительное исправление всех уязвимостей
npm run audit:fix:force

# Комплексный анализ (линтинг + форматирование + аудит + безопасность)
npm run analyze
```

#### Проверка безопасности

```bash
# Проверка на утечки секретов и уязвимости
npm run security:check

# Аудит зависимостей с высоким уровнем критичности
npm run security:audit
```

### Git хуки (Husky)

Проект использует Husky для автоматического выполнения проверок при коммите.

#### Pre-commit хук

Автоматически запускается перед каждым коммитом:

- Линтинг измененных файлов (lint-staged)
- Форматирование кода

#### Commit-msg хук

Проверяет сообщения коммитов на соответствие Conventional Commits:

- `feat:` - Новая функциональность
- `fix:` - Исправление бага
- `docs:` - Изменения в документации
- `style:` - Изменения стиля кода
- `refactor:` - Рефакторинг кода
- `perf:` - Улучшение производительности
- `test:` - Добавление или изменение тестов
- `chore:` - Обслуживание проекта
- `ci:` - Изменения в CI/CD
- `build:` - Изменения в системе сборки
- `security:` - Исправления безопасности

**Примеры правильных сообщений коммитов:**

```
feat: добавить компонент WalletConnect
fix: исправить ошибку при переводе токенов
docs: обновить README
security: исправить уязвимость в обработке токенов
```

### lint-staged

Настроен для автоматического линтинга и форматирования только измененных файлов:

```json
{
  "*.{js,vue}": ["eslint --fix", "prettier --write"],
  "*.{css,scss,md,json}": ["prettier --write"]
}
```

### Проверка безопасности

Скрипт `security-check.js` выполняет следующие проверки:

1. **Поиск утечек секретов**:
   - API ключи
   - Секретные ключи
   - Пароли
   - Токены авторизации
   - AWS ключи
   - Приватные ключи
   - GitHub токены
   - Slack токены
   - URL баз данных

2. **Аудит зависимостей**:
   - Проверка уязвимостей в npm пакетах
   - Отображение уровня критичности
   - Рекомендации по исправлению

### Интеграция с CI/CD

Добавьте следующие шаги в ваш CI/CD пайплайн:

```yaml
# Пример для GitHub Actions
- name: Run static analysis
  run: |
    npm run lint
    npm run format:check
    npm run type-check
    npm run security:check
    npm run audit

- name: Run comprehensive analysis
  run: npm run analyze
```

### Конфигурационные файлы

- **`.eslintrc.js`** - Конфигурация ESLint
- **`.prettierrc`** - Конфигурация Prettier
- **`.commitlintrc.js`** - Конфигурация Commitlint
- **`.husky/pre-commit`** - Pre-commit хук
- **`.husky/commit-msg`** - Commit-msg хук
- **`scripts/security-check.js`** - Скрипт проверки безопасности

### .gitattributes

Файл `.gitattributes` в корневой директории проекта обеспечивает:

- Правильную обработку концов строк (LF для всех текстовых файлов)
- Корректное отображение бинарных файлов
- Правильную работу с Git LFS

### Рекомендации по работе

#### Перед коммитом

1. Запустите комплексный анализ:

   ```bash
   npm run analyze
   ```

2. Если есть проблемы, исправьте их:

   ```bash
   npm run lint:fix
   npm run format
   npm run audit:fix
   ```

3. Проверьте безопасность:
   ```bash
   npm run security:check
   ```

#### Ежедневная работа

1. В процессе разработки используйте:

   ```bash
   npm run lint        # Проверка кода
   npm run type-check  # Проверка типов
   ```

2. Перед пушем в репозиторий:
   ```bash
   npm run analyze     # Полный анализ
   ```

#### Регулярные проверки

1. **Еженедельно**:

   ```bash
   npm run audit       # Проверка зависимостей
   npm run security:check  # Проверка безопасности
   ```

2. **Перед релизом**:
   ```bash
   npm run analyze     # Полный комплексный анализ
   ```

### Проблемы и решения

#### Проблема: Pre-commit хук не запускается

**Решение:**

```bash
# Переустановите Husky
npm run prepare
```

#### Проблема: Commitlint отклоняет коммит

**Решение:**
Используйте правильный формат сообщения коммита:

```
<type>: <description>

[optional body]

[optional footer]
```

#### Проблема: Найдены уязвимости зависимостей

**Решение:**

```bash
# Попробуйте автоматическое исправление
npm run audit:fix

# Если не помогло, обновите пакеты вручную
npm update <package-name>
```

#### Проблема: Найдены секреты в коде

**Решение:**

1. Удалите секреты из кода
2. Используйте переменные окружения (`.env`)
3. Добавьте `.env` в `.gitignore`
4. Отзовите скомпрометированные секреты

### Дополнительные ресурсы

- [ESLint документация](https://eslint.org/docs/latest/)
- [Prettier документация](https://prettier.io/docs/en/)
- [Husky документация](https://typicode.github.io/husky/)
- [lint-staged документация](https://github.com/okonet/lint-staged)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitlint документация](https://commitlint.js.org/)

#### Установка расширений VSCode

Для наилучшего опыта разработки установите следующие расширения:

- ESLint (`dbaeumer.vscode-eslint`)
- Prettier (`esbenp.prettier-vscode`)
- Vue - Official (`Vue.volar`)
- EditorConfig (`EditorConfig.EditorConfig`)

## Конфигурация

### Переменные окружения

Создайте файл `.env` в корневой директории проекта на основе `.env.example`:

```bash
cp .env.example .env
```

Пример содержимого `.env`:

```env
# WalletConnect Project ID
# Получите на https://cloud.walletconnect.com/
WALLET_CONNECT_PROJECT_ID=your_project_id_here
```

### Настройка WalletConnect Project ID

1. Перейдите на [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Зарегистрируйтесь или войдите в аккаунт
3. Создайте новый проект
4. Скопируйте Project ID
5. Вставьте его в файл `.env` вместо `your_project_id_here`

### Конфигурация контрактов

Адреса контрактов указаны в `src/config/contracts.js`:

- **CXBT Diamond Proxy**: `0x90C41F9c7Ee0dA9Ce1760be857a760915B30267b`
- **PAID Token**: `0x60a3e35cc302bfa44cb288bc5a4f316fdb1adb42`
- **Chain ID (Base)**: `8453`

## Поддерживаемые языки

Приложение поддерживает следующие языки:

- 🇬🇧 English (en)
- 🇷🇺 Русский (ru)
- 🇩🇪 Deutsch (de)
- 🇫🇷 Français (fr)
- 🇨🇳 中文 (zh)
- 🇧🇬 Български (bg)

Язык выбирается автоматически на основе настроек браузера или может быть изменен вручную через селектор языков в интерфейсе.

## Структура проекта

```
frontend/
├── src/
│   ├── components/       # Vue компоненты
│   │   ├── WalletConnect.vue
│   │   ├── TokenBalances.vue
│   │   ├── UnlockTokens.vue
│   │   ├── TransferTokens.vue
│   │   └── LanguageSelector.vue
│   ├── config/          # Конфигурация
│   │   ├── contracts.js  # Адреса контрактов и ABI
│   │   └── web3.js       # Web3 конфигурация
│   ├── composables/     # Vue Composables
│   │   ├── useContract.js
│   │   └── useWeb3.js
│   ├── i18n/            # Файлы переводов
│   │   ├── en.js
│   │   ├── ru.js
│   │   ├── de.js
│   │   ├── fr.js
│   │   ├── zh.js
│   │   └── bg.js
│   ├── layouts/         # Layouts
│   │   └── MainLayout.vue
│   ├── pages/           # Страницы
│   │   ├── IndexPage.vue
│   │   └── ErrorNotFound.vue
│   ├── router/          # Vue Router
│   │   └── routes.js
│   ├── stores/          # Pinia Stores
│   │   ├── wallet.js
│   │   ├── tokens.js
│   │   └── i18n.js
│   ├── boot/            # Boot files
│   │   ├── router.js
│   │   ├── web3.js
│   │   └── i18n.js
│   ├── css/             # Стили
│   │   └── app.scss
│   ├── App.vue          # Root компонент
│   └── main.js          # Entry point
├── public/              # Статические файлы
│   └── favicon.svg      # Favicon
├── .env                 # Переменные окружения (создается пользователем)
├── .env.example         # Пример переменных окружения
├── index.html           # HTML шаблон
├── package.json         # Зависимости
├── quasar.config.js     # Quasar конфигурация
└── vite.config.js       # Vite конфигурация
```

## Компоненты приложения

### WalletConnect

Компонент для подключения Web3 кошелька. Поддерживает MetaMask и WalletConnect.

### TokenBalances

Отображает балансы токенов пользователя и его статус (whitelist/blacklist).

### UnlockTokens

Позволяет разблокировать токены с помощью PAID токенов.

### TransferTokens

Позволяет переводить токены другим адресам.

### LanguageSelector

Компонент для выбора языка интерфейса.

## Статусы пользователей

Приложение поддерживает три статуса пользователей:

1. **Normal** - Обычный пользователь с полным доступом к функциям
2. **Whitelisted** - Пользователь с особыми привилегиями (все токены разблокированы, можно переводить заблокированные токены)
3. **Blacklisted** - Ограниченный пользователь (разблокировка и переводы недоступны)

## Разработка

### Добавление нового языка

1. Создайте файл перевода в `src/i18n/{lang}.js`
2. Добавьте импорт в `src/boot/i18n.js`
3. Добавьте язык в `src/stores/i18n.js`

### Изменение стилей

Глобальные стили находятся в `src/css/app.scss`. Вы можете настроить цвета и другие переменные Quasar.

## Поддерживаемые сети

- **Base** (Chain ID: 8453) - Основная сеть

## Тестирование

Проект использует Vitest для модульного тестирования с поддержкой покрытия кода.

### Запуск тестов

```bash
# Запуск всех модульных тестов
npm run test:unit

# Запуск тестов в режиме watch (автоматический перезапуск при изменениях)
npm run test:unit:watch

# Запуск тестов с UI интерфейсом
npm run test:unit:ui

# Запуск тестов с генерацией отчёта о покрытии
npm run test:unit:coverage
```

### Покрытие кода

Проект настроен для отслеживания покрытия кода с использованием `@vitest/coverage-v8`.

#### Команды для генерации отчётов покрытия

```bash
# Запуск всех тестов с генерацией отчёта о покрытии (все форматы)
npm run test:coverage

# Генерация HTML отчёта о покрытии
npm run test:coverage:html

# Генерация JSON отчёта о покрытии
npm run test:coverage:json

# Генерация LCOV отчёта (для CI/CD)
npm run test:coverage:lcov

# Запуск тестов в CI/CD режиме (lcov + json)
npm run test:ci
```

#### Просмотр отчётов покрытия

После запуска `npm run test:coverage` или `npm run test:coverage:html`:

1. **HTML отчёт**: Откройте файл `coverage/index.html` в браузере
   - Интерактивный просмотр покрытия по файлам
   - Подсветка покрытых и непокрытых строк кода
   - Детальная статистика по каждому файлу

2. **JSON отчёт**: Файл `coverage/coverage-final.json`
   - Машиночитаемый формат для интеграции с инструментами
   - Используется для анализа и автоматизации

3. **LCOV отчёт**: Файл `coverage/lcov.info`
   - Стандартный формат для CI/CD сервисов
   - Используется для интеграции с Codecov, Coveralls и др.

#### Понимание метрик покрытия

Покрытие кода измеряет, какая часть вашего кода выполняется тестами. Проект использует следующие метрики:

| Метрика        | Описание                                                     | Минимальный порог |
| -------------- | ------------------------------------------------------------ | ----------------- |
| **Statements** | Процент выполненных операторов кода                          | 70%               |
| **Branches**   | Процент выполненных ветвлений (if/else, тернарные операторы) | 70%               |
| **Functions**  | Процент вызванных функций                                    | 70%               |
| **Lines**      | Процент выполненных строк кода                               | 70%               |

**Пример интерпретации:**

- Если **Statements: 85%**, это означает, что 85% всех операторов в коде были выполнены тестами
- Если **Branches: 60%**, это означает, что только 60% всех возможных путей выполнения (ветвлений) были протестированы
- Если **Functions: 90%**, это означает, что 90% всех функций были вызваны хотя бы один раз

**Примечание:** Высокий процент покрытия не гарантирует отсутствие багов, но низкий процент указывает на недостаточное тестирование.

#### Пороги покрытия

Проект настроен с минимальными порогами покрытия:

- **Statements**: 70%
- **Branches**: 70%
- **Functions**: 70%
- **Lines**: 70%

Если покрытие падает ниже указанных порогов, тесты завершатся с ошибкой. Это предотвращает снижение качества кода.

#### Исключения из покрытия

Следующие файлы и директории исключены из подсчёта покрытия:

- Все тестовые файлы (`test/**`, `**/*.spec.js`, `**/*.spec.ts`)
- Boot файлы (`src/boot/**`)
- Router файлы (`src/router/**`)
- Layout файлы (`src/layouts/**`)
- Страница ошибки (`src/pages/ErrorNotFound.vue`)
- Файлы конфигурации (`**/*.config.js`, `**/*.config.ts`)
- Скрипты (`scripts/**`)
- Публичные файлы (`public/**`)
- Node modules, dist, coverage и другие служебные директории

#### Интеграция с CI/CD

Для интеграции отчётов покрытия с CI/CD сервисами:

**Codecov:**

1. Создайте аккаунт на [codecov.io](https://codecov.io)
2. Добавьте репозиторий
3. Добавьте в CI/CD пайплайн:

```yaml
# Пример для GitHub Actions
- name: Run tests with coverage
  run: npm run test:ci

- name: Upload coverage to Codecov
  uses: codecov/codecov-action@v4
  with:
    files: ./coverage/lcov.info
    flags: unittests
    name: codecov-umbrella
```

**Coveralls:**

1. Создайте аккаунт на [coveralls.io](https://coveralls.io)
2. Добавьте репозиторий
3. Добавьте в CI/CD пайплайн:

```yaml
# Пример для GitHub Actions
- name: Run tests with coverage
  run: npm run test:ci

- name: Coveralls
  uses: coverallsapp/github-action@v2
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
    path-to-lcov: ./coverage/lcov.info
```

#### Рекомендации по использованию

1. **Перед коммитом**: Запускайте `npm run test:unit` для проверки тестов
2. **Перед пулл-реквестом**: Запускайте `npm run test:coverage` для проверки покрытия
3. **В CI/CD**: Используйте `npm run test:ci` для генерации отчётов
4. **Регулярно**: Просматривайте HTML отчёт для выявления непокрытых участков кода

### Для тестирования приложения рекомендуется использовать:

- MetaMask или другой Web3 кошелек
- Testnet Base Sepolia для тестирования без реальных средств

## Лицензия

MIT

## Поддержка

Для вопросов и предложений обращайтесь к команде разработки CXBT.
