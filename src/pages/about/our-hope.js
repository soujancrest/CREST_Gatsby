import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import { Tabs } from "react-bootstrap"
import Tab from "react-bootstrap/Tab"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import "../../styles/global.scss"
import AboutLayout from "../../components/AboutLayout"

export default function OurHope() {
  return (
    <div>
      <Seo title="Hope" />
      <AboutLayout />
      <div>
        <Container className="about-sub">
          <Row>
            <Col className="col-lg-4 col-12">
              <div className="goal-img" data-sal="slide-up" data-sal-duration="1000" >
                <StaticImage src="../../images/about/Our-hope.png" alt="" />
              </div>
            </Col>
            <Col className="col-lg-8 col-sm-12">
              {/* <h4 className="heading-bg mb-20 text-white">OUR HOPE</h4> */}

              <div className="goal-section">
                <h4 className="over-heading" data-sal="slide-up" data-sal-duration="1000" >
                  Climate Responsive Habitants and Water Conservation
                </h4>
                <br></br>

                <p className="mission-sub-text" data-sal="slide-up" data-sal-duration="1000" >
                  CREST Foundation will create water-positive communities that
                  respect nature’s biological, geological, chemical, and
                  physical systems. By implementing water conservation and soil
                  rehabilitation techniques that fix topsoil’s ability to
                  percolate water into the groundwater table, CREST Foundation
                  communities will contribute to rainfall regulation and global
                  cooling.
                </p>
                <p className="mission-sub-text" data-sal="slide-up" data-sal-duration="1000">
                  Today, many cities suffer from multi-year drought conditions
                  and rely on depleting freshwater sources to meet the needs of
                  their residents.
                </p>
                <p className="mission-sub-text" data-sal="slide-up" data-sal-duration="1000" >
                  Harvesting rainwater and managing runoff in urban areas remain
                  a challenge because most urban surfaces like concrete, metal
                  and asphalt are impervious to water
                </p>
                <p className="mission-sub-text" data-sal="slide-up" data-sal-duration="1000" >
                  Focusing on river protection and safe storage moves the needle
                  towards zero water waste. Using watershed techniques for
                  irrigation and organic farming practices promotes inclusive
                  ecosystems and improves the resilience of forests and
                  rangelands.
                </p>
                <p className="mission-sub-text" data-sal="slide-up" data-sal-duration="1000" >
                  Climate responsive habitats, comprising high-oxygenating,
                  water-holding plants, rainwater retention ponds, and pockets
                  of biodiversity, are a natural and practical way of addressing
                  the current water crisis.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
