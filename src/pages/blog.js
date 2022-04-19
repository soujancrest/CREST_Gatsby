import { graphql } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import BlogThumb from "../components/BlogThumb"
import Layout from "../components/layout"

export default function Blog({ data }) {
  const blogs = data.allMarkdownRemark.nodes

  return (
    <div className="page-heads">
      <Container className="about-subs">
        <Row>
          <Col className="col-lg-4 col-12">
            <h1
              className="crest-heading blog-bg mb-20"
              data-sal="slide-up"
              data-sal-duration="1000"
            >
              OUR BLOG
            </h1>
          </Col>
          <Col className="col-lg-8 col-12">
            <p
              className="mission-discrption-info"
              data-sal="slide-up"
              data-sal-duration="1000"
              data-sal-delay="300"
            >
              CREST Foundation publishes objective, independent, high-quality
              research, including books, reports, and other materials covering
              sustainable development themes.
            </p>
          </Col>
        </Row>

        <div className="page-border">
          <Container>
            <div className="border-crest"></div>
          </Container>
        </div>
        <br></br>
        <div className="blog-thumb">
          {blogs.map(blog => (
            <BlogThumb blog={blog} />
          ))}
        </div>
      </Container>
    </div>
  )
}

export const query = graphql`
  query Blogs {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
      nodes {
        frontmatter {
          type
          slug
          title
          contentType
          focusArea
          excerpt

          thumbImage {
            childImageSharp {
              gatsbyImageData(height: 500)
            }
          }
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 500)
            }
          }
        }
      }
    }
  }
`
