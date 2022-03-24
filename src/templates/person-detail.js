import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

export default function PersonDetail({ data }) {
  // console.log(data)
  const { html } = data.markdownRemark
  const { title, stack, name, designation, excerpt, featuredImage } =
    data.markdownRemark.frontmatter
  const image = getImage(featuredImage)
  return (
    <div>

      <Container>
        <div className="people-detail-sec">
          <div className="people-img">
            <GatsbyImage image={image} />
          </div>
          <div className="people-details">

            <StaticImage src="../../images/about/arrow-left.png" />

            <Link to="/about/people"> Back to People</Link>
            <br></br>
            <br></br>

            <h1 className="mission-subheading">{name}</h1>
            <h3>{designation}</h3>
            {/* <p>{excerpt}</p> */}
            <div
              className="content-inner"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </Container>

      {/* <div className="people-border"></div> */}

      <Container>
        <div className="people-details-content">
          {/* <h1>{title}</h1> */}

        </div>
      </Container>
    </div>
  )
}

export const query = graphql`
  query PersonDetail($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        name
        designation
        excerpt
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
      }
    }
  }
`
