const path = require('path');

const paths = {
  public: path.resolve(__dirname, './public'),
  src: path.resolve(__dirname, './src'),
};

exports.modifyWebpackConfig = ({ config }) =>
  config.merge({
    resolve: {
      alias: {
        css: `${paths.src}/assets/css`,
      },
    },
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
