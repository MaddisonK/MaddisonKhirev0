import * as THREE from "three"
import Sizer from "./utils/Sizer.js"
import Timer from "./utils/Timer.js"
import Renderer from "./Renderer.js"
import Camera from "./Camera.js"
import Debug from "./utils/Debug.js"
import World from "./World.js"

let instance = null

export default class Visual {
    constructor(_canvas) {
        // singleton
        if (instance) { return instance }
        instance = this

        // Global access
        window.experience = this

        // Setup
        this.canvas = _canvas
        this.scene = new THREE.Scene()
        this.sizer = new Sizer();
        this.timer = new Timer();
        this.debug = new Debug()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        // Events
        this.sizer.subscribe(this); // window resizing
        this.timer.subscribe(this); // animation updates
    }

    resize() {
        this.renderer.resize();
        this.camera.resize();
    }

    update() {
        this.world.update()
        this.camera.update()
        this.renderer.update()
    }
}