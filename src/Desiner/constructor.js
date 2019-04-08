var person = {}
person.name = 'GrayJay'
person.sex = 'man'

var student = Object.create(person)

console.log(student)

// 普通构造，不能达到示例共享
function Student() {
    this.number = arguments[0]
    this.name = arguments[1]
    this.toString = function (){
        return '姓名：' +this.name + '学号：' +this.number
    }
}

var GrayJay = new Student('2016214129', '葛俊')
var Miny = new Student('2015612134', 'Miny')

console.log(GrayJay, Miny)

// 原型模式 示例共享
function Students() {
    this.name = arguments[0]
    this.number = arguments[1]
}

Students.prototype.toString = function () {
    return "I'm in prototype" + this.name + this.number
}

var Jay = new Students('Gray', '2016214129')
var wMiny =  new Students('Weimin', '2016211971')

console.log(Jay, wMiny)
