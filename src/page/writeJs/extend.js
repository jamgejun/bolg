function Parent() {
    this.name = 'Parent'
    this.age = '999岁'
    this.sign = 'word'
}
Parent.prototype.sayMe = function (){
    return `Myname:${this.name} and Myage:${this.age}`
}

/**
 * 原型式继承
 * @param {*} name 
 * @param {*} age 
 */
function Child1(name, age) {
    this.name = name;
    this.age = age
}
Child1.prototype = new Parent()

var child1_obj1 = new Child1('Gray', 21)
child1_obj1.__proto__.sign = 'hello'
var child1_obj2 = new Child1('Miny', 18)
console.log(child1_obj1, child1_obj2)
/**
 * 优点:
 * 1. 简单易懂
 * 缺点:
 * 1.缺少灵活性,
 * 
 */

/**
 * 构造函数继承
 * @param {*} name 
 * @param {*} age 
 */
function Child2(name, age) {
    Parent.call(this)
    this.name = name
    this.age = age
}
var child2_obj1 = new Child2('Gray', 21)
var child2_obj2 = new Child2('Miny', 18)
console.log(child2_obj1, child2_obj2)

/**
 * 优点:
 * 1.在每个实例上共享了父类的属性
 * 缺点:
 * 1.不能共享原型上的内容
 * 
 */

/**
 * 组合继承
 * @param {*} name 
 * @param {*} age 
 */
function Child3(name, age) {
    Parent.call(this)
    this.name = name
    this.age = age
}

Child3.prototype = new Parent()

var child3_obj1 = new Child3('Gray', 21)
var child3_obj2 = new Child3('Miny', 18)
console.log(child3_obj1, child3_obj2)

/**
 * 原型式
 * 
 * 
 */
function Child4(name, age){
    this.name = name;
    this.age = age
}

function createPrototype(obj) {
    function F() {}
    F.prototype = obj
    return new F()
}
var child4_obj1 = createPrototype(Parent.prototype)
var child4_obj2 = createPrototype(Parent.prototype)
console.log(child4_obj1, child4_obj2)

/**
 * 寄生组合类型
 */

function Child5(name, age) {
    Parent.call(this)
    this.name = name
    this.age
}
var proto = createPrototype(Parent.prototype)
proto.constructor = Child5
Child5.prototype = proto

var child5_obj1 = new Child5('Gray', 21)
var Child5_obj2 = new Child5('Miny', 18)
console.log(child5_obj1, Child5_obj2)