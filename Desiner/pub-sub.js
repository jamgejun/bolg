// 发布订阅者模式
var pubsub={} // 主题事件对象，连接发布者和订阅者

function start(q){
    var topics = {}, // 主题事件的数组对象集合
        subUid = -1 // 保存主题事件的id

    // 主题事件发布或者广播事件，其中包含topic的名称和参数。
    q.publish = function (topic, args) {
        // 如果该需要发布的事件不存在，则返回(在保存着所有主题事件的集合查找)
        if (!topics[topic]) {
            return false
        }

        // 该主题下的事件集合
        var subscribers = topics[topic]
            len = subscribers ? subscribers.length : 0

        while(len--) {
            // 发布了事件信息，就告知执行。
            subscribers[len].func(topic, args)
        }
        // 调用后返回this
        return this
    }

    // 此处就是订阅一个事件，topic/event触发时执行事件
    q.subscribe = function (topic, func) {
        //同样对订阅的事件进行调查， 是否存在，如果不存在，则创建一个新的，如果存在，就找到
        if(!topics[topic]) {
            topics[topic] = []
        }

        // 为每一个事件保存一个token（唯一标识符）
        var token = (++subUid).toString();

        topics[topic].push({
            token: token,
            func: func
        });
        return token
    }

    // 移除某个特定的事件，传入他的token值
    q.unsubscribe = function (token) {
        for (var m in topics) {
            if (topics[m]) {
                for (var i = 0; i < topics[m].length; i++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1)
                        return token
                    }
                }
            }
        }
        return this
    }
}// 将主题事件对象传入
start(pubsub)
// 实现上述的pubsub模式

var messageLogger = function (topics, data) {
    console.log('logging：' + topics + ':' + data)
}

var subscription = pubsub.subscribe('index/newMessage', messageLogger)
var subscription2 = pubsub.subscribe('index/newMessage', function (topic, data){
    if (data instanceof Array) {
        console.log(data.reverse())
    } else if(data instanceof Object){
        console.log(Object.keys(data))
    } else {
        console.log('nothing to do')
    }
})

pubsub.publish('index/newMessage', 'hello world!')

pubsub.publish('index/newMessage', ['test', 'a', 'b', 'c'])

pubsub.unsubscribe(subscription2)
pubsub.publish('index/newMessage', {
    sender: 'hello@google.com',
    body: 'hey again'
});

pubsub.publish('index/newMessage', 'hello! are you still there?');

var pubsub = {} // 创建一个中间对象，称为桥梁对象

// 赋予桥梁对象通知发布者和订阅者的方法
function setMethods(q) {
    var topics = {}, // 保存着发布者的所有主题事件的集合
        subUid = -1 // 用于保存每个主题的唯一标识符

    // 发布一个主题事件
    q.publish = function (topic, args) {
        if (!topics[topic]) { // 如果存在该主题，则返回false
            return false
        }

        var subscribers = topics[topic]
            len = subscribers ? subscribers.length : 0
        
        while(len--) {
            subscribers[len].func(topic, args)
        }
        return this
    }

    // 注册一个事件
    q.subscribe = function (topic, func) {
        // 如果不存在，则声明一个主题事件
        if(!topics[topic]) {
            topics[topic] = []
        }

        var token = (++subUid).toString()
        topics[topic].push({
            token: token,
            func: func
        })

        return token
    }

    q.unsubscribe = function (token) {
        for(var m in topics) {
            if(topics[m]) {
                for(var i = 0; i<topics.length; i++) {
                    if(topics[m][i].token === token) {
                        topics[m].splice(i, 1)
                        return token
                    }
                }
            }
        }
        return this
    }
}

setMethods(pubsub)

var ImPublish = {
    publish: pubsub.publish
}

var ImSubscribe = {
    subscribe: pubsub.subscribe
}

var GrayJay = ImSubscribe.subscribe('news', function (topic, data) {
    console.log('GrayJay订阅了 ' + topic + ' 将不对内容进行处理')
})

var Miny = ImSubscribe.subscribe('news', function (topic, data) {
    console.log('Miny订阅了 ' + topic + ' 接受发布者的内容：' + data)
})
ImPublish.publish('news', 'Today is a good day')