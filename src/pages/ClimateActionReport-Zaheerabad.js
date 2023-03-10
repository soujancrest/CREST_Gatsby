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
            <StaticImage src="../images/Dhriti_Climate Hub_cover.jpg" />
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
              Zaheerabad, Hyderabad.
            </h5>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              A study of the existing bionetwork in and around Zahirabad,
              Telangana along with understanding the surrounding ecosystems and
              analyzing how this affects the living conditions of humans, Flora,
              and Fauna throughout the district to come up with best practices
              for enhancing biodiversity and bringing about ecological balance.
            </p>
            <br></br>
            {/* <a
              href="#"
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
