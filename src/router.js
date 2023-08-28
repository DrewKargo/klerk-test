import {createRouter, createWebHistory} from 'vue-router'
import TabSubscriptions from './views/TabSubscriptions'
import TabSocial from './views/TabSocial'
import TabMessengers from './views/TabMessengers'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/subscriptions',
			name: 'subscriptions',
			component: TabSubscriptions},
		{
			path: '/social', 
			name: 'social',
			component: TabSocial,
		},
		{
			path: '/messengers',
			name: 'messengers',
			component: TabMessengers,
		}
	]
})

export default router;