/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */

// We'll ride the spiral to the end and may just go where no one's been
// Spiral out, keep going ...

export default p => {
  const phi = 1.6180339
  p.state = []
  p.dispatch = () => {}
  let color = [p.random(140, 200), p.random(140, 200), p.random(140, 200)]

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.noFill()
    p.smooth()
  }

  p.draw = () => {
    p.background("#e9e2d7")

    color[p.random([0, 1, 2])]++
    if (color[0] > 240 && color[1] > 240 && color[2] > 240) {
      color = [p.random(140, 200), p.random(140, 200), p.random(140, 200)]
    }
    p.stroke(color[0], color[1], color[2])
    p.spiral(p.width / 2, p.height / 2, 0, 300)
  }

  p.spiral = (x, y, origin, lines) => {
    for (let i = 0; i < lines; i += 1) {
      p.translate(x, y)
      p.rotate(p.radians(p.noise((p.frameCount - i) * 0.001 * phi) * 10 + 100))
      p.line(origin, 0, 0, 0)
      p.translate(-x, -y)
      x += origin += phi
    }
  }
}
