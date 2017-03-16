<template >
	<div class="cartList"> 
		<h4>购物车信息</h4>
		<table class="table table-hover table-shop">
			<thead>
				<tr>
					<th>id</th>
					<th>名称</th>
					<th>价格</th>
					<th>数量</th>
					<th>总价</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(cart,index) in cartList">
					<td>{{ cart.id }}</td>
					<td>{{ cart.name }}</td>
					<td>{{ cart.price }}</td>
					<td>{{ cart.num}}</td>
					<td>{{ cart.price * cart.num}}</td>
					<td>
						<div class="btn btn-info" @click="action_cart(index,'add_db')">+</div>
						<div class="btn btn-warning" @click="action_cart(index,'reduce_db')">-</div>
						<div class="btn btn-danger" @click="action_cart(index,'delete_db')" title="删除">x</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default{
		name: 'cartlist',
		computed: {
			cartList(){
				return this.$store.getters.getCartList
			}
		},
		methods:{
			action_cart(index,type){
				//先更新当前索引
				this.$store.dispatch('update_cur_shop_status',{
					index
				});
				//再执行更新state动作
				this.$store.dispatch(type);
			}
		}
		
	}
</script>

<style>
	.table-shop th{
		text-align: center;
	}
</style>