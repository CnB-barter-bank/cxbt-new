module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'eslint-config-prettier',
    // 'plugin:security/recommended', // Temporarily disabled for testing
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: false
    },
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', /* '@typescript-eslint', */ 'security', 'import', 'jsx-a11y', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue', '.json']
      }
    }
  },
  rules: {
    // Prettier integration
    'prettier/prettier': 'warn',

    // Vue 3 Composition API rules
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-html': 'warn',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'warn',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    'vue/define-emits-declaration': 'error',
    'vue/define-props-declaration': 'error',
    'vue/no-setup-props-destructure': 'warn',
    'vue/no-unused-vars': 'error',
    'vue/padding-line-between-blocks': 'warn',
    'vue/prefer-separate-static-class': 'warn',
    'vue/prefer-true-attribute-shorthand': 'warn',

    // Quasar specific rules
    'vue/attribute-hyphenation': [
      'error',
      'never',
      {
        ignore: ['aria-*', 'data-*', 'slot-scope']
      }
    ],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/v-on-event-hyphenation': [
      'error',
      'never',
      {
        autofix: true,
        ignore: ['aria-*', 'data-*']
      }
    ],

    // ESLint core rules - strict mode
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    'no-duplicate-imports': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true
      }
    ],
    'no-shadow': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-constant-condition': 'warn',
    'no-irregular-whitespace': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    indent: 'off', // Handled by Prettier
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'keyword-spacing': 'error',
    'key-spacing': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'eol-last': ['error', 'always'],
    'no-new-object': 'error',
    'object-shorthand': ['error', 'always'],
    'no-array-constructor': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error',
    'template-curly-spacing': 'error',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state', 'ctx', 'config']
      }
    ],
    'no-return-await': 'error',
    'require-await': 'error',
    'no-throw-literal': 'error',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^src/', '^@/', 'quasar/wrappers', 'vue-i18n']
      }
    ],
    'prefer-promise-reject-errors': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-lonely-if': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-with': 'error',
    'no-delete-var': 'error',
    'no-extend-native': 'error',
    'no-new-wrappers': 'error',
    'no-sequences': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    yoda: 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-warning-comments': ['warn', { terms: ['TODO', 'FIXME', 'XXX'], location: 'start' }],
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'capitalized-comments': [
      'warn',
      'always',
      { ignoreInlineComments: true, ignoreConsecutiveComments: true }
    ],

    // Vue specific overrides
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 1 },
        multiline: { max: 1 }
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ],
    'vue/html-indent': 'off', // Handled by Prettier
    'vue/html-quotes': ['error', 'double'],
    'vue/no-v-text-v-html-on-component': 'error',
    'vue/order-in-components': 'warn',
    'vue/this-in-template': 'error',
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/v-slot-style': ['error', 'shorthand'],
    'vue/no-template-shadow': 'error',
    'vue/valid-v-bind-sync': 'error',
    'vue/no-mutating-props': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/no-dupe-v-else-if': 'error',
    'vue/no-parsing-error': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-reserved-props': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-template-key': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/no-unused-components': 'warn',
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: false
      }
    ],
    'vue/require-v-for-key': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-slot': 'error',
    'vue/valid-v-text': 'error'
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
