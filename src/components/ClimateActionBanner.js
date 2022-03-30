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
          <div className="climate-sec-inner">
            <div className="climate-box-inner">
              <h6>INDRODUCING</h6>
              <h2>CLIMATE HUBS</h2>

              <p>
                Constant expansion and ever growing demands of urban age have
                become major contributors for depletion of natural resources,
                Deforestation, extinction of millions of plant & animal species
                and global warming which are bringing the human race closer to
                extinction each day.<br></br>
                CREST Foundation’s Climate Hubs are designed to create a
                paradigm shift in building forest ecosystems that promote
                De-urbanization by reducing urban loads, forming farm
                communities that are organic, Net-Zero & Carbon Neutral. These
                communities reduce food miles and create access to chemical
                free, unaltered, safe and healthy food. The communities also
                include herbal forests that help absorb affluents and increase
                oxygen levels in the atmosphere thereby contributing to global
                cooling. These communities adapt proven watershed techniques to
                recharge deep aquifers and increase reserves for fast depleting
                potable water besides fueling rural development & sustained
                circular economy.<br></br>
                Climate Hubs are the new age, future proof, low density
                mixed-use climate responsive habitats which include. The
                Habitats include food forests, education institutes ,
                healthcare, sports and work facilities within them providing
                free power, vegetables, fruits, milk & meat for a lifetime. The
                habitats introduce its residents to uncontaminated fresh air,
                safe water, and healthy soil while also adding wellness and
                sustainable ecosystems to their modern living standards. Climate
                Hub is designed to create an impeccable impact on biodiversity
                that helps in restoring the environmental balance & play a key
                role in safeguarding the future of the human race on planet
                earth.
              </p>
            </div>
            <div className="climate-box-books">
              <Row className="climate-inner-row">
                <Col className="climate-box-img col-md-3 col-12">
                  <StaticImage src="../images/climate-books.jpg" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2 className="mission-subheading heading-color">
                    Backcreek, Monroe County, West Virginia.
                  </h2>
                  <p className="mission-sub-text">
                    A consolidation gross study with focus on the current
                    situation due to several man-made developments across Monroe
                    County boiling down to Back Creek. This includes climatic &
                    geological changes that occurred over a period and its
                    impact on natural resources.
                  </p>
                  <p className="read-text">
                    <a href="/CAR-BackCreek/" className="readmore">
                      Read More <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col className="climate-box-img col-md-3 col-12">
                  <StaticImage src="../images/NEOM 01-02-22.jpg" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2 className="mission-subheading heading-color">
                    Neom, Saudi Arabia.
                  </h2>
                  <p className="mission-sub-text">
                    Primary focus of this report is to constitute a solution
                    framework and restore ecological balance with a roadmap
                    towards environmental impact goals of CREST Foundation
                    overlapped & measured in comparison with UN Sustainable
                    Development.
                    {/* Goals defined for Saudi Arabia. */}
                  </p>
                  <p className="read-text">
                    <a href="/CAR-Neom/" className="readmore">
                      Read More
                      <StaticImage src="../images/right-arrow.png" />
                    </a>
                  </p>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col className="climate-box-img col-md-3 col-12">
                  <StaticImage src="../images/Dhriti_Climate Hub_cover.jpg" />
                </Col>
                <Col className="box-right-con col-md-9">
                  <h2 className="mission-subheading heading-color">
                    Zaheerabad, Hyderabad
                  </h2>
                  <p className="mission-sub-text">
                    A study of the existing bionetwork in and around Zahirabad,
                    Telangana along with understanding the surrounding
                    ecosystems and analyzing how this affects the living
                    conditions of humans, Flora, and Fauna throughout the
                    district.
                  </p>
                  <p className="read-text">
                    <a href="/CAR-Zaheerabad/" className="readmore">
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
