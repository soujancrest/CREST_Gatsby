import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import BackgroundImage from "gatsby-background-image"
import { StaticImage } from "gatsby-plugin-image"

export default function ClimateActionBanner({ className }) {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "white.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "cliamet-sec.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    },
  ]

  return (
    <BackgroundImage
      Tag={`section`}
      id={`media-test`}
      // className={className}
      className="crestbanner"
      fluid={sources}
    >
      <div className="crest-banner-home climate-banner">
        <Container>
          <div className="climate-sec-inner">
            <div className="climate-box-inner">
              <h6 data-sal="slide-up" data-sal-duration="1000">
                INTRODUCING
              </h6>
              <h2
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
              >
                CLIMATE HUBS
              </h2>

              <p>
                Constant expansion and ever growing demands of urban edge have
                become major contributors for depletion of natural resources,
                Deforestation, extinction of millions of plant & animal species
                and global warming which are bringing the human race closer to
                extinction each day.<br></br>
                <br></br>
                CREST Foundation’s Climate Hubs are designed to create a
                paradigm shift in building forest ecosystems that promote
                De-urbanization by reducing urban loads, forming farm
                communities that are organic, Net-Zero & Carbon Neutral. These
                communities reduce food miles and create access to chemical
                free, unaltered, safe and healthy food. The communities also
                include herbal forests that help absorb affluents and increase
                oxygen levels in the atmosphere thereby contributing to global
                cooling. These communities adapt proven watershed 
techniques to recharge deep aquifers and increase reserves for fast depleting 
potable water besides fueling rural development & sustained circular economy. 
  Climate Hubs are the new age, future proof, low density mixed-use climate 
responsive habitats which include. The Habitats include food forests, education 
institutes, healthcare, sports, and work facilities within them providing free 
power, vegetables, fruits, milk & meat for a lifetime.
              </p>
            </div>
            <div className="climate-box-books">
              <Row className="climate-inner-row">
                <Col
                  className="climate-box-img col-md-3 col-12"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <StaticImage src="../images/Climate_Hub_wolf_creek.jpg" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Wolf creek, Fayette County, West Virginia.
                  </h2>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Wolf Creek is a thousand-acre mixed-use development situated
                    in the heart of Fayette County, West Virginia dedicated...
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="400"
                  >
                    <a
                      href="/ClimateActionReport-wolfcreek"
                      className="readmore"
                    >
                      Read More <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col
                  className="climate-box-img col-md-3 col-12"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <StaticImage src="../images/climate-books.jpg" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Backcreek, Monroe County, West Virginia.
                  </h2>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    A consolidation gross study with focus on the current
                    situation due to several man-made developments across Monroe
                    County...
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="400"
                  >
                    <a
                      href="/ClimateActionReport-BackCreek/"
                      className="readmore"
                    >
                      Read More <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col
                  className="climate-box-img col-md-3 col-12"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <StaticImage src="../images/NEOM 01-02-22.jpg" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Neom, Saudi Arabia.
                  </h2>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Primary focus of this report is to constitute a solution
                    framework and restore ecological balance with a roadmap
                    towards...
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    <a href="/ClimateActionReport-Neom/" className="readmore">
                      Read More
                      <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col
                  className="climate-box-img col-md-3 col-12"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <StaticImage src="../images/Brahmana-cover.jpg" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                   BRAHMANA VELLEMLA 
CHOUDAMPALLY, TELANGANA
                  </h2>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Nestled amidst the serene landscapes of the Brahmana 
Vellemla Balancing Reservoir, this enchanting location 
offers...
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    <a href="/ClimateActionReport-Brahmana/" className="readmore">
                      Read More
                      <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row>
              {/* <Row className="climate-inner-row">
                <Col
                  className="climate-box-img col-md-3 col-12"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <StaticImage src="../images/Dhriti_Climate Hub_cover.jpg" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Zaheerabad, Hyderabad
                  </h2>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    A study of the existing bionetwork in and around Zahirabad,
                    Telangana along with understanding the surrounding
                    ecosystems...
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    <a
                      href="/ClimateActionReport-Zaheerabad/"
                      className="readmore"
                    >
                      Read More
                      <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row> */}
            </div>
          </div>
          <div className="climate-sec-inner">
            <div className="climate-box-books">
              <Row className="climate-inner-row">
                <Col
                  className="climate-box-img col-md-3 col-12"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <StaticImage src="../images/Dhriti_Climate Hub_cover.jpg" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Zaheerabad, Hyderabad
                  </h2>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    A study of the existing bionetwork in and around Zahirabad,
                    Telangana along with understanding the surrounding
                    ecosystems...
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    <a
                      href="/ClimateActionReport-Zaheerabad/"
                      className="readmore"
                    >
                      Read More
                      <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col
                  className="climate-box-img col-md-3 col-12"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <StaticImage src="../images/Govt_Hyderabad_Climate_Hub.png" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Yadagirigutta, Telangana.
                  </h2>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Yadagirigutta is a census town in Alair Assembly
                    constituency of Yadadri Bhuvanagiri district of the Indian
                    state of Telangana...
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="400"
                  >
                    <a
                      href="/ClimateActionReport-Yadagirigutta/"
                      className="readmore"
                    >
                      Read More <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col
                  className="climate-box-img col-md-3 col-12"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <StaticImage src="../images/LUCKNOW_R4_double_spread.png" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Lucknow, Uttar Pradesh.
                  </h2>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Lucknow is the capital and the largest city of the Indian
                    state of Uttar Pradesh and it is also the second largest
                    urban agglomeration in Uttar Pradesh...
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    <a
                      href="/ClimateActionReport-Lucknow/"
                      className="readmore"
                    >
                      Read More
                      <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row>
            </div>
            <div className="climate-box-books">
              <Row className="climate-inner-row">
                <Col
                  className="climate-box-img col-md-3 col-12"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <StaticImage src="../images/TSWREIS_SOCIAL WELFARE.png" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    TSWREIS, Telangana.
                  </h2>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Roadmap to achieve impactful change to restore ecological
                    balance by protecting critical resources for human survival
                    such as Air, Water, Soil, etc.,
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="400"
                  >
                    <a href="/ClimateActionReport-TSWREIS" className="readmore">
                      Read More <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col
                  className="climate-box-img col-md-3 col-12"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <StaticImage src="../images/Kanpur-Climat Action Report.png" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Kanpur, Uttar Pradesh.
                  </h2>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Kanpur or Cawnpore is an industrial city in the central
                    western part of the state of Uttar Pradesh, India. Founded
                    in 1207...
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="400"
                  >
                    <a href="/ClimateActionReport-Kanpur/" className="readmore">
                      Read More <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col
                  className="climate-box-img col-md-3 col-12"
                  data-sal="slide-up"
                  data-sal-duration="1000"
                >
                  <StaticImage src="../images/Climate_Action_Report_EMRS.jpg" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2
                    className="mission-subheading heading-color"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    TSEMRS, Telangana.
                  </h2>
                  <p
                    className="mission-sub-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    Telangana is a state in India situated on the south-central
                    stretch of the Indian peninsula on the high Deccan Plateau.
                    On 2nd June 2014...
                  </p>
                  <p
                    className="read-text"
                    data-sal="slide-up"
                    data-sal-duration="1000"
                    data-sal-delay="300"
                  >
                    <a href="/ClimateActionReport-TSEMRS/" className="readmore">
                      Read More
                      <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </BackgroundImage>
  )
}
