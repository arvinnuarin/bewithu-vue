/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Author: John Arvin Nuarin
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'
import config from '../config'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)

// Theme Configurations
import '../themeConfig.js'


// ACL
import acl from './acl/acl'


// Globally Registered Components
import './globalComponents.js'


// Styles: SCSS
import './assets/scss/main.scss'


// Tailwind
import '@/assets/css/main.css';


// Vue Router
import router from './routes/router'


// Vuex Store
import store from './store/store'

// Vuesax Admin Filters
import './filters/filters'


// Clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);


// Tour
import VueTour from 'vue-tour'
Vue.use(VueTour)
require('vue-tour/dist/vue-tour.css')


// VeeValidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Feather font icon
require('./assets/css/iconfont.css')

// Lodash
import _ from 'lodash'
Object.defineProperty(Vue.prototype, '$_', { value: _ })


// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';

// Vue-moment
import VueMoment from 'vue-moment'
Vue.use(VueMoment);

// Vue Currency Filter
import VueCurrencyFilter from 'vue-currency-filter'
Vue.use(VueCurrencyFilter, {
  symbol : '₱',
  thousandsSeparator: ', ',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: 'front',
  symbolSpacing: true
})

// Laravel Echo
require('pusher-js');
import Echo from "laravel-echo";

const echoInstance = new Echo({
  broadcaster: 'pusher',
  key: config.PUSHER_KEY,
  cluster: config.PUSHER_CLUSTER,
  encrypted: true
});

window.Echo = echoInstance;

// toast notification
import notification from './plugins/notification'
window.$notif = notification;


Vue.config.productionTip = false

window.$v = new Vue({
    router,
    store,
    acl,
    render: h => h(App)
}).$mount('#app')