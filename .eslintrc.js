module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb-typescript/base',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js', '.prettierrc.js', 'craco.config.js'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
};
