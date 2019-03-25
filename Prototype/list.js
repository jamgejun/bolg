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