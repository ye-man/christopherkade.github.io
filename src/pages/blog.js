import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { ArticleList } from "../components/ArticleList"

const Blog = () => (
  <Layout>
    <SEO title="Blog" keywords={[`javascript`, `blog`, `react`]} />
    <ArticleList />
  </Layout>
)

export default Blog
