const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['react', 'import', 'jsx-a11y'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 1,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
};
