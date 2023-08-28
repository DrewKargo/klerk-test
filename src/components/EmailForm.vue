<template>
	<form class="h-14 w-full relative rounded-r-full overflow-hidden mb-4" action="">
		<input :class="{'border-2 border-rose-300' : !isValid }" v-model="inputValue" required class="h-full w-full rounded-lg p-4 pr-16" type="email" name="email" id="subscription-email-input" placeholder="Электронная почта">
		<button :class="{'cursor-not-allowed' : !isValid}" type="button" @click.prevent="subscribe" class="h-full absolute right-0 bg-blue-ui rounded-full p-4 lg:px-8 text-white hover:brightness-125 focus:brightness-125 transition ease-in-out"><span class="hidden lg:block">Подписаться</span><img class=" lg:hidden block" src="../assets/images/icons/chevron-right.svg" alt="Кнопка подписаться"></button>
	</form>
</template>

<script>
export default {
	name: 'EmailForm',
	emits:{
		email:{
			type: String,
			required: true,
		}
	},
	data(){
		return {
			inputValue: '',
			isValid: true,
		}
	},
	methods:{
		validate(email){
			// eslint-disable-next-line
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
				this.isValid = true;
				return
			} else{
				this.isValid = false;
			}
		},
		subscribe(){
			if(this.isValid == true){
				this.$emit('email', this.inputValue);
				this.inputValue = '';
			}
		}
	},
	watch:{
		inputValue(value){
			this.validate(value);
		}
	}
}
</script>

<style lang="scss" scoped>

</style>