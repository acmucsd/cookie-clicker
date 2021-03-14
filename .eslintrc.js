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
  rules: {
   "import/extensions": "off"
}
};
