const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier', 'plugin:flowtype/recommended'],
  globals: {
    PropTypes: false,
    React: false,
  },
  parser: 'babel-eslint',
  //plugins: ['import', 'jsx-a11y', 'flowtype'],
  plugins: ['import', 'flowtype'],
  rules: {
    'flowtype/space-after-type-colon': [2, 'always', { allowLineBreak: true }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'import/extensions': 0,
    'import/named': 2,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 1,
    'import/prefer-default-export': 0,
    'max-len': [2, 80, { ignoreUrls: true }],
    'react/jsx-filename-extension': 0,
    'react/no-unused-prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
  },
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       paths: [path.resolve(__dirname, 'src')],
  //     },
  //     webpack: {
  //       config: 'config/modifyWebpack.js',
  //     },
  //   },
  // },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          path.resolve(__dirname, './src'),
          path.resolve(__dirname, './src/assets'),
        ],
      },
    },
  },
};
