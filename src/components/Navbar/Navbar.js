import React from "react"
import { Link } from "gatsby"

import "./Navbar.scss"

const CustomLink = ({ path, text, partial = false }) => {
  return (
    <Link to={path} activeClassName="active" partiallyActive={partial}>
      {text}
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className="navbar">
      <CustomLink path="/" text="About" />
      <CustomLink path="/blog" text="Blog" partial={true} />
      <CustomLink path="/contact" text="Contact" />
    </header>
  )
}

export default Navbar
