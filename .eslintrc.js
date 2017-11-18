const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    PropTypes: false,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'import', 'jsx-a11y'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'import/named': 2,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 1,
    'import/prefer-default-export': 0,
    'max-len': [2, 100, { ignoreUrls: true }],
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
  },
};
