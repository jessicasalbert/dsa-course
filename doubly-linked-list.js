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

    insert(index, val) {
        const newNode = new Node(val)
        const priorNode = this.get(index);
        if (index > this.length) return false;
        if (index === this.length) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else if (index === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = priorNode.prev;
            newNode.next = priorNode;
            priorNode.prev = newNode;
            newNode.prev.next = newNode;
        } 
        this.length++;
        return true;   
    }

    insert(index, val) {
        if (index > this.length || index < 0) return false;
        if (index === 0) {
            return !!this.unshift(val)
        } else if (index === this.length) {
            return !!this.push(val)
        } else {
            const newNode = new Node(val)
            const priorNode = this.get(index);
            newNode.prev = priorNode.prev;
            newNode.next = priorNode;
            priorNode.prev = newNode;
            newNode.prev.next = newNode;
            this.length++;
            return true;
        } 
    }

    insert(index, val) {
        if (index > this.length || index < 0) return false;
        if (index === 0) {
            return !!this.unshift(val)
        } else if (index === this.length) {
            return !!this.push(val)
        } else {
            const newNode = new Node(val)
            const priorNode = this.get(index);
            newNode.prev = priorNode.prev;
            newNode.next = priorNode;
            priorNode.prev = newNode;
            newNode.prev.next = newNode;
            this.length++;
            return true;
        } 
    }

    remove(index) {
        if (index === 0) return this.shift();
        if (index === this.lenth - 1) return this.pop();
        const node = this.get(index);
        if (!node) return false;
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.next = null;
        node.prev = null;
        this.length--
        return node;
    }

    reverse(){
        if (!this.head) return undefined;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let count = 0;
        let prev = null;
        let next;
        while (count < this.length) {
            next = node.next;
            node.prev = next;
            node.next = prev;
            prev = node;
            node = next;
            count++
        }
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
