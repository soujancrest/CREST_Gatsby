import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './main.scss'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#595757`,
      // marginBottom: `1.45rem`,
    }}
  >
    <div className="crest-header"
      style={{
        margin: `0 auto`,
        maxWidth: 1450,
        padding: `0.75rem 0rem`,
        textAlign: `center`,
        // display: `flex`,
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <StaticImage
          src="../images/Crest-Logo.png"
          width={200}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="CREST Logo"
        />
        {/* {siteTitle} */}
      </Link>
        

        <Link to="/" className="crest-menu">
        <StaticImage src="../images/menu-line.png" className="menu-btn" />
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
