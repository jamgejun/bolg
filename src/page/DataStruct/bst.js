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
            return `tree is empty`
        }
        this.removeNode(this.root, value)
    }
    removeNode(node, value) {
        if(!node) {
            return 
        }
        if(node.data < value) {
            node.left = this.removeNode(node.left, value)
            return node
        }
        if(node.data > value) {
            node.right = this.removeNode(node.right, value) // 如果没有找到，则继续查找
            return node
        } else {
            // 找到该节点的情况且五左右节点
            if(!node.left && !node.right) {
                node = null
                return node
            }
        }
        // 存在左节点
        if (node.left) {
            node = node.left
            return node
        // 存在右节点
        } else if (node.right) {
            node = node.right
            return node
        }
        // 获取正确子节点的最小值以确保我们有有效的替换
        let minRight = this.findMinNode(node.right)
        node.value = minRight.value
        // 确保删除已替换的节点
        node.right = this.removeNode(node.right, minRight.value)
        return node
    }
    findMinNode(node) {
        if (!node.left) {
          return node
        } else {
          return this.findMinNode(node.left)
        }
    }
}

const bst = new BST()
let array = [5,6,1,2,3,8,4]
array.map((item) => {
    bst.insert(item)
})
console.log(bst.remove(8))
console.log(bst)
