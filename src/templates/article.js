import React, { useEffect } from "react"
import { graphql } from "gatsby"

import "./article.css"
import { ArticleTitle } from "../components/ArticleTitle"
import { ArticleContent } from "../components/ArticleContent"
import { ArticleSide } from "../components/ArticleSide"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  useEffect(() => {
    const articleSide = document.querySelector(".article-side")
    articleSide.classList.toggle("article-side-open")
  }, [])

  return (
    <div className="article-container">

      {/* <div className="article-side" /> */}
      <ArticleSide className="article-side" />

      <div className="article">
        <ArticleTitle title={frontmatter.title} />
        <h2>{frontmatter.date}</h2>
        <ArticleContent content={html} />
      </div>

    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        description
      }
    }
  }
`
