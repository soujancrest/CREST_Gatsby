import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import "../styles/global.scss"

import Video from "../components/Video"

export default function HomeMission() {
  return (
    <div className="our-mission">
      <Container>
        <Row className="our-mission-row">
          <Col className="left-col">
            <h4
              className="heading-bg"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              Our Mission
            </h4>

            <div className="mission-discrption">
              <div
                className="mission-img"
                data-sal="fade"
                data-sal-duration="1000"
                data-sal-easing="ease"
              >
                <Video />
              </div>

              <p
                className="mission-sub-text"
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-delay="300"
              >
                CREST Foundation is on a mission to build 20 self-sufficient
                Climate Hubs over the next ten years. Each climate hub will be
                responsible to save endangered species, restore ecological
                balance by promoting biodiversity, improving the quality of air,
                water, soil, nutrition safety and support human & planet’s well
                being.
              </p>
              <p
                className="mission-sub-text"
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-delay="400"
              >
                Our practical approach is neither theoretical nor challenging to
                implement. The Foundation’s first publication, Blue Dharma, is a
                playbook of sustainable practices that have successfully powered
                the creation of the world’s first energy-positive,
                water-positive, and collective organic farming community.
              </p>
            </div>
          </Col>
          <Col className="right-col">
            <h4
              className="heading-bg crest-left"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              Our Ethos
            </h4>
            <Row className="right-col-1">
              <Col className="mission-inner col-md-8  col-sm-12 col-12">
                <div className="mission-side-right">
                  <h5
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  >
                    Climate crisis and Human Wellbeing
                  </h5>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Human Wellbeing can save the planet,CREST Foundation will
                    create climate-resilient eco-habitats that combine the
                    luxuries of modern life with the benefits of living in
                    nature.
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  >
                    <Link className="readmore" to="/about/#ethos">
                      Read More
                      <StaticImage src="../images/right-arrow.png" />
                    </Link>
                  </p>
                </div>
              </Col>
              <Col className="mission-inner col-md-4 col-sm-12 col-12">
                <div
                  className="mission-side"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                >
                  <StaticImage
                    src="../images/about/24.jpg"
                    atl=""
                    className="mission-side-img"
                  />
                </div>
              </Col>
            </Row>
            <h4
              className="heading-bg crest-left"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              Our Vision
            </h4>
            <Row className="right-col-1">
              <Col className="mission-inner col-md-8 col-sm-12">
                <div className="mission-side-right">
                  <h5
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  >
                    Re-imagining the urban lifestyle
                  </h5>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    To meet the 2050 net-zero emission goals, we intend to
                    create energy-positive communities that produce clean energy
                    from renewable resources
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  >
                    <Link className="readmore" to="/about/#vision">
                      Read More
                      <StaticImage src="../images/right-arrow.png" />
                    </Link>
                  </p>
                </div>
              </Col>
              <Col className="mission-inner col-md-4 col-sm-12">
                <div
                  className="mission-side"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                >
                  <StaticImage
                    src="../images/about/244.jpg"
                    atl=""
                    className="mission-side-img"
                  />
                </div>
              </Col>
            </Row>
            <h4
              className="heading-bg crest-left"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              Our Commitment
            </h4>
            <Row className="right-col-1">
              <Col className="mission-inner col-md-8 col-sm-12">
                <div className="mission-side-right">
                  <h5
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  >
                    Launching a witnessed-organic revolution
                  </h5>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    To create circular economies through sustainable communities
                    by implementing a ‘buy local, eat local’ model of food
                    production that dramatically reduces food miles.
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                  >
                    <Link className="readmore" to="/about/our-commitment">
                      Read More
                      <StaticImage src="../images/right-arrow.png" />
                    </Link>
                  </p>
                </div>
              </Col>
              <Col className="mission-inner col-md-4 col-sm-12">
                <div
                  className="mission-side"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                  data-sal-easing="ease"
                >
                  <StaticImage
                    src="../images/about/Farmer.jpg"
                    atl=""
                    className="mission-side-img"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
