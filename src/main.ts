import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/tailwind.css';
// import Clamp from 'clamp-js';

Vue.config.productionTip = false;
// Vue.prototype.$clamp = Clamp;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
