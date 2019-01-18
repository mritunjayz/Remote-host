<template>
  <div >
  <div>

    </div>
    <div class="row" id="basec">
    <div class="col-sm-4">
    </div>
    <div class="col-sm-4"> 
      <h3>Welcome to Remote host.
      <br>
        Logged in as
      <span class="colour">{{$store.state.host}}</span></h3>
    </div>
    <div class="col-sm-4 colour" @click='logout'> 
      <h3 class="po">Logout</h3>
    </div>
  </div>
  <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'baseland',
  methods:{
    logout(){
          axios.get(`http://localhost:8000/api/logout`).then(() => {
           this.$store.dispatch('logout');
           this.$router.push({ path: '/' })
        })
        this.$store.dispatch('logout');
           this.$router.push({ path: '/' })

    }
  },
  mounted() {
      document.getElementById("app").style.textAlign="center";
      document.getElementById("basec").style.textAlign="";
   
  },
}
</script>

<style>
.colour{
  color:green;
}
.po{
  cursor: pointer;
}
</style>