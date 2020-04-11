class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value = null) {
        this.root = new Node(value)
        this.size = 1;
    }
    isEmpty() {
        return this.root === null;
    }
    addToEnd(value) {
        if (this.root.value === null) {
            this.root.value = value;
            return true;
        }
        const newNode = new Node(value);
        let currentNode = this.root;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
        this.size++
        return true;
    }
    addToStart(value) {
        if (this.root.value === null) {
            this.root.value = value;
            return true;
        }
        const newNode = new Node(value);
        const root = this.root;
        newNode.next = root;
        this.root = newNode;
        this.size++
        return true;
    }
    addAtIndex(index, value) {
        if (index === 0) {
            this.addToStart(value);
        } else if (index >= this.size) throw new Error('The list is too small!');
        let newNode = new Node(value);
        let currentIndex = 1; //starting at 1, bc we want to stop at the node before the one that will be shifted.
        let currentNode = this.root;
        while (currentIndex !== index) {
            currentNode = currentNode.next;
            currentIndex++
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++
        return true;
    }
    remove(value) {
        if (this.isEmpty()) throw new Error('List is empty!');
        if (this.root.value === value) { //if root is to be deleted
            this.root = this.root.next;
            this.size--;
            return value;
        }
        let currentNode = this.root;
        while (currentNode.next !== null) { //checking if element after current is what we should remove
            if (currentNode.next.value === value) { 
                currentNode.next = currentNode.next.next; //curent node links to node after (skippind removed node)
                this.size--
                return value;
            }
            currentNode = currentNode.next;
        }
    }
    getNthtoLast(n) {
        if (this.isEmpty()) throw new Error('List is empty!');
        let leftNode = this.root;
        let distance = 0;
        let rightNode = this.root;
        while (rightNode.next && distance < n - 1) { //get high node nth distance away from left node
            rightNode = rightNode.next;
            distance++;
        }
        if (distance !== n - 1) { //list is too small
            return null;
        }
        while (rightNode.next) {
            leftNode = leftNode.next;
            rightNode = rightNode.next;
        }
        return leftNode.value;
    }
    print() {
        if (this.isEmpty()) throw new Error('List is empty!');
        let arr = [];
        let currentNode = this.root;
        while(currentNode.next) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        arr.push(currentNode.value);
        return arr;
    }
}