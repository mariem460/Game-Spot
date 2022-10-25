<template>
  <headerComp></headerComp>
  <HomeComp></HomeComp>
  <router-view></router-view>
  
</template>

<script>

import HomeComp from "./components/Home/homeComp.vue";
import headerComp from "./components/header/headerComp.vue";


 export default {
  components: {
    headerComp,
    HomeComp
}

 }

</script>



<style>
  @import './assets/style.css'

</style>
