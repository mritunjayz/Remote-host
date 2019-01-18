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
import editor from '../components/test2.vue'

export default {
  components:{
    editor
  },
data (){
return{
  basePath:'',
  datac:[],
  d:'kkkkddddddddddddddddd',
  a:'nnn',
  length:''
}
},
mounted (){
  if(!this.$route.params.path){
      this.$router.push({ name: 'directory', params: { path: "/"} })
    }
this.filerender();
},
methods:{
  typecheck(name){
//temporary type check
      if(name){
        let r = name.indexOf(".");
        if(r===-1){
             return true;
                   }
        else return false;
                }
        },
        filerender(){
          let s = this.$route.params.path;
            axios.post('http://localhost:8000/api/list',{path:s}).then((res) => {
          if(res.data.type!=='file'){
            this.$store.dispatch('previouspath',{previouspath:this.$route.params.path})
            this.datac = res.data.data;
            this.length = this.datac.length;
            this.length = this.length/6;
            this.length = Math.ceil(this.length)
          }
          else{
            this.$store.dispatch('filedata',{filedata:res.data.content});
            this.$router.push({ name: 'mo'})
          }
          }).catch(err =>{
             this.$store.dispatch('logout');
             this.$router.push({ path: '/'})
             this.logout();
             throw err
            })
        },
        async fileclicked(subpath){
          this.$store.dispatch('previouspath',{previouspath:this.$route.params.path})
          let promise = new Promise((resolve, reject) => {
            let sub;
            if(this.$route.params.path==='/'){
              sub = this.$route.params.path + subpath
            }
            else {
              sub = this.$route.params.path +'/'+ subpath
            }

            axios.post('http://localhost:8000/api/list',{path:sub}).then((res) => {
              if(res.data.type==='file'){
                this.$store.dispatch('filedata',{filedata:res.data.content});
            this.$router.push({ name: 'mo'})
              }
              else{
                this.$router.push({ name: 'directory', params: { path: sub} })
              }
            })
          })
           
           await promise;

        }

    },
      watch: {
    '$route' (to, from) {
      /*f(from.path==='/base/test'){
        window.history.back();
        console.log(to,from,"Directory watch from test file")
      }
      else{
     this.filerender();
     console.log(to,from,"Directory watch not from test file")
      }*/
		this.filerender();
  }
  },
beforeDestroy: function(){
  }
}
</script>

<style>
.flimg{
  width:20%;
  height:20%;
}
</style>
