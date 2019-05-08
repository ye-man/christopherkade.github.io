import React from "react"
import PropTypes from "prop-types"

import "./Layout.scss"
import { Navbar } from "./Navbar"
import { MobileFooter } from "./MobileFooter"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="layout">
      <main>{children}</main>
    </div>
    <MobileFooter />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
