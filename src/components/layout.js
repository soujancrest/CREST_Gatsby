import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useState, useEffect } from "react"

import Header from "./header"
import Footer from "./footer"
import Navbar from "./Navbar"
import "./layout.css"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })
  }, [])

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    })
  }

  return (
    <>
      <Navbar
        homePath={location.pathname == "/" ? true : false}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />

      <div
        style={{
          margin: `0 auto`,
          marginTop: 80,
        }}
      >
        <main>{children}</main>
      </div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="back-to-top"
          aria-label="scroll to top"
        >
          {/* Scroll to top */}
          <StaticImage src="../images/arrowhead-up.png" alt="" />
        </button>
      )}

      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
