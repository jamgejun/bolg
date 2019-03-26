// 单例模式
var Singleton = (function (){
    var instance
    function init(){
        var private = 'GrayJay'
            MathRandom = Math.random()
        function PrivateMethods() {
            console.log('Im private')
        }
        return {
            publicMethod:PrivateMethods,
            publicVar: private,
            getRandom: function (){
                return MathRandom
            }
        }
    }

    // 获取instance实例，如果存在就返回引用，如果不存在则创建
    return {
        getInstance: function (){
            if(!instance) {
                instance = init()
            }
            return instance
        }
    }
})()

var myBadSingleton = (function (){
    var instance 
    function init() {
        var MathRandom = Math.random()
        return {
            getRandom: function (){
                return MathRandom
            }
        }
    }

    return {
        getInstance: function (){
            instance = init()
            return instance
        }
    }
})()

var singleA = Singleton.getInstance()
var singleB = Singleton.getInstance()

console.log(singleA.getRandom() === singleB.getRandom()) // true

var badA = myBadSingleton.getInstance()
var badB = myBadSingleton.getInstance()

console.log(badA.getRandom() === badB.getRandom()) // flase


var singleTester = (function (){

    var options = {}

    // 实例化构造类
    function Singleton(options) {
        options = options || {}
        this.name = 'singletonTester'
        this.pointX = options.pointX || 6
        this.pointY = options.pointY || 10
    }

    // 实例化持有者
    var instance

    // 静态变量和方法
    var _static = {
        name: 'SingletonTester',
        getInstance: function (options) {
            if(instance === undefined) {
                instance = new Singleton(options)
            }
            return instance
        }
    }

    return _static
})()

var singletonTest = singleTester.getInstance({
    pointX: 5
})

console.log( singletonTest.pointX )

var single = (function (){
    var instance 
    function init() {
        var private = 'foo'
        var random = Math.random()
        return {
            getPrivate: function (){
                return private
            },
            getRandom: function (){
                return random
            }

        }
    }
    return {
        getInstance: function (){
            if(!instance) {
                instance = init()
            }
            return instance
        }
    }
})()

var singa = single.getInstance()
var singb = single.getInstance()
console.log(singa.getRandom() === singb.getRandom())

var module = (function (){
    var count = 0
    return {
        add: function () {
            count++
        },
        dec: function () {
            count--
        },
        get: function () {
            console.log(count)
        }
    }
})()

var modules = {
    count: 0,
    getcount: function (){
        console.log('20')
    }
}

function Car() {
    this.name = arguments[0]
    this.sex = arguments[1]
}
Car.prototype.toSting = function (){
    console.log('humanbeing')
}

var singletest = (function (){
    var options
    function Singleton(options) {
        this.name = options.name || 'none'
        this.sex = options.sex || 'man'
    }

    var instance

    return {
        name: 'something',
        getInstance: function (options){
            if(!instance) {
                instance = new Singleton(options)
            }
            return instance
        }
    }
})()


// 传统形式
var Singleton = function(name) {
    this.name = name;
    this.instance = '我是实例的instance 并不是构造函数下的变量instance';
};

Singleton.prototype.getName = function() {
    alert(this.name);
};

Singleton.getInstance = function(name) {
    if (!this.instance) {
        console.log('此处的instance 是在构造函数下的一个属性值，而且我只会出现一次，this指针指向Singleton')
        this.instance = new Singleton(name);
    }
    return this.instance;
};

var a = Singleton.getInstance('seven1');
var b = Singleton.getInstance('seven2');
console.log(a,b)

// 利用闭包形成的单例模式
var Singleton = function(name) {
    this.name = name;
};

Singleton.prototype.getName = function() {
    alert(this.name);
};
console.log('会立即执行iife吗?')
//利用闭包的特性创建单例,同时符合惰性单例的特性
Singleton.getInstance = (function(name) {
    console.log('我是iife')
    var instance;
    return function(name){
        if (!instance) {
            console.log('此处的instance 是对匿名函数中的变量instance的引用，因为有了引用，所以匿名函数的作用域不能销毁，同样我只出现一次')
            instance = new Singleton(name);
        }
    }
})();
console.log('会！')
var a = Singleton.getInstance('seven1');
var b = Singleton.getInstance('seven2');

console.log(a===b);



var CreateDiv = (function() {
    var instance;
    var CreateDiv = function(html) {
        console.log('this 指向空对象'+ this + '出现两次')
        if (instance) {
            return instance;
        }
        this.html = html;
        this.init();
        return instance = this;
    };

    CreateDiv.prototype.init = function() {
        var div = document.createElement('div');
        div.innerHTML = this.html;
        document.body.appendChild(div);
    }

    return CreateDiv;

})();

var a = new CreateDiv('seven1');
var b = new CreateDiv('seven2');