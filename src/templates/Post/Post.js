const Post = ({ data }) => {
  const article = data.contentfulArticle;

  /* eslint-disable react/no-danger */
  return (
    <div>
      <h1>{article.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: article.body.childMarkdownRemark.html,
        }}
      />
    </div>
  );
  /* eslint-enable react/no-danger */
};

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;

export const pageQuery = graphql`
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
`;
