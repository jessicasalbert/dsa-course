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
                this.swap(this.values, parent, index)
            } else {
                break;
            }
            index = parent;
        }
        return this.values;
    }

    extract() {
        if (this.values.length === 0) return undefined;
        if (this.values.length === 1) {
            let val = this.values[0];
            this.values = [];
            return val;
        }
        let index = this.values.length - 1;
        let parent = 0;
        this.swap(this.values, index, parent)
        let val = this.values.pop();
        while (true) {
            let child1 = 2 * parent + 1;
            let child2 = 2 * parent + 2;
            
            if (
                this.values[parent] < this.values[child1] && 
                this.values[parent] > this.values[child2]
                ) {
                    this.swap(this.values, child1, parent)
                    parent = child1;
            } else if (
                this.values[parent] > this.values[child1] && 
                this.values[parent] < this.values[child2]
                ) {
                    this.swap(this.values, child2, parent)
                    parent = child2;
            } else if (
                this.values[parent] < this.values[child1] && 
                this.values[parent] < this.values[child2]
                ) {
                let index = (this.values[child1] > this.values[child2]) ? child1 : child2;
                this.swap(this.values, index, parent)
                parent = index;
            }
            else {
                break;
            }
        }
        return val;
    }

    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        return arr
    }
}

