import Visual from "./visuals/Visual.js";

const canvas = document.querySelector("canvas.canvas");
const visual = new Visual(canvas);

/**
 * Lights
 */
// const directionLight = new THREE.DirectionalLight()
// const directionLightHelper = new THREE.DirectionalLightHelper(directionLight);
// directionLight.position.set(10, 10, 5)
// scene.add(directionLight)
// scene.add(directionLightHelper)
// directionLight.lookAt(mesh)


// const ambientLight = new THREE.AmbientLight('#fff', .5)
// scene.add(ambientLight)


/**
 * Animate
 */
// const clock = new THREE.Clock()

// const tick = () => {
//     const elapsedTime = clock.getElapsedTime()

//     // Update controls
//     controls.update()

//     // Render
//     renderer.render(scene, camera)

//     mesh.rotateY(.01);
//     mesh.position.set(0,  .2*Math.sin(elapsedTime * 2), 0);

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()
