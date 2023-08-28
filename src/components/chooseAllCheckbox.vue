<template>
	<label class="relative inline-flex items-center mr-auto cursor-pointer">
		<input @click="toggleCheckboxes" :checked="chooseAll" type="checkbox" value="allSubscriptions" name="allSubscriptions" class="sr-only peer">
			<div class="w-8 h-4 bg-gray-stroke hover:bg-blue-link rounded-full duration-500 delay-100 peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:left-[2px] after:bg-white after:rounded-full after:h-[14px] after:w-[14px] after:transition-all after:duration-500 after:delay-100 peer-checked:bg-blue-ui">
			</div>
			<span class="ml-2 text-sm">{{textSelection}}</span>
	</label>
</template>

<script>
export default {
	name: 'chooseAllCheckbox',
	props:{
		remove:{
			type: Boolean,
			required: true
		}
	},
	emits:{
		toggleCheckboxes:{
			type: Boolean,
			required: true
		}
	},
	data() {
		return {
			chooseAll: false,
			text: {
				select: "Подписаться на все рассылки",
				deselect: "Отменить выбор"
			}
		}
	},
	methods:{
		toggleCheckboxes(){
				if(this.chooseAll == false){
					this.chooseAll = true;
				} else {
					this.chooseAll = false;
				}
				this.$emit('toggleCheckboxes', this.chooseAll);
			}
	},
	computed:{
		textSelection(){
			let textValue = null;
			if(this.chooseAll == false){
				textValue = this.text.select;
			} else{
				textValue = this.text.deselect;
			}
			return textValue;
		}
	},
	watch:{
		remove(){
			this.chooseAll = false;
		}
	}
}
</script>

<style lang="scss" scoped>

</style>