import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import { convertToBgImage } from "gbimage-bridge"
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
          <div className="climate-sec-inner" >
            <div className="climate-box-inner" >
              <h6 data-sal="slide-up" data-sal-duration="1000" >INTRODUCING</h6>
              <h2 data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">CLIMATE HUBS</h2>

              <p >
                Constant expansion and ever growing demands of urban age have
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
                cooling.
              </p>
            </div>
            <div className="climate-box-books">
              <Row className="climate-inner-row">
                <Col className="climate-box-img col-md-3 col-12" data-sal="slide-up" data-sal-duration="1000" >
                  <StaticImage src="../images/climate-books.jpg" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2 className="mission-subheading heading-color" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
                    Backcreek, Monroe County, West Virginia.
                  </h2>
                  <p className="mission-sub-text" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
                    A consolidation gross study with focus on the current
                    situation due to several man-made developments across Monroe
                    County boiling down to Back Creek. This includes climatic &
                    geological changes that occurred over a period and its
                    impact on natural resources.
                  </p>
                  <p className="read-text" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
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
                <Col className="climate-box-img col-md-3 col-12" data-sal="slide-up" data-sal-duration="1000" >
                  <StaticImage src="../images/NEOM 01-02-22.jpg" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2 className="mission-subheading heading-color" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
                    Neom, Saudi Arabia.
                  </h2>
                  <p className="mission-sub-text" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
                    Primary focus of this report is to constitute a solution
                    framework and restore ecological balance with a roadmap
                    towards environmental impact goals of CREST Foundation
                    overlapped & measured in comparison with UN Sustainable
                    Development.
                    {/* Goals defined for Saudi Arabia. */}
                  </p>
                  <p className="read-text" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
                    <a href="/ClimateActionReport-Neom/" className="readmore">
                      Read More
                      <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col className="climate-box-img col-md-3 col-12" data-sal="slide-up" data-sal-duration="1000" >
                  <StaticImage src="../images/Dhriti_Climate Hub_cover.jpg" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2 className="mission-subheading heading-color" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
                    Zaheerabad, Hyderabad
                  </h2>
                  <p className="mission-sub-text" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
                    A study of the existing bionetwork in and around Zahirabad,
                    Telangana along with understanding the surrounding
                    ecosystems and analyzing how this affects the living
                    conditions of humans, Flora, and Fauna throughout the
                    district.
                  </p>
                  <p className="read-text" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">
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
            </div>
          </div>
        </Container>
      </div>
    </BackgroundImage>
  )
}
