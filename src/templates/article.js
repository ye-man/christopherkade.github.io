import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ArticleTitle } from "../components/Article/ArticleTitle"
import { ArticleContent } from "../components/Article/ArticleContent"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} keywords={[`christopher`, `kade`, `react`, `javascript`, `vue`]} />
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
