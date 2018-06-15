import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Goods from './components/goods/goods';
import Ratings from './components/ratings/ratings';
import Seller from './components/seller/seller';

import './common/stylus/index.styl';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource); // 全局注册

const router = new VueRouter({
  routes: [{
    path: '/',
    component: Goods
  }, {
    path: '/Goods',
    component: Goods
  }, {
    path: '/ratings',
    component: Ratings
  }, {
    path: '/seller',
    component: Seller
  }],
  linkActiveClass: 'active'
});
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
