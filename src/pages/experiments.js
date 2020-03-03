import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Experimental Zone</h1>
    <Link to={`/particles/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: block;
          font-style: normal;
        `}
      >
        Playing with particle system
      </h3>
    </Link>
  </Layout>
)
