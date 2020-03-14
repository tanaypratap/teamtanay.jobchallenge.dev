import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class PostsIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const faqs = data.allMarkdownRemark.edges

    return (
      <Layout
        location={this.props.location}
        title={"blogs"}
        siteTitle={siteTitle}
      >
        <SEO
          title="blogs"
          keywords={[
            `blogs`,
            `full-stack`,
            `javascript`,
            `react`,
            `teamtanayjobchallenge`,
          ]}
        />
        {faqs.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div
              key={node.fields.slug}
              style={{
                paddingRight: `${rhythm(3 / 4)}`,
                paddingLeft: `${rhythm(3 / 4)}`,
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
              }}
            >
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link to={node.fields.slug}>{title}</Link>
              </h3>
              <p
                style={{
                  ...scale(-1 / 5),
                  display: `block`,
                  marginBottom: rhythm(0.6),
                }}
              >
                {node.frontmatter.date}
              </p>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default PostsIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            type
            priority
          }
        }
      }
    }
  }
`
