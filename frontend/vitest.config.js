import { fileURLToPath } from 'node:url'
import { configDefaults, defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      src: fileURLToPath(new URL('./src', import.meta.url)),
      app: fileURLToPath(new URL('./src', import.meta.url)),
      components: fileURLToPath(new URL('./src/components', import.meta.url)),
      layouts: fileURLToPath(new URL('./src/layouts', import.meta.url)),
      pages: fileURLToPath(new URL('./src/pages', import.meta.url)),
      assets: fileURLToPath(new URL('./src/assets', import.meta.url)),
      boot: fileURLToPath(new URL('./src/boot', import.meta.url)),
      stores: fileURLToPath(new URL('./src/stores', import.meta.url)),
      composables: fileURLToPath(new URL('./src/composables', import.meta.url)),
      config: fileURLToPath(new URL('./src/config', import.meta.url)),
      i18n: fileURLToPath(new URL('./src/i18n', import.meta.url))
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./test/unit/setup.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        ...configDefaults.coverage.exclude,
        'test/**',
        'test/**/*',
        'test/**/*.spec.js',
        'test/**/*.spec.ts',
        'src/boot/**',
        'src/boot/**/*',
        'src/router/**',
        'src/router/**/*',
        'src/layouts/**',
        'src/layouts/**/*',
        'src/pages/ErrorNotFound.vue',
        '**/*.spec.js',
        '**/*.spec.ts',
        '**/node_modules/**',
        '**/.quasar/**',
        '**/dist/**',
        '**/coverage/**',
        '**/*.config.js',
        '**/*.config.ts',
        '**/quasar.config.*',
        '**/vite.config.*',
        '**/vitest.config.*',
        '**/.eslintrc.*',
        '**/.prettierrc.*',
        '**/.commitlintrc.*',
        '**/.editorconfig',
        '**/.env.*',
        '**/scripts/**',
        '**/public/**'
      ],
      all: true,
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
      include: ['src/**/*.{js,vue}']
    },
    include: ['test/unit/**/*.spec.js'],
    exclude: ['node_modules', '.quasar', 'dist']
  }
})
