class Node {
    constructor(value) {
        this.data = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        const node = new Node(value)
        if(!this.root) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            !(node.left) ? node.left = newNode : this.insertNode(node.left, newNode)
        }
        else {
            !(node.right)? node.right = newNode : this.insertNode(node.right, newNode)
        }
    }
    remove(value) {
        this.removeNode(this.root, value)
    }
    removeNode(node, value) {
        if(node.data < value) {
            !(node.left) ? this.removeNode(node.left, value) : this.removeNode(node.right, value)
        }
        if(node.data == value) {
            node.data = null
        }
    }
}

const bst = new BST()
let array = [5,6,1,2,3,8,4]
array.map((item) => {
    bst.insert(item)
})
bst.remove(8)
console.log(bst)
