module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['import', 'react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2022,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: 'tsconfig.eslint.json'
  },
  rules: {
    'linebreak-style': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        arrowParens: 'always',
        singleQuote: true,
        printWidth: 100,
        jsxBracketSameLine: false,
        trailingComma: 'none'
      }
    ]
  }
};
