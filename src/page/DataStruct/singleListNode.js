class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class ListNode {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const node = new Node(value)
        if(this.head == null) {
            this.head = node
            this.tail = node
        }
        // 如果不为空，将原尾部的next指向该值
        this.tail.next = node // 指向尾部
        this.tail = node // 尾部值替换为添加的值
        this.length++  // 长度加一
    }
    pop() {
        if(this.head == null) {
            return null
        }
        if(this.head == this.tail) {
            let node = this.tail
            this.head = null
            this.tail = null
            this.length = 0
            return node
        }
        let currentNode = this.head
        let node = this.tail

        while(currentNode) {
            if(currentNode.next == node) {
                this.tail = currentNode
                this.tail.next = null
                this.length--
                return node
            }
            currentNode = currentNode.next
        }
    }
    get(index) {
        if(this.isEmpty()) {
            return false
        }
        if(index<0 || index>this.length-1) {
            return false
        }
        if(index == 0) {
            return this.head
        }
        if(index == this.length-1) {
            return this.tail
        }
        let currentNode = this.head
        let tail = this.tail // 获取最后一个节点
        let indexNumber = 0
        while(currentNode) {
            if(indexNumber == index) {
                return currentNode
            }
            currentNode = currentNode.next
            indexNumber++
        }
    }
    delete(index) {
        if(this.isEmpty()) {
            return false
        }
        if(index<0 || index>this.length-1) {
            return false
        }
        let deleteNode = this.get(index)
        let currentNode = this.head
        let tail = this.tail
        while(currentNode) {
            if(currentNode.next == deleteNode) {
                currentNode.next = currentNode.next.next
                this.length--
                return deleteNode
            }
            currentNode = currentNode.next
        }
    }
    isEmpty() {
        return this.length == 0 ? true : false;
    }
    print() {
        let currentNode = this.head
        let array = []
        while(currentNode) {
            array.push(currentNode.data)
            currentNode = currentNode.next
        }
        return array.join('=>')
    }
}

const l = new ListNode()

// 添加节点
const values = ['A', 'B', 'C', 'D', 'E']
values.forEach(value => l.push(value))
console.log(l)
console.log(l.print())