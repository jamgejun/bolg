import Vue from 'vue'
import App from './app.vue'

const root = document.createElement('div')
document.body.appendChild(root)

import './assets/styles/test.css'
import './assets/img/cooperation-1.png'

new Vue({
    render: (h)=> h(App)
}).$mount(root)