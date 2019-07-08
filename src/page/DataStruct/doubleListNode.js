class Node {
    constructor(value) {
        this.data = value
        this.next = null
        this.pre = null
    }
}

class doubleList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.head.next = this.tail
            this.head.pre = null
            this.tail = node
            this.tail.pre = this.head
        }
        let preNode = this.tail
        this.tail.next = node
        this.tail = node
        this.tail.pre = preNode
        this.length++
    }
    pop() {
        if(this.isEmpty()) {
            return false
        }
        let popNode = null
        if(this.head == this.tail) {
            popNode = this.head
            this.head = null
            this.tail = null
            return popNode
        }
        popNode = this.tail
        this.tail.pre.next = null
        this.tail = this.tail.pre
        this.length--
        return popNode
    }
    isEmpty() {
        return this.length == 0 ? true : false
    }
    print() {
        let dataArray = []
        let currentNode = this.head
        while(currentNode) {
            dataArray.push(currentNode.data)
            currentNode = currentNode.next
        }
        return dataArray.join('=>')
    }
}

let dl = new doubleList()
const values = ['A', 'B', 'C', 'D', 'E']
values.map((item) => {
    dl.push(item)
})
console.log(dl.print())
console.log(dl.pop())
console.log(dl.print())
console.log(dl.pop())
console.log(dl.print())
console.log(dl.pop())
console.log(dl.print())
console.log(dl.pop())
console.log(dl.print())
