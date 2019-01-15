<template>
  <div class="hello">
  <button id="myBtn">Open Modal</button>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
      <Monaco
    width="600"
    height="600"
    language="python"
    theme="vs"
    :code="code"
    
    :changeThrottle="500"
    @mounted="onMounted"
    @codeChange="onCodeChange"
    >
</Monaco>
  </div>

</div>

    
 <button @click="check">gghhghggh</button>

  </div>
</template>

<script>
import Monaco from 'monaco-editor-forvue'
//import comb from './comb.vue'
//import glob from '../main.js'
//import vue from 'vue'
// vue.component('compa',compa)
// vue.component('comb',comb)

//import comb from './comb.vue'
//console.log(glob)
//console.log(vue)
export default {
  name: 'HelloWorld',
  components: {
    Monaco
  }
,
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      namepa:'beauty',
      code:`if(data.data==='logged' && data.status===200){
      this.$store.dispatch('auth',{host:this.host,username:this.username,
      password:this.password
  });
  this.$router.push({ name: 'directory', params: { path: ""} })

  }
}).catch(err => {
})
  },`
    }
  },
  methods:{
    changepa(){
      this.namepa='hahaha'
    },
    check(){
      console.log(this.namepa)
    },
     onMounted(editor) {
      this.editor = editor;
    },
    onCodeChange(editor) {
      console.log(this.editor.getValue());
    }
  },
  mounted (){
    var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
