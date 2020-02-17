import React from "react"
import renderer from "react-test-renderer"

import { PureLayout as Layout } from "../layout"

describe("Layout", () => {
  it("renders correctly", () => {
    // Created using the query from layout.js
    const data = {
      site: {
        siteMetadata: {
          title: "Thomas Neal",
        },
      },
    }
    const tree = renderer.create(<Layout data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
