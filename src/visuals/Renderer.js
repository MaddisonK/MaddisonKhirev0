import * as THREE from "three"
import Visual from "./Visual"

export default class Renderer {
    constructor()
    {
        this.visual = new Visual()
        this.canvas = this.visual.canvas
        this.sizer = this.visual.sizer
        this.scene = this.visual.scene
        this.camera = this.visual.camera

        this.setInstance()
    }

    setInstance()
    {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        })
        this.instance.physicallyCorrectLights = true
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        this.instance.setClearColor('#211d20')
        this.instance.setSize(this.sizer.width, this.sizer.height)
        this.instance.setPixelRatio(Math.min(this.sizer.pixelRatio, 2))
    }

    resize()
    {
        this.instance.setSize(this.sizer.width, this.sizer.height)
        this.instance.setPixelRatio(Math.min(this.sizer.pixelRatio, 2))
    }

    update()
    {
        this.instance.render(this.scene, this.camera.instance)
    }
}