import React from "react"
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
        border: black solid 2px;
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
        to={`/about/`}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}

      <article class="h-card">
        <header>
          <img class="u-photo" src="http://..." />
          <h1 class="p-name">The Title</h1>
        </header>
        <p class="p-summary e-content">The summary</p>
        <footer>
          <a class="u-url p-name" href="http://...">
            The author
          </a>
        </footer>
      </article>
      <a href="http://www.twitter.com/nealthom">
        <FaTwitter />
      </a>
      <a href="http://www.facebook.com/thomas.b.neal">
        <FaFacebookF />
      </a>
      <a href="http://www.github.com/nealthom" rel="me">
        <FaGithub />
      </a>
    </div>
  )
}
