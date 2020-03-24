import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const { title, date, slug } = data.markdownRemark.frontmatter
  const html = data.markdownRemark.html

  return (
    <Layout>
      <div className="h-entry">
        <h1>{title}</h1>
        <div
          className="e-content p-name"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <a className="u-url" href={`https://indieweb.netlify.com/${slug}/`}>
          Published <time className="dt-published">{date}</time>
        </a>
      </div>
      <div
        class="fb-comments"
        data-href={`https://indieweb.netlify.com/${slug}/`}
        data-width=""
        data-numposts="5"
        colorscheme="dark"
      ></div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
      excerpt
    }
  }
`
