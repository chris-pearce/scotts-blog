const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const paths = require('./paths');
const postcssImport = require('postcss-import');
const postcssNext = require('postcss-cssnext');
const postcssBrowserReporter = require('postcss-browser-reporter');
const postcssReporter = require('postcss-reporter');

/**
 * ✌︎ Resources
 * https://github.com/gatsbyjs/gatsby/issues/318
 * https://github.com/MoOx/postcss-cssnext/issues/334
 */
module.exports = ({ config }) => {
  config.merge({
    resolve: {
      alias: {
        components: `${paths.src}/components`,
        constants: `${paths.src}/constants`,
        css: `${paths.src}/assets/css`,
        images: `${paths.src}/assets/images`,
      },
    },
    postcss(wp) {
      return [
        postcssImport({ addDependencyTo: wp }),
        postcssNext({
          features: {
            autoprefixer: {
              flexbox: 'no-2009',
            },
          },
        }),
        postcssBrowserReporter,
        postcssReporter,
      ];
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
      }),
      new webpack.ProvidePlugin({
        PropTypes: 'prop-types',
        React: 'react',
      }),
    ],
  });
};
