import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import "../styles/global.scss"
import "../styles/about.scss"
import { motion} from "framer-motion"

export default function BlogDetail({ data }) {
  // console.log(data)
  const { html } = data.markdownRemark
  const { title, stack, contentType, excerpt, featuredImage,slug } =
    data.markdownRemark.frontmatter
  const image = getImage(featuredImage)
  return (
    <motion.div layoutid={`${slug}`}>

      <GatsbyImage image={image} />

      <Container>
        <Row className="blog-top">

          <nav aria-label="breadcrumb" className="crest-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><Link to="/">Home</Link></li>
              <li class="breadcrumb-item"><Link to="/blog">Blog</Link></li>
              <li class="breadcrumb-item active" aria-current="page">{title}</li>
            </ol>
          </nav>

          <h6 className="crest-heading mb-20">{title}</h6>
          <p className="mission-sub-text">{excerpt}</p>
        </Row>
        <div className="blog-border"></div>

        <Row>
          <div
            className="blog-inner"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Row>
        <Row>
          <div className="explore-btn">
            <Link className="explor-btn" to="/blog">
              Back to our blog
            </Link>
          </div>
        </Row>
      </Container>
    </motion.div>
  )
}

export const query = graphql`
  query BlogDetail($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        slug
        contentType
        excerpt
        title
        featuredImage {
          childImageSharp {
            gatsbyImageData(height: 500)
          }
        }
      }
    }
  }
`
