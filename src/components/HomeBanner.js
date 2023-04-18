import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"
import BackgroundImage from "gatsby-background-image"

export default function HomeBanner({ className }) {
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
  return (
    <BackgroundImage
      Tag={`section`}
      id={`media-test`}
      className="crestbanner"
      fluid={sources}
    >
      <div className="crest-banner-home">
        <Container>
          <div className="creast-inner">
            <div className="crest-banner-text">
              <h1
                className="banner-heading"
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-easing="ease"
              >
                CREST CLIMATE HUBS <br></br>
                COULD BE THE SOLUTION
              </h1>
              <h4
                className="banner-sub-heading"
                data-sal="slide-up"
                data-sal-duration="2000"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                The planet Earth has witnessed five mass extinctions <br></br>
                Human race could be next!
              </h4>
            </div>
          </div>
        </Container>
      </div>
    </BackgroundImage>
  )
}
