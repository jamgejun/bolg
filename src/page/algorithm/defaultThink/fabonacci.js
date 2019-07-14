/**
 * 动态规划算法：
 * 核心思想，通过将问题的最优子结构存储起来，再通过将最优子结构拼接，查看相应的结果。
 * 最具有代表性的就是Fibonacci数列的非递归实现。
 * 
 */

function badFabonacci(n) {
    if(n == 0 || n ==1) {
        return 1
    } else {
        return badFabonacci(n-1) + badFabonacci(n-2)
    }
}

let temp = []
function goodFabonacci(n) {
    if(n == 0 || n==1) {
        return 1
    } else {
        if(temp[n]) {
            return temp[n]
        } else {
            let result = goodFabonacci(n-1) + goodFabonacci(n-2)
            temp[n] = result
            return result
        }
    }
}

function forFabonacci(n) {
    let answer = 0;
    if(n<=2) {
        return n == 2 ? 2 : 1 
    }
    let f1 = 1
    let f2 = 2
    for(var i = 2; i < n; i++) {
        let tmp = f2
        answer = f2 + f1;
        f2 = answer
        f1 = tmp
    }
    return answer
}

var time = new Date()

var answer = badFabonacci(2)

var time1 = new Date()

console.log('递归版本' + (time1 - time)+ '答案：' + answer)

var time = new Date()

var answer = goodFabonacci(2)

var time1 = new Date()

console.log('动态规划版本' + (time1 - time) + '答案：' + answer)

var time = new Date()

var answer = forFabonacci(2)

var time1 = new Date()

console.log('for循环版本' + (time1 - time) + '答案：' + answer)
