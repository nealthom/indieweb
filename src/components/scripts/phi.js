/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */

// We'll ride the spiral to the end and may just go where no one's been
// Spiral out, keep going ...

export default p => {
  const phi = 1.6180339
  p.state = []
  p.dispatch = () => {}
  let r = 255,
    g = 10,
    b = 0

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.noFill()
    p.smooth()
  }

  p.draw = () => {
    r++
    if (r > 255) {
      g++
    }
    if (g > 255) {
      b++
    }
    if (b > 255) {
      r = 255
      g = 10
      b = 0
    }
    p.background("#e9e2d7")
    p.stroke(r, g, b)
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
