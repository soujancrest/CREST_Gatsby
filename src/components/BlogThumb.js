import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import styles from "../styles/global.scss"

export default function BlogThumb({ blog }) {
  const image = getImage(blog.frontmatter.thumbImage)
  return (
    <div>
      <Link
        className="link"
        to={"/blog/" + blog.frontmatter.slug}
        key={blog.id}
      >
        <div>
          <GatsbyImage image={image} />

          <h2 className="mission-discrption-info">{blog.frontmatter.title}</h2>
          <p className="md-subp">{blog.frontmatter.excerpt}</p>
        </div>
      </Link>
    </div>
  )
}
