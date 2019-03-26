// Module模块

// 简单的模块
var myModule = {
    myProperty: 'someValue',
    
    myConfig: {
        isEnumerable: true,
        language: 'en'
    },

    normal: function (){
        console.log('this is normal function')
    },

    get: function () {
        console.log('是否可写：'+this.myConfig.isEnumerable + '语言类型：' +this.myConfig.language)
    },

    change: function (newConfig){
        if(typeof newConfig === 'object') {
            this.myConfig = newConfig
            console.log(this.myConfig.language)
        } else {
            console.log('Errow')
        }
    }
}

myModule.normal()

myModule.get()

myModule.change({
    isEnumerable: false,
    language:'ch'
})

// 构建一个具有私有变量属性的模块

var selfModule = (function (){
    var private = 'GrayJay'
    var Money = 0
    return {
        add: function (){
            Money++
            console.log(Money)
        },
        dec: function (){
            Money--
            console.log(Money)
        }
    }
})()

// 建立了对匿名函数的引用，所以永远不会销毁这个内存区域块
selfModule.add()
selfModule.dec()
console.log(selfModule)

// 购物车的模块
var basketModule = (function (){
    var basket = []
    function Private1() {
        console.log('this is a privateMethods')
    }
    function Private12() {
        console.log('this also a privateModules')
    }

    return {
        public:0,
        addItem:function (ItemConfig){
            for (const key in ItemConfig) {
                basket.push(ItemConfig[key])
            }
        },
        getCount: function () {
            return basket.length
        },
        getPrivate: Private1,
        getTotal: function (){
            var count = this.getCount(),
                total = 0
            while(count--) {
                total += basket[count].price
            }
            return total
        }
    }
})()

basketModule.addItem([
    {
        name: 'bread',
        price: 3.5
    },
    {
        name: 'butter',
        price: 4
    }
])
basketModule.getPrivate()

console.log(basketModule.getCount())

console.log(basketModule.getTotal())

// 引入概念
var Module = (function ($,_){
    $('...').html = "test"
})(Jquery,_)

// 引出概念
var Module = (function (){
    var moduel = {}
    // ...
    moduel.name = '...'
    return module
})()


// 揭示模式
var myRevealingModule = function (){
    var privateVar = 'Gray Jay',
        public = 'hello word'
    function privateFunction() {
        console.log('name：'+privateVar)
    }
    function publicSetName(strName) {
        privateVar = strName
    }  
    function publicGetName() {
        privateFunction()
    }

    return {
        setName: publicSetName,
        greeting: public,
        getName: publicGetName
    }
}()

myRevealingModule.setName('Miny')
console.log(myRevealingModule.greeting)
myRevealingModule.getName()

