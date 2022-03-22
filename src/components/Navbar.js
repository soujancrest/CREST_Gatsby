import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

function Navbar() {
  const [sideBar, setSidebar] = useState(false)
  const handleSidebar = () => setSidebar(!sideBar)
  return (
    <div className="crest-navbar">
      <div className="crest-header ">
        <Container>
          <div className="crest-nav">
            <div className="crest-left-logo">
              <Link to="/">
                <StaticImage
                  src="https://crest.eco/assets/img/Logo-05.png"
                  alt="CREST Logo"
                />
              </Link>
            </div>

            <div className="crest-right-nav">
              <ul>
      
                  <li>
                    <Link to="/about" className="mainNavLink">
                      About
                    </Link>
                  </li>

                  <li>
                    <Link className="mainNavLink" to="/our-approach">
                       Approach
                    </Link>
                  </li>
                  <li>
                    <Link className="mainNavLink" to="/our-goal">
                      Goal
                    </Link>
                  </li>
                  <li>
                    <Link className="mainNavLink" to="/our-impact">
                      Impact
                    </Link>
                  </li>

                  <li>
                    <Link className="mainNavLink" to="/blog">
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
              <Link to="/about" className="mainNavLink">
                About us
              </Link>
            </li>

            <li>
              <Link className="mainNavLink" to="/our-approach">
                Our Approach
              </Link>
            </li>
            <li>
              <Link className="mainNavLink" to="/our-goal">
                Our Goal
              </Link>
            </li>
            <li>
              <Link className="mainNavLink" to="/our-impact">
                Our Impact
              </Link>
            </li>

            <li>
              <Link className="mainNavLink" to="/blog">
                Our Blog
              </Link>
            </li>

            <li>
              <Link className="mainNavLink" to="/contact">
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

        {/* <button
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
        /> */}

        </Container>
      </div>
    </div>
  )
}

export default Navbar
