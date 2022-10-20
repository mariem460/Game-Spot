<template>
  <homeComp></homeComp>
  <CarouselComp></CarouselComp>
  <router-view></router-view>
  
</template>

<script>
  import homeComp from "./components/Home/homeComp.vue";
import CarouselComp from "./components/utils/carouselComp.vue";


 export default {
  components: {
    homeComp,
    CarouselComp
}

 }

</script>

<style>

</style>
