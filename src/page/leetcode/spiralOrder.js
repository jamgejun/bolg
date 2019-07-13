/**
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * @param {*} matrix 
 * 
 * 思路，
 * 1. 利用矩阵的转置
 * 2. 利用余子式，代替转置
 * 3. 都需要用到逆时针四个不同方向的循环链表
 */

var spiralOrder = function(matrix) {
    let answer = [];
    let length = matrix[0].length
    let col = matrix.length
    let change = [];
    let dirs = dirsed
    while((length+col) != 2) {
        change = matrix
        if( !dirs.rotate && dirs.index == 1 && !dirs.rever) {
            answer.push(...change[0])
            change.splice(0,1)
            matrix = change
        }
        if( dirs.rotate && dirs.index == -1 && !dirs.rever) {
            change = rotate(change)
            answer.push(...change[change.length-1])
            change.splice(-1,1)
            matrix = rotate(change)
        }
        if(dirs.rotate && dirs.index == -1 && dirs.rever) {
            answer.push(...change[change.length-1].reverse())
            change.splice(-1,1)
            matrix = change
        }
        if( dirs.rotate && dirs.index == 1 && dirs.rever) {
            change = rotate(change)
            answer.push(...change[0].reverse())
            change.splice(0,1)
            matrix = rotate(change)
        }
        dirs = dirs.next
        if(matrix == '') {
            return answer
        }
        length = matrix[0].length
        col = matrix.length
    }
    answer.push(...matrix[0])
    return answer
};

function rotate(array) {
    if(array.length == 0) {
        return ''
    }
    let m = array.length
    let n = array[0].length
    let answer = []
    for(let i = 0; i<n;i++) {
        answer[i] = []
        for(let j=0;j<m;j++) {
            answer[i][j] = array[j][i]
        }
    }
    return answer
}
var dirsed = {
    value: 0,
    rotate: false,
    rever: false,
    index: 1,
    next: {
        value: 1,
        rotate: true,
        rever: false,
        index: -1,
        next: {
            value: 2,
            rotate: true,
            rever: true,
            index: -1,
            next: {
                value:3,
                rotate: true,
                rever: true,
                index: 1,
                next: dirsed
            }
        }
    }
}