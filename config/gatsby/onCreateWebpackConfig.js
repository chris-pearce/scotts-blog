const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const paths = require('../paths');

module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [paths.root, 'node_modules'],
    },
    plugins: [
      new webpack.IgnorePlugin(/^(xor|props)$/),
      new webpack.ProvidePlugin({ React: 'react' }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        logLevel: 'silent',
        openAnalyzer: false,
        reportFilename: `${paths.public}/bundleAnalyzerReport.html`,
      }),
    ],
  });
};
