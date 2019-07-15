/**
 * 函数科里化
 * 
 * 通过将多参数转换为单个参数的问题
 */

function Curry(fn, newArgs) {
    var length = fn.length
    var _args = newArgs || []
    return function () {
        var newArgs = _args.concat(Array.prototype.slice.call(arguments, 0))
        if(newArgs.length == length) {
            return fn.apply(null, newArgs)
        } else {
            return Curry.call(null, fn, newArgs)
        }
    }
}

function sum(a,b,c,d) {
    return a+b+c+d
}

let c1 = Curry(sum)(1)(2)(3)(4)
console.log('curry：'+c1)

/**
 * new
 * 关键点，更改新对象的指向。更改this，传递到函数中
 */
function newFn(fn) {
    var obj = Object.create(null)
    if(fn.prototype != null) {
        obj.__proto__ = fn.prototype
    }
    var result = fn.apply(obj, Array.prototype.slice.call(arguments, 1))
    if(result) {
        return result
    }
    return obj
}

function parent(name) {
    this.name = name
    this.getName = function () {
        console.log('你好：'+this.name+'!')
    }
}

var p1 = newFn(parent, 'GrayJay')
console.log(p1.getName())

/**
 * 更改this指向！
 * call
 * apply
 * bind
 */

/**
 * 关键点在于处理传入的参数是列表，需要通过slice处理
 * 
 */

Function.prototype.myCall = function (obj) {
    if(typeof obj == null || typeof obj == 'object') {
        window.fn = this
    }
    if(window.fn) {
        var res = window.fn(...Array.prototype.slice.call(arguments, 1))
        delete window.fn
    } else {
        obj.fn = this
        var res = obj.fn(...Array.prototype.slice.call(arguments, 1))
        delete obj.fn
    }
    return res
}

function testCall(name, age) {
    this.name = name
    this.age = age
}
var testCallObj = Object.create(null)
testCall.myCall(testCallObj, 'GrayJay', '21')
testCall.myCall(null, 'GrayJay', '21')
console.log(testCallObj,window)

/**
 * apply函数
 * 关键点在于传入参数为数组
 */
Function.prototype.myApply = function (obj) {
    if(obj == null || typeof obj != 'object') {
        window.fn = this
    }
    var res = undefined
    if(window.fn) {
        res = window.fn(...arguments[1])
        delete window.fn
    } else {
        obj.fn = this
        res = obj.fn(...arguments[1])
        delete obj.fn
    }
    return res
}

function testApply(school, adress) {
    this.school = school
    this.adress = adress
}
var testMyApply = Object.create(null)
testApply.myApply(testMyApply, ['cqupt', '南岸区崇文路2号'])
testApply.myApply(null, ['cqupt', '南岸区崇文路2号'])
console.log(testMyApply, window)


/**
 * bind函数，返回一个待执行函数
 */

Function.prototype.myBind = function (obj) {
    var args = Array.prototype.slice.call(arguments, 1)
    var that = this
    var func = function (){
        obj.fn = that
        args.push(...arguments)
        var res = obj.fn(...args)
        delete obj.fn
        return res
    }
    // 保证func能够访问到
    function tmp() {}
    tmp.prototype = this;
    func.prototype = new tmp()
    return func
}

function flatToString(array) {
    return array.toString('').split(',')
}
console.log(flatToString([1,2,3,4,[1,null,5],[1,2,{name:'GrayJay'}]]))

function flatFor(array) {
    let answer = []
    for(var i = 0; i<array.length;i++) {
        if(array[i] instanceof Array) {
            let next = flatFor(array[i])
            answer = answer.concat(next)
        } else {
            answer.push(array[i])
        }
    }
    return answer
}
console.log(flatFor([1,2,3,4,[1,null,5],[1,2,{name:'GrayJay'}]]))

function flatReduce(array) {
    let answer = array.reduce(function (last, next) {
        if(next instanceof Array) {
            last = last.concat(flatReduce(next))
        } else {
            last.push(next)
        }
        return last
    },[])
    return answer
}
console.log(flatReduce([undefined,2,3,4,[1,null,5],[1,2,{name:'GrayJay'}]]))

function debounce(fn, wait, now){
    var time = null
    return function () {
        if(now) {
            fn()
            return
        }
        if(time) clearTimeout(time)
        time = setTimeout(function (){
            fn()
        }, wait)
    }
}

function func() {
    console.log('success')
}

window.addEventListener('click', debounce(func, 500))

function throttle(fn, wait, now) {
    var prev = new Date()
    return function () {
        if(now) {
            fn()
            return 
        }
        return function (){
            var nowTime = new Date()
            if(nowTime - prev > wait) {
                fn()
            }
            prev = new Date()
        }
    }
}


const PENDING = 'PENGDING'
const FULLFILED = 'FULLFILED'
const REJECTED = 'REJECTED'
function myPromise(fn) {
    let slef = this
    self.status = PENDING
    slef.fullfilled = null
    slef.reason = null
    function resolve(value) {
        if(slef.status == PENDING) {
            self.status = FULLFILED
            self.fullfilled = value
        } else {
            throw(`you can't change promise status`)
        }
    }
    function reject(reason) {
        if(self.status == PENDING) {
            slef.status = REJECTED
            self.reason = reason
        } else {
            throw(`you can't change promise status`)
        }
    }

    try {
        fn(resolve, reject)
    } catch (e) {
        throw(`please check your encoding`)
    }
}
myPromise.prototype.then = function (fullfilled, rejected) {
    if(this.status == PENDING) {
        throw(`error`)
    }
    if(this.status == FULLFILED) {
        fullfilled(this.value)
    }
    if(this.status == REJECTED) {
        rejected(this.reason)
    }
}