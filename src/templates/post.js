import React from "react"
import * as PropTypes from "prop-types"

const propTypes = {
  data: PropTypes.object.isRequired,
}

class PostTemplate extends React.Component {
  render() {
    const article = this.props.data.contentfulArticle
    return (
      <div>
        <h1>{article.title}</h1>
        <div
            dangerouslySetInnerHTML={{
              __html: article.body.childMarkdownRemark.html,
            }}
          />
      </div>
    )
  }
}

PostTemplate.propTypes = propTypes

export default PostTemplate

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
`