import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import "../../styles/global.scss"
import AboutLayout from "../../components/AboutLayout"

import "../../styles/about.scss"

export default function About() {
  return (
    <div>
      <Seo title="About" />
      <AboutLayout />
      <div>
        <Container className="about-sub" id="vision">
          <Row>
            <Col className="col-lg-4 col-12">
              <div className="goal-img">
                <StaticImage src="../../images/about/Our-Vision.png" alt="" />
              </div>
            </Col>
            <Col className="col-lg-8 col-sm-12">
              <h4 className="heading-bg mb-20 text-white">OUR VISION</h4>

              <div className="goal-section">
                <h4 className="over-heading">
                  Energy Positive Cities and Global Cooling
                </h4>
                <br></br>
                <p  className="mission-sub-text"
                style={{
                  fontStyle: "italic",
                  color: "#595757",
                }}>
                  To meet the 2050 net-zero emission goals, CREST Foundation
                  intends to create energy-positive communities that produce
                  clean energy from renewable resources and facilitate zero
                  maintenance and zero waste living.
                </p>
                <p className="mission-sub-text">
                  60% of the world’s population will live in cities by 2030.
                  Buildings consume a lot of energy and, together with the
                  construction industry, contribute to 40% of the world’s carbon
                  dioxide emissions. As wildfires, hurricanes, and other
                  dramatic climatic events become the norm, establishing
                  baseline data to track climate change becomes vital.
                </p>
                <p className="mission-sub-text">
                  Today, it’s easier and more convenient for people to work and
                  live in air-conditioned homes and offices. These closed-door
                  living situations increase exposure to indoor air pollutants,
                  which is unhealthy in the long run.
                </p>
                <p className="mission-sub-text">
                  When plants transpire, they cool the air around and beneath
                  them. Increasing herbal forest density and clean energy
                  reliance facilitates global cooling. Cooling temperatures
                  reduce wildfire footprints and air conditioner dependence in
                  the summer months. When fewer chlorofluorocarbons are released
                  and more carbon monoxide is absorbed, the planet goes into a
                  virtuous cycle of global cooling.
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="about-sub" id="mission">
          <Row>
            <Col className="col-lg-4 col-12">
              <div className="goal-img">
                <StaticImage src="../../images/about/our-mission.png" alt="" />
              </div>
            </Col>
            <Col className="col-lg-8 col-sm-12">
              <h4 className="heading-bg mb-20 text-white">OUR MISSION</h4>

              <div className="goal-section">
                {/* <h4 className="over-heading">Energy Positive Cities and Global Cooling</h4>
                <br></br> */}
                <p  className="mission-sub-text"
                style={{
                  fontStyle: "italic",
                  color: "#595757",
                }}>
                  CREST Foundation is on a mission to build 20 self-sufficient
                  Climate Hubs over the next ten years. Each Climate Hub will
                  consist of 600 eco-homes, 500 acres of organic farms, food
                  forests, and herbal gardens, an organic shopping market,
                  corporate offices, green schools, a sports and entertainment
                  village featuring 64 varieties of sports, a community kitchen,
                  and a preventive care and wellness health centre
                </p>
                <p className="mission-sub-text">
                  Our practical approach is neither theoretical nor challenging
                  to implement. The Foundation’s first publication, Blue Dharma,
                  is a playbook of sustainable practices that have successfully
                  powered the creation of the world’s first energy-positive,
                  water-positive, and collective organic farming community.
                </p>
                <p className="mission-sub-text">
                  Today, it’s easier and more convenient for people to work and
                  live in air-conditioned homes and offices. These closed-door
                  living situations increase exposure to indoor air pollutants,
                  which is unhealthy in the long run.
                </p>
                <p className="mission-sub-text">
                  We have the proof of concept to build carbon-pollution-free
                  communities that promote sustainable living (without
                  compromising on the perks of modern lifestyles) and revive
                  natural ecosystems while combating the most urgent changes of
                  the climate crisis.
                </p>
               
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="about-sub" id="ethos">
          <Row>
            <Col className="col-lg-4 col-12">
              <div className="goal-img">
                <StaticImage src="../../images/about/Our-Ethos.png" alt="" />
              </div>
            </Col>
            <Col className="col-lg-8 col-sm-12">
              <h4 className="heading-bg mb-20 text-white">OUR ETHOS</h4>

              <div className="goal-section">
                <h4 className="over-heading">
                  Human Wellbeing Can Save the Planet
                </h4>
                <br></br>

                <p  className="mission-sub-text"
                style={{
                  fontStyle: "italic",
                  color: "#595757",
                }}>
                  CREST Foundation will create climate-resilient eco-habitats
                  that combine the luxuries of modern life with the benefits of
                  living in nature. These energy-efficient homes will usher in a
                  new age of climate adaptation and resilience, providing
                  residents access to safe drinking water, fresh air, and farm
                  fresh witnessed organic food
                </p>
                <p className="mission-sub-text">
                  Over the last decade, many mega cities have transformed into
                  urban heat islands. City residents breathe polluted air,
                  continuous exposure to which can lead to a dip in immunity and
                  a surge in respiratory illnesses
                </p>
                <p className="mission-sub-text">
                  Planted palettes of oxygenating trees clean and cool the air
                  by accelerating the absorption of greenhouse gases from the
                  atmosphere. Cultivating agroforestry and herb gardens provides
                  witnessed organic farm-fresh food and helps bring back
                  biodiversity to urbanized areas.
                </p>
                <p className="mission-sub-text">
                  Implementing mechanical ventilation techniques in mixed use
                  and residential developments improves ventilation, thereby
                  improving indoor air quality
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="about-sub" id="intention">
          <Row>
            <Col className="col-lg-4 col-12">
              <div className="goal-img">
                <StaticImage
                  src="../../images/about/Our-Intention.png"
                  alt=""
                />
              </div>
            </Col>
            <Col className="col-lg-8 col-sm-12">
              <h4 className="heading-bg mb-20 text-white">OUR INTENTION</h4>

              <div className="goal-section">
                <h4 className="over-heading">
                  Supply Chains and Carbon Footprints
                </h4>
                <br></br>

                <p  className="mission-sub-text"
                style={{
                  fontStyle: "italic",
                  color: "#595757",
                }}>
                  CREST Foundation aims to reduce the global carbon footprint by
                  establishing Climate Hubs. CREST Foundation will transform the
                  global agricultural landscape by nurturing forest ecosystems
                  and agroforestry, investing in sustainable agricultural
                  research facilities, promoting innovations in nutritional
                  security, and fuelling sustained economic growth.
                </p>
                <p className="mission-sub-text">
                  Processed foods and global food supply chains have large
                  carbon footprints. Produce that’s farmed with fertilizers and
                  pesticides has a longer shelf-life but is of lower nutritional
                  value. Consuming food with additives and preservatives is
                  harmful, and organic food products remain expensive to produce
                  and consume.
                </p>
                <p className="mission-sub-text">
                  By relying more on local farms, circular bio-economies become
                  less vulnerable to global supply chain breakdowns. In
                  bio-economies, food is managed in innovative ways. Food waste
                  is converted back into energy and excess food is funneled into
                  organic food processing plants.
                </p>
              
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
