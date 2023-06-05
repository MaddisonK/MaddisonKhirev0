import * as THREE from "../node_modules/three/build/three.module.js"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {scene, mesh} from './render.js'
import {sizes} from './parallax.js'

const canvas = document.querySelector("canvas.canvas");


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(80, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Lights
 */
const directionLight = new THREE.DirectionalLight()
const directionLightHelper = new THREE.DirectionalLightHelper(directionLight);
directionLight.position.set(10, 10, 5)
scene.add(directionLight)
scene.add(directionLightHelper)
directionLight.lookAt(mesh)


const ambientLight = new THREE.AmbientLight('#fff', .5)
scene.add(ambientLight)


/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    mesh.rotateY(.01);
    mesh.position.set(0,  .2*Math.sin(elapsedTime * 2), 0);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
