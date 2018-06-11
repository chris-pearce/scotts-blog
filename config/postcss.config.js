const tokens = require('../src/constants/tokens.json');

module.exports = wp => [
  require('postcss-import')({
    addDependencyTo: wp,
  }),
  require('postcss-cssnext')({
    browsers: ['> 1%', 'not IE 11'],
    features: {
      customProperties: {
        variables: tokens,
        warnings: true,
      },
      filter: false,
      fontVariant: false,
    },
  }),
];
