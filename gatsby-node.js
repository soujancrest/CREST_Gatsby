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

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  // const pokemons = [
  //   { name: "Pikachu", type: "electric" },
  //   { name: "Squirtle", type: "water" },
  // ]
  const publications = [
    {
      title: "Blue Dharma",
      featuredImage: "../../images/Content.jpg",
      excerpt: "An insight into how we can prolong our stay on Earth",
      Url: "http://bluedharma.in/",
    },
    {
      title: "India Wakes",
      featuredImage: "../src/images/Cover Page-02.jpg",
      excerpt: "An insight into how we can prolong our stay on Earth",
      Url: "",
    },
    {
      title: "The Mother Earth",
      featuredImage: "../src/images/Cover Page-03.jpg",
      excerpt: "An insight into how we can prolong our stay on Earth",
      Url: "",
    },
    {
      title: "The New Worm",
      featuredImage: "../src/images/Cover Page-05.jpg",
      excerpt: "An insight into how we can prolong our stay on Earth",
      Url: null,
    },
    {
      title: "Planet Kriya",
      featuredImage: "../src/images/Cover Page-06.jpg",
      excerpt: "An insight into how we can prolong our stay on Earth",
      Url: null,
    },
    {
      title: "Every Dot Matters",
      featuredImage: "../src/images/Cover Page-07.jpg",
      excerpt: "An insight into how we can prolong our stay on Earth",
      Url: "",
    },
  ]
  publications.forEach(publication => {
    const node = {
      title: publication.title,
      excerpt: publication.excerpt,
      featuredImage: publication.featuredImage,
      id: createNodeId(`Publication-${publication.title}`),
      internal: {
        type: "publication",
        contentDigest: createContentDigest(publication),
      },
    }
    actions.createNode(node)
  })
}
