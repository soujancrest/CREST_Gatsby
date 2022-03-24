import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"
import BlogThumb from "../components/BlogThumb"
import "../styles/global.scss"

import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function PublicationThumb({ publication }) {
  // console.log(publication.featuredImage)
  const image = getImage(publication.featuredImage)
  const image2 = "../images/Cover Page-05.jpg"
  const image3 = publication.featuredImage
  console.log(image3)
  return (
    <Container>
      <GatsbyImage image={image} />
      {image3 && <StaticImage src={image3} />}
      {/* <StaticImage src=`../images/${glhsgljsdfh}` /> */} 
      <img src="../images/Cover Page-05.jpg" />
      <h3>{publication.title}</h3>
      <h5>{publication.excerpt}</h5>
      {publication.Url ? (
        <Link to={publication.Url}>Read More</Link>
      ) : (
        <h5>coming soon</h5>
      )}
    </Container>
  )
}
