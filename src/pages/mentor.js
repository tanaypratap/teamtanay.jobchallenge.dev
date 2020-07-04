import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class PostsIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const mentors = data.allMarkdownRemark.edges

    return (
      <Layout
        location={this.props.location}
        title={"mentors for the challenge"}
        siteTitle={siteTitle}
      >
        <SEO
          title="mentors"
          keywords={[
            `mentors for the challenge`,
            `teamtanayjobchallenge`,
            `javascript`,
            `react`,
          ]}
        />
        {mentors.map(({ node }) => {
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
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />

            </div>
            
          )
        })}
    {/* Added Home button */}
        {
          <div style=
        {
          {
            paddingRight: `${rhythm(3 / 4)}`,
            paddingLeft: `${rhythm(3 / 4)}`,
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
          }
          }>
            <hr
            style={{
              marginBottom: rhythm(1),
              }}
              />
              <nav>
                <ul
                  style={{
                    listStyle: `none`,
                  }}
                >
                <li>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => window.location="/"}
                  >
                    &lt; home
                  </a>
                </li>
                </ul>
              </nav>
      </div>
      }
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
      filter: { frontmatter: { type: { eq: "mentor" } } }
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
