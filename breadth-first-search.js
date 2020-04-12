const { Queue } = require('./Queue');
function breadthFirstSearch(graph, root) {
    let nodesLength = {};

    //set lengths to infinity to start
    for (let i = 0; i < graph.length; i++) {
        nodesLength[i] = Infinity;
    }
    nodesLength[root] = 0; //set dist to root to 0
    const queue = new Queue();
    queue.add(root);
    let currentNode;

    while (!queue.isEmpty()) {
        currentNode = queue.remove();
        let currentConnected = graph[currentNode];
        let neighborIndex = []; //nodes connected to currentNode.
        let index = currentConnected.indexOf(1); //first connected node
        while (index !== -1) {
            neighborIndex.push(index);
            index = currentConnected.indexOf(1, index + 1);
        }
        for (let j = 0; j < neighborIndex.length; j++) {
            if (nodesLength[neighborIndex[j]] === Infinity) { //haven't set dist yet
                nodesLength[neighborIndex[j]] = nodesLength[currentNode] + 1;
                queue.add(neighborIndex[j]); //push neighbor to queue
            }
        }
    }
    return nodesLength;
}

const graph = [
    //Adjacency Matrix
     //  0  1  2  3  4
/* 0 */ [0, 1, 1, 1, 0], //node 0 is connected to nodes 1, 2, 3
/* 1 */ [0, 0, 1, 0, 0], //node 1 is connected to node 2
/* 2 */ [1, 1, 0, 0, 0], //node 2 is connected to nodes 0, 1
/* 3 */ [0, 0, 0, 1, 0], //node 3 is connected to node 3
/* 4 */ [0, 1, 0, 0, 0], //node 0 is connected to nodes 1
]

console.log(breadthFirstSearch(graph, 1)); //distance to other nodes starting from node 1