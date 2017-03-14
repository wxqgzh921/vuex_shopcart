import * as types from './mutations_types'

export default  {
	[types.ADD_DB](state){
		state.cartList[state.curIndex].num = parseInt(state.cartList[state.curIndex].num);
		state.cartList[state.curIndex].num++;
	},
	[types.REDUCE_DB](state){
		state.cartList[state.curIndex].num = parseInt(state.cartList[state.curIndex].num);
		state.cartList[state.curIndex].num --;
		if(state.cartList[state.curIndex].num == 0){
			state.cartList.splice(state.curIndex,1);
		}
	},
	[types.CHECK_DB](state,{id}){
		state.curIndex = -1;
		var list =state.cartList;
		if(list.length){
			for(var i=0;i<list.length;i++){
				if(list[i].id == id){
					state.curIndex = i;
					break;
				}
			}
		}
	},
	[types.CREATE_DB](state,shop){
		state.cartList.push(shop);
	},
	[types.UPDATE_LOCAL](state){
		localStorage.setItem('vuex_cart',JSON.stringify(state.cartList));
	}
}
