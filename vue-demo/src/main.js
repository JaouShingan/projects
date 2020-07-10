import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'view-design/dist/styles/iview.css';
import { Button, Table, Layout, Header, Sider, Content, Footer } from 'view-design';

Vue.component(Button)
Vue.component(Table)
Vue.component(Layout)
Vue.component(Header)
Vue.component(Sider)
Vue.component(Content)
Vue.component(Footer)

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
