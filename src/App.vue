<template>
  <div id="app">
    <img 
      alt="Vue logo" 
      src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-top: 60px;
  text-align: center;
  width: 0;
}

#a {
  #b {
    #c {
      color: 123;
    }
  }
}
</style>
