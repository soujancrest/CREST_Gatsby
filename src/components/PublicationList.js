import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import BlogThumb from "./BlogThumb"
import "../styles/global.scss"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "./layout"
import Seo from "./seo"

export default function PublicationThumb({ publication }) {
  return (
    <Container>
      <div className="pub-sec">
        <Container>
          <Row>
            <h2 className="crest-heading">PUBLICATIONS</h2>
          </Row>
          <Row className="pub-sec-row2">
            <Col>
              <div className="crest-publication-sec">
                <div id="pub-left-img-5"></div>
                <div className="publication-dis">
                  <h6 className="mission-discrption-info">BLUE DHARMA</h6>
                  <p className="md-subp">
                    A Way to sustainable Lifestyle for Human Wellbeing
                  </p>

                  <Link className="readmore">Read More</Link>
                </div>
              </div>
            </Col>
            <Col>
              <div className="crest-publication-sec">
                <div id="pub-left-img-1"></div>
                <div className="publication-dis">
                  <h6 className="mission-discrption-info">PLANET KRIYA</h6>
                  <p className="md-subp">
                    A expose of the shocking changes agriculture has endured
                  </p>
                  <span className="readmore">Coming Soon</span>
                </div>
              </div>
            </Col>
            <Col>
              <div className="crest-publication-sec">
                <div id="pub-left-img-2"></div>
                <div className="publication-dis">
                  <h6 className="mission-discrption-info">INDIA WAKES</h6>
                  <p className="md-subp">Post Coronavirus new world order</p>
                  <span className="readmore">Coming Soon</span>
                </div>
              </div>
            </Col>
            <Col>
              <div className="crest-publication-sec">
                <div id="pub-left-img-3"></div>
                <div className="publication-dis">
                  <h6 className="mission-discrption-info">EVERY DOT MATTERS</h6>
                  <p className="md-subp"></p>
                  <span className="readmore">Coming Soon</span>
                </div>
              </div>
            </Col>
            <Col>
              <div className="crest-publication-sec">
                <div id="pub-left-img-4"></div>
                <div className="publication-dis">
                  <h6 className="mission-discrption-info">THE NEW NORM</h6>
                  <p className="md-subp"></p>
                  <span className="readmore">Coming Soon</span>
                </div>
              </div>
            </Col>
            <Col>
              <div className="crest-publication-sec">
                <div id="pub-left-img-6"></div>
                <div className="publication-dis">
                  <h6 className="mission-discrption-info">THE MOTHER EARTH</h6>
                  <p className="md-subp">An alarming wake-up call</p>
                  <span className="readmore">Coming Soon</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  )
}
