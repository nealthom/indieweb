export default p => {
  let systems = []

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    p.background("#e9e2d7")
    p.stroke("pink")

    for (let ps of systems) {
      ps.run()
      ps.addParticle()
    }
  }

  p.mousePressed = () => {
    systems.push(new ParticleSystem(p, p.createVector(p.mouseX, p.mouseY)))
  }
}

class ParticleSystem {
  constructor(p, position) {
    this.p = p
    this.particles = []
    this.origin = position.copy()
  }
  addParticle() {
    this.particles.push(new Particle(this.p, this.origin))
  }
  run() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i]
      p.run()
    }
    this.particles = this.particles.filter(particle => !particle.isDead())
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
