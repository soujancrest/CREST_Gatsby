import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Navbar from "./Navbar"
import "./layout.css"

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

  return (
    <>
      <Navbar
        homePath={location.pathname == "/" ? true : false}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 1450,
          // padding: `0 1.0875rem 1.45rem`,
          marginTop:90
        }}
      >
        <main>{children}</main>

        {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer> */}
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
