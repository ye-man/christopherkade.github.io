import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { ArticleList } from "../components/Article/ArticleList"
import { ArticleSearch } from "../components/Article/ArticleSearch"

const Blog = () => (
  <Layout>
    <SEO title="Blog" keywords={[`javascript`, `blog`, `react`]} />
    <ArticleSearch />
    <ArticleList />
  </Layout>
)

export default Blog
