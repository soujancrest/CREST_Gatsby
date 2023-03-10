import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Seo from "../components/seo"
import "../styles/global.scss"
const ClimateActionReport = () => (
  <div>
    <Seo title="Climate Action Report" />
    <div>
      <Container>
        <div className="people-detail-sec">
          <div className="car-se">
            <StaticImage src="../images/NEOM 01-02-22.jpg" />
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
              className="heading-bg crest-left"
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
              NEOM, SAUDI ARABIA.
            </h5>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              NEOM Region is in the upper north-west part of the Kingdom of
              Saudi Arabia, along the Red Sea and the Gulf of Aaqba. NEOM has
              been designated, by the Saudi Government, as an International
              Commercial and Industrial zone built on available natural and
              unique components of this region, adding to the economic vision
              that Saudi Arabia. The idea of creating NEOM Region was viewed
              from several different National and International aspects of
              development. NEOM has the potential to become the ultimate Smart
              City by achieving exceptional innovation in business, livability,
              and sustainability in line with Saudi’s vision 2030.
            </p>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              Primary focus of this report is to constitute a solution framework
              to restore ecological balance with broad roadmap towards
              environmental impact goals of CREST Foundation overlapped and
              measured in comparison with UN Sustainable Development Goals
              defined for Saudi Arabia. Evidence and results occurred in this
              report will get further evolved in Report II – Climate Hub Design
              and Implementation Roadmap with micro level details based on
              intense on ground and in person inspection of site location
              involving several subject matter experts.
            </p>
            <br></br>
            {/* <a
              href="../images/Climate_Action_Report_NEOM.pdf"
              download={"Climate_Action_Report_NEOM.pdf"}
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
