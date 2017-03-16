<template>
	<div class="info">
		总数：<strong>{{ cartInfos.total_nums}}</strong>
		总价：<strong>{{ cartInfos.total_price}}</strong>
		<div class="btn btn-danger clear" @click="clear_db">清空购物车</div>
	</div>
</template>
<script>
	export default{
		name:'info',
		computed:{
			cartInfos(){
				return this.$store.getters.getInfos;
				console.log(this.$store.getters.getInfos);
			}
		},
		methods:{
			clear_db(){
				this.$store.dispatch('clear_local')
			}
		}
	}
</script>

<style>
	.info{
		font-size:20px;
		text-align: left;
	}
	.clear{
		float: right;
	}
</style>