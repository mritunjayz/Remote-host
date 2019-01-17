<template>
  <div >
    <h2>Login Form</h2>
<div id="login">
<form id='form'>

  <div class="container">
    <label for="host"><b>Host</b></label>
    <input type="text" placeholder="Host" name="host" v-model='host' required>

    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Username" name="uname" v-model='username' required>

    <label for="psw"><b>Password</b></label>
    <input type="text" placeholder="Enter Password" name="psw" v-model='password' required>
        
    <button @click='login' >Login</button>
    <label>
      <input type="checkbox" checked="false" name="remember"> Remember me
    </label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
  </div>
</form>
</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data(){
      return{
          username:'',
          password:'',
          host:''
      }
  },
methods: {
  login(){
axios.post(`http://localhost:8000/api/login`, {host:this.host,username:this.username,key:this.password})
.then(data => {

  if(data.data==='logged' && data.status===200){
      this.$store.dispatch('auth',{host:this.host,username:this.username,
      password:this.password
  });
  this.$router.push({ name: 'directory', params: { path: "/"} })

  }
}).catch(err => {
})
  },

},
mounted() {
  document.getElementById("form").addEventListener("click", function(event){
  event.preventDefault()
});
},
}
</script>

<style>
.container {
    width: 100%;
}
form {
  border: 3px solid #f1f1f1;
  width:100%;
}
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
button:hover {
  opacity: 0.8;
}
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}
img.avatar {
  width: 40%;
  border-radius: 50%;
}
.container {
  padding: 16px;
}
span.psw {
  float: right;
  padding-top: 16px;
}
/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}
#login{
    width:50%;
    position: relative;
  left: 25%;
}
</style>