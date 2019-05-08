import React from "react"

import "./ArticleContent.scss"

const ArticleContent = (props) => {
  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  )
}

export default ArticleContent
