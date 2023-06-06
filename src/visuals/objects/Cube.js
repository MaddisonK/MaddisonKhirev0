import * as THREE from "three"
import Visual from "../Visual"

export default class Cube {
    constructor() {
        let visual = new Visual();
        this.timer = visual.timer
        this.geometry = new THREE.BoxGeometry(1, 1, 1)
        this.material = new THREE.MeshBasicMaterial({ color: '#0f0' });
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        visual.scene.add(this.mesh)
    }

    update() {
        this.mesh.rotateY(.01);
        this.mesh.position.set(0,  .2 * Math.sin(this.timer.elapsed / 1000), 0);
    }
}