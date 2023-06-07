import Cube from "./objects/Cube"
import GravParticles from "./objects/GravParticles"
import InfiniteGravParticles from "./objects/InfiniteGravParticles"
import ParticleSystem from "./objects/ParticleSystem"

export default class World {
    constructor()
    {
        this.objects = []
        // this.objects.push(new Cube())
        const particle_speed = 0.02;
        this.objects.push(new InfiniteGravParticles("./textures/0.png", particle_speed, 0))
        this.objects.push(new InfiniteGravParticles("./textures/1.png", 0, -particle_speed))
        this.objects.push(new InfiniteGravParticles("./textures/0.png", 0, particle_speed))
        this.objects.push(new InfiniteGravParticles("./textures/1.png", -particle_speed, 0))

        
    }

    update() {
        this.objects.forEach((object) => 
        {
            object.update();
        })
    }
}