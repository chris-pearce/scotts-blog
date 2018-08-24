const tokens = require('../src/constants/tokens').default;

const { pxToEm, pxToRem } = require(`../src/utils/pxToRelativeUnit`);

module.exports = wp => [
  require('postcss-import')({
    addDependencyTo: wp,
    path: ['.'],
  }),
  require('postcss-functions')({
    functions: {
      em: pxToEm,
      rem: pxToRem,
    },
  }),
  require('postcss-simple-vars')({ variables: tokens }),
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
