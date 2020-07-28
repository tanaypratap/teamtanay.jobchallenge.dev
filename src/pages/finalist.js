import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import git from "../assets/git.png"
import linkedin from "../assets/linkedin.png"
import portfolio from "../assets/hyperlink.png"

const styles={
  container:{
    padding:'10px'
  },
  card:{
    display:'flex',
    marginTop:'5px'
  },
  imagecard:{
    width:'25%',
    padding:'10px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    height:'100%',
    justifyContent:'flex-start'
  },
  image:{
      width:'100px',
      borderRadius:'7px',
      margin:'0',
      marginTop:'5px'
    },
    name:{
      marginBottom: rhythm(1 / 8),
      textAlign:'center',
      fontWeight:'700'
    },
    linksection:{
      display:'flex',
      flexDirection:'row',
      width:'100%',
      justifyContent:'center',
      alignItems:'center'
    },
    profilelink:{
      width:'2vh',
      height:'2vh',
      marginRight:'1vh'
    },
    datacard:{
      width:'80%',
      textAlign:'justify'
    },
    excerptdata:{
      marginTop:rhythm(1/2)
    },
contact:{
  textAlign:'right',
  padding:'5px',
  margin:'5px'
}
  }


class PostsIndex extends React.Component {
  render() {
    const {data } = this.props
    
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
        <div style={styles.contact}>For any queries contact <a href="https://gkanishk.github.io/" target="blank">here</a></div>
        {faqs.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const github_link= node.frontmatter.github_link || ""
          const linkedin_link=node.frontmatter.linkedin_link || ""
          const image_link=node.frontmatter.image_link || "https://user-images.githubusercontent.com/33570551/86525652-a2e5b380-bea7-11ea-9188-6f9424021e53.png"
          const portfolioL=node.frontmatter.portfolio || ""
          return (
          <div  key={node.fields.slug} style={{
            paddingRight: `${rhythm(3 / 4)}`,
            paddingLeft: `${rhythm(3 / 4)}`,
            margin:`auto`,
            maxWidth: rhythm(24),
            maxHeight: 'max-content'
          }}>
          <div style={styles.container}>
              <div style={styles.card}>
                  <div style={styles.imagecard}>
                    <Link to={node.fields.slug}> 
                    <img src={image_link} alt="profile" style={styles.image}/>
                    </Link>
                      <p style={styles.name}>
                        <Link to={node.fields.slug}>{title}</Link>
                      </p>
                      <div style={styles.linksection}>
                          <div><a href={github_link}><img src={git} style={styles.profilelink} /></a></div>
                          <div><a href={linkedin_link}><img src={linkedin} style={styles.profilelink}/></a></div>
                          <div><a href={portfolioL}><img src={portfolio} style={styles.profilelink}/></a></div>
                      </div>
                  </div>
                  <div style={styles.datacard}>
                    <p 
                    dangerouslySetInnerHTML={{ __html: node.excerpt }} 
                    style={styles.excerptdata}/>
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
          excerpt(pruneLength:330)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            type
            portfolio
            github_link
            image_link
            linkedin_link
            priority
          }
        }
      }
    }
  }
`
