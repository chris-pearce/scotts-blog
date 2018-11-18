const { graphql } = require('gatsby');
const paths = require('../paths');

module.exports = ({ actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    // Query for markdown nodes to use in creating pages
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

        // We want to create a detailed page for each product node. We'll just
        // use the Contentful id for the slug.
        result.data.allContentfulArticle.edges.forEach(edge => {
          // Gatsby uses Redux to manage its internal state. Plugins and sites
          // can use functions like "createPage" to interact with Gatsby.
          createPage({
            // Each page is required to have a `path` as well as a template
            // component. The`context` is optional but is often necessary so the
            // template can query data specific to each page.
            path: `/article/${edge.node.id}/`,
            component: `${paths.src}/templates/Post/Post.js`,
            context: {
              id: edge.node.id,
            },
          });
        });
      })
    );
  });
};
