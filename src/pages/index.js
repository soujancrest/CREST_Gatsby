import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import BlogThumb from "../components/BlogThumb"
import "../styles/global.scss"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function IndexPage({ data }) {
  const blogs = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Seo title="Home" />
      <div className="banner">
        <Container>
          <h1 className="banner__heading">
            A Circular Economy Can Help Nations
            <br />
            Achieve Their Climate Goals
          </h1>
          <h4 className="banner__sub-heading">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </h4>
          <button className="main-btn">Read more</button>
        </Container>
      </div>
      <div className="about">
        <Container>
          <Row>
            <Col>
              <div className="about__crest-info">
                <p>
                  <span>CREST </span> (Center for Research in Environmental &
                  Sustainable Technologies) <br></br>
                  Foundation is a non-profit environmental and social governance
                  initiative dedicated to people and planet wellbeing.
                </p>
                <h6>About CREST</h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="our-mission">
        <Container>
          <Row className="our-mission-row">
            <Col className="left-col">
              <h4 className="mission-heading">Our Mission</h4>
              <div className="mission-discrption">
                <p className="mission-discrption-info">
                  CREST Foundation is on a mission to build 20 self-sufficient
                  Climate Hubs over the next ten years. Each Climate Hub will
                  consist of 600 eco-homes, 500 acres of organic farms, food
                  forests, and herbal gardens, an organic shopping market,
                  corporate offices, green schools, a sports and entertainment
                  village featuring 64 varieties of sports, a community kitchen,
                  and a preventive care and wellness health centre.
                </p>
                <p className="md-subp">
                  Our practical approach is neither theoretical nor challenging
                  to implement. The Foundation’s first publication, Blue Dharma,
                  is a playbook of sustainable practices that have successfully
                  powered the creation of the world’s first energy-positive,
                  water-positive, and collective organic farming community. We
                  have the proof of concept to build carbon-pollution-free
                  communities that promote sustainable living (without
                  compromising on the perks of modern lifestyles) and revive
                  natural ecosystems while combating the most urgent changes of
                  the climate crisis.
                </p>
              </div>

              <p className="readmore">
                <span>..... READ MORE</span>
              </p>
            </Col>
            <Col className="right-col">
              <Row className="right-col-1">
                <Col className="mission-inner">
                  <div className="mission-side-right">
                    <h4 className="mission-heading">Our Ethos</h4>
                    <h5 className="mission-subheading">
                      CLIMATE CRISIS AND HUMAN WELLBEING
                    </h5>
                    <button className="readmore">Read more</button>
                  </div>
                </Col>
                <Col className="mission-inner">
                  <div className="mission-side">
                    <StaticImage
                      src="../images/Content.jpg"
                      atl=""
                      className="mission-side-img"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="right-col-1">
                <Col className="mission-inner">
                  <div className="mission-side-right">
                    <h4 className="mission-heading">Our Ethos</h4>
                    <h5 className="mission-subheading">
                      CLIMATE CRISIS AND HUMAN WELLBEING
                    </h5>
                    <button className="readmore">Read more</button>
                  </div>
                </Col>
                <Col className="mission-inner">
                  <div className="mission-side">
                    <StaticImage
                      src="../images/Content.jpg"
                      atl=""
                      className="mission-side-img"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="right-col-1">
                <Col className="mission-inner">
                  <div className="mission-side-right">
                    <h4 className="mission-heading">Our Ethos</h4>
                    <h5 className="mission-subheading">
                      CLIMATE CRISIS AND HUMAN WELLBEING
                    </h5>
                    <button className="readmore">Read more</button>
                  </div>
                </Col>
                <Col className="mission-inner">
                  <div className="mission-side">
                    <StaticImage
                      src="../images/Content.jpg"
                      atl=""
                      className="mission-side-img"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="focus-area-sec">
        <Container>
          <Col className="left-col">
            <h2 className="crest-heading-border">FOCUS AREAS</h2>
          </Col>
          <Row className="focus-area-row">
            <Col className="right-col">
              <Row>
                <p className="md-subp">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </Row>
              <div className="focusareas-img-sec">
                <div className="focusareas">
                  <div className="focusareas-inner">
                    <h6>Circular Economy </h6>
                    <StaticImage
                      src="../images/right-arrow.png"
                      atl=""
                      className="focus-arrow-img"
                    />
                  </div>
                  <StaticImage
                    src="../images/Content.jpg"
                    atl=""
                    className="focusareas-img"
                  />
                </div>

                <div className="focusareas">
                  <div className="focusareas-inner">
                    <h6>Circular Economy </h6>
                    <StaticImage
                      src="../images/right-arrow.png"
                      atl=""
                      className="focus-arrow-img"
                    />
                  </div>
                  <StaticImage
                    src="../images/Content.jpg"
                    atl=""
                    className="focusareas-img"
                  />
                </div>

                <div className="focusareas">
                  <div className="focusareas-inner">
                    <h6>Circular Economy </h6>
                    <StaticImage
                      src="../images/right-arrow.png"
                      atl=""
                      className="focus-arrow-img"
                    />
                  </div>
                  <StaticImage
                    src="../images/Content.jpg"
                    atl=""
                    className="focusareas-img"
                  />
                </div>

                <div className="focusareas">
                  <div className="focusareas-inner">
                    <h6>Circular Economy </h6>
                    <StaticImage
                      src="../images/right-arrow.png"
                      atl=""
                      className="focus-arrow-img"
                    />
                  </div>
                  <StaticImage
                    src="../images/Content.jpg"
                    atl=""
                    className="focusareas-img"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="strip">
        <Container></Container>
      </div>
      <div className="pub-sec">
        <Container>
          <Row>
            <h2 className="crest-heading">PUBLICATIONS</h2>
          </Row>
          <Row className="pub-sec-row2">
            <Col className="left-col">
              {/* <StaticImage src="../images/Cover Page-01.jpg" /> */}
            </Col>
            <Col className="right-col">
              <Row>
                <Col>
                  <div id="pub-left-img-1"></div>
                  <p className="mission-discrption-info">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </p>
                </Col>
                <Col>
                  <div id="pub-left-img-2"></div>
                  <p className="mission-discrption-info">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div id="pub-left-img-3"></div>
                  <p className="mission-discrption-info">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </p>
                </Col>
                <Col>
                  <div id="pub-left-img-4"></div>
                  <p className="mission-discrption-info">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="strip">
        <Container></Container>
      </div>
      <div className="ourblog-sec">
        <Container>
          <Row>
            <h2 className="crest-heading">OUR BLOG</h2>
          </Row>
          <br></br>
          <div className="blog-thumb">
            {blogs.map(blog => (
              // <Link className="link" to={"/blog/" + blog.frontmatter.slug} key={blog.id}>
              //   <div>
              //     <h4>{blog.frontmatter.contentType}</h4>
              //     <StaticImage src="../images/content.jpg" />
              //     <h3>{blog.frontmatter.focusArea}</h3>
              //     <h2>{blog.frontmatter.title}</h2>
              //     <p>{blog.frontmatter.excerpt}</p>
              //   </div>
              // </Link>
              <BlogThumb blog={blog} />
            ))}
          </div>
          {/* <Row>
          <Col>
            <p><span>Webinar</span><span>December 22, 2021</span></p>
            <StaticImage src="../images/Content.jpg" />
            <h3>Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s,</h3>
            <p>Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s,Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s,</p>
          </Col>
        </Row> */}
          <div className="explore-btn">
            <button className="explor-btn">Explore our library</button>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

// export default IndexPage

export const query = graphql`
  query BlogThumb {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
      nodes {
        frontmatter {
          title
          slug
          contentType
          focusArea
          excerpt
        }
      }
    }
  }
`
