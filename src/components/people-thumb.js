import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function PeopleThumb({ person }) {
  return (
    <div>
      <Link
        className="link"
        to={"/about/people/" + person.frontmatter.slug}
        key={person.id}
      >
        <div>
          <StaticImage src="../images/content.jpg" alt="" />
          <h4>{person.frontmatter.name}</h4>
          <h6>{person.frontmatter.designation}</h6>
        </div>
      </Link>
    </div>
  )
}
