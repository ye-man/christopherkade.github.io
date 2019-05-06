import React from "react"
import PropTypes from "prop-types"
import Particles from 'react-particles-js';

import { LayoutTitle } from "../components/LayoutTitle"
import "./layout.css"
import backgroundConfig from "../../static/background-config.json"

const Layout = ({ children }) => (  
  <>
    <Particles className="particles" height="100vh" width="100vw" params={backgroundConfig}/>
    <div className="layout">
      <div>
        <LayoutTitle/>
      </div>
      <main>{children}</main>          
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
