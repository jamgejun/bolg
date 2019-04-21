document.write('app')
console.log(`this is processing complier`)

setTimeout(() => {
    console.log(`setTimeout Is next eventLoop`)
    new Promise((resolve, reject) => {
        console.log('second Tick task')
        resolve(`second tick task two`)
    }).then((data) => {
        console.log(data)
    })
},0)

const myPromise = new Promise((resolve, reject) => {
    console.log(`Promise start`)
    resolve(`Promise_then`)
})

myPromise.then((data) => {
    console.log(data)
}).then(() => {
    console.log(`after first setTimeout`)
})

const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("last Tick")
    }, 0)
})

async function nextTick() {
    const data = await secondPromise
    console.log(data)
}
nextTick()


