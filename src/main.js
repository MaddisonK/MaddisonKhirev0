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