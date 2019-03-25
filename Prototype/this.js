// 构造函数
function Foo() {
    this.name = arguments[0]
    this.sex = arguments[1]
    console.log(this)
}

var obj = new Foo('GrayJay','man') // Foo {name: "GrayJay", sex: "man"}

Foo('window', 'win') // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
console.log(window.name) // window

// 2 作为对象的属性被调用和被赋值
var obj = {
    x:10,
    fn: function (){
        console.log(this)
        console.log(this.x)
    }
}
obj.fn() // obj 10 

var fn1 = obj.fn
fn1() // window 10

// 3. call apply

window.name = 'Miny'
window.sex = 'women'
var obj2 = {
    name: 'GrayJay',
    sex: 'man'
}
function Call() {
    console.log(this.name)
    console.log(this.sex)
}

Call.call(obj2)
Call.apply(obj2)

// 4 全局调用，或者被作为普通函数执行
window.name = 'Miny'
window.sex = 'women'
function Normal() {
    console.log(this.name)
    console.log(this.sex)
}

Normal()

// 特殊情况
var obj3 = {
    name: 'GrayJay',
    fn: function (){
        console.log(this)
        function f1() {
            console.log(this)
            console.log(this.name)
        }
        f1()
    }
}
obj3.fn()