<template>
  <div class="submission">  <!--does the name of this class matter much?-->
    <h1>Help solve the mysteries of society!</h1>     
      <p>Submit your own poll here:</p>
      <form v-on:submit.prevent="addPoll">
        <input id="input" type="text" size="50" v-model="pollText">
        <button id="submitButton" type="submit">Submit</button>
      </form>

  </div>
</template>

<script>
export default {
  name: 'AddPoll',
  data () {
    return{
      pollText:'',
    }

  },

  methods: {
    addPoll:function(){
      this.$store.dispatch('addPoll',{
        poll: this.pollText,
      }).then(addPoll => {
      this.pollText = "";
      });





      /*
      //alert(this.text);
      axios.post("/api/polls", {
        text:this.text,
        totalResponses: 0,
        yesResponses: 0,
        percentAgree:0,
      }).then(response => {
        this.text = "";         
        this.getPolls();
        return true;
      }).catch(err => {
      });
      */


    },  
  } //end of methods
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  text-align:center;
  color:white;
}
h1{
  text-align:center;
  color:white;
}
p{
  color:#969696;
  text-align:center;
}
#input{
  display:block;
  margin-left:auto;
  margin-right:auto;
}
#submitButton{
  margin-top:10px;
  padding:5px;
  display:block;
  margin-left:auto;
  margin-right:auto;
}

</style>
