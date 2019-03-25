// 理解一个对象 typeof 运算符
function getTypeof() {
    // 基本类型
    console.log(typeof undefined) // Undefined
    console.log(typeof null) // Object
    console.log(typeof 10) // Number
    console.log(typeof 'abc') // String
    console.log(typeof true) // Boolean

    // 引用类型
    console.log(typeof new Function()) // Function
    console.log(typeof new Object) // Object    
    console.log(typeof new Array)  // Object
    console.log(typeof new String) // Object
    console.log(typeof new Number) // Object
    console.log(typeof new Boolean) // Object
}
getTypeof();

// 理解万物皆对象
function UnderStandObject() {
    // 基本对象的产生
    var obj = {}
    var myFunctionObject = function (){
        console.log('hi，I’m an Object')
    }
    // 关于对象的属性类型（数值属性，访问器属性）赋值的四种方式 . [''] defineProperty defineProperties 
    Object.defineProperty(obj, 'key', {
        value: 'keys',
        writable: true, // 是否可写
        configurable: true, // 可修改属性类型，是否能删除
        enumerable: false, // for in
    })
    obj.name = 'GrayJay'

    myFunctionObject.name = 'GrayJay'
    myFunctionObject.sex = 'man'
    console.log(myFunctionObject)
    console.log(typeof myFunctionObject) // function
    console.log(myFunctionObject.name +" "+ myFunctionObject.sex)
    console.log(obj)
}

UnderStandObject();

