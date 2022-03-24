import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

function Navbar({ homePath }) {
  const [sideBar, setSidebar] = useState(false)
  const handleSidebar = () => setSidebar(!sideBar)
  return (
    <div className="crest-navbar">
      <div className={homePath ? "crest-header" : "crest-header-grey"}>
        <Container>
          <div className="crest-nav">
            <div className="crest-left-logo">
              <Link to="/">
                {homePath ? (
                  <StaticImage
                    src="../images/CREST - Exact_Logo.png"
                    alt="CREST Logo"
                  />
                ) : (
                  <StaticImage
                    src="../images/Crest-Logo.png"
                    alt="CREST Logo"
                  />
                )}
              </Link>
            </div>

            <div className="crest-right-nav">
              <ul>
                <li>
                  <Link to="/about" activeClassName="active" className="mainNavLink">
                    About
                  </Link>
                </li>

                <li>
                  <Link className="mainNavLink" activeClassName="active" to="/our-approach">
                    Approach
                  </Link>
                </li>
                <li>
                  <Link className="mainNavLink" activeClassName="active" to="/our-goal">
                    Goal
                  </Link>
                </li>
                <li>
                  <Link className="mainNavLink" activeClassName="active" to="/our-impact">
                    Impact
                  </Link>
                </li>

                <li>
                  <Link className="mainNavLink" activeClassName="active" to="/blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <nav>
            <ul
              className="mainNav"
              style={sideBar ? { transform: "translateX(0)" } : null}
            >
              <li>
                <Link to="/about" onClick={handleSidebar} className="mainNavLink">
                  About 
                </Link>
              </li>

              <li>
                <Link className="mainNavLink" onClick={handleSidebar} to="/our-approach">
                   Approach
                </Link>
              </li>
              <li>
                <Link className="mainNavLink" onClick={handleSidebar} to="/our-goal">
                   Goal
                </Link>
              </li>
              <li>
                <Link className="mainNavLink" onClick={handleSidebar} to="/our-impact">
                  Impact
                </Link>
              </li>

              <li>
                <Link className="mainNavLink" onClick={handleSidebar} to="/blog">
                 Blog
                </Link>
              </li>

              <li>
                <Link className="mainNavLink" onClick={handleSidebar} to="/contact">
                  Contact us
                </Link>
              </li>
              <li>
                <a
                  href="../images/Crest_Foundation_Book.pdf"
                  className="mainNavLink"
                  target="_blank"
                >
                  Download Brochure
                </a>
              </li>
            </ul>
          </nav>

          <button
          onClick={handleSidebar}
          className={`navToggle ${sideBar ? "open" : null}`}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          onClick={handleSidebar}
          className={`overlay ${sideBar ? "open" : ""}`}
        />
        </Container>
      </div>
    </div>
  )
}

export default Navbar
