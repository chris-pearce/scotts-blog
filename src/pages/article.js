import React from 'react'

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      <h1>My Site's Files</h1>
      <ul>
      {data.contentfulArticle()
        <li>
          {data.id}
          {data.title}
          }
        </li>
      )}
      </ul>
    </div>
  )
}

export const query = graphql`
  query contentful
  {
  contentfulArticle {
    title
    body {
      body
    }
  }
}`