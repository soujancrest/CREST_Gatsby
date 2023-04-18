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
            <StaticImage src="../images/Climate_Action_Report_EMRS.jpg" />
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
              TSEMRS, Telangana.
            </h5>
            <br></br>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              Telangana is a state in India situated on the south-central
              stretch of the Indian peninsula on the high Deccan Plateau. On 2nd
              June 2014, the area was separated from the northwestern part of
              Andhra Pradesh as the newly formed state with Hyderabad as its
              capital.
            </p>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
            >
              The name ‘Telangana’ is derived from the word ‘Trilinga’ meaning
              the place of three lingas as according to legends, Lord Shiva’s
              lingas are found on three mountains Srisailam, Kaleshwaram and
              Draksharama which form the boundaries of Telangana. It is
              mentioned in the Mahabharata as Telingadesha and it is said that
              the people of this land sided with Pandavas in their battle
              against Kauravas in the Kurukshetra War. It is also mentioned in
              the Aitreyabrahmana, Ramayana and Puranas.
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
