import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { ArticleTitle } from "../components/ArticleTitle"
import { ArticleContent } from "../components/ArticleContent"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className="article">
        <ArticleTitle title={frontmatter.title} />
        <ArticleContent content={html} />
      </div>
    </Layout>
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
