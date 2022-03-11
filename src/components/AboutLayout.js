import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import styles from "../styles/global.scss"

export default function AboutLayout() {
  return (
    <div>
      <div className="page-head">
        <Container>
          <Row>
            <Col>
              <h2>ABOUT US</h2>
              <p>
                We are on the verge of extinctions, but we don't seem to realise
                it. To date, Earth has witnessed five mass extinctions, and all
                five have been caused by natural geological changes
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="tab-sec">
        <Container>
          <Row>
            <Col>
              <p>OVERVIEW</p>
            </Col>
            <Col>
              <p>COMMITMENT</p>
            </Col>
            <Col>
              <p>HOPE</p>
            </Col>
            <Col>
              <p>PEOPLE</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
