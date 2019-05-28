function throttle(fn, wait) {
    let prev = new Date()
    return function (){
        const now = new Date()
        if(wait < now-prev) {
            fn.apply(this, arguments)
            prev = new Date()
        }
    }
}

function func() {
    console.log('throttle')
}
window.addEventListener('click', throttle(func, 500))