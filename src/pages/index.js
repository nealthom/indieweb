import React from "react"
import Layout from "../components/layout"
import P5Wrapper from "react-p5-wrapper"

export default () => {
  const sketch = p => {
    let t = 0

    p.setup = function() {
      p.createCanvas(600, 400)
      p.background(255)
    }

    p.draw = function() {
      p.ellipse(100, 180, 16, 16)
    }
  }
  return (
    <Layout>
      <div>
        <h1>Welcome</h1>
        <P5Wrapper sketch={sketch} />
      </div>
    </Layout>
  )
}
