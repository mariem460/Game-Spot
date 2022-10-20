<template>
  <header-comp></header-comp>
  <router-view></router-view>
  
</template>

<script>
  import headerComp from '@/components/header/headerComp'

 export default {
  components: {
    headerComp
  }

 }

</script>



<style>
  @import './assets/style.css'

</style>
