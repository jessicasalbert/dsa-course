class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this.length;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let last = this.head;
        if (this.length === 1) {
            this.head.next = null;
        }
        this.head = this.head.next;
        last.next = null;
        this.length--;
        return last.val;
    }

}