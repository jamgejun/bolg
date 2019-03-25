// 作用域链
var a = 10
function fn() {
    console.log(this)
    var b = 20
    var bar = function (){
        console.log(this)
        console.log(a + b)
    }
    return bar
}

var x = fn(),
    b = 200
x()

// 函数作为返回值
function Foo() {
    var x = 10
    return function Max(b) {
        if(x>b) {
            console.log(x)
        } else {
            console.log(b)
        }
    }
}

var f1 = Foo()
f1(2) // 10

// 作为参数传递
var max = 10,
    fn2 = function (x) {
        if(x>max) {
            console.log(x)
        }
    }

function Max(f){
    var max = 100
    f(15)
}

Max(fn2) // 15