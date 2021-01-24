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

    bfs() {
        const result = [];
        const queue = [this.root];
        while (queue.length > 0) {
            if (queue[0].left) {
                queue.push(queue[0].left)
            }
            if (queue[0].right) {
                queue.push(queue[0].right)
            }
            result.push(queue[0])
            queue.shift()
        }
        return result;
    }

    preorder() {
        const result = [];

        const helper = (node) => {
            result.push(node.val)
            if (node.left) {
                helper(node.left)
            }
            if (node.right) {
                helper(node.right)
            }
        }

        if (!this.root) return result;
        helper(this.root);
        return result;
    }

    postorder() {
        const result = [];

        const helper = (node) => {
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
            result.push(node.val);
        }

        if (!this.root) return result;
        helper(this.root);
        return result;
    }

}