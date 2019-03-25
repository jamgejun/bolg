var array = []
for(var i=0; i< 10; i++) {
    array[i] = function() {
        console.log(i)
    }
}
array[6]()

// 变量提升后  构建执行上下文
var array
var i
array = [] //正式赋值
for ( i = 0 ;i < 10; i++) {
    array[i] = function() {
        console.log(i)
    }
}
array[6]()

// 自由变量和arguments
var x = 10
function f1() {
  console.log(x)  // x为自由变量
  console.log(arguments[0]) // arguments
}

function run() {
  var x = 5
  f1(x);
}
run() // 10 5