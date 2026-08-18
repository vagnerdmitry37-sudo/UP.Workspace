// @ts-check
const eslint = require('@eslint/js');
const { defineConfig, globalIgnores } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = defineConfig([
  globalIgnores(['node_modules/', 'dist/', '.angular/', 'out-tsc/', 'coverage/']),
  {
    files: ['**/*.ts'],

    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],

    processor: angular.processInlineTemplates,

    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],

      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['projects/up-angular-ui/**/*.ts'],
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'up',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],

    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
  },
]);
