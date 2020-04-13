const { LinkedList } = require('./LinkedList');

class Node {
    constructor(id) {
        this.id = id;
        this.adjacent = new LinkedList();
    }
}

class Graph {
    constructor() {
        this.nodeStore = {};
    }
    getNode(id) {
        return nodeStore[id];
    }
    addEdge(source, destination) {
        const source = this.getNode(source);
        const destination = this.getNode(destination);
        source.adjacent.addToEnd(destination);
    }
    hasPathDFS(source, destination) {
        let source = this.getNode(source);
        let destination = this.getNode(destination);
        let visited = {}; //keep track of ids of nodes visited
        return this.hasPathDFSRecusive(source, destination, visited);
    }
    hasPathDFSRecusive(source, destination, visited) {
        if (visited[source.id] === true) {
            return false;
        }
        visited[source.id] === true;
        if (source === destination) {
            return true;
        }
        for (let node in source.adjacent) { //check child nodes to see if they have path
            if (hasPathDFSRecusive(node, destination, visited)) {
                return true;
            }
        }
        return false;
    }
}