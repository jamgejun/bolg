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
       if(!this.root) {
           return `tree is Empty`
       }
       removeNode(this.root, value)
    }
    removeNode() {
        
    }
    findNode(value) {
       let root = this.root
       while(root) {
           if(root.data > value) {
               root = root.left ? root.left : null
           }
           if(root.data < value) {
                root = root.right ? root.right : null
           }
           if(root.data == value) {
               return root
           }
       }
       return `not find data`
    }
    reverse() {
        if(!this.root) {
            throw(`tree is empty！`)
        } else {
            this.reverseNode(this.root)
        }
    }
    reverseNode(root) {
        if(!root) {
            return 
        }
        let preLeft = root.left
        root.left = root.right
        root.right = preLeft
        this.reverseNode(root.left)
        this.reverseNode(root.right)
    }
    midPrint(root) {
        if(!this.root) {
            return `tree is empty`
        }
        this.firstPrint(root.left)
        console.log(root.data)
        this.firstPrint(root.right)
    }
    firstPrint(root) {
        if(!root) {
            return `tree is empty`
        }
        console.log(root.data)
        this.firstPrint(root.left)
        this.firstPrint(root.right)
    }
    lastPrnit(root) {
        if(!root) {
            return `tree is empty`
        }
        this.firstPrint(root.left)
        this.firstPrint(root.right)
        console.log(root.data)
    }
}

const bst = new BST()
let array = [5,6,1,2,3,8,4]
array.map((item) => {
    bst.insert(item)
})
console.log(bst)
// console.log(bst.remove(8))
console.log(bst.findNode(3))
bst.midPrint(bst.root)
bst.firstPrint(bst.root)
bst.lastPrnit(bst.root)
bst.reverse()
console.log(bst)