import GravitationalParticleSystem from "./GravParticles";

export default class InfiniteGravParticles
{
    constructor(texture_path, x_speed, y_speed)
    {
        this.x_speed = x_speed;
        this.y_speed = y_speed;

        this.particles0 = new GravitationalParticleSystem(texture_path, x_speed, y_speed);
        this.particles1 = new GravitationalParticleSystem(texture_path, x_speed, y_speed);

        const mag = Math.sqrt(x_speed * x_speed + y_speed * y_speed)
        
        this.x_dir = x_speed / mag
        this.y_dir = y_speed / mag

        this.next = this.particles1
        
        this.putNextParticlesOffscreen();

        this.x_count = 0.0;
        this.y_count = 0.0;
    }

    update() {
        this.particles0.update()
        this.particles1.update()
        this.x_count += this.x_speed;
        this.y_count += this.y_speed;
        const offsetMag = Math.sqrt(this.x_count * this.x_count + this.y_count * this.y_count);
        if (offsetMag > this.next.params.spread) {
            this.putNextParticlesOffscreen();
            this.x_count = 0.0;
            this.y_count = 0.0;
        }
    }

    putNextParticlesOffscreen() { // sends the next particle system offscreen to keep the infinite loop going
        this.next.particles.position.set(
            -this.x_dir * this.next.params.spread,
            -this.y_dir * this.next.params.spread,
            0
        )
        this.next = (this.next == this.particles0) ? this.particles1 : this.particles0;
    }
}