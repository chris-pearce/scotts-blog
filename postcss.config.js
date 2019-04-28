const postCssImport = require('postcss-import');
const postCssPresetEnv = require('postcss-preset-env');
const postCssFunctions = require('postcss-functions');
const postCssSimpleVars = require('postcss-simple-vars');
const paths = require('./paths');
// eslint-disable-next-line import/no-dynamic-require
const { tokens, utils } = require(`${paths.scripts}/cssifyTokens`);

module.exports = () => ({
  plugins: [
    postCssImport({ path: ['.'] }),
    postCssFunctions({
      functions: {
        em: utils.pxToEm,
        rem: utils.pxToRem,
      },
    }),
    postCssSimpleVars({
      variables: tokens,
    }),
    postCssPresetEnv({ stage: 0 }),
  ],
});
