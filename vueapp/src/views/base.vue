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

export default {
  name: 'baseland',
  methods:{
    logout(){
      this.$store.dispatch('logout');
      this.$router.push({ path: '/' })
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