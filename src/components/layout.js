import React from "react"
import { Link } from "gatsby"

import { rhythm, scale, background } from "../utils/typography"

const Layout = ({ location, title, children, subtitle, siteTitle, numberOfParticipants }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <>
        <h1
          style={{
            ...scale(0.8),
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
            {subtitle && (
              <div
                style={{
                  ...scale(0.1),
                }}
              >
                {subtitle}
              </div>
            )}

            {title}
          </Link>
        </h1>
      </>
    )
  } else {
    header = (
      <h2
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginBottom: rhythm(1.5),
          marginTop: 0,
          padding: 10,
          textAlign: "center",
        }}
      >
        {title} 
        {/* Display the number of particpants */}
        {numberOfParticipants &&
          <span>({numberOfParticipants})</span>
        }
      </h2>
    )
  }
  return (
    <>
      <header
        style={{
          backgroundColor: background,
        }}
      >
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
          }}
        >
          {header}
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
