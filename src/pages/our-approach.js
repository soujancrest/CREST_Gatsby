import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/global.scss"

import "../styles/utility.scss"

const OurApproach = () => (
  <div>
    <Seo title="Our Approach" />
    <div className="page-head">
      <Container>
        <Row>
          <Col className="col-lg-4 col-12">
            <h2 className="crest-heading mb-20" data-sal="slide-up" data-sal-duration="1000">OUR APPROACH</h2>
          </Col>
          <Col className="col-lg-8 col-12">
            <p className="mission-discrption-info" data-sal="slide-up" data-sal-duration="1000">
              To map the status of vulnerable species and impact of urbanization
              on natural resources such as Air, Water, Food, Soil etc. and
              design a corrective roadmap for implementing best practices to
              restore environmental balance contributing to global cooling and
              people wellbeing
            </p>
          </Col>
        </Row>

        {/* <h3>Lorem Ipsum is a dummy text</h3> <br></br> */}
      </Container>
    </div>

    <div className="page-border" data-sal="slide-up" data-sal-duration="1000">
      <Container>
        <div className="border-crest"></div>
      </Container>
    </div>
    <div className="tab-sec">
      <Container>
        {/* <Row>
          <Col>
            <p>OVERVIEW</p>
          </Col>
          <Col>
            <p>OUR "ECO"NOMIC MODEL</p>
          </Col>
          <Col>
            <p>OUR APPROACH</p>
          </Col>
          <Col>
            <p>OUR GOALS</p>
          </Col>
          <Col>
            <p>PEOPLE</p>
          </Col>
        </Row> */}
      </Container>
    </div>
    <div>
      <Container className="about-sub">
        <Row>
          <Col className="col-lg-4 col-12">
            <div className="approach-img" data-sal="slide-up" data-sal-duration="1000">
              <StaticImage src="../images/our-approach/Road-Map.jpg" alt="" />
            </div>
          </Col>
          <Col className="col-lg-8 col-sm-12">
            <div className="goal-section">
              <h3 className="mission-subheading heading-color mb-20" data-sal="slide-up" data-sal-duration="1000">
                Our Roadmap To Sustained Growth
              </h3>
              <p className="mission-sub-text" data-sal="slide-up" data-sal-duration="1000"
                style={{
                  fontStyle: "italic",
                  color: "#595757",
                }}>
                With a robust financial plan to recuperate funds allocated to
                each part of the Impact Fund, CREST Foundation will not need to
                secure additional funding beyond the first $100 million. Using
                this model of sustained economic growth, in 12 years, CREST
                Foundation expects to grow its revenue into $1.780 billion
              </p>
              <p className="mission-sub-text" data-sal="slide-up" data-sal-duration="1000">
                CREST Foundation’s sustained, robust economic model is
                structured to generate revenue from the very first project.

                <br>

                </br>

                By sparking a clean energy and an organic food revolution,
                decarbonizing over-congested cities, improving air quality, and
                bringing back ecosystems and biodiversity local to each region,
                CREST Foundation will move the needle of climate change in the
                right direction.
              </p>

            </div>
          </Col>
        </Row>
        <br></br>
        <br></br>
        {/* <br></br> */}
        <Row>
          <Col className="col-lg-4 col-12">
            <div className="approach-imgs" data-sal="slide-up" data-sal-duration="1000">
              <StaticImage src="../images/our-approach/Crest-icons.jpg" alt="" />
            </div>
          </Col>
          <Col className="col-lg-8 col-sm-12">
            <div className="approch-1">
              <h3 className="mission-subheading heading-color mb-20" data-sal="slide-up" data-sal-duration="1000">
                Our Solution Framework
              </h3>
              <p className="mission-sub-text" data-sal="slide-up" data-sal-duration="1000"
                style={{
                  fontStyle: "italic",
                  color: "#595757",
                }}>
                CREST Foundation aims to create sustainable, carbon neutral,
                built environments with climate responsive habitats that
                contribute to people and planet wellbeing.
              </p>
              <p className="mission-sub-text" data-sal="slide-up" data-sal-duration="1000">
                The project establishes a closed loop cycle where waste from one
                process becomes the source for another — food consumption and
                production are no longer separated as distinct processes. Every
                resident becomes a co-owner in the process of creating a
                non-polluting, self-sufficient community.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <br></br>
      <br></br>
      <Container>
        <Row>

          <Col className="col-lg-6 col-12">
            <div className="approach-section-planet">
              <div className="planet-box">
                <div className="approach-heading mission-subheading" data-sal="slide-up" data-sal-duration="1000">
                  Planet
                </div>
                <ul data-sal="slide-up" data-sal-duration="1000">
                  <li className="mission-sub-text">
                    Preserve & Improve Biodiversity
                  </li>
                  <li className="mission-sub-text">
                    Water Positive Community
                  </li>
                  <li className="mission-sub-text">
                    Zero Wastewater Discharge
                  </li>
                  <li className="mission-sub-text">
                    Sustainable Food Production
                  </li >
                  <li className="mission-sub-text">
                    Protection of Aquatic Ecosystems
                  </li>
                 
                </ul>

              </div>
              <div className="planet-box">
              <div className="approach-heading mission-subheading">
        
                </div>
                <ul data-sal="slide-up" data-sal-duration="1000">
                 
                  <li className="mission-sub-text">
                    Resources Efficieny
                  </li>
                  <li className="mission-sub-text">
                    Improved Air Quality
                  </li>
                  <li className="mission-sub-text">
                    Carbon Sequestration
                  </li>
                  <li className="mission-sub-text">
                    Renewable Energy
                  </li>
                  <li className="mission-sub-text">
                    Innovative Technologies
                  </li>

                </ul>

              </div>

            </div>
          </Col>


          <Col className="col-lg-3 col-12">
            <div className="approach-section-planets">
              <div className="approach-heading mission-subheading" data-sal="slide-up" data-sal-duration="1000">
                People
              </div>
              <ul data-sal="slide-up" data-sal-duration="1000">
                <li className="mission-sub-text">
                  Wellbeing
                </li>
                <li className="mission-sub-text">
                  Inclusive Economic Growth
                </li>
                <li className="mission-sub-text">
                  Equal Opportunties
                </li>

              </ul>
            </div>
          </Col>
          <Col className="col-lg-3 col-12">
            <div className="approach-section-planets">
              <div className="approach-heading mission-subheading" data-sal="slide-up" data-sal-duration="1000">
                Profits
              </div>
              <ul data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
                <li className="mission-sub-text">
                  Eco Habitats
                </li>

              </ul>
            </div>
          </Col>


        </Row>
      </Container>
    </div>
  </div>
)

export default OurApproach
