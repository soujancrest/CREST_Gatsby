import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import PeopleThumb from "../../components/people-thumb"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import styles from "../../styles/global.scss"
import AboutLayout from "../../components/AboutLayout"

export default function People({ data }) {
  const people = data.allMarkdownRemark.nodes
  console.log(data)
  return (
    <Layout>
      <Seo title="People" />
      <AboutLayout />
      <div>
        <Container className="about-sub">
          <h4>BOARD OF TRUSTEES</h4>
          <div className="person-thumb">
            {people.map(item => (
              <PeopleThumb person={item} />
            ))}
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query people {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "people" } } }) {
      nodes {
        frontmatter {
          slug
          category
          email
          designation
          name
          excerpt
        }
      }
    }
  }
`
