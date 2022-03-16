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
    <Layout>
      <Container className="about-subs">
        <h1 className="crest-heading mb-20">OUR BLOG</h1>
        <p>
          CREST Foundation publishes objective, independent, high-quality
          research, including books, reports, and other materials covering
          sustainable development themes.
        </p>
        <div className="blog-thumb">
          {blogs.map(blog => (
            <BlogThumb blog={blog} />
          ))}
        </div>
      </Container>
    </Layout>
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
