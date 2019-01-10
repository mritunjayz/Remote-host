<template>
  <div>
    <h1>This is an children page</h1>
  </div>
</template>

<script>
export default {
data (){
return{
  basePath:'/'
}
},
mounted (){
  console.log(this.basePath)
},
methods:{
  
}
}
</script>
