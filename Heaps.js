class MinHeap {
    constructor() {
        this.heap = [null] //array with null at index 0
    }
    insert(num) {
        this.heap.push(num);
        if (this.heap.length > 2) {
            let index = this.heap.length - 1;
            while (this.heap[index] < this.heap[Math.floor(index / 2)]) {
                if (index >= 1) {
                    const parentValue = this.heap[Math.floor(index / 2)];
                    const childValue = this.heap[index];
                    this.heap[Math.floor(index / 2)] = childValue;
                    this.heap[index] = parentValue;
                    if (Math.floor(index / 2) > 1) { //if parent is not root. THIS ends the loop
                        index = Math.floor(index / 2); //change index to parent index
                    } else {
                        break;
                    }
                }
            }
        }
    }
    remove() {
        let min = this.heap[1];
        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1]; //place the last node at top of tree
            this.heap.splice(this.heap.length - 1); //remove node that was moved to top
            if (this.heap.length === 3) { //only 2
                if (this.heap[1] > this.heap[2]) { //if child is smaller, swap
                    const parentValue = this.heap[1];
                    const childValue = this.heap[2]
                    this.heap[1] = childValue;
                    this.heap[2] = parentValue;
                };
                return min;
            }
            let i = 1; //root
            let left = 2;
            let right = 3;
            //While either of the children is greater than their parent
            while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
                if (this.heap[left] < this.heap[right]) {
                    const leftChildValue = this.heap[left];
                    const parentValue = this.heap[i];
                    this.heap[left] = parentValue;
                    this.heap[i] = leftChildValue;
					i = 2 * i; //now compare the swapped node to its new children
                } else { //right node is smaller
                    const rightChildValue = this.heap[right];
                    const parentValue = this.heap[i];
                    this.heap[right] = parentValue;
                    this.heap[i] = rightChildValue;
					i = 2 * i + 1;
				};
				left = 2 * i; //set new children values
				right = 2 * i + 1;
				if (this.heap[left] == undefined || this.heap[right] == undefined) {
					break;
				};
            }
        } else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        } else {
            return null;
        }
        return min;
    }
    sort() { //creates sorted array from heap
        let sorted = [];
        while (this.heap.length > 1) {
            sorted.push(this.remove());
        };
        return sorted;
    }
}