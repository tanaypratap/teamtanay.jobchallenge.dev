const path = require("path")

function createSecondPages(result, createPage) {
  const secondaryPageTemplate = path.join(
    __dirname,
    "../src/templates/pages.template.js"
  )
  const secondaryPages = result.data.faqs.edges
  secondaryPages.forEach((post, index) => {
    const previous =
      index === secondaryPages.length - 1
        ? null
        : secondaryPages[index + 1].node
    const next = index === 0 ? null : secondaryPages[index - 1].node
    createPage({
      path: post.node.fields.slug,
      component: secondaryPageTemplate,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

function graphqlForSecondaryPages(graphql, createPage, type) {
  return graphql(`
    {
      faqs: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "${type}" } } }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create secondaryPages pages.
    createSecondPages(result, createPage)
  })
}
exports.graphqlForSecondaryPages = graphqlForSecondaryPages
