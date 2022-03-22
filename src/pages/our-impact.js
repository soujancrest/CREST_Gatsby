import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styles from "../styles/global.scss"

const OurImpact = () => (
  <Layout>
    <Seo title="Our Impact" />
    <div className="page-head">
      <Container>
        <Row>
          <Col>
            <h2 className="crest-heading mb-20">OUR IMPACT</h2>
            <h3>Transforming cities to climate hubs</h3> <br></br>
            <p className="mission-discrption-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="page-border">
      <Container>
        <div className="border-crest"></div>
      </Container>
    </div>
    <div className="tab-sec">
      <Container></Container>
    </div>
    <div>
      <Container className="about-sub">
        <Row>
          <Col className="mb-20" lg="4" sm="6">
            <div className="impact-cards-bg">
              <div className="impact-img">
                <StaticImage
                  src="../images/our-impact/Path 55.png"
                  alt=""
                  backgroundColor="transparent"
                />
              </div>
              <h3 className="mission-discrption-info mb-20">
                CLEAN TECHNOLOGIES & INNOVATION
              </h3>
              <ul>
                <li>- Sustainable Product Design</li>
                <li>- AI & Process Automation</li>
                <li>- Digital Transformation</li>
                <li>- SMART City Operations</li>
                <li>- Wellness Products / Technologies</li>
                <li>- Manufacturing / Sustainable Building Prototypes</li>
                <li>- Transformative Spaces - Eco Building Material</li>
              </ul>
            </div>
          </Col>
          <Col className="mb-20" lg="4" sm="6">
            <div className="impact-cards-bg">
              <div className="impact-img">
                <StaticImage src="../images/our-impact/Group 63.png" alt="" />
              </div>
              <h3 className="mission-discrption-info mb-20">
                AWARENESS & PROPAGATION
              </h3>

              <ul>
                <li>- Organic Events</li>
                <li>- Training Programs</li>
                <li>- Community Farming</li>
                <li>- Kitchen Gardening</li>
                <li>- Zero Waste Living</li>
                <li>- Sustainable Ecosystems</li>
              </ul>
            </div>
          </Col>
          <Col className="mb-20" lg="4" sm="6">
            <div className="impact-cards-bg">
              <div className="impact-img">
                <StaticImage src="../images/our-impact/Group 72.png" alt="" />
              </div>
              <h3 className="mission-discrption-info mb-20">
                SUSTAINABLE CITIES AND COMMUNITIES
              </h3>
              <ul>
                <li>- Master Planning & Architecture</li>
                <li>- Environmental</li>
                <li>- Interior</li>
                <li>- Farmscape</li>
                <li>- Structure & MEP</li>
                <li>- Automation & Supply Chain</li>
                <li>- Infrastructure</li>
                <li>- Communications</li>
              </ul>
            </div>
          </Col>
          <Col className="mb-20" lg="4" sm="6">
            <div className="impact-cards-bg">
              <div className="impact-img">
                <StaticImage src="../images/our-impact/Group 71.png" alt="" />
              </div>
              <h3 className="mission-discrption-info mb-20">
                PREVENTIVE CARE & WELLNESS LIVING
              </h3>
              <ul>
                <li>- Preventive Care</li>
                <li>- Social Bonding</li>
                <li>- Child & Animal Care</li>
                <li>- Maintenance / Services</li>
                <li>- Wellness Lifestyle</li>
              </ul>
            </div>
          </Col>
          <Col className="mb-20" lg="4" sm="6">
            <div className="impact-cards-bg">
              <div className="impact-img">
                <StaticImage src="../images/our-impact/Path 33.png" alt="" />
              </div>
              <h3 className="mission-discrption-info mb-20">
                RESPONSIBLE PRODUCTION & CONSUMPTION
              </h3>
              <ul>
                <li>- Organic and Processed Food & Dairy Products</li>
                <li>- Plastic & Bio Waste</li>
                <li>- Power Gen</li>
                <li>- Building Material</li>
                <li>- Lifestyle Products</li>
                <li>- FPOs & ECO Products</li>
                <li>- New Age Farming</li>
              </ul>
            </div>
          </Col>
          <Col className="mb-20" lg="4" sm="6">
            <div className="impact-cards-bg">
              <div className="impact-img">
                <StaticImage src="../images/our-impact/Path 24.png" alt="" />
              </div>
              <h3 className="mission-discrption-info mb-20">
                CLIMATE ACTION INSTITUTE
              </h3>

              <ul>
                <li>- Climate Research Editorial</li>
                <li>- Content Research & Content Creation</li>
                <li>- Publications</li>
                <li>- Education</li>
                <li>- Planet Wellbeing, Health & Wellness</li>
                <li>- Sustainable Lifestyle</li>
                <li>
                  {" "}
                  - Skill Development (Organic Food Products Manufacturing,
                  Healthy Culinary etc.)
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default OurImpact
