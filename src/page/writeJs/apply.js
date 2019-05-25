/**
 * 
 * @param {*} fn 
 * @param {*} obj 
 */
// 接受参数数组
Function.prototype.myApply = function (content) {
    content.fn = this;
    var answer = content.fn(...arguments[1]) // 接受参数列表
    delete content.fn
    return answer
}

function testApply(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
}
var testApplyObj = {}

testApply.myApply(testApplyObj, ['GrayJay test Apply', '21', 'man'])
console.log(testApplyObj)