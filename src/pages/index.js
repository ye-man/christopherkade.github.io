import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { ArticleList } from "../components/ArticleList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ArticleList />
  </Layout>
)

export default IndexPage
