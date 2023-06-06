import Observable from "./Observable"


export default class Timer extends Observable
{
    constructor()
    {
        super()

        // Setup
        this.start = Date.now()
        this.current = this.start
        this.elapsed = 0
        this.delta = 16

        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }

    tick()
    {
        const currentTime = Date.now()
        this.delta = currentTime - this.current
        this.current = currentTime
        this.elapsed = this.current - this.start
        console.log(this.elapsed);
        this.update()

        window.requestAnimationFrame(() =>
        {
            this.tick()
        })
    }

    update() {
        this.observers.forEach((observer) => 
        {
            observer.update();
        })
    }
}