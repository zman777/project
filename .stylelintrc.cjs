module.exports = {
  extends: [
    'stylelint-config-standard',           // 标准配置
    'stylelint-config-standard-scss',      // SCSS 标准配置
    'stylelint-config-standard-vue',       // Vue 文件配置
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.{css,scss}'],
      customSyntax: 'postcss-scss',
    },
  ],
  rules: {
    // Vue 相关规则
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['deep', 'global'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
      },
    ],
    // SCSS 相关规则
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': null, // 允许任意变量命名
    // 放宽的规则
    'selector-class-pattern': null,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'font-family-no-duplicate-names': null, // 允许重复的字体名称
    // CSS 属性排序
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'flex-direction',
      'justify-content',
      'align-items',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'width',
      'min-width',
      'max-width',
      'height',
      'min-height',
      'max-height',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'font-size',
      'font-family',
      'font-weight',
      'line-height',
      'color',
      'background',
      'background-color',
      'border',
      'border-radius',
      'opacity',
      'transform',
      'transition',
    ],
  },
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
}
