<template>
  <headerComp></headerComp>
  <router-view></router-view>
  
</template>

<script>
import headerComp from "./components/header/headerComp.vue";


export default {
  components: {
    headerComp
}
}
</script>

<style>
  @import './assets/style.css';
</style>
