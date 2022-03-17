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
  console.log(blogs)
  return (
    <Layout>
      <Seo title="Home" />
      <div className="pub-sec">
        <Container>
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
        </Container>
      </div>
    </Layout>
  )
}
