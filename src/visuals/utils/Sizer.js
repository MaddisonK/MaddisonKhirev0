import Observable from "./Observable";

export default class Sizer extends Observable {
    constructor() {
        super()

        // Setup
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        // Resize event
        window.addEventListener('resize', () => {
            this.width = window.innerWidth
            this.height = window.innerHeight
            this.pixelRatio = Math.min(window.devicePixelRatio, 2)
            this.notify();
        })
    }

    notify() {
        this.observers.forEach((observer) => 
        {
            observer.resize();
        })
    }
}