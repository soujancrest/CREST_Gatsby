import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "./main.scss"
import Navbar from "./Navbar"

export default function Header() {
<<<<<<< Updated upstream
  return (
    <header>
      <Navbar />
    </header>
  )
=======
  return <header>
    <Navbar />
    </header>
>>>>>>> Stashed changes
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
