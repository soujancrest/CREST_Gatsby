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
            <StaticImage src="../images/NEOM 01-02-22.jpg" />
          </div>

          <div className="people-details">
            <Link to="/" className="back-page">
              Back to Home
            </Link>

            <h4 className="heading-bg crest-left">CLIMATE ACTION REPORT</h4>
            <h5 className="mission-subheading heading-color">
              NEOM, SAUDI ARABIA.
            </h5>
            <p className="mission-sub-text">
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
            <p className="mission-sub-text">
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
            <botton className="explor-btn">Download</botton>
          </div>
        </div>
      </Container>

      {/* <Container>
        <Tabs
          defaultActiveKey="overview"
          id="uncontrolled-tab-example"
          className="crest-tab "
        >
          <Tab
            eventKey="overview"
            title="Overview"
            className="crest-tabs-inner"
          >
            <div className="tabs-content">
              <p>
                Brief introduction - Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
              </p>
            </div>
          </Tab>
          <Tab
            eventKey="research"
            title="Research"
            className="crest-tabs-inner"
          >
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
