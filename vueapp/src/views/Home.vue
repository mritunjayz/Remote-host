<template>
  <div class="home">
    <h1>Welcome to Your Remote Desk</h1>
    <login/>
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/login.vue'

export default {
  name: 'home',
  components: {
    login
  }
}
</script>
