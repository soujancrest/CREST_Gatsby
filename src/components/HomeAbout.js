import React from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function HomeAbout() {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col>
            <div className="about__crest-info">
              <p data-sal="slide-up" data-sal-duration="2000">
                <span>CREST </span> (Center for Research in Environmental &
                Sustainable Technologies) <br></br>
                Foundation is a non-profit environmental and social governance
                initiative dedicated for People and Planet wellbeing.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
