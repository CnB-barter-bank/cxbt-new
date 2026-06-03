import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./tests/setup.js'],
    include: ['tests/**/*.{test,spec}.{js,ts}'],
    exclude: ['node_modules', 'dist', '.quasar'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**/*.{js,ts,vue}'],
      exclude: [
        'src/main.js',
        'src/shims-vue.d.ts',
        'src/**/*.d.ts',
        'src/**/*.spec.js',
        'src/**/*.test.js',
      ],
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'src': fileURLToPath(new URL('./src', import.meta.url)),
      'stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@/i18n': fileURLToPath(new URL('./src/i18n', import.meta.url)),
    },
  },
})
