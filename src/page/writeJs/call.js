// 实现原理
var obj = {
    name: 'GrayJay',
    fn: function (){
        this.name;
    }
}
obj.fn() // 使用this的显示绑定原理

// 接受参数
/**
 * 
 * @param {*} fn 
 * @param {*} obj 
 */

Function.prototype.myCall = function (content) {
    content.fn = this;
    var answer = content.fn(...Array.prototype.slice.call(arguments, 1))
    delete content.fn
    return answer
}

function testCall(name, age) {
    this.name = name
    this.age = age
}

var testCallObj = {}
testCall.myCall(testCallObj, 'Gray', '21')

console.log(testCallObj)