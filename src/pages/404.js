import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page not found <span role="img" aria-label="">😨</span></h1>
  </Layout>
)

export default NotFoundPage
