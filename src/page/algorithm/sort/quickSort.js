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
