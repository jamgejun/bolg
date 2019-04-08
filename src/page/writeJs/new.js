/**
在js中new操作符的作用
创建一个全新的对象
this指向该对象。
将新对象的__proto__属性指向构造函数的prototype
如果函数没有返回值，则返回该对象的引用
**/

function New(func) {
    var obj = {}
    if(func.prototype!==null) {
        obj.__proto__ = func.prototype
    }

    var ret = func.apply(obj, Array.prototype.slice.call(arguments, 1))

    // 如果构造函数有返回值，则将该对象返回给实例对象
    if((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
        return ret
    } else {
        return obj
    }
}