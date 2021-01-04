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

    shift() {
        if (!this.head) return undefined;
        const head = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            head.next = null
        }
        this.length--;
        return head;
    }

    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let node;
        let count;
        if (index <= this.length / 2) {
            count = 0;
            node = this.head;
            while (count < index) {
                node = node.next;
                count++;
            }
        } else {
            node = this.tail;
            count = this.length - 1
            while (count > index) {
                node = node.prev;
                count--;
            }
        }
        return node;
    }

    set(index, val) {
        let node = this.get(index)
        if (!node) return false
        node.val = val;
        return true;
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
