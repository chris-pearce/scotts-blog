const webpack = require('webpack');
const path = require('path');

const { resolve } = path;

const paths = {
  public: resolve(__dirname, './public'),
  src: resolve(__dirname, './src'),
};

exports.modifyWebpackConfig = ({ config }) =>
  config.merge({
    resolve: {
      alias: {
        css: `${paths.src}/assets/css`,
      },
    },
    plugins: [
      // Provide these dependencies globally so that we don't need to keep importing them
      new webpack.ProvidePlugin({
        PropTypes: 'prop-types',
        React: 'react',
      }),
    ],
  });

// exports.modifyBabelrc = ({ babelrc }) => {
//   return {
//     ...babelrc,
//     plugins: babelrc.plugins.concat([
//       [`transform-react-jsx`, { pragma: `Glamor.createElement` }],
//       `glamor/babel-hoist`,
//     ]),
//   };
// };
