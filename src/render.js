import * as THREE from "../node_modules/three/build/three.module.js"

// Scene
export const scene = new THREE.Scene()

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshPhysicalMaterial({ color: '#0f0' })
export const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const textureLoader = new THREE.TextureLoader();
const particleTexture = textureLoader.load("./textures/0.png")

const particlesGeometry = new THREE.BufferGeometry()

const particleParams = {
    count: 2000,
    spreadZ: 10,
    spreadY: 30,
    spreadX: 30,
    offsetZ: 0
  }

  
const positions = new Float32Array(particleParams.count * 3)
const colors = new Float32Array(particleParams.count * 3)
let positionBuffer = new THREE.BufferAttribute(positions, 3);
let colorBuffer = new THREE.BufferAttribute(colors, 3)

function setupParticles() {  
    for(let i = 0; i < particleParams.count * 3; i++)
    {
      switch (i % 3) {
        case 0:
          positions[i] = (Math.random() - 0.5) * particleParams.spreadX;
          break;
        case 1:
          positions[i] = (Math.random() - 0.5) * particleParams.spreadY;
          break;
        case 2:
          positions[i] = (Math.random() - 0.5) * particleParams.spreadZ + particleParams.offsetZ;
          break;
      }
  
    }
  
    particlesGeometry.setAttribute('position', positionBuffer)
    particlesGeometry.setAttribute('color', colorBuffer)
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial()
  
    particlesMaterial.size = 0.15
    particlesMaterial.sizeAttenuation = true
  
    particlesMaterial.color = new THREE.Color('#0f0')
  
    particlesMaterial.transparent = true
    particlesMaterial.alphaMap = particleTexture
    // particlesMaterial.alphaTest = 0.01
    // particlesMaterial.depthTest = false
    particlesMaterial.depthWrite = false
    particlesMaterial.blending = THREE.AdditiveBlending
  
    // particlesMaterial.vertexColors = true
  
    // Points
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)
  }

setupParticles();