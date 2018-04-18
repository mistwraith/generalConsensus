import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

/*
const getAuthHeader = () => {
  return { headers: {'Authorization': localStorage.getItem('token')}};
}
*/

export default new Vuex.Store({
	state:{
		pollsToShow: [],
	},

	getters:{
		pollsToShow: state => state.pollsToShow,
	},
	mutations:{
		setPolls(state,polls){
			state.pollsToShow = polls;
		},
	},	
	actions:{
		addPoll(context,poll){
			console.log("addPoll called");
			axios.post("/api/addPoll/", {text: poll} );
		},
		getPolls(context){
			return axios.get("/api/getPolls").then(response => {
				context.commit('setPolls',response.data.polls);
			});
		},
	},
});
