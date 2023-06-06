import Visual from "../Visual";
import Observable from "./Observable";

export default class Cursor extends Observable {
    constructor() {
        super()

        this.visual = new Visual()
        this.sizer = this.visual.sizer

        window.addEventListener('mousemove', (event) => {
            this.x = event.clientX / this.sizer.width - 0.5
            this.y = event.clientY / this.sizer.height - 0.5
        })
    }
}