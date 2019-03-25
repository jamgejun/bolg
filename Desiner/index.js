// 传统构建一个对象的形式

var obj = {
    _phone: '',
    _adress: ''
}
// .模式赋值方式
obj.name = 'Gray Jay'

// 中括号模式
obj['sex'] = 'man'

// Object.defineProperty(obj, key, config) 设置一个
Object.defineProperty(obj, 'school', {
    value: 'cqupt',
    writable: true, // 是否可写
    enumerable: true, // 是否可以通过for in 遍历
    configurable: false // 表示是否可以使用delete删除或者是 是否能够修改属性特性，或者能否把属性改为访问器属性。
})
//  这样做会报错，因为school已经设置为不可修改特性  Uncaught TypeError: Cannot redefine property: school
// Object.defineProperty(obj, 'school', {
//     value: 'univers',
//     writable: true,
//     enumerable: false,
//     configurable: true
// })

// object.defineProperties(obj, ObjectValue) 设置多组
Object.defineProperties(obj, {
    // 设置一个数据属性
    "adress": {
        value: 'cqupt in chongqing',
        writable: true,
        enumerable: false,
        configurable: true
    }, 
    // 设置一个访问器属性
    // 如果类似下面这种设置get 和 set，会陷入死循环，查找this.phone的时候，会递归调用get函数。导致栈溢出
    // "phone": {
    //     enumerable: true,
    //     configurable: true,
    //     get: function () {
    //         return this.name+"'s phone is" + this.phone
    //     },
    //     set: function (value) {
    //         this.phone = value
    //     }
    // }
    // 使用_下划线的形式，表示该数据是只能通过对象属性访问的
    "phone": {
        enumerable: true,
        configurable: false,
        // 此处返回的信息，即是phone的值，在vue中的computed属性类似于该属性。
        get: function () {
            return this.name+"'s phone is " + this._phone
        },
        set: function (value) {
            this._phone = value
        }
    }
})
console.log('before update is '+obj.adress)

Object.defineProperty(obj, 'adress', {
    configurable: false,
    enumerable: false,
    get: function () {
        return this.name+ "'s adress now is change " + this._adress
    },
    set: function (value) {
        this._adress = value
    }
})
obj.adress = 'hello'
obj.phone = '1772668153' 
console.log('after update is '+ obj.adress)

console.log("myPhone is "+obj.phone)  // 显示访问器属性的值
// 使用for in查找 enumberable为true的值。
for(var x in obj) {
    // console.log(Object.getOwnPropertyDescriptor(obj, x))
    console.log(x)
}
console.log(Object.getOwnPropertyDescriptor(obj, 'phone')) // 打印属性的描述符
console.log(obj)