import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  {
    ignores: ['dist/**', 'node_modules/**', '*.min.js'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  ...tseslint.configs.recommended,
  pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  prettier,
  {
    rules: {
      // --- ESLint 核心规则 ---
      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unexpected-multiline': 'error', // 禁止空余的多行
      'no-useless-escape': 'off', // 禁止不必要的转义字符

      // --- TypeScript 规则 ---
      '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
      '@typescript-eslint/prefer-ts-expect-error': 'error', // 推荐使用 @ts-expect-error 而非 @ts-ignore
      '@typescript-eslint/no-explicit-any': 'off', // 允许使用 any 类型
      '@typescript-eslint/no-non-null-assertion': 'off', // 允许使用非空断言 !
      '@typescript-eslint/no-namespace': 'off', // 允许使用 namespace
      '@typescript-eslint/semi': 'off', // 关闭强制使用分号的规则（通常交给 Prettier 处理）

      // --- Vue 规则 ---
      'vue/multi-word-component-names': 'off', // 允许单字组件名
      'vue/no-mutating-props': 'off', // 允许修改 props（不推荐，但教程开了）
      'vue/attribute-hyphenation': 'off', // 允许属性使用驼峰命名
    },
  },
])
