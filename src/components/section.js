import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

function Section({ header, textNode, more, needsBackground }) {
  return (
    <section
      style={{ backgroundColor: needsBackground ? needsBackground : "inherit" }}
    >
      <div
        style={{
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
        }}
      >
        <h3> {header}</h3>
        {textNode}
        {more &&
          more.map(additionalData => (
            <p key={additionalData.link} style={{ textAlign: "center" }}>
              <Link style={{ boxShadow: `none` }} to={additionalData.link}>
                {additionalData.text}
              </Link>
            </p>
          ))}
      </div>
    </section>
  )
}

export default Section
