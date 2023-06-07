import Particles from "./ParticleSystem";

export default class GravParticles extends Particles {
    constructor(texture_path, x_speed, y_speed) {
        super(texture_path)
        this.x_speed = x_speed
        this.y_speed = y_speed
    }


    update() {
        this.particles.position.x += this.x_speed;
        this.particles.position.y += this.y_speed;
    }
}