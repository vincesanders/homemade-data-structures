//This is an attempt to make a more efficient trie that doesn't rely on arrays.
class Node {
    constructor() {
        this.keys = new Map;
        this.end = false;
    }
    setEnd() {
        this.end = true;
    }
    isEnd() {
        return this.end;
    }
}

class TrieV2 {
    constructor() {
        this.root = new Node;
    }
    //recursive
    add(value, node = this.root) {
        if (value.length === 0) {
            node.setEnd();
            return;
        } else if (!node.keys.has(value[0])) { //this is new value
            node.keys.set(value[0], new Node);
            return this.add(value.substr(1), node.keys.get(value[0])); //here after all nodes will be new nodes
        } else { //has value
            return this.add(value.substr(1), node.keys.get(value[0]));
        }
    }
    isValue(value) {
        let currentNode = this.root;
        while (value.length > 1) { //while not at the last char
            if (!currentNode.keys.has(value[0])) {
                return false;
            } else {
                currentNode = currentNode.keys.get(value[0]); //migrate to node that has value
                value = value.substr(1); //look for next letter
            }
        }
        if (currentNode.keys.has(value) && currentNode.keys.get(value).isEnd()) {
            return true;
        } else {
            return false;
        }
    }
    print() {
        let values = [];
        const findWord = (currentNode = this.root, string = '') => {
            if (currentNode.keys.length !== 0) {
                for (let char of currentNode.keys.keys()) {
                    findWord(currentNode.keys.get(char), string + char)
                }
                if (currentNode.isEnd()) {
                    values.push(string);
                }
            } else {
                if (string.length > 0) {
                    values.push(string)
                    return;
                }
            }
        }
        findWord();
        return values;
    }
}