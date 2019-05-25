/**
 * 
 * @param {*} fn 
 * @param {*} obj 
 */

Function.prototype.myBind = function (content) {
    var args = Array.prototype.slice.call(arguments, 1)
    let that = this;
    var answerfn = function (){
        content.fn = that
        args.push(...arguments)
        var answer = content.fn(...args)
        delete content.fn
        return answer;
    }
    function tmp() {}
    tmp.prototype = this;
    answerfn.prototype = new tmp()
    return answerfn
}

function testBind() {
    console.log(this.name)
    console.log(this.age)
    console.log(`${arguments[0]},${arguments[1]}`)
}

var Func = testBind.myBind({
    name: 'GrayJay test Bind',
    age: '21'
}, 'hello')
Func('world')