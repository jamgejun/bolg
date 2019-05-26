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


let p1 = new Promise((resolve, reject) => {
    console.log('5')
    resolve('1')
})
console.log('4')
p1.then((value) => {
    console.log(value);
    p1.then((value) => {
        console.log(value)
    })
    console.log('2')
})
console.log('3')