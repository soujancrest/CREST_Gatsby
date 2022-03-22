import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import BlogThumb from "../components/BlogThumb"
import "../styles/global.scss"
import PublicationList2 from "../components/PublicationList2"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BackgroundImage from 'gatsby-background-image'

export default function IndexPage({ data }) {
  const blogs = data.allMarkdownRemark.nodes
  // const allPublications = [
  //   {
  //     title: "Blue Dharma",
  //     featuredImage: "../../images/Content.jpg",
  //     excerpt: "An insight into how we can prolong our stay on Earth",
  //     Url: "http://bluedharma.in/",
  //   },
  //   {
  //     title: "India Wakes",
  //     featuredImage: "../images/Cover Page-02.jpg",
  //     excerpt: "An insight into how we can prolong our stay on Earth",
  //     Url: "",
  //   },
  //   {
  //     title: "The Mother Earth",
  //     featuredImage: "../images/Cover Page-03.jpg",
  //     excerpt: "An insight into how we can prolong our stay on Earth",
  //     Url: "",
  //   },
  //   {
  //     title: "The New Worm",
  //     featuredImage: "../images/Cover Page-05.jpg",
  //     excerpt: "An insight into how we can prolong our stay on Earth",
  //     Url: null,
  //   },
  //   {
  //     title: "Planet Kriya",
  //     featuredImage: "../images/Cover Page-06.jpg",
  //     excerpt: "An insight into how we can prolong our stay on Earth",
  //     Url: null,
  //   },
  //   {
  //     title: "Every Dot Matters",
  //     featuredImage: "../images/Cover Page-07.jpg",
  //     excerpt: "An insight into how we can prolong our stay on Earth",
  //     Url: "",
  //   },
  // ]
  console.log(blogs)
  // console.log(allPublication)
  return (
    <Layout>
      <Seo title="Home" />
      
      <div className="banner">
        <Container>
          <div className="creast-inner">
            <div className="crest-banner-text">
              <h1 className="banner__heading">
                CREST CLIMATE HUBS <br></br>
                COULD BE THE SOLUTION
              </h1>
              <h4 className="banner__sub-heading">
               The planet earth has witnessed five mass extinctions <br>
               </br>
               Human race could be next! 
              </h4>
         
            </div>
          </div>

        </Container>
      </div>

      <div className="about">
        <Container>
          <Row>
            <Col>
              <div className="about__crest-info">
                {/* <h6>ABOUT CREST</h6> */}
                <p>
                  <span>CREST </span> (Center for Research in Environmental &
                  Sustainable Technologies) <br></br>
                  Foundation is a non-profit environmental and social governance
                  initiative dedicated for People and Planet wellbeing.
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
              <h4 className="heading-bg">Our Mission</h4>

              <div className="mission-discrption">
                <div className="mission-img">
                  <StaticImage src="../images/mission-thumb.jpg" />
                </div>

                <p className="mission-sub-text">
                  CREST Foundation is on a mission to build 20 self-sufficient
                  Climate Hubs over the next ten years. Each climate hub will be
                  responsible to save endangered species, restore ecological
                  balance by promoting biodiversity, improving the quality of
                  air, water, soil, nutrition safety and support human &
                  planet’s well being.
                </p>
                <p className="mission-sub-text">
                  Our practical approach is neither theoretical nor challenging to implement. The Foundation’s first publication, Blue Dharma, is a playbook of sustainable practices that have successfully powered the creation of the world’s first energy-positive, water-positive, and collective organic farming community.
                </p>
              </div>
              {/* <Link className="readmore" to="/about">
                Read more
              </Link> */}
            </Col>
            <Col className="right-col">
              <h4 className="heading-bg crest-left">Our Ethos</h4>
              <Row className="right-col-1">
                <Col className="mission-inner col-sm-8">
                  <div className="mission-side-right">
                    <h5 className="mission-subheading heading-color">
                      Climate crisis and Human Wellbeing
                    </h5>
                    <p className="mission-sub-text">
                      Human Wellbeing can save the planet,CREST Foundation will
                      create climate-resilient eco-habitats that combine the
                      luxuries of modern life with the benefits of living in
                      nature.{" "}
                    </p>
                    <Link className="readmore" to="/about/#ethos">
                      Read more...
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
              <h4 className="heading-bg crest-left">Our Vision</h4>
              <Row className="right-col-1">
                <Col className="mission-inner col-sm-8">
                  <div className="mission-side-right">
                    <h5 className="mission-subheading heading-color">
                      Re-imagining the urban lifestyle
                    </h5>
                    <p className="mission-sub-text">
                      Energy Positive cities and global cooling, To meet the
                      2050 net-zero emission goals, CREST Foundation intends to
                      create energy-positive communities that produce clean
                      energy from renewable resources and facilitate zero
                      maintenance and zero waste living.
                    </p>
                    <Link className="readmore" to="/about/#vision">
                      Read more...
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
              <h4 className="heading-bg crest-left">Our Commitment</h4>
              <Row className="right-col-1">
                <Col className="mission-inner col-sm-8">
                  <div className="mission-side-right">
                    <h5 className="mission-subheading heading-color">
                      Launching a witnessed-organic revolution
                    </h5>
                    <p className="mission-sub-text">
                      Nutrition, soil health and closed loop cycles, CREST
                      Foundation will create circular economies through its
                      sustainable communities by implementing a ‘buy local, eat
                      local’ model of food production that dramatically reduces
                      food miles.
                    </p>
                    <Link className="readmore" to="/about/our-commitment">
                      Read more....
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
        <Container>
          <div className="climate-sec-inner">
            <div className="climate-box-inner">
              <h6>
                INDRODUCING
              </h6>
              <h2>
                CLIMATE HUBS
              </h2>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,

              </p>

            </div>
            <div className="climate-box-books">
              <Row className="climate-inner-row">
                <Col className="climate-box-img col-sm-3">
                  <StaticImage src="../images/climate-book.png" />
                </Col>
                <Col className="box-right-con">
                  <h2 className="mission-subheading heading-color">Backcreek, Monroe County, West Virginia.</h2>
                  <h6 className="mission-sub-text">
                    A consolidation of gross study based on online research from
                    several authentic sources with focus on current situation
                    due to several man-made developments across state of West
                    Verginia boiling down to Monroe county.
                  </h6>
                  <a href="" className="readmore">
                    Read More...
                  </a>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col className="climate-box-img col-sm-3">
                  <StaticImage src="../images/NEOM 01-02-22.jpg" />
                </Col>
                <Col className="box-right-con">
                  <h2 className="mission-subheading heading-color">Neom, Saudi Arabia.</h2>
                  <h6 className="mission-sub-text">
                    Climate Action Report designed by CREST Foundation is a
                    scientific framework to build Climate Hubs to combat both
                    climate and lifecycle disasters.
                  </h6>
                  <a href="" className="readmore">
                    Read More...
                  </a>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col className="climate-box-img col-sm-3">
                  <StaticImage src="../images/Dhriti_Climate Hub_cover.png" />
                </Col>
                <Col className="box-right-con">
                  <h2 className="mission-subheading heading-color">Zaheerabad, Hyderabad</h2>
                  <h6 className="mission-sub-text">
                    Climate Action Report designed by CREST Foundation is a
                    scientific framework to build Climate Hubs to combat both
                    climate and lifecycle disasters.
                  </h6>
                  <a href="" className="readmore">
                    Read More...
                  </a>
                </Col>
              </Row>
            </div>
          </div>

        </Container>
      </div>

      {/* <div className="focus-area-sec">
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
      </div> */}

      <div className="ourblog-sec">
        <Container>
            <h2 className="heading-bg">OUR BLOG</h2>
          <Row>
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

      <PublicationList2 />
    </Layout>
  )
}

// export default IndexPage

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
