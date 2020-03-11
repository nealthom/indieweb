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
    const gravity = p.createVector(0, 0.1)

    for (let ps of systems) {
      ps.applyForce(gravity)
      ps.addParticle()
      ps.run()
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
    const r = this.p.random(1)
    if (r < 0.5) {
      this.particles.push(new Confetti(this.p, this.origin))
    } else {
      this.particles.push(new Particle(this.p, this.origin))
    }
  }

  applyForce(f) {
    for (let particle of this.particles) {
      particle.applyForce(f)
    }
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
    this.acceleration = p.createVector(0, 0)
    this.velocity = p.createVector(p.random(-1, 1), p.random(-2, 0))
    this.lifespan = 255
  }
  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.lifespan -= 2.0
  }
  display() {
    this.p.stroke("pink")
    this.p.fill(255, this.lifespan, this.lifespan)
    this.p.ellipse(this.position.x, this.position.y, 8, 8)
  }

  isDead() {
    return this.lifespan < 0.0
  }

  run() {
    this.update()
    this.display()
  }
  applyForce(force) {
    const f = force.copy()
    f.div(this.mass)
    this.acceleration.add(f)
  }
}

class Confetti extends Particle {
  constructor(p, l) {
    super(p, l)
    this.p = p
  }

  display() {
    const theta = this.p.map(
      this.position.x,
      0,
      this.p.width,
      0,
      this.p.TWO_PI * 2
    )
    this.p.rectMode(this.p.CENTER)
    this.p.stroke("pink")
    this.p.fill(255, this.lifespan, this.lifespan)

    this.p.push()
    this.p.translate(this.position.x, this.position.y)
    this.p.rotate(theta)
    this.p.rect(0, 0, 8, 8)
    this.p.pop()
  }
}
