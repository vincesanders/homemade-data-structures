class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue { //FIFO
    constructor() {
        this.first = null;
    }
    isEmpty() {
        return this.first === null;
    }
    peek() { //return first value
        if (this.isEmpty()) throw new Error('Queue is empty!');
        return this.first.value;
    }
    //add to end of queue - returns boolean for success
    add(value) {
        if (this.isEmpty()) {
            this.first = new Node(value);
            return true;
        }
        let currntNode = this.first;
        while (currntNode.next) {
            currntNode = currntNode.next;
        }
        currntNode.next = new Node(value);
        return true;
    }
    //remove first item and return it
    remove() {
        if (this.isEmpty()) throw new Error('Queue is empty!');
        const value = this.first.value;
        this.first = this.first.next;
        return value;
    }
}