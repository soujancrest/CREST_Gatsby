import React from "react"
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css"
import "./main.scss"
import Navbar from "./Navbar"

export default function Header() {
  return (
    <header>
      <Navbar />
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
