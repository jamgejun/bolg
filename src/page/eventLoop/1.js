setTimeout(() => {
    console.log('1')
}, 0)

console.log('2')

new Promise((resovle, reject) => {
    console.log('3')
    resovle('4')
    console.log('5')
}).then((data) => {
    console.log(data)
})

console.log('6')

// 2 3 5 6 4 1