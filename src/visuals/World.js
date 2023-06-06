import Cube from "./objects/Cube"
import ParticleSystem from "./objects/ParticleSystem"

export default class World {
    constructor()
    {
        this.objects = []
        // this.objects.push(new Cube())
        this.objects.push(new ParticleSystem("./textures/0.png"))
        this.objects.push(new ParticleSystem("./textures/1.png"))
    }

    update() {
        this.objects.forEach((object) => 
        {
            object.update();
        })
    }
}