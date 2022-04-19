import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import AboutNavbar from "./AboutNavbar"

export default function AboutLayout() {
  return (
    <div>
      <div className="page-head">
        <Container>
          <Row>
            <Col className="col-lg-4 col-12">
              <h2
                className="crest-heading mb-20"
                data-sal="slide-up"
                data-sal-duration="1000"
              >
                ABOUT US
              </h2>
            </Col>
            <Col className="col-lg-8 col-12">
              <p
                className="mission-discrption-info"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
              >
                We are on the verge of extinction, but we don’t seem to realize
                it. To date, Earth has witnessed five mass extinctions, and all
                five have been caused by natural geological changes. The sixth
                mass extinction will be the result of human activity alone.
                Without immediate action, the consequences of global warming
                will become irreversible.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <AboutNavbar />
    </div>
  )
}
