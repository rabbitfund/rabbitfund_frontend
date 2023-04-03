module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'no-undef': 'off',
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 0,
    'vue/no-multiple-template-root': 0
  }
};
