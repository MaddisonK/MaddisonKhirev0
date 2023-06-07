import * as THREE from "three"
import Visual from "../Visual";

export default class ParticleSystem {
    constructor(texture_path) {
        this.params = {
            count: 20,
            spread: 25,
            offsetZ: -5
        }

        let visual = new Visual();
        this.timer = visual.timer;
        this.scene = visual.scene;
        this.textureLoader = new THREE.TextureLoader();
        this.particleTexture = this.textureLoader.load(texture_path)
        this.particlesGeometry = new THREE.BufferGeometry();

        this.generateParticles()
    }

    generateParticles() {
        this.positions = new Float32Array(this.params.count * 3);
        this.colors = new Float32Array(this.params.count * 3);
        this.positionBuffer = new THREE.BufferAttribute(this.positions, 3);
        this.colorBuffer = new THREE.BufferAttribute(this.colors, 3);

        for (let i = 0; i < this.params.count * 3; i += 3) {
            this.positions[i + 0] = (Math.random() - 0.5) * this.params.spread;
            this.positions[i + 1] = (Math.random() - 0.5) * this.params.spread;
            this.positions[i + 2] = (Math.random() - 0.5) * this.params.spread + this.params.offsetZ;
        }

        this.particlesGeometry.setAttribute('position', this.positionBuffer)
        this.particlesGeometry.setAttribute('color', this.colorBuffer)

        const particlesMaterial = new THREE.PointsMaterial()

        particlesMaterial.size = 0.5
        particlesMaterial.sizeAttenuation = true

        particlesMaterial.color = new THREE.Color('#0f0')

        particlesMaterial.transparent = true
        particlesMaterial.alphaMap = this.particleTexture
        // particlesMaterial.alphaTest = 0.01
        // particlesMaterial.depthTest = false
        particlesMaterial.depthWrite = false
        particlesMaterial.blending = THREE.AdditiveBlending

        this.particlesMaterial = particlesMaterial;

        // Points
        this.particles = new THREE.Points(this.particlesGeometry, this.particlesMaterial)
        this.scene.add(this.particles)
    }

    update() {
        
    }
}