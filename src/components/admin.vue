<template>
  <div id="paleta_app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="nav-link" @click="$router.push({ name: 'screenManager' })">Screen</a>
        <a class="nav-link" @click="$router.push({ name: 'totemManager' })">Totem</a>
        <a class="nav-link" @click="$router.push({ name: 'storeManager' })">Store</a>
      </div>
    </nav>
    <br>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: "paleta_app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin {
  display: flex;
  justify-content: flex-start;
}
</style>