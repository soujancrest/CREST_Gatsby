import React, { useState } from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

function Navbar() {
  const [sideBar, setSidebar] = useState(false)
  const handleSidebar = () => setSidebar(!sideBar)
  return (
    <div className='crest-navbar'>

      <div className="crest-header">
        <Link to="/">
          <StaticImage
            src="../images/Crest Logo-01-01.jpg"
            width={200}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="CREST Logo"
          />

        </Link>

        <nav>
          <ul
            className="mainNav"
            style={sideBar ? { transform: "translateX(0)" } : null}
          >
            <li>
              <Link to="/about" className="mainNavLink" >
                About us
              </Link>
            </li>
            <li>
              <Link className="mainNavLink" to="/ClimateActionReport/">
                Report
              </Link>
            </li>
            <li>
              <Link className="mainNavLink" >
                Library
              </Link>
            </li>
            <li>
              <Link className="mainNavLink" to="/our-goal">
                Goals
              </Link>
            </li>
            <li>
              <Link className="mainNavLink" to="/our-impact">
                Impact
              </Link>
            </li>
            <li>
              <Link className="mainNavLink" to="/our-approach">
                Approach
              </Link>
            </li>
            <li>
              <Link className="mainNavLink" to="/blog">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="mainNavLink" >
                Team
              </Link>
            </li>
            <li>
              <Link className="mainNavLink" to="/contact">
                Contact us
              </Link>
            </li>
            <li>
              <a className="mainNavLink" >
                Brochure-PDF
              </a>
            </li>
          </ul>
        </nav>

        <button
          onClick={handleSidebar}
          className={`navToggle ${sideBar ? "open" : null}`}>
          <span />
          <span />
          <span />
        </button>
        <div
          onClick={handleSidebar}
          className={`overlay ${sideBar ? "open" : ""}`}
        />
      </div>
    </div>
  )
}

export default Navbar