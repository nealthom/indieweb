import React from "react"
import Layout from "../components/layout"
import Sketch from "../components/sketch"
import sketch from "../components/scripts/phi"

export default () => {
  return (
    <Layout>
      <div>
        <h1>Welcome</h1>
        <p>
          <q>
            This is Life Eternal, right here. Be fulfilled, be happy, be kind,
            be in love, and never do anything that you can’t live with forever.
          </q>
          -Alan Moore
        </p>
        <Sketch sketch={sketch} />
      </div>
    </Layout>
  )
}
