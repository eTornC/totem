<template>
  <div id="paleta_app">
  <div class="admin">
    <div class="paleta my-5 mx-5">
    <a class="nav-link " @click="$router.push({ name: 'screenManager' })">Screen</a>
    <a class="nav-link " @click="$router.push({ name: 'totemManager' })">Totem</a>
    <a class="nav-link " @click="$router.push({ name: 'storeManager' })">Store</a>
    </div>
    <div class="workSpace  my-5 mx-5">
      <router-view></router-view>
    </div>
  </div>
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
.admin{
    display: flex;
    justify-content: flex-start;
}

.paleta{
    width: 350px;
    height: 700px;
    border: 2px solid rgb(38, 145, 245);
    border-radius: 5px;
    box-sizing: border-box;
}
.paleta a{
 font-size: 2rem;   
    padding: 20px 0;
    border-bottom: 1px solid black;
} 




.workSpace{
    width: 1400px;
    height: 900px;
    border: 2px solid rgb(38, 145, 245);
    border-radius: 5px;
    box-sizing: border-box; 
}

</style>