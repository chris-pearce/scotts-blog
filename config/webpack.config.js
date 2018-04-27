const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const paths = require('./paths');
const postCSSConfig = require('./postcss.config');
const svgConfig = require('./svg.config');

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
        utilities: `${paths.src}/utilities`,
      },
      root: paths.src,
    },
    postcss(wp) {
      return postCSSConfig(wp);
    },
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: `${paths.public}/bundleAnalyzerReport.html`,
        openAnalyzer: false,
      }),
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    ],
  });

  config.loader('svg', {
    test: /\.svg$/,
    loader: `svgo-loader?${svgConfig}`,
  });

  return config;
};
