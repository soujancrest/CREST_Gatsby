import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styles from "../styles/global.scss"
import AboutNavbar from "./AboutNavbar"

export default function AboutLayout() {
  return (
    <div>
      <div className="page-head">
        <Container>
          <Row>
            <Col className="col-lg-4 col-12">
              <h2 className="crest-heading mb-20">ABOUT US</h2>

            </Col>
            <Col className="col-lg-8 col-12">
              <p className="mission-discrption-info">
                We are on the verge of extinction, but we don’t seem to realize
                it. To date, Earth has witnessed five mass extinctions, and all five
                have been caused by natural geological changes. The sixth mass
                extinction will be the result of human activity alone. Without immediate
                action, the consequences of global warming will become irreversible.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <AboutNavbar />
    </div>
  )
}
