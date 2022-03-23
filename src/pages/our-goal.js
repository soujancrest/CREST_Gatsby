import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styles from "../styles/global.scss"

const OurGoal = () => (
  <Layout>
    <Seo title="Our Goal" />
    <div className="page-head">
      <Container>
        <Row>
          <Col className="col-lg-4 col-12">
            <h2 className="crest-heading mb-20">OUR GOAL</h2>
            </Col>
            <Col className="col-lg-8 col-12">
            <p className="mission-discrption-info">
            To create 20 climate hubs in the next 10 years and create a paradigm shift to reduce urban loads through De-urbanization, Afforestation, Biodiversity, Walk to Work, Farm and Folk, Net Zero Carbon Neutral Communities.
            </p>
            </Col>
           
        
        </Row>
      </Container>
    </div>
    {/* <div className="tab-sec">
      <Container></Container>
    </div> */}

    <div className="page-border">
      <Container>
        <div className="border-crest"></div>
      </Container>
    </div>
    <div>
      <Container className="about-sub">
        <Row>
          <Col className="col-lg-4 col-12">
            <div className="goal-img">
              <StaticImage src="../images/goal-1.png" alt="" />
            </div>
          </Col>
          <Col className="col-lg-8 col-sm-12">
            <div className="goal-section">
              <h3 className="mission-subheading heading-color">Future-Proof Climate Hubs And Inclusivity</h3>
              <p className="mission-sub-text" style={{
                fontStyle:"italic",
                color:"#595757"
              }}>
                Energy-efficient and climate-resilient design features are a
                standard component of CREST Foundation’s infrastructure plan.
                CREST Foundation’s all-inclusive schools and workspaces will
                offer better ROI to residents in terms of air, water, food,
                health, and mental wellbeing.
              </p>
              <p className="mission-sub-text">
                Although little changes in terms of the landscape, amenities, or
                access to fresh air or drinking water, demand for urban housing
                continues to rise exponentially, skyrocketing prices. Urban
                residents spend more money but often compromise on health and
                wellbeing since they don’t have easy access to farm-fresh food
                or nature. The opportunity cost of not living close to nature
                grows larger every day. Urban citizens are subjected to constant
                noise, food, air, and water pollution. The solution is to
                re-engineer the concrete jungle to function as a sustainable
                community within a closed-loop cycle. Reviving a sense of
                community by creating cities within natural ecosystems can
                revitalize mental and physical health. Exclusion hasn’t worked.
                All-inclusive living is the way forward
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="about-sub">
        <Row>
          <Col className="col-lg-4 col-12">
            <div className="goal-img">
              <StaticImage src="../images/goal-2.png" alt="" />
            </div>
          </Col>
          <Col className="col-lg-8 col-sm-12">
            <div className="goal-section">
              <h3 className="mission-subheading heading-color">Communities with Walkability</h3>
              <p className="mission-sub-text" style={{
                fontStyle:"italic",
                color:"#595757"
              }}>
                CREST Foundation’s ‘Walk to Work’ and ‘Walk to School’ living
                situations remove the need to commute every day and help
                dramatically cut down on emissions from transportation, global
                warming’s leading contributor.
              </p>
              <p className="mission-sub-text">
                Cities are crumbling under the weight of supporting their
                residents. Whether it is increasing the stock of affordable
                housing for low-income families, often from marginalized
                communities, managing waste, providing safe drinking water, or
                following food safety practices, cities face an uphill battle in
                the coming years. Dealing with traffic congestions, long
                commutes and packed living situations is often the norm for
                urban residents. The solution is to de-clutter the concrete
                jungle by creating clusters of communities across the country
                where both jobs and schools are in walking distance of
                residential neighborhoods. Building green schools, family
                engagement centres and workspaces in socially disadvantaged
                neighborhoods and education deserts stimulates economic growth
                at a grass-root level. These mixed-use neighborhoods promote
                social equality by helping bridge the current employment and
                economic opportunity gap between urban and rural areas.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="about-sub">
        <Row>
          <Col className="col-lg-4 col-12">
            <div className="goal-img">
              <StaticImage src="../images/goal-3.png" alt="" />
            </div>
          </Col>
          <Col className="col-lg-8 col-sm-12">
            <div className="goal-section">
              <h3 className="mission-subheading heading-color">Community Living and Social Bonding</h3>
              <p className="mission-sub-text" style={{
                fontStyle:"italic",
                color:"#595757"
              }}>
                CREST Foundation’s integrated townships will include green
                schools and open workspaces, a sports and entertainment village,
                a hospital and wellness centre, herb gardens and community
                kitchens, and other public assets geared towards enhancing the
                physical and mental quality of life
              </p>
              <p className="mission-sub-text">
                Urban housing does not facilitate the forming of meaningful
                connections with neighbors or the community at large. In an
                increasingly individualistic society, a lack of social bonding
                can cause stress, anxiety, and depression. Sustainable
                communities focused on eco-wellness naturally promote physical
                and emotional wellness and reduce stress, creating social
                harmony. Architectural design and natural landscaping within the
                community can be fashioned into shared indoor and outdoor
                spaces. These functional spaces can be used for family friendly
                events and nature-immersive activities that align with the
                community’s shared sustainability goals. Participation in
                collective activities offers innumerable opportunities to form
                meaningful interpersonal connections and strengthens the
                emotional wellbeing of the community’s residents
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default OurGoal
