// Has pointer to next AND previous nodes;

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Delete both prev & next connections
    pop() {
        if (!this.head) return undefined;
        const tail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail.prev.next = null;
            tail.prev = null;
            this.tail = this.tail.prev;
        }
        this.length--;
        return tail;
    }

    print() {
        const arr = [];
        let node = this.head;
        while (node) {
            arr.push(node.val)
            node = node.next;
        }
        console.log(arr)
    }
}
