import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import git from "../assets/git.png"
import linkedin from "../assets/linkedin.png"
import portfolio from "../assets/hyperlink.png"

class PostsIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const faqs = data.allMarkdownRemark.edges.sort((item1, item2) => {
      // sort the data according to the names 
      const name1 = item1.node.frontmatter.title;
      const name2 = item2.node.frontmatter.title;
      return name1 > name2 ? 1 : -1;
    });

    return (
      <Layout
        location={this.props.location}
        title={"the finalists"}
        siteTitle={siteTitle}
        numberOfParticipants={faqs.length}
      >
        <SEO
          title="the finalists"
          keywords={[
            `the finalists for the challenge`,
            `teamtanayjobchallenge`,
            `javascript`,
            `react`,
          ]}
        />
        {faqs.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
          <div  key={node.fields.slug} style={{
            paddingRight: `${rhythm(3 / 4)}`,
            paddingLeft: `${rhythm(3 / 4)}`,
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            maxHeight: rhythm(10)
          }}>
          <div style={{padding:'10px'}}>
              <div style={{display:'flex',flexDirection:'row-reverse'}}>
                  <div style={{width:'20%',padding:'10px',display:'flex',flexDirection:'column',alignItems:'center',height:'100%',justifyContent:'flex-start'}}>
                      <img src="https://avatars2.githubusercontent.com/u/33570551?s=460&u=337e1bf4997c63e45f320ce7d8c1016459060c39&v=4" alt="profile"
                        style={{width:'100px',borderRadius:'7px',margin:'0'}}
                        />
                      <p
                style={{
                  marginBottom: rhythm(1 / 6),
                }}
              >
                <Link to={node.fields.slug}>{title}</Link>
              </p>
                      <div style={{display:'flex',flexDirection:'row',justifyItems:'space-between',alignItems:'flex-end'}}>
                          <div><a href="https://google.com"><img src={git} style={{width:'20px',height:'20px',margin:'5px'}} /></a></div>
                          <div><a href="https://google.com"><img src={linkedin} style={{width:'20px',height:'20px',margin:'5px'}}/></a></div>
                          <div><a href="https://google.com"><img src={portfolio} style={{width:'20px',height:'20px',margin:'5px'}}/></a></div>
                      </div>
                  </div>
                  <div style={{width:'70%',textAlign:'justify'}}>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} 
          style={{marginTop:rhythm(1/3)}}/>
                  </div>
              </div>
              
          </div>
      </div>)
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
      filter: { frontmatter: { type: { eq: "finalist" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength:350)
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
