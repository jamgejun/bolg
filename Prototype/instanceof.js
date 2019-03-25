// instanceof 操作符
function Original() {}
console.log(Original instanceof Object) // true
console.log(typeof (Array))
console.log(typeof (Object))
// 以上说明函数是一种对象！

function SetObj() {
    this.name = 'GrayJay'
    this.sex = 'man'
}

var obj = new SetObj()  
// 以上表面，对象可以通过函数来创建，而函数又是一种对象！
console.log(obj.__proto__ === SetObj.prototype) // true obj的隐式原型和setObj的显示原型
console.log(SetObj instanceof Function) // true
console.log(obj instanceof Object)
