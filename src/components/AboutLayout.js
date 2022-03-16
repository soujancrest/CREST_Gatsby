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
              <h2 className="crest-heading mb-20">ABOUT US</h2>
              <p className="mission-discrption-info">
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
          <ul className="about-Tabs-list">
            <li className="active">

              <Link>Overview</Link>
            </li>
            <li><Link>Commitment</Link></li>
            <li><Link>hope</Link></li>
            <li><Link>people</Link></li>

          </ul>
        </Container>
      </div>
    </div>
  )
}
