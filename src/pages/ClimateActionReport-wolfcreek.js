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
            <StaticImage src="../images/Climate_Hub_wolf_creek.jpg" />
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
              WOLF CREEK , FAYETTE COUNTY , WEST VIRGINIA.
            </h5>
            <br></br>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              Wolf Creek is a thousand-acre mixed-use development situated in
              the heart of Fayette County, West Virginia dedicated to
              Residential development, Commercial development, Industrial
              development, environmental, education, and recreational purposes.
            </p>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
            >
              It is in one of the most diverse watersheds in Fayette County and
              is strategically located adjacent to US Route 19 at Appalachian
              Drive and S R 16.
            </p>
            <p>
              Residents of Fayette County take pride in its naturally beautiful
              landscapes, recreational resources, affordable living conditions,
              ease of accessibility and friendly atmosphere.
            </p>
            <br></br>
            <a
              href="../images/Climate_Hub_Wolf_Creek.pdf"
              download={"../images/Climate_Hub_Wolf_Creek.pdf"}
              target="_blank"
              className="explor-btn download-btn"
              data-sal="slide-up"
              data-sal-duration="1000"
              // onclick="DownloadFile('../images/Climate_Action_Report_Back_Creek.pdf')"
            >
              Download
            </a>
          </div>
        </div>
      </Container>
    </div>
  </div>
)
export default ClimateActionReport
