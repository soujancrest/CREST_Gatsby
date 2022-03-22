import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import { Tabs } from "react-bootstrap"
import Tab from "react-bootstrap/Tab"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import styles from "../../styles/global.scss"
import AboutLayout from "../../components/AboutLayout"

export default function OurHope() {
  return (
    <Layout>
      <Seo title="Hope" />
      <AboutLayout />
      <div>
        <Container className="about-sub">
          <h4 className="mission-heading mb-20">OUR HOPE</h4>

          <div className="ab-overview">
            <div className="ab-img">
              <StaticImage
                src="../../images/about/our-hope.jpg"
                alt="sdfds"
                class="img-fluid"
              />
            </div>

            <div className="ab-content">
              <h4>Climate Responsive Habitants and Water Conservation</h4>
              <br></br>
              <p>
                CREST Foundation will create water-positive communities that
                respect nature’s biological, geological, chemical, and physical
                systems. By implementing water conservation and soil
                rehabilitation techniques that fix topsoil’s ability to
                percolate water into the groundwater table, CREST Foundation
                communities will contribute to rainfall regulation and global
                cooling.
              </p>
              <p>
                Today, many cities suffer from multi-year drought conditions and
                rely on depleting freshwater sources to meet the needs of their
                residents.
              </p>
            </div>
          </div>
          <div className="ab-main-con">
            <p>
              Harvesting rainwater and managing runoff in urban areas remain a
              challenge because most urban surfaces like concrete, metal and
              asphalt are impervious to water
            </p>
            <p>
              Focusing on river protection and safe storage moves the needle
              towards zero water waste. Using watershed techniques for
              irrigation and organic farming practices promotes inclusive
              ecosystems and improves the resilience of forests and rangelands.
            </p>
            <p>
              Climate responsive habitats, comprising high-oxygenating,
              water-holding plants, rainwater retention ponds, and pockets of
              biodiversity, are a natural and practical way of addressing the
              current water crisis.
            </p>
          </div>
        </Container>
      </div>
    </Layout>
  )
}
