<template>
	<section v-if="tabs.subscriptions" class="h-full w-full rounded-2xl bg-gray-bg p-4 lg:p-6 mb-36">
		<div class="flex flex-col items-center p-4 lg:p-6 lg:pb-8 pb-6 m-auto">
			<h2 class="text-2xl font-medium tracking-tighter mb-6">Выберите рассылки, которые подходят именно вам</h2>
			<email-form
				@email="sendSubscriptions"
			/>
			<choose-all-checkbox
				@toggleCheckboxes="chengeSubscribtionsValue"
				:remove="disable"
			/>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
			<SubscriptionCard 
				v-for="card in this.cards" 
				:key="card.id" 
				:card="card"
				@changeValue="changeData"
			/>
			
		</div>
	</section>
</template>

<script>
import ChooseAllCheckbox from '../components/chooseAllCheckbox.vue';
import SubscriptionCard from '../components/SubscriptionCard.vue';
import EmailForm from '../components/EmailForm.vue';
export default {
	name:'TabSubscriptions',
	components:{
	SubscriptionCard,
   ChooseAllCheckbox,
	EmailForm
  },
  data(){
	return{
		tabs: {
			subscriptions : true,
			social : false,
			messengers : false,
		},
		cards:[
			{
				id: 1,
				title: 'Утренний бухгалтер',
				subtitle: 'Перед рассветом',
				description: 'Самые важные новости и события за день. Кратко, по делу, структурировано.',
				contents: [
					{
						id: 1.1,
						text: 'Новости для бухгалтеров, ИП и директора',
					},
					{
						id: 1.2,
						text: 'Подборка статей за день',
					}
				],
				quantity: 59342,
				image: 'https://firebasestorage.googleapis.com/v0/b/hosting-abf80.appspot.com/o/morning.png?alt=media&token=c3051e00-2075-471b-8e39-179e2c81815b',
				isCheked: false,
			},
			{
				id: 2,
				title: 'Ночной бухгалтер',
				subtitle: 'После заката',
				description: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
				contents: [
					{
						id: 1.1,
						text: 'Анализ, оценка и только самое главное',
					},
					{
						id: 1.2,
						text: 'Лучшие комменты юзеров в обзоре',
					}
				],
				quantity: 37480,
				image: 'https://firebasestorage.googleapis.com/v0/b/hosting-abf80.appspot.com/o/evening.png?alt=media&token=0eb15be6-e1d6-40e7-8384-d38fc6038745',
				isCheked: false,
			},
			{
				id: 3,
				title: 'Ножницы скидок',
				subtitle: 'Раз в две недели',
				description: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
				contents: [
					{
						id: 1.1,
						text: 'Акции и скидки от лидеров рынка',
					},
					{
						id: 1.2,
						text: 'Те, кто подписался – экономят много денег ',
					}
				],
				quantity: 92118,
				image: 'https://firebasestorage.googleapis.com/v0/b/hosting-abf80.appspot.com/o/shears.png?alt=media&token=0cb2626a-0600-400f-b975-cd464b791a72',
				isCheked: false,
			},
			{
				id: 4,
				title: 'Чемодан вебинаров',
				subtitle: 'По мере появления анонсов',
				description: 'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.',
				contents: [
					{
						id: 1.1,
						text: 'Никогда не пришлем платные вебинары',
					},
					{
						id: 1.2,
						text: 'Подборка топовых тем для вебинаров',
					}
				],
				quantity: 92118,
				image: 'https://firebasestorage.googleapis.com/v0/b/hosting-abf80.appspot.com/o/free.png?alt=media&token=985a553b-0bdf-47ef-8fd0-9ebecda059aa',
				isCheked: false,
			}
		],
		disable: false
	}
  },
  methods:{
	async sendSubscriptions(email){
		let data ={
			email: email,
			subscriptions: []
		}
		this.cards.forEach((el)=>{
			let item = {
				id: el.id,
				type: el.title,
				value: el.isCheked
			}
			data.subscriptions.push(item);
		})
		
		fetch( 'http://klerk/abra-cadabra.com',
			{
				method: 'POST',
				headers:{
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}
		).then(response =>
			console.log(response.json())
		).catch(e =>
		console.log(e)
		),
		this.chengeSubscribtionsValue(false);
		this.removeChoice();	
	},
	chengeTabs(e){
		
		e.target.classList.add('border-b-2.border-b-blue-link');
		
		
	},
	chengeSubscribtionsValue(type){
		if(type == true){
			this.cards.forEach((el) =>{
				if(el.isCheked == false){
					el.isCheked = true;
				}
			})
		} else {
			this.cards.forEach((el) =>{
				if(el.isCheked == true){
					el.isCheked = false;
				}
			})
		}
	},
	changeData(id, value){
		this.cards.find((card)=>{
			if(card.id == id){
				card.isCheked = value;
			}
		})
	},
	removeChoice(){
		this.disable = true;
	}
  },
}
</script>

<style lang="scss" scoped>

</style>