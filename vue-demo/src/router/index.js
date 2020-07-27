import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@views/Login';
import Main from '@components/Layout/Main';
import NotFound404 from '@views/NotFound404';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

export const routes = [
	{
		path: '/',
		component: Main,
		children: [
			{
				path: '/',
				name: 'Dashboard',
				component: Home
			},
			{
				path: '/about',
				name: 'About',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () =>
					import(/* webpackChunkName: "about" */ '../views/About.vue')
			},
			{
				path: '404',
				component: NotFound404,
				hidden: true
			}
		]
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		hidden: true
	}
];

const router = new VueRouter({
	routes
});

export default router;
