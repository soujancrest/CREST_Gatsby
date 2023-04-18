import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import BlogThumb from "../components/BlogThumb"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/global.scss"
import Tab from "react-bootstrap/Tab"

const ClimateActionReport = () => (
  <div>
    <Seo title="Climate Action Report" />
    <div>
      <Container>
        <div className="people-detail-sec ">
          <div className="car-se">
            <StaticImage src="../images/TSWREIS_SOCIAL WELFARE.png" />
          </div>

          <div className="people-details">
            <Link
              to="/"
              className="back-page"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              <StaticImage src="../images/arrow-left.png" />
              <span> Back to Home</span>
            </Link>

            <h4
              className="heading-bg"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              CLIMATE ACTION REPORT
            </h4>
            <h5
              className="mission-subheading heading-color"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              TSWREIS, Telangana.
            </h5>
            <br></br>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              VISION - Roadmap to achieve impactful change to restore ecological
              balance by protecting critical resources for human survival such
              as Air, Water, Soil, etc., and create a world of Climate Warriors
              with a strong foundation of Triple Bottom Line Philosophy
              benefitting People, Planet and Profits through Green Campuses.
              <br></br>
              To start a Climate Movement with students of TSWREIS by instilling
              values for a future proof, all inclusive society through a career
              path in Environmental Entrepreneurship.
            </p>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
            >
              MISSION - World’s first unique initiative to integrate 16 out of
              17 United Nations Sustainable Development Goals in every Green
              Campus to be the torchbearer in grounding high-impact ecological
              footprint aligned with global 2030 climate goals.
            </p>
            <br></br>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
            >
              For more info, contact{" "}
              <a href="mailto:lakshmi@crest.eco" target="_blank">
                lakshmi@crest.eco
              </a>
            </p>
            {/* <a
              href="../images/Climate_Action_Report_Back_Creek.pdf"
              download={"../images/Climate_Action_Report_Back_Creek.pdf"}
              target="_blank"
              className="explor-btn download-btn"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              Download
            </a> */}
          </div>
        </div>
      </Container>
    </div>
  </div>
)
export default ClimateActionReport
