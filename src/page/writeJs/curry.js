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
  