import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import AboutLayout from "../../components/AboutLayout"

export default function OurCommitment() {
  return (
    <Layout>
      <Seo title="OurCommitment" />
      <AboutLayout />
      <div>
        <Container className="about-sub">
          <h4>OUR COMMITMENT</h4>
          <Row>
            <Col className="col-3">
              <StaticImage src="../images/Content.jpg" alt="" />
            </Col>
            <Col className="col-9">
              <p>Nutrition, Soil Health and Closed Loop Cycles</p>
              <p>
                CREST Foundation will create circular economies through its
                sustainable communities by implementing a ‘buy local, eat local’
                model of food production that dramatically reduces food miles.
                Organic farms within these sustainable communities will also
                support a farm-to-fork-to-farm model, allowing
                zero-refrigeration to become a reality.
              </p>
              <p>
                The nutritional quality of food is declining because of
                monocropping and chemical farming. Easy access to and mass
                production of frozen and processed food has made consuming
                fresh, organic produce more challenging and expensive.
              </p>
              <p>
                Global food transportation is a leading contributor to lower
                food and nutritional safety standards and higher greenhouse gas
                emissions. In the time it takes for food to be harvested and
                reach the customer, fresh, alkaline food turns acidic. Regular
                consumption of acidic food increases the risk of cancer and
                other gastroenterological diseases.
              </p>
              <p>
                Investing in climate-smart agriculture, nutritional food
                security, integrated pest management, and pollinator health and
                protection restores soil health. Regular access to fresh produce
                reduces dependence on refrigeration to store food. Improving
                soil health helps sequester carbon back into the Earth.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}
