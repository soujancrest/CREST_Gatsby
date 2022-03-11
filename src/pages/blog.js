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
      <Container>
        <h1>Blog</h1>
        <div className="blog-thumb">
          {blogs.map(blog => (
            <BlogThumb blog={blog} />
            // <BlogThumb blog={blog} />
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
        }
      }
    }
  }
`
