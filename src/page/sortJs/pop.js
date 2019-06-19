// 冒泡排序。
const array = [];
for(var i = 0; i<100;i++) {
    let data = Math.random()*100;
    if (data > 50) {
        data = Math.floor(data);
    } else {
        data = Math.ceil(data)
    }
    array.push(data)
}
console.log(array)
function pop(array) {
    let length = array.length;
    for (let i = 0; i<length; i++) {
        for(let j = 0 ;j<length-i; j++) {
            if(array[j] > array[j+1]) {
                let tmp = array[j+1];
                array[j+1] = array[j];
                array[j] = tmp;
            }
        }
    } 
}
pop(array)
console.log(array)