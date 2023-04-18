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
            <StaticImage src="../images/Govt_Hyderabad_Climate_Hub.png" />
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
              YADAGIRIGUTTA, TELANGANA.
            </h5>
            <br></br>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              Yadagirigutta is a census town in Alair Assembly constituency of
              Yadadri Bhuvanagiri district of the Indian state of Telangana. It
              is a temple town as the famous Lakshmi Narasimha Temple is
              situated here. It is 16 Kms from the district headquarters
              Bhuvanagiri which is a part of Hyderabad Metropolitan Region and
              55 Kms from Uppal, a major suburb of Hyderabad. The proposed
              Hyderabad Regional Ring Road passes through Yadagirigutta.
            </p>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
            >
              Yadagirigutta is a unique and pleasant place that enjoys a
              harmonious climate in all seasons. The 300 - acre Yadagirigutta
              forest property has Sri Lakshmi Narasimha Swamy temple adjacent to
              it. The forest has a long history of good forest cover with
              mountains.
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
