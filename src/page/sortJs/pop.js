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
    let length = array.length
    for(let i = 0; i<length; i++) {
        for(let j = 0; j<length-i-1; j++) {
            if(array[j] > array[j+1]) {
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
        }
    }
}

function quickSort(array) {
    if(array.length<=1) { // 如果为空或者1 则返回原数组
        return array
    }
    let pivotIndex = Math.floor(array.length/2) // 找到中间位置
    let pivot = array.splice(pivotIndex, 1)[0] // 寻找基准
    let left = [] // 比基准小的部分
    let right = [] // 比基准大的部分
    for(let i = 0;i<array.length; i++) {
        if(array[i]<pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return quickSort(left).concat([pivot], quickSort(right))
}

function insertSort(array) {
    for(let i = 0; i<array.length; i++) {
        if(array[i]<array[i+1]) {
            let guard = array[i]
            let j = i - 1
            array[i] = array[j]
            while(j>=0 && guard < array[j]){
                array[j+1] = array[j]
                j--
            }
            array[j+1] = guard
        }
    }
}

function insertSorts(arr) {
    for(var i = 1;i<arr.length; i++) {
        var element = arr[i]
        for(var j=i-1;j>=0;j--) {
            let tmp = arr[j] // 保存被移动到端点的值
            let order = tmp - element;
            if(order > 0) {
                arr[j + 1] = tmp;
            }  else {
                break
            }
        }
        arr[j + 1] = element;
    }
    return arr
}
insertSorts([1, 2, 4, 3, 2, 1])

function sort2(arr) {
    for(var i = 1; i<arr.length; i++) {
        var element = arr[i]
        for(var j = i-1; j>=0; j--) {
            var tmp = arr[j]
            if((tmp-element) > 0) {
                arr[j+1] = tmp
            } else {
                break
            }
        }
        arr[j+1] = element
    }
}