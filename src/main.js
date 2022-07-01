import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/themes/core.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/locales/index'


Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
	i18n,
	router,
	store,
	render: h => h(App),
}).$mount('#app');
