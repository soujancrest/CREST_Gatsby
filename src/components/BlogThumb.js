import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

import "../styles/global.scss"

export default function BlogThumb({ blog }) {
  const image = getImage(blog.frontmatter.thumbImage)
  return (
    <motion.div layoutid={`${blog.frontmatter.slug}`}>
      <Link
        className="link "
        to={"/blog/" + blog.frontmatter.slug}
        key={blog.id}
      >
        <div className="crest-blog-sec">
          <GatsbyImage image={image} data-sal="slide-up" data-sal-delay="300" />

          <h2
            className="mission-subheading heading-color mb-10"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
          >
            {blog.frontmatter.title}
          </h2>
          <p
            className="mission-sub-text"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
          >
            {blog.frontmatter.excerpt}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}
