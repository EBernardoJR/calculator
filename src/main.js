import Vue from 'vue'
import App from './App'

new Vue({
    render(createElement){
        return createElement(App)
    }
}).$mount("#app")