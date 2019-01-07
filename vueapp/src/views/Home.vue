<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Remote Desk"/>
    <login/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import login from '@/components/login.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    login
  }
}
</script>
