class Node {
    constructor(val) {
        this.val = val
        this.right = null
        this.left = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root
        while (current) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                } 
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                } 
                current = current.right
            }
        }
    }

    search(val) {
        current = this.root;
        while (current) {
            if (current.val === val) {
                return current;
            }
            if (current.val < val ) {
                current = current.right;
            } else {
                current = current.left;
            }
        }
        return false;
    }
}