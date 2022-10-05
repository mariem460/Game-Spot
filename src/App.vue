<template>
  <homeComp></homeComp>
  <router-view></router-view>
  
</template>

<script>
  import homeComp from "./components/Home/homeComp.vue";


 export default {
  components: {
    homeComp
  }

 }

</script>

<style>

</style>
