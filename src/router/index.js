import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/components/pages/AppHome.vue'),
	},
	{
		path: '/shop',
		name: 'shop',
		component: () => import('@/views/AppShop.vue'),
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('@/views/AppBlog.vue'),
	},
	{
		path: '/our-story',
		name: 'our-story',
		component: () => import('@/views/AppOurStory.vue'),
	},
	{
		path: '/product/:id',
		name: 'product',
		component: () => import('@/components/pages/AppProduct.vue'),
		props: true,
	},
	{
		path: '/contactUs',
		name: 'contactUs',
		component: () => import('@/components/pages/layouts/contactUs.vue'),
	},
	{
		path: '/my-cart',
		name: 'my-cart',
		component: () => import('@/components/pages/AppCart.vue'),
	},
	{
		path: '/my-favorites',
		name: 'my-favorites',
		component: () => import('@/components/pages/AppFavorites.vue'),
	},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
