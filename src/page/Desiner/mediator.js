// 中介者的简单实现
var mediator = (function (){
    var topics = {}

    var subscribe = function (topic, fn){
        if (!topics[topic]) {
            topics[topic] = []
        }

        topics[topic].push({
            context: this, // 关键代码！将context保存为mediator
            callback: fn
        })

        return this
    }

    var publish = function (topic) {
        var args;
        if(!topics[topic]) {
            return false
        }
        args = Array.prototype.slice.call(arguments, 1);
        for(var i = 0; i < topics[topic].length; i++) {
            var subscription = topics[topic][i]
            // 将保存在的订阅者信息，将context中的mediator交出来，将this指向mediator
            subscription.callback.apply(subscription.context, args)
        }
        return this
    }

    return {
        Publish: publish,
        Subscribe: subscribe,
        installTo: function (obj) {
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    }
})()

var GrayJay = mediator.Subscribe('topic', function (){
    this.name = "GrayJay"
    console.log(this) // mediator obj
    console.log('hello, GrayJay')
})

var Miny = mediator.Subscribe('topic', function (){
    console.log(this) // mediator obj
    console.log('hello, Miny')
})


GrayJay.Publish('topic')
 

// 中介者的高级实现
function guidGenerator() {
    var uid = -1
    return (function (){
        return ++uid
    })()
}

// 订阅者构造函数
function Subscriber(fn, options, context) {
    if(!this instanceof Subscriber) {
        return new Subscriber(fn, options, context)
    } else {
        // guidGenerator()是一个函数，用于为订阅者生成GUID，以后很方便的引用他们，
        this.id = guidGenerator()
        this.fn = fn
        this.options = options
        this.context = context
        this.topic = null
    }
}


// 
function Topic( namespace ) {
    if(!this instanceof Topic) {
        return new Topic(namespce)
    } else {
        this.namespace = namespace || ""
        this._callbacks = []
        this._topcis = []
        this.stopped = false
    }
}

Topic.prototype = {
    AddSubscriber: function (fn, options, context) {
        // 通过订阅者构造函数，创建一个订阅者
        var callback = new Subscriber(fn, options, context)

        // 存入订阅者信息
        this._callbacks.push(callback)

        // 新增订阅者共享了mediator实例
        callback.topics = this
        // 返回新增的订阅者
        return callback
    },
    StopPropagation: function () {
        this.stopped = true
    },

    // 通过给定的identifier，可以是唯一标识符，可以是topic，也可使给定函数。返回订阅者
    GetSubscriber: function (identifier) {
        for(var x = 0, y = this._callbacks.length; x < y; x++) {
            if(this._callbacks[x].id == identifier || this._callbacks[x].fn == identifier) {
                return this._callbacks
            }
        }

        // 
        for(var z in this._topcis) {
            if(this._topcis.hasOwnProperty(z)) {
                var sub = this._topcis[z].GetSubscriber(identifier)
                if(sub !== undefined) {
                    return sub
                }
            }
        }
    },
    // 新增topic
    AddTopic: function (topic) {
        this._topcis[topic] = new Topic((this.namespace? this.namespace +":":'')+topic)
    },
    hasTopic: function (topic) {
        return this._topcis.hasOwnProperty(topic)
    },
    ReturnTopic: function (topic) {
        return this._topcis[topic]
    },

    // 移除订阅者列表，通过传入的标识符
    RemoveSubscriber: function (identifier) {
        if(!identifier) {
            this._callbacks = []
            for(var z in this._topcis) {
                if(this._topcis.hasOwnProperty(z)) {
                    this._topcis[z].RemoveSubscriber(identifier)
                }
            }
        }

        for(var y = 0, x = this._callbacks.length; y<x; y++) {
            if(this._callbacks[y].fn == identifier|| this._callbacks[y].id == identifier) {
                this._callbacks[y].topic = null
                this._callbacks.splice(y, 1)
                x--,y--
            }
        }
    },

    // 递归想订阅者发布
    Publish: function (data) {
        for(var y = 0, x = this._callbacks.length; y < x; y++) {
            var callback = this._callbacks[y], l
            callback.fn.apply(callback.context, data)
            l = this._callbacks.length
            if(l < x) {
                y--
                x = 1
            }
        }

        for(var x in this._topcis) {
            if(!this.stopped) {
                if(this._topcis.hasOwnProperty(x)) {
                    this._topcis[x].Publish(data);
                }
            }
        }

        this.stopped = false
    }
}

function Mediator() {
    if (!this instanceof Mediator) {
        // 如果不存在mediator
        return new Mediator()
    } else {
        // 存在赋予新的Topic数组列表，对订阅者进行管理
        this._topcis = new Topic('')
    }
}

// 订阅者的原型方法
Mediator.prototype = {
    GetTopic: function (namespace) {
        var topic = this._topcis,
            namespaceHierarchy = namespce.split(":")
        if(namespace === '') {
            return topic
        }

        if(namespaceHierarchy.length > 0) {
            for(var i = 0, j = namespaceHierarchy.length; i<j;i++) {
                if(!topic.hasTopic(namespaceHierarchy[i])) {
                    topic.AddTopic(namespaceHierarchy)
                }
                topic = topic.ReturnTopic(namespaceHierarchy[i])
            }
        }
        return topic
    },
    Subscribe: function (topicName, fn, options, context) {
        var options = options || {},
            context = context || {},
            topic = this.GetTopic(topicName),
            sub = topic.AddSubscriber(fn, options, context)

        return sub
    },
    GetSubscriber: function (identifier, topic) {
        return this.GetTopic(topic || '').GetSubscriber(identifier)
    },
    remove: function (topicName, identifier) {
        this.GetTopic(topicName).RemoveSubscriber(identifier);
    },
    Publish: function (topicName) {
        var args = Array.prototype.slice.call(arguments, 1)
            topic = this.GetTopic(topicName)
        args.push(topic)
        // 获得相应的主体，在进行发布
        this.GetTopic(topicName).Publish(args)
    }
}

window.Mediator =new Mediator()
Mediator.Topic =new Topic()
Mediator.Subscriber =new Subscriber()
console.log(Mediator)