class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(data) {
        const node = this.root; //top of the tree
        if (node === null) {
            this.root = new Node(data); //if tree is empty create the first node
            return;
        } else {
            //recursive - declare
            const searchTree = node => {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node); //evoke recursive function
        }
    }
    findMin() {
        let currentNode = this.root;
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.data;
    }
    findMax() {
        let currentNode = this.root;
        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode.data;
    }
    find(data) {
        let currentNode = this.root;
        while (currentNode.data !== data) {
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
            if (currentNode === null) {
                return null;
            }
        }
        return currentNode;
    }
    contains(data) {
        let currentNode = this.root;
        while (currentNode) {
            if (data === currentNode.data) {
                return true;
            }
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }
    remove(data) {
        //recursive
        const removeNode = (node, data) => {
            if (node === null) {
                return null;
            }
            if (data === node.data) { //found the node to delete
                if (node.left === null && node.right === null) { //no branches
                    return null;
                }
                if (node.left === null) { //no left branch
                    return node.right; //replace removed node with right branch
                }
                if (node.right === null) { //no right branch
                    return node.left; //replace removed node with right branch
                }
                //2 branches
                let temp = node.right; // got to right branch
                while (temp.left !== null) {
                    temp = temp.left; // go to left most branch
                }
                node.data = temp.data;
                node.right = removeNode(node.right, temp.data); //left most branch will be the new right branch
                return node; //right branch will replace removed node
            } else if (data < node.data) { //node to remove is left
                node.left = removeNode(node.left, data);
                return node;
            } else { //node to remove is right
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
    findMinHeight(node = this.root) {
        if (node === null) {
            return - 1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }
    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }
    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }
}

//const bst = new BinarySearchTree();