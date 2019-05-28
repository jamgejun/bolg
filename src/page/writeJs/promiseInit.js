const PENDING = 'pending'
const FUIFILLED = 'fuilfilled'
const REJECTED = 'rejected'

function Promise(extutor) {
    // 使用闭包防止实例的指向出错。
    let that = this;
    that.status = PENDING;
    that.value = undefined;
    that.onFuilfillCallbacks = [];
    that.onRejectCallbacks = [];

    function resolve(value) {
        if (value instanceof Promise) {
            return value.then(resolve, reject)
        }
        setTimeout(() => { // 使用setTimeout的目的是为了实现promise的异步调用机制，将在下一轮循环的时候，改变状态。
            if (that.status === PENDING) {
                that.status = FUIFILLED;
                that.value = value;
                that.onFuilfillCallbacks.map(fn => fn(that.value))
            }
        })
    }

    function reject(reason) {
        setTimeout(() => {
            if (that.status === PENDING) {
                that.status = REJECTED;
                that.value = reason;
                that.onRejectCallbacks.map(fn => fn(that.value)) // 将一直保存在PENDING中的
            }
        })
    }

    try {
        // 根据传入的构造函数执行状态更改。
        extutor(resolve, reject)
    } catch (e) {
        // 如果传入的构造函数执行出错，则将返回的错误保存到value中，逻辑不变。
        reject(e)
    }
}

Promise.prototype.then = function (onFuifill, onReject) {
    let that = this;
    onFuifill = typeof onFuifill == 'function'? onFuifill : value => value;
    onReject = typeof onReject == 'function' ? onReject : reason => reason;

    if (that.status === FUIFILLED) {
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let answer = onFuifill(that.value);
                    resolvePromise(newPromise, answer, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            })
        })
    }

    if (that.status === REJECTED) {
        return newPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let answer = onReject(that.value);
                    resolvePromise(newPromise, answer, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            })
        })
    }
} 

function resolvePromise(promise2, answer, resolve, reject) {
    if(answer === promise2) {
        return new Error('产生循环引用！') // 如果返回值等于新的promise实例，那么就会导致死循环的产生。
    }
    // 根据answer的三种情况，1.promise 2.存在then函数的对象 3. 普通值
    if (answer instanceof Promise) { // 如果是一个promise，那么执行该promise的结果值。
        if(answer.status === PENDING) {
            answer.then((y) => {
                resolvePromise(promise2, y, resolve, reject)
            }, reason => {
                reject(reason)
            })
        } else {
            answer.then(resolve, reject) // 因为resolve和reject中保存了结果值。回想一下内置resolve和reject的操作，同样是接受一个value值，将参数的值赋给新的promise实例
        }
    }

    if (answer != null && (typeof answer === 'object' || typeof answer === 'function') ) {
        try {
            let then = answer.then; // 查看返回值是否存在then函数
            if (typeof then === 'function') {
                then.call(x, (value) => {
                    resolvePromise(promise2, value, resolve, reject) // 同样将执行结果交给resolvePromise函数处理
                }, (reason) => {
                    reject(reason)
                })
            } else {
                resolve(answer) // 将answer值设置为新的promise状态值。
            }
        } catch (e) {
            reject(e)
        }
    } else {
        resolve(answer) // 普通函数
    }
}