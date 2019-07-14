var arrayStack = []

var root = {
    value: 'a',
    left: b,
    right: c
}
var b = {
    value: 'b',
    left: d,
    right: e
}

var c = {
    value: 'c',
    left: f,
}

var d = {
    value: 'd',
    left: '',
    right: ''
}

var e = {
    value: 'e',
    left: '',
    right: ''
}

var f = {
    value: 'f',
    left: '',
    right: ''
}

function guandu(root){
    if(root) {
        console.log(root.value)
        if(root.left) {
            guandu(root.left)
        }
        guandu(root.right)
    }
}
guandu(root)