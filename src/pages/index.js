import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import {
  backgroundGreen,
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
          header="what's TeamTanay?"
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
          header="what's the challenge?"
          needsBackground={backgroundGrey}
          textNode={
            <p>
              #TeamTanayJobChallenge requires you to finish a minimum of{" "}
              <em>5 projects</em>, <em>3 blogs</em> and <em>2 reviews</em> on
              your projects.
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
          header="are we really getting a job?"
          needsBackground={backgroundOrange}
          textNode={
            <p>
              Yes, though the challenge initially was about getting visibility
              and creating projects + profile it has transformed. Now, we have
              hiring partners who are ready to help, interview and hire
              successful participants from the challenge.
            </p>
          }
          more={[
            {
              link: "/hiring-partners",
              text: "know more about hiring partners",
            },
          ]}
        />

        <Section
          header="do we have help?"
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
          needsBackground={backgroundGrey}
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
