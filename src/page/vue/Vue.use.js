class Vue {
    constructor(options) {
        this._installedPlugs = []
        this.name = options.name
    }
}
Vue._installedPlugs = [];

Vue.use = function (plugin) {
    let installArray = this._installedPlugs || (this._installedPlugs = []);
    if (installArray.indexOf(plugin) > -1) {
        return this;
    }
    let args = Array.prototype.slice.call(arguments, 1)
    args.unshift(this) //将this 传入
    if(typeof plugin.install === 'function') {
        plugin.install.apply(plugin, args)
    }
    if(typeof plugin === 'function') {
        plugin.apply(null, args)
    }
    installArray.push(plugin) // 将新插件项传入。
    return this;
}

let myVue = new Vue({
    name: 'test'
})
console.log(myVue)

function ShowName(args) {
    args.prototype['test'] = function (){
        console.log(this.name)
    }
}

Vue.use(ShowName)

console.log(myVue)
myVue.test()