import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import {
  backgroundGrey,
  backgroundOrange,
} from "../utils/typography"

class Index extends React.Component {
  render() {
    return (
      <Layout
        location={this.props.location}
        title={"Job Challenge"}
        subtitle={"#TeamTanay"}
        siteTitle={"teamtanayjobchallenge.dev"}
      >
        {/** Fix the siteTitle, this should come from a query */}
        <SEO
          title="home"
          keywords={[
            `teamtanayjobchallenge`,
            `portfolio`,
            `full-stack`,
            `javascript`,
            `react`,
          ]}
        />
        <Section
          header="Elevate Labs aka Job Challenge 2.0"
          textNode={
            <p>
              We ran a job challenge earlier this year from March to June and got 10+ students placed 
              in various companies as interns and full-time employees. If you could not complete Job Challenge, 
              Elevatelabs is for you, why wait?
              </p>
          }
          more={[
            {
              link: "https://elevatelabs.tech",
              text: "check more details here...",
            },
          ]}
        />

        <Section
          header="what's the challenge?"
          needsBackground={backgroundGrey}
          textNode={
            <p>
              #TeamTanayJobChallenge requires you to finish a minimum of{" "}
              <em>5 projects</em>, <em>3 blogs</em> and <em>2 reviews</em> on
              your projects.
              <br/>
                <p align="center">
                  Registrations closed on&nbsp;&nbsp;<b>1st June,2020</b>
                </p>
                <br/>
                <p align="center">
                  All the best to the <a href="/participants/">participants</a> and the <a href="/finalist/">finalists!</a>
                </p> 
              </p>
          }
          more={[
            {
              link: "/challenge-details",
              text: "challenge details here...",
            },
          ]}
        />

        <Section
          header="what's TeamTanay?"
          needsBackground={backgroundOrange}
          textNode={
            <p>
              An open community of over 20K students and developers spanning
              across the globe...
            </p>
          }
          more={[
            {
              link: "/about-team-tanay",
              text: "more about our community...",
            },
          ]}
        />
        <Section
          header="are we really getting a job?"
          
          textNode={
            <p>
              <p>
              Yes, though the challenge initially was about getting visibility
              and creating projects + profile it has transformed. Now, we have
              hiring partners who are ready to help, interview and hire
              successful participants from the challenge.
              </p>
              <br/>
                <p style={{textAlign:'center'}}>
                  <a href="/hiring-partners">
                  know more about hiring partners
                  </a>
                </p>
              <br/>
                <p style={{textAlign:'center'}}>
                  <a href="https://elevatelabs.tech/hire" target="_blank">
                  wanna hire through the challenge?🤔
                  </a>
                </p>
            </p>
          }
        />

        <Section
          header="do we have help?"
          needsBackground={backgroundGrey}
          textNode={
            <p>
              Yes, you have and will have plenty of help from seniors across the
              industry. They will be guiding you through projects, product and
              design
            </p>
          }
          more={[
            {
              link: "/mentors",
              text: "checkout our mentors",
            },
          ]}
        />

        <Section
          header="have some questions?"
          
          textNode={
            <p>
              We're sure you're having tons of questions. We got a lot of them
              answered already. Before we move on, let's check those out.
            </p>
          }
          more={[
            {
              link: "/faqs",
              text: "some frequently asked questions here..",
            },
          ]}
        />
        <Section
          header="did you checkout our blogs?"
          needsBackground={backgroundOrange}
          textNode={
            <p>
              We have cumulated free learning resources, cheap Udemy courses,
              free design resources and project ideas for you.
            </p>
          }
          more={[
            {
              link: "/blogs",
              text: "see our blogs for helpful content..",
            },
          ]}
        />
      </Layout>
    )
  }
}

export default Index
