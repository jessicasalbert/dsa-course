class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    // Insert value to end of array, then bubble up through parents to correct position
    insert(val) {
        this.values.push(val);
        let index = this.values.length - 1;
        while (index > 0) {
            let parent = Math.floor((index - 1)/2);
            if (this.values[index] > this.values[parent]) {
                let temp = this.values[index];
                this.values[index] = this.values[parent];
                this.values[parent] = temp
            } else {
                break;
            }
            index = parent;
        }
        return this.values;
    }
}