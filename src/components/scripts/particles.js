export default p => {
  const total = 50
  let particles = []

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    for (let i = 0; i < total; i++) {
      particles[i] = new Particle(p, p.createVector(p.width / 2), 10)
    }
  }

  p.draw = () => {
    p.background("#e9e2d7")
    p.stroke("pink")
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i]
      particle.run()
    }
    particles = particles.filter(particle => !particle.isDead())
  }
}

class Particle {
  constructor(p, l) {
    this.p = p
    this.position = l.copy()
    this.acceleration = p.createVector(0, 0.05)
    this.velocity = p.createVector(p.random(-1, 1), p.random(-2, 0))
    this.lifespan = 255
  }
  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.lifespan -= 2.0
  }
  display() {
    this.p.stroke(0, this.lifespan)
    this.p.fill(175, this.lifespan)
    this.p.ellipse(this.position.x, this.position.y, 8, 8)
  }

  isDead() {
    return this.lifespan < 0.0
  }

  run() {
    this.update()
    this.display()
  }
}

/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */

// We'll ride the spiral to the end and may just go where no one's been
// Spiral out, keep going ...

// export default p => {
//   const phi = 1.6180339
//   p.state = []
//   p.dispatch = () => {}

//   p.windowResized = () => {
//     p.resizeCanvas(p.windowWidth, p.windowHeight)
//   }

//   p.setup = () => {
//     p.createCanvas(p.windowWidth, p.windowHeight)
//     p.noFill()
//     p.smooth()
//   }

//   p.draw = () => {
//     p.background("#e9e2d7")
//     p.stroke("pink")
//     p.spiral(p.width / 2, p.height / 2, 0, 300)
//   }

//   p.spiral = (x, y, origin, lines) => {
//     for (let i = 0; i < lines; i += 1) {
//       p.translate(x, y)
//       p.rotate(p.radians(p.noise((p.frameCount - i) * 0.001 * phi) * 10 + 100))
//       p.line(origin, 0, 0, 0)
//       p.translate(-x, -y)
//       x += origin += phi
//     }
//   }
// }
