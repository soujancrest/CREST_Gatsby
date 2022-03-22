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
  <Layout>
    <Seo title="Climate Action Report" />
    <div>
      <Container>
        <div className="people-detail-sec">
          <div className="people-img">
            <StaticImage src="../images/Back Creek 27_Jan_2022 fin.jpg" />
          </div>

          <div className="people-details">
            <Link to="/" className="back-page">
              Back to Home
            </Link>

            <h4 className="heading-bg crest-left">CLIMATE ACTION REPORT</h4>
            <h5 className="mission-subheading heading-color">
              BACKCREEK, MONROE COUNTY, WEST VIRGINIA.
            </h5>
            <p className="mission-sub-text">
              The 5771-acre Back Creek Wilderness property shares a common
              boundary with the George Washington – Jefferson National Forest
              and the Moncove Lake Wildlife Management Area. The forest has a
              long history of quality timberland management influenced by
              investment parameters designed to maximize timber production,
              while maintaining the highest and best use of the land.
            </p>
            <p className="mission-sub-text">
              The property has been managed under West Virginia Best Management
              Practices and is currently FSC third-party certified. At present,
              there are no county zoning restrictions, allowing for the
              expansion of property use. Back Creek Wilderness is a tremendous
              producer of Oxygen and Carbon Sequester. With 5771 acres, the
              vigorously growing forest is sequestering approximately 1 million
              tons of Carbon Dioxide each per year.
            </p>
            <br></br>
            <botton className="explor-btn">Download</botton>
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
  </Layout>
)
export default ClimateActionReport
