module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', '@vue/standard'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/html-indent': ['error', 2],
    'vue/html-self-closing': 'error',
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': ['error', 'double'],
    'vue/order-in-components': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
