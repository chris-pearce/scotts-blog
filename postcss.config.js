const { pxToEm, pxToRem } = require('./src/utils/pxToRelativeUnit');
const tokens = require('./src/constants/tokens');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-functions': {
      functions: {
        em: pxToEm,
        rem: pxToRem,
      },
    },
    'postcss-simple-vars': { variables: tokens },
    'postcss-preset-env': { stage: 0 },
  },
};
