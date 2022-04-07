import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

export default function Notfound({ className }) {
    const { mobileImage, desktopImage } = useStaticQuery(
        graphql`
      query {
        mobileImage: file(relativePath: { eq: "notfound-mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "not-found.png" }) {
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

            Tag={`section`}
            id={`media-test`}

            className="crestbanner"
            fluid={sources}
        >

            <div className="crest-notfound">
                <Container>
                    <p>
                    404 Error
                    </p>
                   <h1>
                   Huhhhh Lost ?
                   </h1>
                   <p>
                   Mom was right there's no place like home 
                   </p>

                   <Link to="/" className="backto">
                       Back to home
                   </Link>

                </Container>
            </div>
        </BackgroundImage>
    )
}