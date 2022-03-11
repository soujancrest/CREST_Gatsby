import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

export default function PersonDetail({ data }) {
  // console.log(data)
  const { html } = data.markdownRemark
  const { title, stack, name, designation, excerpt, featuredImage } =
    data.markdownRemark.frontmatter
  const image = getImage(featuredImage)
  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <GatsbyImage image={image} />
          </Col>
          <Col>
            <span>Back to People</span>
            <h1>{name}</h1>
            <h3>{designation}</h3>
            <p>{excerpt}</p>
          </Col>
        </Row>
        <Row>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Row>
      </Container>
    </Layout>
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
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }
`
