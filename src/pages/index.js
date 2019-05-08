import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

import { AboutContent } from "../components/AboutContent"

const About = () => (
  <Layout>
    <SEO title="Home" keywords={[`christopher`, `kade`, `webdev`]} />
    <AboutContent />
  </Layout>
)

export default About
