import React from "react"
import { Link } from "gatsby"

import { rhythm, scale, background } from "../utils/typography"

const LayoutPost = ({ title, children }) => {
  const header = (
    <h1
      style={{
        ...scale(0.5),
        marginBottom: rhythm(1.5),
        marginTop: 0,
        padding: 10,
        textAlign: "center",
      }}
    >
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  )

  return (
    <div>
      <header
        style={{
          backgroundColor: background,
        }}
      >
        {header}
      </header>
      <main
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {children}
      </main>
    </div>
  )
}

export default LayoutPost
