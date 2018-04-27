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
    browsers: ['> 1%', 'not IE 11'],
    features: {
      customProperties: {
        variables: tokens,
        warnings: true,
      },
      filter: false, // TODO: this isn't working
    },
  }),
  postcssBrowserReporter,
  postcssReporter,
];
