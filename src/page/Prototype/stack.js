var a = 10,                     // 1. 第一步，代码进入的时候，就会对全局执行环境进行赋值
        fn,
        bar = function (x) {
            var b = 5;
            fn(x + b)  // 3. 进入fn函数的上下文环境
        }

fn = function (y) {
    var c = 5;
    console.log(y + c)
}

bar(10) // 2. 进入bar函数的上下文环境

/*
全局上下文环境
a:undefined
fn:undefined
bar:undefined
this:window
*/

/*
当运行到12行之后，全局上下文环境赋值
a:10
fn:function(){}
bar:function(){}
this:window
*/

/*
进入到bar函数体，创建新的执行上下文环境 该执行环境被押入栈，并标记为激活状态
b:undefined
x:10
arguments:[10]
this:window
*/

/*
bar函数执行到第五行之前：将fn执行环境入栈，并设为激活状态
c:undefined
y:undefined
argumens:[]
this:window
*/

/*
执行之后，并将fn设置为激活状态
c:5
y:15
arguments:[15]
this:window
*/