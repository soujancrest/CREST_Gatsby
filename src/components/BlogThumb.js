import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import styles from "../styles/global.scss"

export default function BlogThumb({ blog }) {
  return (
    <div>
      <Link
        className="link"
        to={"/blog/" + blog.frontmatter.slug}
        key={blog.id}
      >
        <div>
          {/* <h4>{blog.frontmatter.contentType}</h4> */}
          <StaticImage src="../images/content.jpg" alt="" />
          {/* <h3>{blog.frontmatter.focusArea}</h3> */}
          <h2>{blog.frontmatter.title}</h2>
          <p>{blog.frontmatter.excerpt}</p>
        </div>
      </Link>
    </div>
  )
}
