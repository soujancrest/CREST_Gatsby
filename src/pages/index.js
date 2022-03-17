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
  const allPublications = [
    "Blue Dharma",
    "India Wakes",
    "The Mother Earth",
    "The New Worm",
    "Planet Kriya",
    "Every Dot Matters",
  ]
  return (
    <Layout>
      <Seo title="Home" />
      <div className="banner">
        <Container>
          <div className="crest-banner-text">
            <h1 className="banner__heading">
              An Insight into the harsh truth about survival
            </h1>
            <h4 className="banner__sub-heading">
              The planet has thrived through five mass extinctions. Surely, it
              can handle one more. But, humans will not be able to survive even
              one. In fact, the next mass extinction is going to mark the end of
              the human race
            </h4>
            <Link
              className="main-btn"
              to="/blog/an-insight-into-the-harsh-truth-about-survival"
            >
              Read more
            </Link>
          </div>
        </Container>
      </div>

      <div className="about">
        <Container>
          <Row>
            <Col>
              <div className="about__crest-info">
                <h6>ABOUT CREST</h6>
                <p>
                  <span>CREST </span> (Center for Research in Environmental &
                  Sustainable Technologies) <br></br>
                  Foundation is a non-profit environmental and social governance
                  initiative dedicated to people and planet wellbeing.
                </p>
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
                <div className="mission-img">
                  <StaticImage src="../images/mission-thumb.jpg" />
                </div>

                <p className="mission-discrption-info">
                  CREST Foundation is on a mission to build 20 self-sufficient
                  Climate Hubs over the next ten years. Each Climate Hub will
                  consist of 600 eco-homes, 500 acres of organic farms, food
                  forests, and herbal gardens, an organic shopping market,
                  corporate offices, green schools, a sports and entertainment
                  village featuring 64 varieties of sports, a community kitchen,
                  and a preventive care and wellness health centre.
                </p>
              </div>
              <Link className="readmore" to="/about">
                READ MORE
              </Link>
            </Col>
            <Col className="right-col">
              <Row className="right-col-1">
                <h4 className="mission-heading">Our Ethos</h4>
                <Col className="mission-inner col-sm-8">
                  <div className="mission-side-right">
                    <h5 className="mission-subheading">
                      Climate crisis and Human Wellbeing
                    </h5>
                    <p>
                      Human Wellbeing can save the planet,CREST Foundation will
                      create climate-resilient eco-habitats that combine the
                      luxuries of modern life with the benefits of living in
                      nature.{" "}
                    </p>
                    <Link className="readmore" to="/about/#ethos">
                      READ MORE
                    </Link>
                  </div>
                </Col>
                <Col className="mission-inner col-sm-4">
                  <div className="mission-side">
                    <StaticImage
                      src="../images/about/ethos.png"
                      atl=""
                      className="mission-side-img"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="right-col-1">
                <h4 className="mission-heading">Our Vision</h4>
                <Col className="mission-inner col-sm-8">
                  <div className="mission-side-right">
                    <h5 className="mission-subheading">
                      Re-imagining the urban lifestyle
                    </h5>
                    <p>
                      Energy Positive cities and global cooling, To meet the
                      2050 net-zero emission goals, CREST Foundation intends to
                      create energy-positive communities that produce clean
                      energy from renewable resources and facilitate zero
                      maintenance and zero waste living.
                    </p>
                    <Link className="readmore" to="/about/#vision">
                      READ MORE
                    </Link>
                  </div>
                </Col>
                <Col className="mission-inner col-sm-4">
                  <div className="mission-side">
                    <StaticImage
                      src="../../images/about/vision.png"
                      atl=""
                      className="mission-side-img"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="right-col-1">
                <h4 className="mission-heading">Our Commitment</h4>
                <Col className="mission-inner col-sm-8">
                  <div className="mission-side-right">
                    <h5 className="mission-subheading">
                      Launching a witnessed-organic revolution
                    </h5>
                    <p>
                      Nutrition, soil health and closed loop cycles, CREST
                      Foundation will create circular economies through its
                      sustainable communities by implementing a ‘buy local, eat
                      local’ model of food production that dramatically reduces
                      food miles.
                    </p>
                    <Link className="readmore" to="/about/our-commitment">
                      READ MORE
                    </Link>
                  </div>
                </Col>
                <Col className="mission-inner col-sm-4">
                  <div className="mission-side">
                    <StaticImage
                      src="../../images/about/commitment.jpg"
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

      <div className="climate-sec">
        <div className="climate-secc-img"></div>

        <div className="climate-box">
          <div className="climate-boxes box-1">
            <div className="climate-box-img">
              <StaticImage src="../images/climate-book.png" />
            </div>
            <div className="box-right-con">
              <p>
                Climate Action Report <br></br>
                December 20, 2021
              </p>
              <span>Creek, West Virginia.</span>
              <h6>
                CREST Foundation is on a mission to build 20 self-sufficient
                Climate Hubs over the next ten years.
              </h6>
              <a href="" className="readmore">
                Read More
              </a>
            </div>
          </div>
        </div>
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

      <div className="ourblog-sec">
        <Container>
          <Row>
            <h2 className="crest-heading">OUR BLOG</h2>
          </Row>
          <br></br>
          <div className="blog-thumb">
            {blogs.map(blog => (
              <BlogThumb blog={blog} />
            ))}
          </div>
          <div className="explore-btn">
            <Link className="explor-btn" to="/blog">
              Explore our blog
            </Link>
          </div>
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
            <Col>
              <div className="crest-publication-sec">
                <div id="pub-left-img-5"></div>
                <div className="publication-dis">
                  <h6 className="mission-discrption-info">BLUE DHARMA</h6>
                  <p className="md-subp">
                    A Way to sustainable Lifestyle for Human Wellbeing
                  </p>

                  <Link className="readmore">Read More</Link>
                  <span className="soon">Coming Soon</span>
                </div>
              </div>
            </Col>
            <Col>
              <div className="crest-publication-sec">
                <div id="pub-left-img-1"></div>
                <p className="mission-discrption-info">PLANET KRIYA</p>
                <p className="md-subp">
                  A expose of the shocking changes agriculture has endured
                </p>
              </div>
            </Col>
            <Col>
              <div className="crest-publication-sec">
                <div id="pub-left-img-2"></div>
                <p className="mission-discrption-info">INDIA WAKES</p>
                <p className="md-subp">Post Coronavirus new world order</p>
              </div>
            </Col>
            <Col>
              <div className="crest-publication-sec">
                <div id="pub-left-img-3"></div>
                <p className="mission-discrption-info">EVERY DOT MATTERS</p>
                <p className="md-subp"></p>
              </div>
            </Col>
            <Col>
              <div className="crest-publication-sec">
                <div id="pub-left-img-4"></div>
                <p className="mission-discrption-info">THE NEW NORM</p>
                <p className="md-subp"></p>
              </div>
            </Col>
            <Col>
              <div className="crest-publication-sec">
                <div id="pub-left-img-6"></div>
                <p className="mission-discrption-info">THE MOTHER EARTH</p>
                <p className="md-subp">An alarming wake-up call</p>
              </div>
            </Col>
          </Row>
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
