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

    unshift(val) {
        const newNode = new Node(val)
        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        let prevHead = this.head;
        this.head = prevHead.next;
        this.length--;
        return prevHead;
    }

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

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let prev = current;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        const popped = this.tail
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return popped;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count = 0;
        let node = this.head
        while (count < index) {
            node = node.next;
            count++;
        }
        return node;
    }

    set(index, val) {
        if (!this.get(index)) return false;
        else {
            this.get(index).val = val;
            return true;
        }
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            this.push(val);
            return true;
        }
        if (index == 0) {
            this.unshift(val);
            return true;
        }
        const prior = this.get(index - 1);
        const newNode = new Node(val);
        newNode.next = this.get(index);
        prior.next = newNode;

        this.length++
        return true;
    }

    remove(index) {
        if (!this.get(index)) return false;
        if (index === 0) {
            return this.shift();
        } 
        if (index === this.length - 1) {
            return this.pop();
        }
        let prev = this.get(index - 1);
        let removed = prev.next;
        let after = removed.next;
        prev.next = after;
        this.length--;
        return removed;
    }

    reverse() {
        if (this.length < 2) return this;

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let prev = null;
        let next; 

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
        
    }

    print() {
        let arr = [];
        let current = this.head;

        while (current) {
            arr.push(current.val);
            current = current.next
        }
        console.log(arr);
    }
}

