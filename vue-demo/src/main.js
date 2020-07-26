import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './common.less'
import 'view-design/dist/styles/iview.css';
import {
	Button,
	Table,
	Layout,
	Header,
	Sider,
	Content,
	Footer,
	Menu,
	Icon
} from 'view-design';

Vue.component(Button);
Vue.component(Table);
Vue.component('Icon', Icon);
Vue.component('Layout', Layout);
Vue.component('Header', Header);
Vue.component('Sider', Sider);
Vue.component('Content', Content);
Vue.component('Footer', Footer);
Vue.component('Menu', Menu);
Vue.component('Submenu', Menu.Sub);
Vue.component('MenuItem', Menu.Item);



Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');
