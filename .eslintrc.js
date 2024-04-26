module.exports = {
  root: true,
  extends: '@react-native',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'react/prop-types': 0
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
};



