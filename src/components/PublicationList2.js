import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
// import BlogThumb from "./BlogThumb"
import "../styles/global.scss"

import "bootstrap/dist/css/bootstrap.min.css"
// import Layout from "./layout"
// import Seo from "./seo"

export default function PublicationThumb({ publication }) {
  return (
    <Container>
      <div className="pub-sec">
        <Container>
          <h2 className="crest-text-heading">PUBLICATIONS</h2>


          <div className="publication-section">
            <div className="public-inner">
              <div className="crest-publication-sec">
                <StaticImage src="../images/BlueDharma.jpg" />
                <div className="publication-dis">
                  <h6 className="pub-heading">BLUE DHARMA</h6>

                </div>

                <a href="http://bluedharma.in/" target="_blank" className="no-more">
                  <span>Know More</span>
                  <StaticImage src="../images/right-arrow.png" />
                </a>
              </div>
              <div className="crest-publication-sec">
                <StaticImage src="../images/India_Wakes.jpg" />
                <div className="publication-dis">
                  <h6 className="pub-heading">INDIA WAKES</h6>

                </div>

                <Link to="/" className="no-more">
                  <span>Coming Soon</span>
                  {/* <StaticImage src="../images/right-arrow.png" /> */}
                </Link>
              </div>
              <div className="crest-publication-sec">
                <StaticImage src="../images/Planet_Kriya.jpg" />
                <div className="publication-dis">
                  <h6 className="pub-heading">PLANET KRIYA</h6>

                </div>
                <Link to="/" className="no-more">
                  <span>Coming Soon</span>
                  {/* <StaticImage src="../images/right-arrow.png" /> */}
                </Link>
              </div>
              <div className="crest-publication-sec">
                <StaticImage src="../images/Every_Dot_Matters.jpg" />

                <div className="publication-dis">
                  <h6 className="pub-heading">EVERY DOT MATTERS</h6>

                </div>
                <Link to="/" className="no-more">
                  <span>Coming Soon</span>
                  {/* <StaticImage src="../images/right-arrow.png" /> */}
                </Link>
              </div>
              <div className="crest-publication-sec">

                <StaticImage src="../images/Nirvana.jpg" />
                <div className="publication-dis">
                  <h6 className="pub-heading">NIRVANA</h6>

                </div>
                <Link to="/" className="no-more">
                  <span>Coming Soon</span>
                  {/* <StaticImage src="../images/right-arrow.png" /> */}
                </Link>
              </div>
              <div className="crest-publication-sec">
                <StaticImage src="../images/The_Mother_Earth.jpg" />
                <div className="publication-dis">
                  <h6 className="pub-heading">THE MOTHER EARTH</h6>

                </div>
                <Link to="/" className="no-more">
                  <span>Coming Soon</span>
                  {/* <StaticImage src="../images/right-arrow.png" /> */}
                </Link>
              </div>

            </div>
          </div>


        </Container>
      </div>
    </Container>
  )
}
