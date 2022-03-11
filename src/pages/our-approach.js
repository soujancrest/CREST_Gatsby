import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styles from "../styles/global.scss"

import utility from "../styles/utility.scss"

const OurApproach = () => (
  <Layout>
    <Seo title="Our Approach" />
    <div className="page-head">
      <Container>
        <h2 className="crest-heading mb-20">OUR APPROACH</h2>

        <h3>Lorem Ipsum is a dummy text</h3> <br></br>
        <p className="mission-discrption-info">
          We are on the verge of extinctions, but we don't seem to realise it.
          To date, Earth has witnessed five mass extinctions, and all five have
          been caused by natural geological changes
        </p>
      </Container>
    </div>

    <div className="page-border">
      <Container>
        <div className="border-crest"></div>
      </Container>
    </div>
    <div className="tab-sec">
      <Container>
        {/* <Row>
          <Col>
            <p>OVERVIEW</p>
          </Col>
          <Col>
            <p>OUR "ECO"NOMIC MODEL</p>
          </Col>
          <Col>
            <p>OUR APPROACH</p>
          </Col>
          <Col>
            <p>OUR GOALS</p>
          </Col>
          <Col>
            <p>PEOPLE</p>
          </Col>
        </Row> */}
      </Container>
    </div>
    <div>
      <Container>
        <div className="approch">
          <div className="approch-dis">
            <h3 className="mission-discrption-info mb-20">
              Our Roadmap To Sustained Growth
            </h3>
            <p className="md-subp">
              With a robust financial plan to recuperate funds allocated to each
              part of the Impact Fund, CREST Foundation will not need to secure
              additional funding beyond the first $100 million. Using this model
              of sustained economic growth, in 12 years, CREST Foundation
              expects to grow its revenue into $1.780 billion
            </p>
            <p className="md-subp">
              CREST Foundation’s sustained, robust economic model is structured
              to generate revenue from the very first project.
            </p>
            <p className="md-subp">
              The first demonstration project (proof of concept) is estimated to
              cost $150 million. The demonstrated project will include all the
              amenities associated with the project as well as 10 ready-
              to-move-in model homes (out of the 600 projected homes to be built
              as a part of the project). The amenities will include 500 acres of
              organic permaculture farms, 100,000 sq/ft of responsible
              commercial real estate (office spaces), processed food industries,
              an organic shopping village, 64 types of sports and entertainment,
              a fully functional cafeteria, a hospital and wellness centre, and
              green school and college buildings.
            </p>
            <p className="md-subp">
              Our goal for the first project is to create 20,000 jobs, produce
              30 megawatts of clean energy and 130,000 metric tons of organic
              food.
            </p>
            <p className="md-subp">
              These amenities will form the nucleus and the launchpad for the
              remaining development. This will enable new home buyers to have a
              real-time experience of all the functional aspects of the
              community. It will also serve to showcase the advantages of living
              within a fully sustainable community and helps the land and
              move-in-ready homes gain premium value, which promises better ROI.
            </p>
            <p className="md-subp">
              Services rendered by CREST Foundation will include sustainable
              design and consulting services, impact studies and certifications,
              staffing, skill development and training, and Smart City
              automation technologies. CREST Foundation will charge $10 million
              to SPV for these rendered services, thus recuperating its
              operational costs
            </p>
            <p className="md-subp">
              The ROI from land development in each project is reinvested into
              future projects, thus furthering the positive ecological and
              environmental impact of CREST Foundation.
            </p>
            <p className="md-subp">
              As funds from more projects are reinvested into procuring and
              developing more lands, the number of jobs created in the process
              will increase exponentially. Through the work of the Foundation,
              40,000 jobs will be created by Year 3, 160,000 jobs will be
              created by Year 6, 240,000 jobs will be created by Year 9, and
              620,000 jobs will be created by Year 12.
            </p>
            <p className="md-subp">
              By sparking a clean energy and an organic food revolution,
              decarbonizing over-congested cities, improving air quality, and
              bringing back ecosystems and biodiversity local to each region,
              CREST Foundation will move the needle of climate change in the
              right direction.
            </p>
          </div>

          <div className="approch-img">
            <StaticImage src="../images/approch.png" alt="" className="app-img-c" />
          </div>
        </div>
      </Container>
      <Container>
        <div className="approch-1">

          <h3 className="mission-discrption-info mb-20">Our Solution Framework</h3>
          <p className="md-subp">
            CREST Foundation aims to create sustainable, carbon neutral, built
            environments with climate responsive habitats that contribute to
            people and planet wellbeing.
          </p>
          <p className="md-subp">
            The project establishes a closed loop cycle where waste from one
            process becomes the source for another — food consumption and
            production are no longer separated as distinct processes. Every
            resident becomes a co-owner in the process of creating a
            non-polluting, self-sufficient community.
          </p>
        </div>


      </Container>

      <Container>
        <div className="approach-cards">
          <Row>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/air.png" alt="" />
                </div>

                <div className="">
                  <h3 className="mission-discrption-info mb-20">
                    AIR
                  </h3>
                  <p className="md-subp">
                    Herbal forests absorb toxins and produce clean, medicinal air that improves air quality,
                    the immunity of residents and promotes biodiversity.
                  </p>
                </div>

              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/water.png" alt="" />
                </div>
                <div>
                  <h3 className="mission-discrption-info mb-20">
                    Water
                  </h3>
                  <p className="md-subp">
                    Watershed management, collected runoff, and harvested rainwater are used to replenish groundwater and recharge deep aquifers and treated sewage water is used for agriculture, enabling the development to become water positive.
                  </p>
                </div>

              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/soil.png" alt="" />
                </div>

                <h3 className="mission-discrption-info mb-20">
                  SOIL
                </h3>
                <p className="md-subp">
                  Closed loop systems and organic practices detoxify and improve soil health while promoting a thriving biodiversity.
                </p>
              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/food.png" alt="" />
                </div>
                <h3 className="mission-discrption-info mb-20">
                  FOOD
                </h3>
                <p className="md-subp">
                  Witnessed organic food production establishes the highest nutritional and food
                  safety standards. Farm-fresh, farm-to-fork produce is distributed to residents and
                  excess produce is sold outside the community, generating a sustained revenue that compensates for maintenance costs.
                </p>
              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">

                <div className="app-img">
                  <StaticImage src="../images/our-approach/energy.png" alt="" />

                </div>
                <h3 className="mission-discrption-info mb-20">
                  Energy
                </h3>
                <p className="md-subp">
                  The project will use solar winds, low wind turbines, biogas plants and biofuel to create
                  an energy positive development.
                </p>
              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/eco.png" alt="" />
                </div>
                <h3 className="mission-discrption-info mb-20">
                  Eco Habitats
                </h3>
                <p className="md-subp">
                  Daylight integrated, positive air pressure homes eliminate indoor toxins and produce
                  clean energy. Herbal gardens and food forests enable zero-refrigeration, which reduces carbon footprints.
                </p>
              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/people.png" alt="" />

                </div>
                <h3 className="mission-discrption-info mb-20">
                  People
                </h3>
                <p className="md-subp">
                  All-inclusive living systems promote a sound rural socio-economic fabric and several opportunities for social bonding.
                </p>
              </div>
            </Col>
            <Col className="mb-20" lg="3" sm="6">
              <div className="app-cards">
                <div className="app-img">
                  <StaticImage src="../images/our-approach/animal.png" alt="" />


                </div>
                <h3 className="mission-discrption-info mb-20">
                  Animals
                </h3>
                <p className="md-subp">
                  All animals farmed in the community are fed organic produce. Consequently, all meat and dairy produced on the farms meet the highest food and nutritional safety standards. Bio manure from animals is used to improve soil fertility and aids in producing zero-adulteration food
                </p>
              </div>
            </Col>
          </Row>
        </div>

      </Container>
    </div>
  </Layout>
)

export default OurApproach
