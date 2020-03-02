//import { p } from "p5"

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

export default Particle
