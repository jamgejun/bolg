function cut(fn, wait, flag) {
    let timer;
    let lastcall = new Date();
    return function (){

        if(flag) {
            if(timer) clearTimeout(timer)
            timer = setTimeout(() => {
                fn.apply(this, arguments)
            }, wait)
        } else {
            let now = new Date()
            if (now-lastcall > wait) {
                fn.apply(this, arguments)
            }
        }
    }
}