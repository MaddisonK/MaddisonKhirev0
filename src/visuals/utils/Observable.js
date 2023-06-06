export default class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers.splice(this.observers.findIndex(observer), 1);
    }

    // add notify() function or something similar to children classes
}