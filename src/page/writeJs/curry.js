/**
 * 函数科里化
 * @param {*} fn 
 * @param  {...any} args 
 */
function Curry(fn, args) {
    var length = fn.length
    var _args = args || []
    return function (){
        var newArgs = _args.concat(Array.prototype.slice.call(arguments, 0))
        console.log(newArgs)
        if(newArgs.length<length) {
            return Curry.call(this, fn, newArgs)
        }
        return fn.apply(null, newArgs)
    }
}
function sum(a,b,c) {
    return a+b+c
}
var answer = Curry(sum)(3)(4)(5)
console.log(answer)


const Es6Curry = (fn, arr = []) => (...args) => (
    arg => arg.length === fn.length
      ? fn(...arg)
      : curry(fn, arg)
  )([...arr, ...args])
  

function CurryLine(fn,args) {
    var length = fn.length; // 保证了每次传入都是一样的
    var _args = args | [] // 保存所有的参数
    return function (){
        var newArgs = _args.concat([].slice.call(arguments,0)) // 推入新加入的参数
        if(newArgs.length<length) { // 比较
            return fn.apply(null, newArgs)
        } else {
            return CurryLine.call(this, fn, newArgs) // 
        }
    }
}

const PENGDING = 'pengding'
const FULLFILED = 'fullfiled'
const REJECT = 'reject'
function myPromise(constructor) {
    let self = this
    self.status = PENGDING
    self.FULLFILED = null
    self.REJECT = null

    function resolve(value) {
        if(self.status != PENGDING) {
            throw(`you can't reset status`)
        } else {
            self.status = FULLFILED
            self.FULLFILED = value
        }
    }

    function reject(reason) {
        if(self.status != PENGDING) {
            throw(`you can't reset status`)
        } else {
            self.status = REJECT
            self.FULLFILED = reason
        }
    }
    
    try {
        constructor(resolve, reject)
    } catch (e) {
        throw(`please check your arguments function`)
    }
}

myPromise.prototype.then = function (resolved, rejected) {
    if(!(this instanceof myPromise)) {
        throw(`you can't use then before you not a Promise`)
    }

    try {
        if(this.status == PENGDING) {
            throw(`error in constructor`)
            return
        }
        if(this.status == FULLFILED) {
            resolved(this.FULLFILED)
        }
        if(this.status == REJECT) {
            rejected(this.REJECT)
        }
    } catch (e) {
        throw(`error in execute function`)
    }
}

let p1 = new myPromise(function (resolve, reject){
    console.log('a')
    resolve('hello word')
})

p1.then(function (value) {
    console.log(value)
}, function (reason) {
    console.log(reason)
})