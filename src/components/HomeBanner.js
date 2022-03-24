import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

export default function HomeBanner({className}) {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "crest-mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "crest-3.jpg" }) {
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
  // const image = getImage(placeholderImage)

  // const bgImage = convertToBgImage(image)
  return (
    <BackgroundImage
      // Tag="section"
      // Spread bgImage into BackgroundImage:
      // {...bgImage}
      // preserveStackingContext
      // className="crestbanner"

      Tag={`section`}
      id={`media-test`}
      // className={className}
      className="crestbanner"
      fluid={sources}
    >
  
      <div className="crest-banner-home">
     <Container>
          <div className="creast-inner">
            <div className="crest-banner-text">
              <h1 className="banner-heading">
                CREST CLIMATE HUBS <br></br>
                COULD BE THE SOLUTION
              </h1>
              <h4 className="banner-sub-heading">
                The planet earth has witnessed five mass extinctions <br>
                </br>
                Human race could be next!
              </h4>

            </div>
          </div>

        </Container>
        </div>
    </BackgroundImage>
  )
}