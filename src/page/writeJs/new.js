/**
在js中new操作符的作用
创建一个全新的对象
this指向该对象。
将新对象的__proto__属性指向构造函数的prototype
如果函数没有返回值，则返回该对象的引用
**/

/**
 * 
 * @param {*} func 
 */


function New(func) {
    var obj = {}
    if(func.prototype !== null) {
        obj.__proto__ = func.prototype;
    }

    var ret = func.apply(obj, Array.prototype.slice.call(arguments, 1)) // 判断本身执行函数的返回值是否存在，如果存在，则返回该值。
    if(ret) {
        return ret
    }
    return obj
}

function testNew(name, age){
    this.name = name;
    this.age = age;
}

var testNewObj = new testNew('Gray', '21')
var testNewObj2 = New(testNew, 'Gray', '21')
console.log(testNewObj, testNewObj2)

module.exports = New