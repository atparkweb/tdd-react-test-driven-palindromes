module.exports = {
  plugins: ['jest'],
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    "jest/globals": true,
    node: true,
  },
};