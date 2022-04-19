import * as React from "react"
import { graphql, Link } from "gatsby"
import { Container, Row } from "react-bootstrap"
import "../styles/global.scss"

import "bootstrap/dist/css/bootstrap.min.css"
import Seo from "../components/seo"
import BlogThumb from "../components/BlogThumb"
import HomeAbout from "../components/HomeAbout"
import HomeMission from "../components/HomeMission"
import HomeBanner from "../components/HomeBanner"
import PublicationList2 from "../components/PublicationList2"
import ClimateActionBanner from "../components/ClimateActionBanner"

export default function IndexPage({ data }) {
  const blogs = data.allMarkdownRemark.nodes

  return (
    <div>
      <Seo title="Home" />

      <HomeBanner />

      <HomeAbout />

      <HomeMission />

      <ClimateActionBanner />

      <PublicationList2 />

      <div className="strip">
        <Container></Container>
      </div>

      <div className="ourblog-sec">
        <Container>
          <h2
            className="crest-text-heading"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
          >
            OUR BLOG
          </h2>
          <Row></Row>
          <br></br>
          <div className="blog-thumb">
            {blogs.map(blog => (
              <BlogThumb blog={blog} />
            ))}
          </div>
          <div
            className="explore-btn"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
          >
            <Link className="explor-blog" to="/blog">
              Explore our blog
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}

export const query = graphql`
  query BlogThumb {
    allPublication {
      nodes {
        featuredImage
        title
        excerpt
      }
    }
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
      nodes {
        frontmatter {
          title
          slug
          category
          type
          thumbImage {
            childImageSharp {
              gatsbyImageData(height: 500)
            }
          }
          focusArea
          contentType
          excerpt
        }
      }
    }
  }
`
