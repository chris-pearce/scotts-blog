const webpack = require('webpack');
const path = require('path');

const paths = {
  public: path.resolve(__dirname, './public'),
  src: path.resolve(__dirname, './src'),
};

exports.modifyWebpackConfig = ({ config }) =>
  config.merge({
    resolve: {
      alias: {
        components: `${paths.src}/components`,
        css: `${paths.src}/assets/css`,
        images: `${paths.src}/assets/images`,
      },
    },
    plugins: [
      // Provide these dependencies globally so that we don't need
      // to keep importing them
      new webpack.ProvidePlugin({
        PropTypes: 'prop-types',
        React: 'react',
      }),
    ],
  });

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allContentfulArticle(limit: 1000) {
              edges {
                node {
                  id
                  title
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create post pages
        const postTemplate = path.resolve(`${paths.src}/templates/Post/Post.js`);
        // We want to create a detailed page for each product node.
        // We'll just use the Contentful id for the slug.
        result.data.allContentfulArticle.edges.forEach(edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/article/${edge.node.id}/`,
            component: postTemplate,
            context: {
              id: edge.node.id,
            },
          });
        });
      })
    );
  });
};
