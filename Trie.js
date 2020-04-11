class Node {
    constructor(value = null) {
        this.value = value;
        this.branches = [];
    }
    hasValue(value) {
        for (let i = 0; i < this.branches.length; i++) {
            if (this.branches[i].value === value) {
                return true;
            }
        }
        return false;
    }
    getNode(value) {
        for (let i = 0; i < this.branches.length; i++) {
            if (this.branches[i].value === value) {
                return this.branches[i];
            }
        }
        throw new Error(`This node does not have a child branch that contains ${value}`);
    }
}

class Trie {
    constructor() {
        this.root = new Node; //parent node will stay null.
        this.END_FLAG = '*';
    }
    add(string) { //faster - does not sort words as added.
        string += this.END_FLAG; //ensure that the end flag will be at the end of the word;
        let currentNode = this.root;
        for (let char of string) {
            if (currentNode.hasValue(char)) {
                currentNode = currentNode.getNode(char);
            } else {
                const newNode = new Node(char);
                currentNode.branches.push(newNode);
                currentNode = newNode;
            }
        }
    }
    print() {
        for (let branch of this.root.branches) {
            this._print(branch);
        }
    }
    printSort() {
        let words = [];
        for (let branch of this.root.branches) {
            this._printSort(branch, '', words);
        }
        words.sort();
        for (let i = 0; i < words.length; i++) {
            console.log('from printSort: ', words[i]);
        }
    }
    _print(node, word = '') {
        if (node.value === this.END_FLAG) {
            console.log(word);
            return;
        }
        for (let branch of node.branches) {
            this._print(branch, word + node.value);
        }
    }
    _printSort(node, word = '', array) {
        if (node.value === this.END_FLAG) {
            array.push(word);
            return;
        }
        for (let branch of node.branches) {
            this._printSort(branch, word + node.value, array);
        }
    }
}