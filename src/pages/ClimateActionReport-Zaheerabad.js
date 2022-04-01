import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import BlogThumb from "../components/BlogThumb"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/global.scss"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
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
            <Link to="/" className="back-page">
              Back to Home
            </Link>

            <h4 className="heading-bg crest-left">CLIMATE ACTION REPORT</h4>
            <h5 className="mission-subheading heading-color">
              Zaheerabad, Hyderabad.
            </h5>
            <p className="mission-sub-text">
            A study of the existing bionetwork in and around Zahirabad, Telangana along with understanding the surrounding ecosystems and analyzing how this affects the living conditions of humans, Flora, and Fauna throughout the district to come up with best practices for enhancing biodiversity and bringing about ecological balance.
            </p>
            <br></br>
            <a href="/" className="explor-btn download-btn">Download</a>
          </div>
        </div>
      </Container>

      {/* <Container> 
     
        <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example" className="crest-tab ">
          <Tab eventKey="overview" title="Overview" className="crest-tabs-inner">
           <div className="tabs-content">
             <p>
             Brief introduction - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 


             </p>
           </div>
          </Tab>
          <Tab eventKey="research" title="Research" className="crest-tabs-inner">
            <div className="tabs-content">
              <p> This is Research</p>
            </div>
           
          </Tab>
          <Tab eventKey="targets" title="Targets" className="crest-tabs-inner">
          <div className="tabs-content">
              <p> This is Targets</p>
            </div>
          </Tab>
          <Tab eventKey="impact" title="Impact" className="crest-tabs-inner">
          <div className="tabs-content">
              <p> This is Impact</p>
            </div>
          </Tab>
        </Tabs>
      
      </Container> */}
    </div>
  </div>
)
export default ClimateActionReport
