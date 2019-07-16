function insertSort(arr) {
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
console.log(insertSort([5,1,2,6,3,4]))