<template>
	<div class="flex flex-col justify-between rounded-2xl bg-white py-6 px-4 lg:px-6 transition-all ease-in-out duration-300 hover:shadow-card ">
				<div class="grid mobile+:grid-cols-cards justify-between relative">
					<div class="w-full lg:w-324px mr-6 flex-initial">
						<p class="text-13 leading-4 text-gray-secondary">{{ this.card.subtitle }}</p>
						<h3 class="text-xl font-medium mb-2">{{ card.title }}</h3>
						<p class="mb-4 text-sm leading-5 text-gray-secondary">{{ card.description }}</p>
						<ul class="flex flex-col gap-2 mb-4">
							<li v-for="item in card.contents" :key="item.id" class="flex gap-2 text-sm leading-5"><img src="../assets/images/icons/check.svg" alt="">
								<span>{{ item.text}}</span>
							</li>
						</ul>
					</div>
					<div class="w-10 absolute right-0 ml-auto mb-auto mobile+:relative mobile+:w-full">
						<img class=" object-contain" :src="card.image" alt="">
					</div>
				</div>
				<label  class="relative inline-flex items-center cursor-pointer">
					<input @change="changeValue" :checked="card.isCheked" type="checkbox" value="Подписаться" class="sr-only peer">
						<div class="w-12 h-6 bg-gray-stroke hover:bg-blue-link rounded-full duration-500 delay-100 peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[1px] after:left-[2px] after:bg-white after:rounded-full after:h-[22px] after:w-[22px] after:transition-all after:duration-500 after:delay-100 peer-checked:bg-blue-ui">
						</div>
					<span class="ml-2 leading-5 text-sm">Уже получает {{numberFormatting}} человек</span>
				</label>
			</div>
</template>

<script>
	export default {
		name: 'SubscriptionCard',
		props:{
			card:{
				type: Object,
				required: true
			},

		},
		emits:{
			changeValue:{
				type: Object,
				required: true
			}
		},
		data(){
			return{
				subscriptionEvent:{
					id: this.card.id,
					type: this.card.title,
					isActive: this.card.isCheked,
				}
			}
		},
		methods:{
			changeValue(){
				console.log('props:', this.card.isCheked, 'data:', this.subscriptionEvent.isActive);
				if(this.card.isCheked == false){
					this.subscriptionEvent.isActive = true;
				} else {
					this.subscriptionEvent.isActive = false;
				}
				this.$emit('changeValue', this.card.id, this.subscriptionEvent.isActive );
			}
		},
		computed:{
			numberFormatting(){
				return this.card.quantity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
			}
		}
		
	}
</script>

<style lang="scss" scoped>

</style>