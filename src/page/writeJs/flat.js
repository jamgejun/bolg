/**
 * 实现数组拉平，提供参数，可指定拉平维度
 */
import testArray from './testArray'
 /**
  * 任意指定数组，支持任意维度
  * @param {Array} array 
  */
function flatFor(array) {
    let answer = []
    for(var i = 0; i<array.length; i++) {
        if(array[i] instanceof Array) {
            let before = flatFor(array[i])
            answer = answer.concat(before)
        }
        else {
            answer.push(array[i])
        }
    }
    return answer
}

function flatReduce(array) {
    var answer = array.reduce((last, next) => {
        if(next instanceof Array) {
            last = last.concat(flatReduce(next))
        } else {
            last.push(next);
        }
        return last
    },[])
    return answer;
}

// flatFor([
//     [1,2,3],
//     5,
//     [5,[1,100,5]],
//     [[[3,2,5],0,5],5],
//     [[[[[5,1,2,3],6],5],5],8]
// ])

// console.log(flatReduce([1,2,3,5,8,[5,6,2,[66]]]))
var lastTime = new Date()

for(var i = 0; i<testArray.length;i++) {
    flatFor(testArray[i])
}
var nextTime = new Date()
console.log(`flatFor used time ${nextTime-lastTime}`)


var lastTime2 = new Date()
for(var i = 0; i<testArray.length;i++) {
    flatReduce(testArray[i])
}
var nextTime2 = new Date()
console.log(`flatReduce used time ${nextTime2-lastTime2}`)
