<template>
  <headerCompVue></headerCompVue>
  <homeComp></homeComp>
  <router-view></router-view>
  
</template>

<script>
import homeComp from "./components/Home/homeComp.vue";
import headerCompVue from "./components/header/headerComp.vue";


 export default {
  components: {
    homeComp,
    headerCompVue,

}

 }

</script>



<style>
  @import './assets/style.css'

</style>
