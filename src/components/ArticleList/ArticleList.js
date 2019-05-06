import React from "react"
import { StaticQuery, graphql } from "gatsby"

import "./ArticleList.css"
import { ArticleCard } from "../ArticleCard"

/**
 * Returns the read time in minutes based on the article's
 * number of words
 */
const getReadTime = (articleHtml) => {
  const words = articleHtml.split(' ').length
  const wordsPerMinute = 200
  const minutes = words / wordsPerMinute
  return Math.ceil(minutes)
}

const ArticleList = () => {
  return (
    <div className="list">
      <StaticQuery
        query={graphql`
          query ArticlesQuery {
            allMarkdownRemark(sort: {
              fields: [frontmatter___date]
              order: DESC
            }) {
              edges {
                node {
                  html
                  frontmatter {
                    title,
                    description,
                    path,
                    date
                  }
                }
              }
            }
          }
        `}
        render={data => {
          return (
            data.allMarkdownRemark.edges.map(edge => {
              const article = edge.node.frontmatter
              const readTime = getReadTime(edge.node.html)
              article.readTime = readTime
              return <ArticleCard article={article} key={article.path} />
            })
          )
        }}
      />
    </div>
  )
}

export default ArticleList
