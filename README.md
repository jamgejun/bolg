# bolg
求职路上的小记。从暑假开始，每一天坚持完成学习任务。

## 6.26

- 牛客网刷题50道（html/css知识点）
    - 置换元素
      指的是css渲染的时候，该元素有浏览器固定渲染宽度和高度。（通俗一点，就是可以修改，非本身内容限定）
      例如如下标签：
      - img
      - textarea
      - input
      - button
    - form表单中的input设置readonly和disabled的区别
      指的是input设置不同的值，表现形式有所不同。
      - disabled表示不可用，js能修改，但是表单提交不会附带此元素内容
      - readonly表示只可读，js能修改，但是表单提交会附带此元素内容

## 6.27

- 掘金文章一篇
  关于对es10所增加的一些方法，手动实现了flat数组拉平。
  提供了两种方法进行对比，一种是通过**for循环+递归**，另一种是通过自带**reduce+递归**函数。
  并做了相应的测试。

  ··相关的代码见src/page/writeJs/··
   - flat.js
   - testArray.js 用于测试的数组

## 7.2

- 有事耽搁，停更了几天。

- 关于使用插件，跟着Vue.use的简介源码敲了一次。
   **感想**：
   - 其实插件的使用就是扩展对象，从面向对象角度编程来说，扩展大于继承。
   - 但是和mixin不一样，mixin会混入，就是所有的实例都能访问到。

- 接下来准备完成项目的事情，再次停更

## 7.3 

- MDN关于内存管理的文章
引用计数和标记清除

**引用计数：**
记着某个变量的引用次数，引用次数为零的变量将会被回收

**标记清除：**
比引用计数智能一点，其原理是通过根节点寻找，将未找到的变量清除

**内存泄漏：**
- 全局变量
- DOM引用
- 未命名的定时器
- 闭包问题

## 7.8

- 掘金文档两篇《为什么视频网站的视频链接地址是blob？》 《这儿有20道大厂面试题等你查收》

   收获：
     - 其中第一篇文章主要了解到了Blob对象（二进制对象）和FileReader对象的使用。解决了视频分块观看（例如B站的视频播放方式，使用了fms4：fragment Mp4）
     - 其中第二篇文章巩固复习，涉及到的知识包括了原型链闭包，高级函数编程等

- 将会记录一篇博客，关于blob对象，FileReader对象的一些相关知识。

## 7.13 

- 掘金文档三篇

- leetcode编程题，螺旋矩阵

- 遇到一个有意思的三目运算
```
    !(node.left) ? node.left = newNode : this.insertNode(node.left, newNode)
    node.left = !(node.left) == null ? newNode : this.insertNode(node.left, newNode)
```
区别在于，this.insertNode函数的返回值问题，虽然是使用的递归，但是，this.insertNode没有返回值。node.left只能是undefined

## 7.14

- 算法的分类
  穷举法（暴力破解） 贪心算法（局部最优解） 动态规划（通过将局部最优解比较或者组合，实现最优解） 分治算法（二分查找，快速排序）

- leetcode编程题 回文数II（详情见issue）
  有穷举法，分治算法的思想

- 掘金文档 关于使用css实现天气的小log
  关键点：**after和before伪元素**的使用+**cli-path**+多重**box-shadow**+**@keyframe**属性。
  通过定位的伪装，加上css3动画。

## 7.16 

昨天的总结忘记说了。

- 一：手动实现new
  **思路：**
    1. 使用`new`关键字会发生什么？
     - 如果函数有**返回值**，则返回该函数的返回值。
     - 如果没有返回值，返回对象。则该对象的原型`__proto__`是指向该函数的`prototype`。
     - 函数中执行`this`的操作，会绑定到返回对象上。
  **实现：**
    2. 根据`new`关键字特点一一解决
     - 建立对象：可以使用`Object.create(null)`创建空对象
     - 执行目标函数：使用`call apply`修改函数执行的`this`
     - 查看返回值，如果不为空，则返回该函数执行结果，如果为空，则返回创建的对象
     **注意**：
      在使用call和apply修改this指向的时候，注意传递的参数**apply是数组，call是一个个传递（建议使用扩展运算符）**

- 二：手动实现call，apply
  **思路：**
    1. 使用`call`和`apply`会发生什么
     - 会将函数的第一个参数，作为前面调用函数的`this`传递进去，接受参数不同。
     - `call`接收多组参数
     - `apply`接受参数数组
     - 如果第一个参数为`null`，则默认指向`window`
     - 我们都是通过函数调用`call`，因为call是挂载到`Function.prototype`对象上的，每一个实例函数都能调用
  **实现：**
    2. 请看如下代码段
    ```
    var obj = {
        name:'GrayJay',
        fn: function (){
            console.log(this.name)
        }
    }
    obj.fn() // 'GrayJay'
    ```
    **思考：** >>> 
     - 1. 为什么我写在obj里面的fn，里面的`this`，执行的时候，会调用obj上的name呢？
     - 2. 如果我将fn修改为`call`呢，那意思是不是就是，我在调用`call`呢？
     - 3. 加入把obj看作是一个函数呢，该`this`是不是就是这个函数表达式？
     - 4. 如果我把函数作为给`call`传递进来的参数对象的一个内部函数，再去调用，那是不是this就自动绑定到`this`上？

    **call内部需要做的事：**
    - 取到当前`this`，得到该函数表达式。
    - 查看是否传递为`null`，如果是，则将该函数表达式赋予给`window`对象，如果不是，则赋予给**第一个参数对象**
    - 通过执行刚赋予的函数对象上的方法，取到相应返回值。
      - 我们要处理得到第一个参数之后的附带参数**原本函数接受的参数** 我们通过`Array.prototype.slice.call(arguments, 1)`获得数组，然后通过扩展运算符传入对象的函数
      - 执行完毕之后，使用`delete`关键字删掉赋予给目标对象的函数。
      - 返回执行结果
    
    **apply内部需要做的事：**
    - 内部和`call`执行都差不多，就是处理传递参数的地方，因为传递的是数组，所以直接`...arguments[1]`传递到目标函数即可。

- 三：手动实现bind
   **思路：**
    1. 使用bind会发生什么？？
     - 返回一个待执行函数，该函数的`this`指向该对象。
     - 可以暂时参数，比如`var fn = hello.bind(window, 'hello')` ==> `fn('world!') ==> hello world!`
   **实现：**
     - 思路和`call`还有`apply`差不多
     - 但是`this`的指向转变和`call`和`bind`相同
     - 我们需要声明bind的返回函数，该函数用于执行结果，并且能够剩余参数
     - 修改返回函数的`prototype`指向。
    
- 四：手动实现科里化
  **思路：**
    1. 科里化是用来干吗的？
     - 解决参数传递问题，比如`fn(1,2,3,4) ==> var fn2 = curry(fn); fn2(1)(2)(3)(4)`
     - 保证了在参数达到指定接收参数长度的时候，执行函数，否则不会执行
  **实现：**
     - 参数传递暂存
     - 返回值：函数。
     - 执行过程：会去比较目标函数的参数长度和已传入参数。

- 五：手动实现一个flat
  **思路：**
    1. 数组拉平是干嘛的？
      - 将多维数组转成一维数组
      - 并且数组中的复杂对象保持不变
  **实现：**
      - 简单版：通过转成字符串，再将字符串转成数组，缺点：只能处理二维的情况和复杂对象会改变
      - 递归版：通过判断传入的对象，如果为简单值，则放入数组，如果是复杂对象，则递归
      - forReduce递归版：同样是处理递归的情况。

- 六：手动实现一个promise
  **思路：**
    1. promise是什么？
      - 用于处理异步的一个对象

- 七：手动实现一个extend
  **思路：**
    1. extend是什么?
      - 继承
       我们需要es5的六种继承方式来处理。
- 八：手动实现一个debounce
  **思路：**
    1. debounce是什么？
      - 防抖，
      防抖表示在某一段时间，只会有一个函数进入执行栈，如果重复多次，会将上一次的函数删掉
      新建立防抖函数
- 九：手动实现thorttle
