// Implemented using binary heap 
// O(logn) for both enqueue & dequeue

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class MinPriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        let index = this.values.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1)/2);
            if (this.values[index].priority <= this.values[parent].priority) {
                this.swap(this.values, parent, index)
            } else {
                break;
            }
            index = parent;
        }
        for (const x of this.values) console.log(x.val)
        return this.values;
    }

    dequeue() {
        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) {
            let val = this.values[0];
            this.values = [];
            return val;
        }
        let index = this.values.length - 1;
        let parent = 0;
        this.swap(this.values, index, parent)
        let node = this.values.pop();
        while (true) {
            let child1 = 2 * parent + 1;
            let child2 = 2 * parent + 2;
            if (!this.values[child1] && !this.values[child2]) break;
            if (this.values[child1] && !this.values[child2]) {
                if (this.values[parent].priority > this.values[child1].priority) {
                    this.swap(this.values, child1, parent)
                    parent = child1;
                } else {
                    break;
                }
            }
            else if (
                this.values[parent].priority > this.values[child1].priority && 
                this.values[parent].priority < this.values[child2].priority
                ) {
                    this.swap(this.values, child1, parent)
                    parent = child1;
            } else if (
                this.values[parent].priority < this.values[child1].priority && 
                this.values[parent].priority > this.values[child2].priority
                ) {
                    this.swap(this.values, child2, parent)
                    parent = child2;
            } else if (
                this.values[parent].priority > this.values[child1].priority && 
                this.values[parent].priority > this.values[child2].priority
                ) {
                let index = (this.values[child1].priority < this.values[child2].priority) ? child1 : child2;
                this.swap(this.values, index, parent)
                parent = index;
            }
            else {
                break;
            }
        }
        return node;
    }

    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr
    }
}


