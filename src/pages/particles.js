import React from "react"
import Layout from "../components/layout"
import Sketch from "../components/sketch"
import sketch from "../components/scripts/particles"

export default () => {
  return (
    <Layout>
      <p>Click to make particles</p>
      <Sketch sketch={sketch} />
    </Layout>
  )
}
