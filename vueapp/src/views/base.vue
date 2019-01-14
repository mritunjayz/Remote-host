<template>
  <div >
  <div>

    </div>
    <div class="row">
    <div class="col-sm-4">
    </div>
    <div class="col-sm-4"> 
      <h1>Welcome to Remote host.
      <br>
        Logged in as
      <span class="colour">{{$store.state.username}}</span></h1>
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
    if(!this.$route.params.path){
      console.log('singh');
      this.$router.push({ name: 'directory', params: { path: "home/ec2-user"} })
    }
  },
  watch: {
    '$route' (to, from) {
		if(!this.$route.params.path){
      this.$router.push({ name: 'directory', params: { path: "home/ec2-user"} })
    	}
  }
  }
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