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
		addPoll(context,pollText){
			console.log("addPoll called. text: " + pollText.poll);
			axios.post("/api/addPoll/", {text: pollText.poll} );
		},
		getPolls(context){
			return axios.get("/api/getPolls").then(response => {
				context.commit('setPolls',response.data.polls);
			});
		},
		addYes(context, poll){
			console.log("addYes called. id: " + poll.pollID);
			axios.put("/api/addYes",{id: poll.pollID, total:poll.total, agree: poll.agree});
		},
		addNo(context,poll){
			axios.put("/api/addNo",{id: poll.pollID, total:poll.total});
		},
	},
});
