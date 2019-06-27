let testArray = []

function showArray() {
    for(var i = 0; i<10; i++) { // 此处可修改数据条数。
        var array = []
        var number = Math.ceil(Math.random()*1000*Math.random()) // 此处可修改每一个测试数据项目中的数组数量。
        for (var j = 0; j<number; j++) {
            var deep = Math.ceil(Math.random()*3)
            if(deep == 1) {
                array.push(number*Math.random()*10)
            }
            if (deep == 2) {
                array[j] = [Math.random()*10,[Math.random()*10,Math.random()*10]]
            }
            if (deep == 3) {
                array[j] = [Math.random()*10,[Math.random()*10,Math.random()*10,[Math.random()*10]],Math.random()*10]
            }
        }
        testArray.push(array)
    }
}
showArray()


module.exports = testArray