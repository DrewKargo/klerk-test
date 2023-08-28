<template>
	<h1 class="text-h1-sm lg:text-h1 font-medium leading-tight tracking-[-.01em] lg:text-56 mb-6">Подписки «Клерка»</h1>
	<nav class="text-gray-secondary">
		<ul class="flex gap-6 transition ease-in-out">
			<li @click="chengeTabs" :class="{ 'border-b-2 border-b-blue-link text-blue-link': $route.path === '/subscriptions' }"  class="h-42px cursor-pointer"><router-link :to="{ name:'subscriptions'}">Рассылки</router-link></li>
			<li @click="chengeTabs" :class="{ 'border-b-2 border-b-blue-link text-blue-link': $route.path === '/social' }" class="h-42px cursor-pointer"><router-link :to="{ name:'social'}">Соцсети</router-link></li>
			<li @click="chengeTabs" :class="{ 'border-b-2 border-b-blue-link text-blue-link': $route.path === '/messengers' }" class="h-42px cursor-pointer"><router-link :to="{ name:'messengers'}">Мессенджеры</router-link></li>
		</ul>
	</nav>
	
	<router-view></router-view>
	

</template>

<script>

export default {
  name: 'AppContent',
  data(){
		return{
			tabs: {
				subscriptions : true,
				social : false,
				messengers : false,
			},
		}
	},
	methods:{

	}
}
</script>


