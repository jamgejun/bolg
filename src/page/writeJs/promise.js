function myPromise(constructor) {
    let self = this;
    self.status = 'pending';
    self.resolved = undefined;
    self.reject = undefined;

    function resolved(value){
        if(self.status === 'pending') {
            self.status = 'resolved'
            self.resolved = value
        }
    }
    function reject(reason) {
        if(self.status === 'pending') {
            self.status = 'reject'
            self.reject = reason
        }
    }
    try {
        constructor(resolved, reject)
    } catch (e) {
        reject(e)
    }
}

myPromise.prototype.then = function (onResolved, onReject) {
    let self = this;
    switch(self.status) {
        case 'resolved':
            onResolved(self.resolved);
            break;
        case 'reject':
            onReject(self.reject)
            break;
        default:
    }
}

let p = new myPromise(function (resolved, reject) {
    resolved('aaa')
})
console.log(p)
p.then(function (e) {
    console.log(e)
})



const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECT = 'reject'
function Promise(constructor) {
    let self = this;
    self.status = PENDING;
    self.value = undefined;
    self.reason = undefined;
    self.onFulfilledCallbacks = [];
    self.onRejectCallbacks = [];

    function resolve(value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject)
        }
        setTimeout(() => {
            if (self.status !== PENDING) {
                self.status = FULFILLED;
                self.value = value;
                self.onFulfilledCallbacks.forEach(fn => fn(self.value))
            }
        })
    }
    function reject(reason) {
        setTimeout(() => {
            if (self.status !== PENDING) {
                self.status = REJECT;
                self.reason = reason
                self.onRejectCallbacks.forEach(fn => fn(self.reason))
            }
        })
    }

    try {
        constructor(resolve, reject)
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    let self = this;
    let newPromise
    // 对传入的参数进行处理
    onResolved = typeof onResolved === 'function' ? onResolved : value => value;
    onReject = typeof onReject === 'function' ? onReject: reason => reason;

    if (that.status === FULFILLED) { // 成功态
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try{
                    let x = onFulfilled(that.value);
                    resolvePromise(newPromise, x, resolve, reject); // 新的promise resolve 上一个onFulfilled的返回值
                } catch(e) {
                    reject(e); // 捕获前面onFulfilled中抛出的异常 then(onFulfilled, onRejected);
                }
            });
        })
    }

    if (that.status === REJECTED) { // 失败态
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onRejected(that.reason);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
        });
    }

    if (that.status === PENDING) { // 等待态
        // 当异步调用resolve/rejected时 将onFulfilled/onRejected收集暂存到集合中
        return newPromise = new Promise((resolve, reject) => {
            that.onFulfilledCallbacks.push((value) => {
                try {
                    let x = onFulfilled(value);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
            that.onRejectedCallbacks.push((reason) => {
                try {
                    let x = onRejected(reason);
                    resolvePromise(newPromise, x, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            });
        });
    }
}

function promise(constructor){
    // 定义promise对象中的状态量

    // 定义对应value值，resolved的时候，reject的时候，不同状态下的数据值不同

    // 定义对象的回调函数数组，分为resolved状态下的回调函数和reject状态下的回调函数
    
    // 定义resolve状况下的promise对象内部状态修改

    // 定义reject状况下的promise对象内部状态修改

    // 执行构造函数的操作。
    try {
        constructor(resolve, reject)
    } catch (e) {
        
    }
}

// 构建then函数，对promise实例对象中的数据值进行处理，然后并返回一个新的promise对象。
