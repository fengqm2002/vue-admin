<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <d-Header title="test" type="primary"  />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import dHeader  from '@/packages/header/Header'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    dHeader
  }

  
}
</script>
