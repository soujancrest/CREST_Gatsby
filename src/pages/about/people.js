import * as React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"
import PeopleThumb from "../../components/people-thumb"
import "bootstrap/dist/css/bootstrap.min.css"
import Seo from "../../components/seo"
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
  const researchAnalytics = people.filter(
    person => person.frontmatter.category == "Research & Analytics"
  )
  const sustainability = people.filter(
    person => person.frontmatter.category == "Sustainability"
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
  const projectManagement = people.filter(
    person => person.frontmatter.category == "Project Management"
  )
  return (
    <div>
      <Seo title="People" />
      <AboutLayout />
      <div>
        <Container className="about-sub">
          <h4
            className="about-people-heading"
            data-sal="slide-up"
            data-sal-duration="1000"
          >
            BOARD OF TRUSTEES
          </h4>
          <div
            className="person-thumbs"
            data-sal="slide-up"
            data-sal-duration="1000"
          >
            {boardOfTrustees.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
        <Container className="about-sub">
          <h4
            className="about-people-heading"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
          >
            MANAGEMENT TEAM - USA
          </h4>
          <div
            className="person-thumbs"
            data-sal="slide-up"
            data-sal-duration="1000"
          >
            {managementTeamUSA.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
        <Container className="about-sub">
          <h4
            className="about-people-heading"
            data-sal="slide-up"
         
          >
            MANAGEMENT TEAM - INDIA
          </h4>
          <div
            className="person-thumbs"
            data-sal="slide-up"
         
          >
            {managementTeamIndia.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
        <Container className="about-sub">
          <h4
            className="about-people-heading"
            data-sal="slide-up"
        
          >
            LEADERSHIP TEAM - INDIA
          </h4>
          <div
            className="person-thumbs"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="400"
          >
            {leadershipTeamIndia.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
        </Container>
        <Container className="about-sub">
          <h4
            className="about-people-heading"
            data-sal="slide-up"
           
          >
            EXECUTIVE TEAM
          </h4>
          <h5
            className="about-people-sub"
            data-sal="slide-up"
           
          >
            RESEARCH & ANALYTICS
          </h5>
          <div
            className="person-thumbs"
            data-sal="slide-up"  
          
          >
            {researchAnalytics.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
          <br></br>
          <hr></hr>
          <h5
            className="about-people-sub"
            data-sal="slide-up"
         
          >
            SUSTAINABILITY
          </h5>
          <div
            className="person-thumbs"
            data-sal="slide-up"
        
          >
            {sustainability.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
          <br></br>
          <hr></hr>
          <h5
            className="about-people-sub"
            data-sal="slide-up"
         
          >
            SALES & CRM
          </h5>
          <div
            className="person-thumbs"
            data-sal="slide-up"
            
          >
            {salesCRM.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
          <br></br>
          <hr></hr>
          <h5
            className="about-people-sub"
            data-sal="slide-up"
         
          >
            FINANCE & ACCOUNTS
          </h5>
          <div
            className="person-thumbs"
            data-sal="slide-up"
           
          >
            {finance.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
          <br></br>
          <hr></hr>
          <h5
            className="about-people-sub"
            data-sal="slide-up"
            
          >
            DESIGN
          </h5>
          <div
            className="person-thumbs"
            data-sal="slide-up"
        
          >
            {design.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
          <br></br>
          <hr></hr>
          <h5
            className="about-people-sub"
            data-sal="slide-up"
           
          >
            WEB TECH
          </h5>
          <div
            className="person-thumbs"
            data-sal="slide-up"
        
          >
            {webTech.map(item => (
              <PeopleThumb person={item} key={item.id} />
            ))}
          </div>
          <br></br>
          <hr></hr>
          <h5
            className="about-people-sub"
            data-sal="slide-up"
         
          >
            PROJECT MANAGEMENT
          </h5>
          <div
            className="person-thumbs"
            data-sal="slide-up"
         
          >
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
