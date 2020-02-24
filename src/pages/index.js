import React from "react"
import Layout from "../components/layout"
import Sketch from "../components/sketch"
import sketch from "../components/scripts/phi"

export default () => {
  return (
    <Layout>
      <div>
        <h1>Welcome</h1>
        <Sketch sketch={sketch} />
      </div>
    </Layout>
  )
}
