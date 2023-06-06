import Cube from "./objects/Cube"

export default class World {
    constructor()
    {
        this.objects = []
        this.objects.push(new Cube())
    }

    update() {
        this.objects.forEach((object) => 
        {
            object.update();
        })
    }
}