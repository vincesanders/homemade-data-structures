class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value = null) {
        this.root = new Node(value)
    }
    add(value) {
        const newNode = new Node(value);
        let currentNode = this.root;
        while (currentNode.next) {
            currentNode.next;
        }
        currentNode.next = newNode;
        return true;
    }

}