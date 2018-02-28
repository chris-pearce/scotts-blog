const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const Jarvis = require('webpack-jarvis');
const paths = require('./paths');
const postcssImport = require('postcss-import');
const postcssNext = require('postcss-cssnext');
const postcssBrowserReporter = require('postcss-browser-reporter');
const postcssReporter = require('postcss-reporter');

const svgoConfig = JSON.stringify({
  plugins: [
    { convertColors: { shorthex: false } },
    { removeAttrs: true },
    { removeDimensions: true },
    { removeViewBox: false },
  ],
});

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
        consts: `${paths.src}/constants`,
        css: `${paths.src}/assets/css`,
        images: `${paths.src}/assets/images`,
        utilities: `${paths.src}/utilities`,
      },
      root: paths.src,
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
      new Jarvis({
        port: 1337,
      }),
      new webpack.ProvidePlugin({
        PropTypes: 'prop-types',
        React: 'react',
      }),
    ],
  });

  config.loader('svg', {
    test: /\.svg$/,
    loader: `svgo-loader?${svgoConfig}`,
  });

  return config;
};
