// let a = ["abc"];
// console.log(a.valueOf(), a.toString(), Number(a)) // "" 0

// let b = ["abc"]
// b.valueOf = () => {
//     return 2
// }
// b.toString = () => {
//     return 4
// }

// console.log(b.valueOf(), b.toString(), Number(b)) // 2 2 

var obj1 = {}
console.log(obj1.valueOf(), obj1.toString(), Number(obj1))

var obj2 = {}
obj2.valueOf = () => {
    return 2
}
obj2.toString = () => {
    return 4
}
console.log(obj2.valueOf(), obj2.toString(), Number(obj2))