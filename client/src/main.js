import Vue from 'vue';
import App from './App.vue';
import Bootstrap from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Bootstrap)

new Vue({
    render: h => h(App),
}).$mount('#app')