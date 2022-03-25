import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import "../styles/global.scss"

export default function BlogThumb({ blog }) {
  const image = getImage(blog.frontmatter.thumbImage)
  return (
    <div>
      <Link
        className="link "
        to={"/blog/" + blog.frontmatter.slug}
        key={blog.id}
      >
        <div className="crest-blog-sec">
          <GatsbyImage image={image} />

          <h2 className="mission-subheading heading-color mb-10">{blog.frontmatter.title}</h2>
          <p className="mission-sub-text">{blog.frontmatter.excerpt}</p>
        </div>
      </Link>
    </div>
  )
}
