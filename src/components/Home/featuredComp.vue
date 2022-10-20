<template>
    <div class="featured-home">
        <a-row gutter="16"> 
        <articleCard span="6" v-for="(article, index) in articles "
        :key="article.id"
        :index="index"
        :article="article"></articleCard>
        </a-row>
    </div>
</template>

<script>
    import articleCard from "../utils/articleCard.vue";
   export default {
    props:["articles"],
    components:{
        articleCard

    },
  
   }
</script>