var newObj = JSON.parse(JSON.stringify(oldObj))

function deepCopy(obj) {
    var result = undefined;
    if (typeof obj === 'object') {
        for(var i in obj) {
            if (typeof obj[i] === 'object') {
                deepCopy(obj[i])
            } else {
                result[i] = obj[i]
            }
        }
    } else {
        result = obj
    }
    return result;
}