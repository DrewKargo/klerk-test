<template>
	<div class="sm:mx-4 lg:max-w-5xl flex flex-col items-center lg:mx-auto mt-12">
		<a class="mb-6" href="#"><img src="./assets/images/logo.svg" alt=""></a>
		<nav class="text-13 text-gray-disabled mb-2 lg:mb-6 ">
			<ul class="flex gap-2">
				<li class="h-4 border-b transition ease-in-out border-b-blue-link-shadow hover:border-b-blue-link">
					<a class="hover:text-blue-link" href="#">Главная</a>
				</li>
				<span class="">→</span>
				<li class="h-4 border-b transition ease-in-out border-b-blue-link-shadow hover:border-b-blue-link">
					<a class="hover:text-blue-link" href="#">Рассылки</a>
				</li>
				<span class="">→</span>
				<li class="h-4 border-b transition ease-in-out border-b-blue-link-shadow hover:border-b-blue-link">
					<a class="hover:text-blue-link" href="#">Мессенджеры</a>
				</li>
			</ul>
		</nav>
		<AppContent/>
	</div>
</template>

<script>
import AppContent from './components/AppContent.vue'

export default {
  name: 'App',
  components: {
	AppContent
  }
}
</script>

<style lang="scss">
@import url(./assets/css/style.scss);
</style>
