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
          let s = this.$route.params.path;
            axios.post('http://localhost:8000/api/list',{path:s}).then((res) => {
              console.log(res.data,"success also called")
          if(res.data.type!=='file'){
            this.datac = res.data.data;
            this.length = this.datac.length;
            this.length = this.length/6;
            this.length = Math.ceil(this.length)
          }
          else{
            //console.log(res.data.content,"inside success also called")
            this.$store.dispatch('filedata',{filedata:res.data.content});
            this.$router.push({ name: 'mo'})
            //console.log(this.$store.state.islogged,"dispacted")
          }
          }).catch(err =>{
      //console.log('why error', typeof(err))
             this.$store.dispatch('logout');
             this.$router.push({ path: '/'})
             this.logout();
             throw err
            })
        },
        async fileclicked(subpath){

          let promise = new Promise((resolve, reject) => {
            //console.log('fileclicked',subpath)
            let sub;
            if(this.$route.params.path==='/'){
              sub = this.$route.params.path + subpath
             // console.log("after loging",sub)
            }
            else {
              sub = this.$route.params.path +'/'+ subpath
              //console.log("else loging",sub)
            }
                    //console.log('fileclicked',sub)

       this.$router.push({ name: 'directory', params: { path: sub} })
         // this.filerender();
          })
           
           await promise;

        }

    },
      watch: {
    '$route' (to, from) {
		this.filerender();
  }
  },
beforeDestroy: function(){
    console.log('DESTROYYYY!!!',window.location.href)
  }
}
</script>

<style>
.flimg{
  width:20%;
  height:20%;
}
</style>
