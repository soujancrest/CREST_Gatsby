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
            <StaticImage src="../images/Kanpur-Climat Action Report.png" />
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
              KANPUR, UTTAR PRADESH.
            </h5>
            <br></br>
            <p
              className="mission-sub-text"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              Kanpur or Cawnpore is an industrial city in the central western
              part of the state of Uttar Pradesh, India. Founded in 1207, Kanpur
              became one of the most important commercial and military stations
              of British India. Kanpur is also the financial capital of Uttar
              Pradesh. Nestled on the banks of Ganges River, Kanpur stands as
              the major financial and industrial center of North India and also
              the ninth-largest urban economy in India. Today it is famous for
              its colonial architecture, gardens, parks and fine quality
              leather, plastic and textile products which are exported mainly to
              the West. It is the 12th most populous city and the 11th most
              populous urban agglomeration in India. Kanpur was an important
              British garrison town until 1947, when India gained independence.
              The urban district of Kanpur Nagar serves as the headquarters of
              the Kanpur Division, Kanpur Range and Kanpur Zone.
            </p>
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
            <br></br>
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
