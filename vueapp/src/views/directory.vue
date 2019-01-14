<template>
  <div>
  <br><hr>
    <div v-for="index in length">


    <div class="row">
    <div class="col-sm-2" v-on:click="fileclicked(datac[(index*6)-6])">
    <img v-if="typecheck(datac[(index*6)-6])" class="flimg" src="../assets/folders.png">
    <img v-else class="flimg" src="../assets/files.png">
    <h5>{{datac[(index*6)-6]}}</h5>
    </div>
    <div class="col-sm-2" v-on:click="fileclicked(datac[(index*6)-5])"> 
        <img v-if="typecheck(datac[(index*6)-5])" class="flimg" src="../assets/folders.png">
    <img v-else class="flimg" src="../assets/files.png">
      <h5>{{datac[(index*6)-5]}}</h5>
    </div>
    <div class="col-sm-2" v-on:click="fileclicked(datac[(index*6)-4])"> 
        <img v-if="typecheck(datac[(index*6)-4])" class="flimg" src="../assets/folders.png">
        <img v-else class="flimg" src="../assets/files.png">
      <h5>{{datac[(index*6)-4]}}</h5>
    </div>
    <div class="col-sm-2" v-on:click="fileclicked(datac[(index*6)-3])">
        <img v-if="typecheck(datac[(index*6)-3])" class="flimg" src="../assets/folders.png">
        <img v-else class="flimg" src="../assets/files.png">
    <h5>{{datac[(index*6)-3]}}</h5>
    </div>
    <div class="col-sm-2" v-on:click="fileclicked(datac[(index*6)-2])"> 
        <img v-if="typecheck(datac[(index*6)-2])" class="flimg" src="../assets/folders.png">
        <img v-else class="flimg" src="../assets/files.png">
      <h5>{{datac[(index*6)-2]}}</h5>
    </div>
    <div class="col-sm-2" v-on:click="fileclicked(datac[(index*6)-1])"> 
        <img v-if="typecheck(datac[(index*6)-1])" class="flimg" src="../assets/folders.png">
        <img v-else class="flimg" src="../assets/files.png">
      <h5>{{datac[(index*6)-1]}}</h5>
    </div>   
    </div>
    

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
data (){
return{
  basePath:'',
  datac:[],
  d:'kkkk',
  a:'nnn',
  length:''
}
},
mounted (){
this.filerender();
},
methods:{
  typecheck(name){
//temporary type check
      if(name){
        //console.log('typecheck:',name,name.indexOf("."),typeof(name))
        let r = name.indexOf(".");
        if(r===-1){
             return true;
                   }
        else return false;
                }
        },
        filerender(){
          let s = '/' + this.$route.params.path;
            axios.post('http://localhost:8000/api/list',{path:s}).then((res) => {
            this.datac = res.data.data;
            this.length = this.datac.length;
            this.length = this.length/6;
            this.length = Math.ceil(this.length)
          })
           .catch(err =>{
            throw err
            })
        },
        fileclicked(subpath){
          console.log('fileclicked',subpath)
          let sub = this.$route.params.path +subpath+'/'
                    console.log('fileclicked',sub)

          this.$router.push({ name: 'directory', params: { path: sub} })
          this.filerender();
        }

    },
      watch: {
    '$route' (to, from) {
		this.filerender();
  }
  }

}
</script>

<style>
.flimg{
  width:20%;
  height:20%;
}
</style>
