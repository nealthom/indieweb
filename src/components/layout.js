import React from "react"
import { Global, css } from "@emotion/core"

import { FaTwitter, FaFacebookF, FaGithub } from "react-icons/fa"

import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

export const PureLayout = ({ data, children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Global
      styles={css`
        body {
          background: #e9e2d7;
        }
      `}
    />
    <div
      css={css`
        @media screen and (max-width: 800px) {
          display: grid;
          grid-template-columns: 1fr;
        }
      `}
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
        to={`/experiments/`}
        css={css`
          float: right;
        `}
      >
        Projects
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
    </div>

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
  </div>
)

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
  return <PureLayout data={data}> {children}</PureLayout>
}
