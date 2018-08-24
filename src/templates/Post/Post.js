// @flow
type Props = {
  data: Object,
};

const Post = (props: Props) => {
  const article = props.data.contentfulArticle;

  return (
    <article>
      <h1>{article.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: article.body.childMarkdownRemark.html,
        }}
      />
    </article>
  );
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
