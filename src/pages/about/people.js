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
  const managementTeamUSA = people.filter(
    person => person.frontmatter.category == "Management Team - USA"
  )
  const managementTeamIndia = people.filter(
    person => person.frontmatter.category == "Management Team - India"
  )
  const leadershipTeamIndia = people.filter(
    person => person.frontmatter.category == "Leadership Team India"
  )
  const leadershipTeamUAE = people.filter(
    person => person.frontmatter.category == "Leadership Team UAE"
  )
  console.log(managementTeamUSA)
  console.log(boardOfTrustees)
  console.log(people)
  console.log(managementTeamIndia)
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
          <h4 className="about-people-heading">MANAGEMENT TEAM - USA</h4>
          <div className="person-thumbs">
            {managementTeamUSA.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
        <Container className="about-sub">
          <h4 className="about-people-heading">MANAGEMENT TEAM - INDIA</h4>
          <div className="person-thumbs">
            {managementTeamIndia.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
        <Container className="about-sub">
          <h4 className="about-people-heading">LEADERSHIP TEAM - UAE</h4>
          <div className="person-thumbs">
            {leadershipTeamUAE.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
        <Container className="about-sub">
          <h4 className="about-people-heading">LEADERSHIP TEAM - INDIA</h4>
          <div className="person-thumbs">
            {leadershipTeamIndia.map(item => (
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
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "people" } } }
      sort: { fields: frontmatter___order }
    ) {
      nodes {
        frontmatter {
          order
          name
          slug
          designation
          category
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
        }
      }
    }
  }
`
