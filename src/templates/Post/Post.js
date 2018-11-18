// @flow
/* eslint-disable react/no-danger */
import { StaticQuery, graphql } from 'gatsby';

export default function() {
  return (
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
          <h1>{data.contentfulArticle.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.contentfulArticle.body.childMarkdownRemark.html,
            }}
          />
        </article>
      )}
    />
  );
}
