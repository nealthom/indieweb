import React from "react"
import Layout from "../components/layout"
import Sketch from "../components/sketch"
import sketch from "../components/scripts/phi"

export default () => {
  // const sketch = p => {
  //   p.setup = function() {
  //     p.createCanvas(600, 400)
  //     p.background(255)
  //   }

  //   p.draw = function() {
  //     p.ellipse(100, 180, 16, 16)
  //   }
  // }
  return (
    <Layout>
      <div>
        <h1>Welcome</h1>
        <Sketch sketch={sketch} />
      </div>
    </Layout>
  )
}
