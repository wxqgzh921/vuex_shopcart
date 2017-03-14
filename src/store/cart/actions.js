import * as types from './mutations_types';

export default{
	update_local:({commit})=>{
		commit(types.UPDATE_LOCAL);
	},
	add_db:({commit}) =>{
		commit(types.ADD_DB);
		commit(types.UPDATE_LOCAL);
	},
	reduce_db:({commit})=>{
		commit(types.REDUCE_DB);
		commit(types.UPDATE_LOCAL);
	},
	check_db:({commit},obj)=>{
		commit(types.CHECK_DB,obj);
	},
	creat_db:({commit},{shop})=>{
		commit(types.CREATE_DB,shop);
	}
}

