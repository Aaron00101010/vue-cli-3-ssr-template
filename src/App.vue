<template>
  <div id="app">
    <div>
      <router-link :to="{path:'/cn-node'}">cn-node</router-link>
      &emsp;
      <router-link :to="{path:'/hello'}">hello</router-link>
      &emsp;
      <router-link :to="{path:'/world'}">world</router-link>
    </div>
    <img src="./assets/logo.png" alt="">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 60px;
  text-align: center;
}
</style>
