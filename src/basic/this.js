// 1. 指向调用的函数

// window 作为调用
function fn () {
    console.log(this)
}
fn() // fn() = window.fn()  所以this = window 但是在严格模式下this != window 严格模式为undefined

// 对象作为调用
var obj = {
    a: 6,
    fn: function () {
        console.log(this.a, this) // 6 obj
    }
}

obj.fn() // 作为obj调用，所以this = obj对象

var obj1 = {
    a:6,
    b:{
        a:3,
        fn: function () {
            console.log(this.a,this) // 3 obj1
        }
    }
}

obj1.b.fn() // obj.b调用 所以this = obj1.b

// 对象赋值
var f1 = obj1.b.fn
f1() // undefined this = window


// 构造函数
function Fn() {
    console.log(this)
    this.name = 'GrayJay'
    console.log(this)
}
var foo = new Fn() //this = [object Object]  this = Object 

var number = 5
var obj = {
    number: 3,
    fn1: (function (){
        var number
        this.number *= 2  // window.number = 10
        number = number*2 // 匿名函数number = undefine*2
        number = 3 // 匿名函数number = 3
        return function (){
            var num = this.number
            this.number *= 2 
            console.log(num) 
            number *= 3
            console.log(number)
        }
    })()
    // fn1: function (){
    //     var num = this.number
    //     this.number *= 2 
    //     console.log(num) // 取决于执行环境
    //     number *= 3 // 匿名函数number = 3*3 =9
    //     console.log(number) // 9
    // }
}

var fn1 = obj.fn1
fn1.call(null) // num = 10 number = 9 window.num = 20
obj.fn1() // num=3 number = 27 obj.number = 6
console.log(window.number) // 20