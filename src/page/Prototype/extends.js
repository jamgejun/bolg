var Foo = function (){
    this.name = arguments[0]
    this.sex = arguments[1]
}

Foo.prototype.toString = function (){
    return '我是声明在父级的一个toString方法 返回：' + '姓名: '+ this.name + ' 性别：' + this.sex
}
Foo.prototype.adress = 'parentAdress'

var obj = new Foo('GrayJay', 'man')
console.log(obj.name + obj.sex + obj.adress)
console.log(obj.toString())

// 原型链的灵活性
var array = [1,2,3,'GrayJay']
array.toString()

Array.prototype.toString = function (){
    return 'I’m aready changed'
}

array.toString()