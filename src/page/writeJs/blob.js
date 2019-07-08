const text = `<div>this is a page</div>`
const blob = new Blob([text], {
    type: 'text/html'
})

const textReader = new FileReader();
textReader.readAsText(blob)
console.log(blob)

textReader.onload = function (){
    console.log(textReader.result)
}

const bufferReader = new FileReader()
bufferReader.readAsArrayBuffer(blob)

bufferReader.onload = function (){
    console.log(new Uint8Array(bufferReader.result))
}

const unitArray = new Uint8Array([60, 100, 105, 118, 62, 116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 112, 97, 103, 101, 60, 47, 100, 105, 118, 62])

const unit8Blob = new Blob([unitArray], {
    type: 'text/html'
})

const unit8Reader = new FileReader()
unit8Reader.readAsText(unit8Blob)
unit8Reader.onload = function (){
    console.log(unit8Reader.result)
}


/**
 * 测试生成blob地址链接
 */
const url = URL.createObjectURL(blob)
console.log(url)


const upload = document.querySelector('#upload')
const pre = document.querySelector('#preview')

upload.onchange = function (){
    const file = upload.files[0]
    const src = URL.createObjectURL(file)
    pre.src = src;
}