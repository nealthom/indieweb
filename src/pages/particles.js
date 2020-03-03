import React from "react"
import Layout from "../components/layout"
import Sketch from "../p5/sketch"
import sketch from "../p5/scripts/phi"

export default () => {
  return (
    <Layout>
      <Sketch sketch={sketch} />
    </Layout>
  )
}
