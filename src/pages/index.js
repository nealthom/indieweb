import React from "react"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div>
        <h1>
          “The original vision was everyone has their own space and made things.
          Then the silos formed and attracted people because it was easier.” --
          Aaron Pareki
        </h1>
        <p>
          I am interested in the{" "}
          <a href="https://boffosocko.com/2017/07/28/an-introduction-to-the-indieweb/">
            indieweb
          </a>
          , this is my place to explore what it has to offer.
        </p>
        <p>
          Follow{" "}
          <a className="h-card" rel="me" href="https://indieweb.netlify.com/">
            Thomas
          </a>{" "}
          on{" "}
          <a href="https://twitter.com/nealthom" rel="me">
            Twitter (@nealthom)
          </a>
          , or send him an{" "}
          <a className="u-email" href="mailto:nealthom@gmail.com" rel="me">
            email
          </a>
          <link
            rel="webmention"
            href="https://webmention.io/indieweb.netlify.com/webmention"
          />
        </p>
      </div>
    </Layout>
  )
}
