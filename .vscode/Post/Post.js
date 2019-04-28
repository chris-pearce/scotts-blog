/* eslint-disable react/no-danger */
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query postQuery($id: String!) {
        contentfulArticle(id: { eq: $id }) {
          title
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `}
    render={data => (
      <article>
        <div
          dangerouslySetInnerHTML={{
            __html: data.contentfulArticle.body.childMarkdownRemark.html,
          }}
        />
      </article>
    )}
  />
);
