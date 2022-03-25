import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styles from "../styles/global.scss"

const OurImpact = () => (
  <div>
    <Seo title="Our Impact" />
    <div className="page-head">
      <Container>
        <Row>
          <Col className="col-lg-4 col-12">
            <h2 className="crest-heading mb-20">OUR IMPACT</h2>
          </Col>
          <Col className="col-lg-8 col-12">
            <p className="mission-discrption-info">
              Periodic assessment of sustainability parameters defines impact
              through number of Jobs Created, trees planted by Afforestation,
              amount of Carbon Sequestered, avoided CO2 Emissions, amount of
              Waste managed, Improved Air Quality, Renewable Energy generated,
              Vulnerable Species protected and Highest Returns for everyone
              involved.
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
              <h3 className="mission-subheading heading-color mb-20">
                CLEAN TECHNOLOGIES & INNOVATION
              </h3>
              <ul>
                <li>Sustainable Product Design</li>
                <li>AI & Process Automation</li>
                <li>Digital Transformation</li>
                <li>SMART City Operations</li>
                <li>Wellness Products / Technologies</li>
                <li>Manufacturing / Sustainable Building Prototypes</li>
                <li>Transformative Spaces - Eco Building Material</li>
              </ul>
            </div>
          </Col>
          <Col className="mb-20" lg="4" sm="6">
            <div className="impact-cards-bg">
              <div className="impact-img">
                <StaticImage src="../images/our-impact/Group 63.png" alt="" />
              </div>
              <h3 className="mission-subheading heading-color mb-20">
                AWARENESS & PROPAGATION
              </h3>

              <ul>
                <li>Organic Events</li>
                <li>Training Programs</li>
                <li>Community Farming</li>
                <li>Kitchen Gardening</li>
                <li>Zero Waste Living</li>
                <li>Sustainable Ecosystems</li>
              </ul>
            </div>
          </Col>
          <Col className="mb-20" lg="4" sm="6">
            <div className="impact-cards-bg">
              <div className="impact-img">
                <StaticImage src="../images/our-impact/Group 72.png" alt="" />
              </div>
              <h3 className="mission-subheading heading-color mb-20">
                SUSTAINABLE CITIES AND COMMUNITIES
              </h3>
              <ul>
                <li>Master Planning & Architecture</li>
                <li>Environmental</li>
                <li>Interior</li>
                <li>Farmscape</li>
                <li>Structure & MEP</li>
                <li>Automation & Supply Chain</li>
                <li>Infrastructure</li>
                <li>Communications</li>
              </ul>
            </div>
          </Col>
          <Col className="mb-20" lg="4" sm="6">
            <div className="impact-cards-bg">
              <div className="impact-img">
                <StaticImage src="../images/our-impact/Group 71.png" alt="" />
              </div>
              <h3 className="mission-subheading heading-color mb-20">
                PREVENTIVE CARE & WELLNESS LIVING
              </h3>
              <ul>
                <li>Preventive Care</li>
                <li>Social Bonding</li>
                <li>Child & Animal Care</li>
                <li>Maintenance / Services</li>
                <li>Wellness Lifestyle</li>
              </ul>
            </div>
          </Col>
          <Col className="mb-20" lg="4" sm="6">
            <div className="impact-cards-bg">
              <div className="impact-img">
                <StaticImage src="../images/our-impact/Path 33.png" alt="" />
              </div>
              <h3 className="mission-subheading heading-color mb-20">
                RESPONSIBLE PRODUCTION & CONSUMPTION
              </h3>
              <ul>
                <li>Organic and Processed Food & Dairy Products</li>
                <li>Plastic & Bio Waste</li>
                <li>Power Gen</li>
                <li>Building Material</li>
                <li>Lifestyle Products</li>
                <li>FPOs & ECO Products</li>
                <li>New Age Farming</li>
              </ul>
            </div>
          </Col>
          <Col className="mb-20" lg="4" sm="6">
            <div className="impact-cards-bg">
              <div className="impact-img">
                <StaticImage src="../images/our-impact/Path 24.png" alt="" />
              </div>
              <h3 className="mission-subheading heading-color mb-20">
                CLIMATE ACTION INSTITUTE
              </h3>

              <ul>
                <li>Climate Research Editorial</li>
                <li>Content Research & Content Creation</li>
                <li>Publications</li>
                <li>Education</li>
                <li>Planet Wellbeing, Health & Wellness</li>
                <li>Sustainable Lifestyle</li>
                <li>
                Skill Development
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <h3 className="mission-subheading heading-color">Our Primary Focus</h3>
      </Container>
      <Container>
        <div className="approach-cards">
          <Row>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/air.png" alt="" />
                </div>

                <div className="">
                  <h3 className="mission-discrption-info mb-20">AIR</h3>
                  <p className="md-subp">
                    Herbal forests absorb toxins and produce clean, medicinal
                    air that improves air quality, the immunity of residents and
                    promotes biodiversity.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/water.png" alt="" />
                </div>
                <div>
                  <h3 className="mission-discrption-info mb-20">Water</h3>
                  <p className="md-subp">
                    Watershed management, collected runoff, and harvested
                    rainwater are used to replenish groundwater and recharge
                    deep aquifers and treated sewage water is used for
                    agriculture, enabling the development to become water
                    positive.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/soil.png" alt="" />
                </div>

                <h3 className="mission-discrption-info mb-20">SOIL</h3>
                <p className="md-subp">
                  Closed loop systems and organic practices detoxify and improve
                  soil health while promoting a thriving biodiversity.
                </p>
              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/food.png" alt="" />
                </div>
                <h3 className="mission-discrption-info mb-20">FOOD</h3>
                <p className="md-subp">
                  Witnessed organic food production establishes the highest
                  nutritional and food safety standards. Farm-fresh,
                  farm-to-fork produce is distributed to residents and excess
                  produce is sold outside the community, generating a sustained
                  revenue that compensates for maintenance costs.
                </p>
              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/energy.png" alt="" />
                </div>
                <h3 className="mission-discrption-info mb-20">Energy</h3>
                <p className="md-subp">
                  The project will use solar winds, low wind turbines, biogas
                  plants and biofuel to create an energy positive development.
                </p>
              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/eco.png" alt="" />
                </div>
                <h3 className="mission-discrption-info mb-20">Eco Habitats</h3>
                <p className="md-subp">
                  Daylight integrated, positive air pressure homes eliminate
                  indoor toxins and produce clean energy. Herbal gardens and
                  food forests enable zero-refrigeration, which reduces carbon
                  footprints.
                </p>
              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/people.png" alt="" />
                </div>
                <h3 className="mission-discrption-info mb-20">People</h3>
                <p className="md-subp">
                  All-inclusive living systems promote a sound rural
                  socio-economic fabric and several opportunities for social
                  bonding.
                </p>
              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/animal.png" alt="" />
                </div>
                <h3 className="mission-discrption-info mb-20">Animals</h3>
                <p className="md-subp">
                  All animals farmed in the community are fed organic produce.
                  Consequently, all meat and dairy produced on the farms meet
                  the highest food and nutritional safety standards. Bio manure
                  from animals is used to improve soil fertility and aids in
                  producing zero-adulteration food
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  </div>
)

export default OurImpact
