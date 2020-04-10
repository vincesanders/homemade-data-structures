class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack { //LIFO
    constructor() {
        this.top = null;
    }
    isEmpty() {
        return this.top === null;
    }
    peek() { //return top value
        if (this.isEmpty()) throw new Error('Stack is empty!');
        return this.top.value;
    }
    //add to top of Stack - returns boolean for success
    add(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        return true;
    }
    //remove top item and return it
    remove() {
        if (this.isEmpty()) throw new Error('Stack is empty!');
        const value = this.top.value;
        this.top = this.top.next;
        return value;
    }
}