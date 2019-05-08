import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import { ContactContent } from "../components/ContactContent"

const Contact = () => (
  <Layout>
    <SEO title="Contact" keywords={[`contact`, `christopherkade`]} />
    <ContactContent />
  </Layout>
)

export default Contact
