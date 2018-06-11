const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const postCSSConfig = require('./postcss.config');
const paths = require('./paths');

/**
 * ✌︎ Resources
 * https://github.com/gatsbyjs/gatsby/issues/318
 * https://github.com/MoOx/postcss-cssnext/issues/334
 */
module.exports = ({ config }) => {
  config.merge({
    postcss(wp) {
      return postCSSConfig(wp);
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        logLevel: 'silent',
        openAnalyzer: false,
        reportFilename: `${paths.public}/bundleAnalyzerReport.html`,
      }),
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    ],
    resolve: {
      modulesDirectories: [paths.root, 'node_modules'],
      extensions: ['', '.js', '.jsx', '.json'],
    },
  });

  config.loader('svg', {
    test: /\.svg$/,
    loader: `svgo-loader?${require('./svg.config')}`,
  });

  return config;
};
