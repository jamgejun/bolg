// prototype 原型
var obj = {}
console.log(obj.prototype)

var Obj = new Object()
console.log(Obj.prototype)
obj.prototype.name = 'GrayJay' // 报错 VM183:2 Uncaught TypeError: Cannot set property 'name' of undefined

// 函数特有属性prototype
function setObject() {
    this.name = arguments[0]
    this.sex = arguments[1]
}
setObject.prototype.getName = function (){
    return this.name + ' ' + this.sex
}
var fObj = new setObject('GrayJay', 'man')
console.log(fObj.getName())

// 实例对象的__proto__
console.log(fObj.__proto__)
console.log(setObject.prototype)
console.log(fObj.__proto__ === setObject.prototype)