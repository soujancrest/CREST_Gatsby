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
            <StaticImage src="../images/LUCKNOW_R4_double_spread.png" />
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
              LUCKNOW, UTTAR PRADESH.
            </h5>
            <br></br>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              Lucknow is the capital and the largest city of the Indian state of
              Uttar Pradesh and it is also the second largest urban
              agglomeration in Uttar Pradesh. Lucknow is the administrative
              headquarters of the eponymous district and division. It is the
              eleventh most populous city and the twelfth-most populous urban
              agglomeration of India. Lucknow has always been a multicultural
              city that flourished as a North Indian cultural and artistic hub,
              and the seat of power of Nawabs in the 18th and 19th centuries. It
              continues to be an important center of governance, administration,
              education, commerce, aerospace, finance, pharmaceuticals,
              technology, design, culture, tourism, music and poetry.
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
