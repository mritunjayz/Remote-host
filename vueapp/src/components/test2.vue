<template>
<div>
<div class="row" style="width:100%;height:720px; background-color: black;margin:0; position:fixed;" bgcolor="black">

   <div style="padding:20px;width:50%;height:50%;" class="col-sm-6">
       <monaco-editor class="editor"  v-model="code" language="javascript">
       </monaco-editor>
   </div>

  <div class="col-sm-6" style="background-color:;text-align:center;">

  <div style="margin-left:50%;margin-top:15%;">
  <div  style="background-color:blue;width:30%;">
  <button @click="savetoremote" >Save</button>
  </div>
<div  style="background-color:red;width:30%; margin-top :10px;">
  <button @click="cancel" >Cancel</button>
  </div>
</div>

  </div>

</div>
</div>
</template>

<script>
import MonacoEditor from 'vue-monaco'
import axios from 'axios'

export default {
  components: {
    MonacoEditor
  },

  data() {
    return {
      code:``,
    language: 'javascript',
    theme: 'Visual Studio Dark',
    options: {
      lineNumbers: true,
      language: 'javascript',
      theme: 'vs-dark',
    }
    }
  },
methods: {
    updateCode() {
      this.language = 'html'
      this.code = markdownCode
      this.options.tabSize = 8
      this.options.lineNumbers = false
      this.theme = 'vs-dark'
    },
    savetoremote(){
      console.log(this.code)
      axios.post(`http://localhost:8000/api/editorsave`, {filedata:this.code,
      path:this.$store.state.previouspath}).then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err);
      })

    },
    cancel(){
      window.history.back()
    }
},
mounted() {
  this.code = this.$store.state.filedata;
  document.getElementById("app").style.textAlign="";
  document.getElementById("basec").style.textAlign="center";
  if(!this.$store.state.islogged){
  this.$router.push({ path: '/'})
  }
  console.log(this.$store.state.previouspath,"editor")
},
beforeDestroy: function(){
  document.getElementById("app").style.textAlign="center";
  document.getElementById("basec").style.textAlign="";
  // on refresh text align distroyed try to separate the text align style for each file
  }
}
</script>

<style>
.editor {
  width: 900px;
  height: 800px;
}
html, body, #app {
  height: 100%;
  text-align: left;
}

body {
  margin: 0;
}
</style>