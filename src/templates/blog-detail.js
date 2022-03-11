import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

export default function BlogDetail({ data }) {
  // console.log(data)
  const { html } = data.markdownRemark
  const { title, stack, contentType, excerpt, featuredImage } =
    data.markdownRemark.frontmatter
  const image = getImage(featuredImage)
  return (
    <Layout>
      <Container>
        <Row>
          <h6>{contentType}</h6>
          <p>{title}</p>
          <p>{excerpt}</p>
        </Row>
        <Row>
          <GatsbyImage image={image} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogDetail($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        contentType
        excerpt
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }
`
