// 观察者的角色
// 目标（subject）

// 首先定义一个目标拥有的一系列的观察者依赖
function ObserverList() {
    this.ObserverList = []
}
ObserverList.prototype.Add = function (obj){
    return this.ObserverList.push(obj)
}
ObserverList.prototype.Empty = function (){
    this.ObserverList = []
}
ObserverList.prototype.Count = function (){
    return this.ObserverList.length
}
ObserverList.prototype.Get = function (index){
    if(index > -1 && index < this.ObserverList.length) {
        return this.ObserverList[index]
    }
}
ObserverList.prototype.Insert = function (obj, index) {
    var pointer = -1
    if(index === 0) {
        this.ObserverList.unshift(obj)
        pointer = index
    } else if (index = this.ObserverList.length-1) {
        this.ObserverList.push(obj)
        pointer = index
    }
    return pointer
}
ObserverList.prototype.IndexOf = function (obj, startIndex) {
    var i = startIndex, pointer = -1
    for(i;i<this.ObserverList.length;i++) {
        if(obj === this.ObserverList[i]) {
            pointer = i
        }
    }
    return pointer
}
// 添加或者删除观察者
ObserverList.prototype.RemoveIndexAt = function (index){
    if(index === 0) {
        this.ObserverList.shift()
    } else if (index === this.ObserverList.length-1) {
        this.ObserverList.pop()
    }
}
// 赋值继承操作
function extend(obj, extension) {
    for(var key in obj) {
        extension[key] = obj[key]
    }
}


// 实例化目标，并在观察者列表进行删除，添加，通知的能力
function Subject() {
    this.observers = new ObserverList()
}
Subject.prototype.AddObserver = function (observer) {
    this.observers.Add(observer)
}
Subject.prototype.RemoveObserver = function (observer) {
    this.observers.RemoveIndexAt(this.observers.IndexOf(observer, 0))
}
Subject.prototype.Notify = function (context) {
    var observerCount = this.observers.Count()
    for(var i = 0; i< observerCount; i++) {
        this.observers.Get(i).Update(context)
    }
}


// 定义一个框架来创建新的Obeserver。update功能将在后面介绍
function Observer() {
    this.Update = function (){
        // ...
    }
}


// 引用DOM 元素
var controlCheckbox = document.getElementById('mainCheckbox'),
        addBtn = document.getElementById('addNewObserver'),
        container = document.getElementById('ObserverContainer')

    // 具体目标concrete Subject

    // 利用Subject扩展controlCheckbox

    extend(new Subject(), controlCheckbox)

    // 点击checkbox会触发通知到观察者上
    controlCheckbox.addEventListener('click', function (){
        controlCheckbox.Notify(controlCheckbox.checked)
    })

    // 添加新的观察者
    addBtn.addEventListener('click', function (){
        AddNewObserbver()
    })

    // 具体的观察者
    function AddNewObserbver() {
        var check = document.createElement('input')
            check.type = 'checkbox'

            // 扩展check为一个Observer
            extend(new Observer(), check)

            check.Update = function (value) {
                this.checked = value
            }

            // 为主subject的观察者列表添加新的观察者
            controlCheckbox.AddObserver(check)

            // 将观察者附件到容器上
            container.appendChild(check)
    }


function extend(obj, extension) {
    for (var key in obj) {
        extension[key] = obj[key]
    }
}

// 抽象的目标
function subject() {
    // 对目标所有的观察者赋值
    this.Observers = new observerList()
}
subject.prototype.addObserver = function (obj){
    this.Observers.add(obj)
}
subject.prototype.removeObserver = function (observer){
    this.Observers.removeAt(this.Observers.indexof(observer,0))
}
subject.prototype.notify = function (context){
    // 发布通知
    for (var i = 0; i < this.Observers.length; i++) {
        this.Observers.get(i).update(context)
    }
}

// 观察者实例
function observer() {
    this.update = function (){
        // ...
    }
}