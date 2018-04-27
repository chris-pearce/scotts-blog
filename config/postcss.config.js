const postcssImport = require('postcss-import');
const postcssNext = require('postcss-cssnext');
const postcssBrowserReporter = require('postcss-browser-reporter');
const postcssReporter = require('postcss-reporter');
const tokens = require('./../src/constants/tokens.json');

module.exports = wp => [
  postcssImport({
    addDependencyTo: wp,
  }),
  postcssNext({
    features: {
      autoprefixer: {
        flexbox: false,
      },
      customProperties: {
        variables: tokens,
      },
    },
  }),
  postcssBrowserReporter,
  postcssReporter,
];
