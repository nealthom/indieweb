class Particle {
  constructor(l) {
    this.position = l.copy()
    this.acceleration = createVector(0, 0.05)
    this.velocity = createVector(random(-1, 1), random(-2, 0))
    this.lifespan = 255
  }
  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.lifespan -= 2.0
  }
  display() {
    stroke(0, this.lifespan)
    fill(175, this.lifespan)
    ellipse(this.position.x, this.position.y, 8, 8)
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
