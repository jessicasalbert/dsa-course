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
