/**
 * 原型继承
 * 
 */

function Parent(name, age) {
    this.name = name
    this.age = age
}
Parent.prototype.sayName = function (){
    console.log(this.name + this.age)
}

function Child(name, age) {
    this.name = name
    this.age = age
}
Child.prototype = new Parent('GrayJay', '22')

let c1 = new Child('Miny', '20')
console.log(c1)

/**
 * 判断单链表有没有环
 *  
*/
function isCircle(root) {
    let head = root
    while(head) {
        head = head.next
        if(head == root) {
            return true
        }
    }
    return false
}

/**
 * 手写二进制加法
 */

function addBite(num1, num2) {
    let n1 = [...num1]
    let n2 = [...num2]
    let res = ''
    let tmp = false
    while(n1.length || n2.length || tmp) {
        tmp += n1.pop() + n2.pop()
        res = (tmp%2) + res
        tmp = tmp>1 ? 1 : 0
    }
}

/**
 * 矩阵查找
 */

function marixSearch(mairx, target) {
    let rows = mairx.length
    let col = 0
    for(let row =0; row<rows; row++) {
        col = mairx[row].length
        for(let j = col-1; j>=0; j--) {
            if(mairx[row][j] == target) {
                return true
            } else {
                continue
            }
        }
    }
    return false
}
/**
 * 判断一个树是否是镜像二叉树
 */
function isMircoreTree(root) {
    let midprint = []
    midPrint(root)
    midprint = mid
    if(midprint) {
        let str = ''
        for(let i=midprint.length-1;i>=0;i--) {
            str += midprint[i]
        }
        return str == midprint ? true : false
    }
}
let mid = ''
function midPrint(root){
    if(!root) {
        return 
    }
    midPrint(root.left)
    mid += root.val
    midPrint(root.right)
}