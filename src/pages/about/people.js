
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
  const boardOfTrustees = people.filter(
    person => person.frontmatter.category === "Board of Trustees"
  )
  const managementTeam = people.filter(
    person => person.frontmatter.category == "Management Team"
  )
  const leadershipTeam = people.filter(
    person => person.frontmatter.category == "Leadership Team India"
  )
  return (
    <Layout>
      <Seo title="People" />
      <AboutLayout />
      <div>
        <Container className="about-sub">
          <h4 className="about-people-heading">BOARD OF TRUSTEES</h4>
          <div className="person-thumbs">
            {boardOfTrustees.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
        <Container className="about-sub">
          <h4 className="about-people-heading">MANAGEMENT TEAM</h4>
          <div className="person-thumbs">
            {managementTeam.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
        <Container className="about-sub">
          <h4 className="about-people-heading">LEADERSHIP TEAM - INDIA</h4>
          <div className="person-thumbs">
            {leadershipTeam.map(item => (
              <PeopleThumb person={item} key={item.id} />
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
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
          category
          email
          designation
          name
          excerpt
        }
        id
      }
    }
  }
`