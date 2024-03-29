import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function PeopleThumb({ person }) {
  const image = getImage(person.frontmatter.featuredImage)
  return (
    <div className="people-thumbs-inner">
      {person.frontmatter.category === "Finance" ||
      person.frontmatter.category === "Design" ||
      person.frontmatter.category === "Web Tech" ||
      person.frontmatter.category === "Project Management" ? (
        <div>
          <GatsbyImage image={image} />
          <h4>{person.frontmatter.name}</h4>
          <h6>{person.frontmatter.designation}</h6>
        </div>
      ) : (
        <Link
          className="link"
          to={"/about/people/" + person.frontmatter.slug}
          key={person.id}
        >
          <div>
            <GatsbyImage image={image} />
            <h4>{person.frontmatter.name}</h4>
            <h6>{person.frontmatter.designation}</h6>
          </div>
        </Link>
      )}
    </div>
  )
}
