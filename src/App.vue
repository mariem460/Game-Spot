<template>
  <headerCompVue></headerCompVue>
  <homeComp></homeComp>
  <CarouselComp></CarouselComp>
  <router-view></router-view>
  
</template>

<script>
import homeComp from "./components/Home/homeComp.vue";
import CarouselComp from "./components/utils/carouselComp.vue";
import headerCompVue from "./components/header/headerComp.vue";


 export default {
  components: {
    homeComp,
    headerCompVue,
    CarouselComp
}

 }

</script>



<style>
  @import './assets/style.css'

</style>
