/**
 * 科学防抖，使用闭包的方式，将传入的fn回调函数，做一个处理，其中处理的方式通过设置定时器。
 * @param {*} fn 
 * @param {*} wait 
 * @param {*} immediate 
 */
function debounce(fn, wait=500, immediate) {
    let timer;
    return function (){
        if(immediate) {
            fn.apply(this, arguments)
        }
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, wait)
    }
} 

function func() {
    console.log('success')
}

window.addEventListener('click', debounce(func, 50))