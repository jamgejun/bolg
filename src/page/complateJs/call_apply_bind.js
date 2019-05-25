let obj = {
    value: 1,
    fn: function () {
        console.log(this.value)
    }
}
obj.fn()
// 原理

Function.prototype.myCall = function (context = window) {
    context.fn = this // this ==> 调用者 通过赋值并执行，fn中的this指向了obj
    context.fn([...arguments].slice(1)) // 执行赋值的对象
    delete context.fn
    return
}

Function.prototype.myApply = function (context = window) {
    context.fn = this // 同样将执行函数赋予给context对象的fn
    context.fn(...arguments[1]) // apply 接受的是参数数组
    return 
}

Function.prototype.myBind = function (context = window) {
    let fn = this;

    return function (){
        return fn.myApply(arg)
    }
}


function parent(name) {
    this.name = name
}

function child(name, parentName) {
    parent.call(this, parentName)
    this.name = name
}

// 空对象赋值给child.prototype， 但是该对象的__proto__指向parent.prototype
function F(proto) {
    function obj() {}
    obj.prototype = proto
    return new obj()
}

// 因为改写了child的prototype，所以需要手动将constructor赋值给child
child.prototype = F(parent.prototype)
child.prototype.constructor = child



// 原型继承
function anmail()  {
    this.name = 'anmail'
}

function cat() {
    this.name = 'cat'
}

cat.prototype = new anmail()

var cat = new cat()

console.log(cat)

// 构造继承
function person() {
    this.name = 'person'
    this.sayName = function (){
        console.log(this.name)
    }
}

function man() {
    person.call(this)
    this.name = 'man'
    this.sayName = function (){
        console.log(this.name)
    }
}

let xx = new man()
console.log(xx)

// 拷贝继承

function classmate() {
    var school = new school()
    for (var i in school) {
        classmate.prototype[i] = school[i] 
    }
}