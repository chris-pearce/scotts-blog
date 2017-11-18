import React from 'react'

export default function Template({
  data
}) {
  const { contentfulArticle: post } = data;
  console.log(data)
  return (
    <h1>{post.title}</h1>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath {
    {
    contentfulArticle {
      title
      body {
        body
      }
    }
  }
`;