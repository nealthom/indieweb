import Particle from '../classes/Particle'

export default p => {
  const total = 10
  let particles = []
  

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    for(let i = 0; i < total; i++){
      particles[i] = new Particle(p.createVector(p.width/ 2), 10)
      }
  }

  p.draw = () => {
    p.background("#e9e2d7")
    p.stroke("pink")
    for(let i = particles.length -1; i>= 0; i--){
      const particle = particles[i]
      particle.run()
        
      }
      particles = particles.filter(particle => !particle.isDead())
    }
  }

 
}
