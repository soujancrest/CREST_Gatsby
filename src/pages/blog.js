import { graphql } from "gatsby"
import React from "react"
import { Container } from "react-bootstrap"
import BlogThumb from "../components/BlogThumb"
import Layout from "../components/layout"
// import Seo from "../components/seo"

export default function Blog({ data }) {
  const blogs = data.allMarkdownRemark.nodes
  // const blogs = allMds.filter(blog => blog.frontmatter.Category === "blog")

  console.log(blogs)
  return (
    <div>
      <Container className="about-subs">
        <h1 className="crest-heading blog-bg mb-20">OUR BLOG</h1>
        {/* <h3>Re-engineering the concrete jungle</h3> <br></br> */}
        <p className="mission-discrption-info">
          CREST Foundation publishes objective, independent, high-quality
          research, including books, reports, and other materials covering
          sustainable development themes.
        </p>
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
