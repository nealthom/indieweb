import React from "react"
import Headroom from "react-headroom"
import { css } from "@emotion/core"

import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa"

import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
        display: flex;
        flex-direction: column;
      `}
    >
      <Headroom
        style={{
          webkitTransition: "all .75s ease-in-out",
          mozTransition: "all .75s ease-in-out",
          oTransition: "all .75s ease-in-out",
          transition: "all .75s ease-in-out",
          background: "white",
          maxWidth: "600px",
          margin: "0 auto",
          padding: `${rhythm(2)}`,
          paddingTop: `${rhythm(1.5)}`,
          // border: `#3498db solid 5px`,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link to={`/`}>
          <h3
            css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
          >
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        <Link
          to={`/blog/`}
          css={css`
            float: right;
          `}
        >
          Blog
        </Link>
        <Link
          to={`/about/`}
          css={css`
            float: right;
          `}
        >
          About
        </Link>
      </Headroom>
      {children}

      <a href="https://www.twitter.com/nealthom">
        <FaTwitter />
      </a>
      <a href="http://www.facebook.com/thomas.b.neal">
        <FaFacebookF />
      </a>
      <a href="https://www.github.com/nealthom" rel="me">
        <FaGithub />
      </a>
      <p>
        <q>
          This is Life Eternal, right here. Be fulfilled, be happy, be kind, be
          in love, and never do anything that you can’t live with forever.
        </q>
        -Alan Moore
      </p>
    </div>
  )
}
