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
  // const executiveTeamIndia = people.filter(
  //   person => person.frontmatter.category == "Executive Team India"
  // )
  const researchAnalytics = people.filter(
    person => person.frontmatter.category == "Research & Analytics"
  )
  const sustainability = people.filter(
    person => person.frontmatter.category == "Sustainability"
  )
  const marketing = people.filter(
    person => person.frontmatter.category == "Marketing"
  )
  const salesCRM = people.filter(
    person => person.frontmatter.category == "Sales & CRM"
  )
  const finance = people.filter(
    person => person.frontmatter.category == "Finance"
  )
  const design = people.filter(
    person => person.frontmatter.category == "Design"
  )
  const webTech = people.filter(
    person => person.frontmatter.category == "Web Tech"
  )
  const corporate = people.filter(
    person => person.frontmatter.category == "Corporate"
  )
  const projectManagement = people.filter(
    person => person.frontmatter.category == "Project Management"
  )
  return (
    <div>
      <Seo title="People" />
      <AboutLayout />
      <div>
        <Container className="about-sub">
          <h4 className="about-people-heading" data-sal="slide-up" data-sal-duration="1000" >BOARD OF TRUSTEES</h4>
          <div className="person-thumbs" data-sal="slide-up" data-sal-duration="1000" >
            {boardOfTrustees.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
        <Container className="about-sub">
          <h4 className="about-people-heading" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">MANAGEMENT TEAM - USA</h4>
          <div className="person-thumbs" data-sal="slide-up" data-sal-duration="1000">
            {managementTeamUSA.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
        <Container className="about-sub">
          <h4 className="about-people-heading" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">MANAGEMENT TEAM - INDIA</h4>
          <div className="person-thumbs" data-sal="slide-up" data-sal-duration="1000">
            {managementTeamIndia.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
        <Container className="about-sub">
          <h4 className="about-people-heading" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">LEADERSHIP TEAM - INDIA</h4>
          <div className="person-thumbs" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
            {leadershipTeamIndia.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
        <Container className="about-sub">
          <h4 className="about-people-heading" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">EXECUTIVE TEAM</h4>
          <h5 className="about-people-sub" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">RESEARCH & ANALYTICS</h5>
          <div className="person-thumbs" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
            {researchAnalytics.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
          <br></br>
          <hr></hr>
          <h5 className="about-people-sub" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" >SUSTAINABILITY</h5>
          <div className="person-thumbs" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
            {sustainability.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
          <br></br>
          <hr></hr>
          <h5 className="about-people-sub" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">SALES & CRM</h5>
          <div className="person-thumbs" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
            {salesCRM.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
          <br></br>
          <hr></hr>
          <h5 className="about-people-sub" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">FINANCE & ACCOUNTS</h5>
          <div className="person-thumbs" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
            {finance.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
          <br></br>
          <hr></hr>
          <h5 className="about-people-sub" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">DESIGN</h5>
          <div className="person-thumbs" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
            {design.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
          <br></br>
          <hr></hr>
          <h5 className="about-people-sub" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">WEB TECH</h5>
          <div className="person-thumbs" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
            {webTech.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
          <br></br>
          <hr></hr>
          <h5 className="about-people-sub" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300">PROJECT MANAGEMENT</h5>
          <div className="person-thumbs" data-sal="slide-up" data-sal-duration="1000" data-sal-delay="400">
            {projectManagement.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
      </div>
    </div>
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
