const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Blogs {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            type
          }
        }
      }
    }
  `)

  const blogs = data.allMarkdownRemark.nodes.filter(
    blog => blog.frontmatter.type === "blog"
  )
  const people = data.allMarkdownRemark.nodes.filter(
    people => people.frontmatter.type == "people"
  )

  blogs.map(blog => {
    actions.createPage({
      path: "/blog/" + blog.frontmatter.slug,
      component: path.resolve("./src/templates/blog-detail.js"),
      context: { slug: blog.frontmatter.slug },
    })
  })
  people.forEach(person => {
    actions.createPage({
      path: "/about/people/" + person.frontmatter.slug,
      component: path.resolve("./src/templates/person-detail.js"),
      context: { slug: person.frontmatter.slug },
    })
  })
}
