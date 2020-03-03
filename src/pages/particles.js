import React from "react"
import Layout from "../components/layout"
import Sketch from "../components/sketch"
import sketch from "../components/scripts/particles"

export default () => {
  return (
    <Layout>
      <Sketch sketch={sketch} />
    </Layout>
  )
}
