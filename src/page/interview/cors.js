function get() {
    let url = `http://127.0.0.1:3000/jsp?callback=${callback}`
    let script = document.createElement('script')
    script.setAttribute('type','text/javascript')
    script.src = url
    document.body.appendChild(script)
}

let send = document.querySelector('#sendJsp')

send.addEventListener('click', function (){
    get()
})
function callback(data) {
    console.log(data)
}

/**
 * 
 * @param {跨域地址} url 
 * @param {回调参数} callback 
 */

function proxy(url, callback) {
    let iframe = document.createElement('iframe')
    iframe.src = url

    iframe.onload = function (state) {
        if(state == 1) {
            // 在同域名下处理。
            callback(iframe.contentWindow.name)
            destory()
        } else if(state == 0){
            // 跨域成功后，切换回来
            iframe.contentWindow.location = 'http://www/proxy.html'
        }
    }

    document.body.appendChild(iframe)
    function destory() {
        // 删除iframe标签
    }
}

<script>
    (function cors(url) {
        window.name = 'This is domain2 data!';
    })
</script>
