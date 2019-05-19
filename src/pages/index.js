import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { ArticleList } from "../components/Article/ArticleList"

const Blog = () => (
  <Layout>
    <SEO title="Home" keywords={[`javascript`, `blog`, `react`]} />
    <ArticleList />
  </Layout>
)

export default Blog
