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