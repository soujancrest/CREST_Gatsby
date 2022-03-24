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
import BackgroundImage from "gatsby-background-image"
import HomeBanner from "../components/HomeBanner"

export default function IndexPage({ data }) {
  const blogs = data.allMarkdownRemark.nodes
  console.log(blogs)
  return (
    <div>
      <Seo title="Home" />

      {/* <div className="banner">
        <Container>
          <div className="creast-inner">
            <div className="crest-banner-text">
              <h1 className="banner-heading">
                CREST CLIMATE HUBS <br></br>
                COULD BE THE SOLUTION
              </h1>
              <h4 className="banner-sub-heading">
                The planet earth has witnessed five mass extinctions <br>
                </br>
                Human race could be next!
              </h4>

            </div>
          </div>

        </Container>
      </div> */}

      {/* banckground */}

      <HomeBanner  />

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
                  Our practical approach is neither theoretical nor challenging
                  to implement. The Foundation’s first publication, Blue Dharma,
                  is a playbook of sustainable practices that have successfully
                  powered the creation of the world’s first energy-positive,
                  water-positive, and collective organic farming community.
                </p>
              </div>
              {/* <Link className="readmore" to="/about">
                Read more
              </Link> */}
            </Col>
            <Col className="right-col">
              <h4 className="heading-bg crest-left">Our Ethos</h4>
              <Row className="right-col-1">
                <Col className="mission-inner col-lg-8 col-12">
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
                <Col className="mission-inner col-lg-4 col-12">
                  <div className="mission-side">
                    <StaticImage
                      src="../images/about/Our-Ethos.png"
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
                      src="../images/about/Our-Vision.png"
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
                      src="../images/about/Our- Commitment.png"
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
              <h6>INDRODUCING</h6>
              <h2>CLIMATE HUBS</h2>

              <p>
                Buildings consume 40% of energy worldwide as 21% of the
                greenhouse gases originate from them. This is the time to
                rethink the way communities are built. <br></br>
                Climate hub is “the solution” in the current scenario. Climate
                hubs are closed ecological systems which do not rely on matter
                exchange with anything from outside of the system. The waste
                generated by one species is used by another species forming
                closely knit biological communities within themselves. <br></br>
                New ecosystems are created by making the place conducive for
                various organisms thereby increasing the biodiversity of the
                place. Homes that are built and integrated with nature enhance
                the quality of bionetworks such as soil, air and water including
                the surrounding neighborhoods & environment.
              </p>
            </div>
            <div className="climate-box-books">
              <Row className="climate-inner-row">
                <Col className="climate-box-img col-lg-3 col-12">
                  <StaticImage src="../images/climate-book.png" />
                </Col>
                <Col className="box-right-con climate-box-img">
                  <h2 className="mission-subheading heading-color">
                    Backcreek, Monroe County, West Virginia.
                  </h2>
                  <h6 className="mission-sub-text">
                    A consolidation of gross study with focus on the current
                    situation due to several man-made developments across Monroe
                    County boiling down to Back Creek. This includes mapping of
                    climatic and geological changes that occurred over a period
                    and its impact on natural resources.
                  </h6>
                  <a href="" className="readmore">
                    Read More...
                  </a>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col className="climate-box-img col-lg-3 col-12">
                  <StaticImage src="../images/NEOM 01-02-22.jpg" />
                </Col>
                <Col className="box-right-con">
                  <h2 className="mission-subheading heading-color">
                    Neom, Saudi Arabia.
                  </h2>
                  <h6 className="mission-sub-text">
                    Primary focus of this report is to constitute a solution
                    framework and restore ecological balance with a broad
                    roadmap towards environmental impact goals of CREST
                    Foundation overlapped and measured in comparison with UN
                    Sustainable Development Goals defined for Saudi Arabia.
                  </h6>
                  <a href="" className="readmore">
                    Read More...
                  </a>
                </Col>
              </Row>
              <Row className="climate-inner-row">
                <Col className="climate-box-img col-lg-3 col-12">
                  <StaticImage src="../images/Dhriti_Climate Hub_cover.jpg" />
                </Col>
                <Col className="box-right-con">
                  <h2 className="mission-subheading heading-color">
                    Zaheerabad, Hyderabad
                  </h2>
                  <h6 className="mission-sub-text">
                    A study of the existing bionetwork in and around Zahirabad,
                    Telangana along with understanding the surrounding
                    ecosystems and analyzing how this affects the living
                    conditions of humans, Flora, and Fauna throughout the
                    district.
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

      <PublicationList2 />
      
      <div className="strip">
        <Container></Container>
      </div>

      <div className="ourblog-sec">
        <Container>
          <h2 className="crest-text-heading">OUR BLOG</h2>
          <Row></Row>
          <br></br>
          <div className="blog-thumb">
            {blogs.map(blog => (
              <BlogThumb blog={blog} />
            ))}
          </div>
          <div className="explore-btn">
            <Link className="explor-blog" to="/blog">
              Explore our blogs
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
