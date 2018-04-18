<template>
	<div id="pollList">
		<h2>Share your thoughts on the following topics, and see what other people think:</h2>
      	<hr>
      	<ul>
      		<li v-for="poll in pollsToShow">
      			<h2 id = "question">{{ poll.text }}</h2>
      			<div id="buttonsDiv"><span><div id="buttons" v-on:click="addYes(poll)"><p>Yes</p></div><div id="buttons" v-on:click="addNo(poll)"><p>No</p></div></span></div>
      			<p>Total responses: {{poll.total_responses}}</p>
      			<p>{{poll.number_agree}} people agree with this statement.</p>
      			<hr>
      		</li>
      	</ul>
	    <div id=footer>
	      <a href="https://github.com/mistwraith/polls">Github repo</a>
	    </div>      	
	</div>
</template>

<script>
export default {
  name: 'ViewPolls',
  data () {
    return{
      pollText:'',
    }
  },
    computed:{
    pollsToShow: function(){
  		console.log(this.$store.getters.pollsToShow);
      return this.$store.getters.pollsToShow;
    },
  },
  created: function(){
  	this.$store.dispatch('getPolls');
  },
  methods: {
  	addYes: function(){
  		this.$store.dispatch('addYes',{
  			//start here tomorrow
  		});

  	},
  	addNo: function(){

  	},
  },
}







</script>

<style>
	#pollList{
		color:white;
	}
	h1{
		text-align:center;
		color:white;
	}
	h2{
		text-align:center;
		color:white;
	}


	#question{
		color:white;
		text-align:center;
	}
	p{
		color:#969696;
		text-align:center;
	}
	#buttonsDiv{
		margin-left:auto;
		margin-right:auto;
		display:flex;
		width:50%;
		flex-direction:row;
		justify-content: space-around;
	}
	#buttons{
		width:50px;
		height:25px;
		background: #155372;
		margin-left:5px;
		margin-right:5px;
		border-radius:6px;
		flex-direction: column;
		float:left;

	}
	#buttons p{
		/*line-height: -20px;*/
		margin-top:5px;
		margin-bottom:0px;
	}


	ul{
		list-style-type: none;
	}
	#footer{
		bottom:0;
		position:fixed;
		margin-left:0;
	}

</style>


