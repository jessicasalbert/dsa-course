// A bunch of nodes pointing to other notes 
// No constant lookup / random access by index
// Singly linked list - each node only has a reference to the next one, not the previou one
// Has pointer to head & tail

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // unshift(val) {
    //     const newNode = new Node(val)
    //     newNode.next = this.head;
    //     this.head = newNode
    // }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }
}

const list = new SinglyLinkedList()
list.push("HEllo")
list.push("Goodbye")
console.log(list)