import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import "../styles/global.scss"
import "bootstrap/dist/css/bootstrap.min.css"

export default function PublicationThumb({ publication }) {
  return (
    <Container>
      <div className="pub-sec">
        <Container>
          <h2
            className="crest-text-heading"
            data-sal="slide-up"
            data-sal-duration="1000"
          >
            PUBLICATIONS
          </h2>

          <div className="publication-section">
            <div className="public-inner">
              <div
                className="crest-publication-sec"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                <StaticImage src="../images/BlueDharma.jpg" />
                <div className="publication-dis">
                  <h6 className="pub-heading">BLUE DHARMA</h6>
                </div>

                <a
                  href="http://bluedharma.in/"
                  target="_blank"
                  className="no-more"
                >
                  <span>Know More</span>
                  <StaticImage src="../images/right-arrow.png" />
                </a>
              </div>
              <div
                className="crest-publication-sec"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="100"
              >
                <StaticImage src="../images/India_Wakes.jpg" />
                <div className="publication-dis">
                  <h6 className="pub-heading">INDIA WAKES</h6>
                </div>

                <a
                  href="https://www.amazon.in/INDIA-WAKES-Coronavirus-World-Order-ebook/dp/B08BX78KQ2"
                  target="_blank"
                  className="no-more"
                >
                  <span>Know More</span>
                  <StaticImage src="../images/right-arrow.png" />
                </a>
              </div>
              <div
                className="crest-publication-sec"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="200"
              >
                <StaticImage src="../images/The_Mother_Earth.jpg" />
                <div className="publication-dis">
                  <h6 className="pub-heading">THE MOTHER EARTH</h6>
                </div>
                <a
                  href="https://www.amazon.in/Mother-Earth-Only-Lifeline-Bring/dp/1957456078"
                  target="_blank"
                  className="no-more"
                >
                  <span>Know More</span>
                  <StaticImage src="../images/right-arrow.png" />
                </a>
              </div>
              <div
                className="crest-publication-sec"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
              >
                <StaticImage src="../images/Planet_Kriya.jpg" />
                <div className="publication-dis">
                  <h6 className="pub-heading">PLANET KRIYA</h6>
                </div>
                <div className="no-more">
                  <span>Coming Soon</span>
                  {/* <StaticImage src="../images/right-arrow.png" /> */}
                </div>
              </div>
              <div
                className="crest-publication-sec"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="400"
              >
                <StaticImage src="../images/Every_Dot_Matters.jpg" />

                <div className="publication-dis">
                  <h6 className="pub-heading">EVERY DOT MATTERS</h6>
                </div>
                <div className="no-more">
                  <span>Coming Soon</span>
                  {/* <StaticImage src="../images/right-arrow.png" /> */}
                </div>
              </div>
              <div
                className="crest-publication-sec"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="500"
              >
                <StaticImage src="../images/Beyond_Carbon.jpg" />
                <div className="publication-dis">
                  <h6 className="pub-heading">BEYOND CARBON</h6>
                </div>
                <div className="no-more">
                  <span>Coming Soon</span>
                  {/* <StaticImage src="../images/right-arrow.png" /> */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Container>
  )
}
