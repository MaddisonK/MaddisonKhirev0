import * as THREE from 'three'
import Visual from './Visual.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera
{
    constructor()
    {
        this.visual = new Visual()
        this.sizer = this.visual.sizer
        this.scene = this.visual.scene
        this.canvas = this.visual.canvas
        this.cursor = this.visual.cursor

        this.setInstance()
        this.setControls()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(70, this.sizer.width / this.sizer.height, 0.1, 100)
        this.instance.position.z = 3
        this.scene.add(this.instance)
    }

    setControls()
    {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize()
    {
        this.instance.aspect = this.sizer.width / this.sizer.height
        this.instance.updateProjectionMatrix()
    }

    update()
    {
        // this.controls.update()
        this.instance.position.x = this.cursor.x * 5
        this.instance.position.y = -this.cursor.y * 5
        this.instance.lookAt(this.cursor.x * 4, -this.cursor.y * 4, 0)
    }
}