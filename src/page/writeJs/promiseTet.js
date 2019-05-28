// function fn(resolve) {
//     setTimeout(() => {
//         resolve(300)
//     }, 3000)
// }
// let P1 = new Promise(fn)
// let P2 = Promise.resolve(P1)
// let P3 = Promise.reject('100')
// console.log(P1, P2, P3, P1==P2)

// setTimeout(() => {
//     console.log(P1, P2, P1==P2)
// },4000)

// let data = Promise.all([P1,P2])
// let data2 = Promise.race([P1,P2, P3])
// console.log(data, data2)


// let p1 = new Promise((resolve, reject) => {
//     console.log('5')
//     resolve('1')
// })
// console.log('4')
// p1.then((value) => {
//     console.log(value);
//     p1.then((value) => {
//         console.log(value)
//     })
//     console.log('2')
// })
// console.log('3')
// let p0 = new Promise((resolve, reject) => {})
// let p2 = new Promise((resolve, reject) => {resolve('aa')})
// let p3 = p2.then((value) => {
//     console.log(value)
//     return {
//         then: function (x, y){
//             x('666')
//         }
//     }
// })
// let p4 = p3.then()
// console.log(p2,p3,p4)


let Pro1 = new Promise((resolve, reject) => {
    console.log('我就是不改变状态')
}).then((value) => {
    debugger;
    return '不改变状态警告第一次! ' + '结果值'
}).then((value) => {
    return '不改变状态警告第二次! ' + '结果值' + value
}).then((value) => {
    return '不改变状态警告第三次! ' + '结果值' + value
}).then((value) => {
    return new Promise((resolve, reject) => {
        resolve('状态已改变')
    })
}).then((value) => {
    console.log('警告结束，结果值'+value)
})

console.log(Pro1)