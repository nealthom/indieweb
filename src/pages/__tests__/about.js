import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import { StaticQuery } from "gatsby"
import About from "../about"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    })
  )
})

describe("About", () => {
  it("renders correctly", () => {
    const data = {
      site: {
        siteMetadata: {
          author: "Your name",
        },
      },
    }

    // const tree = renderer.create(<About data={data} />).toJSON()
    const tree = render(<About data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
