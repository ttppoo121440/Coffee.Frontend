module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    indentation: 2,
    'no-descending-specificity': null, // 禁止特異性較低的選擇器在特異性較高的選擇器之後重寫
    'unit-no-unknown': true, // 禁止未知單位
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'extend',
          'at-root',
          'debug',
          'warn',
          'error',
          'if',
          'else',
          'for',
          'each',
          'while',
          'mixin',
          'include',
          'content',
          'return',
          'function',
        ],
      },
    ],
  },
};
