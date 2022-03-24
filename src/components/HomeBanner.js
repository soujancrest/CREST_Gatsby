import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

export default function HomeBanner() {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "crest-3.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)

  const bgImage = convertToBgImage(image)
  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
      className="crestbanner"
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