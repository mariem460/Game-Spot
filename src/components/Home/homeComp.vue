<template>
    <div class="container">
        <CarouselComp :slides="homeArticles"></CarouselComp>
        <FeaturedComp :articles="homeArticles"></FeaturedComp>
    
    </div>
</template>

<script>

import FeaturedComp from "./featuredComp.vue";
import CarouselComp from "../utils/carouselComp.vue";

   export default {
    components:{
    FeaturedComp,
    CarouselComp
},
data(){
        return {
            homeArticles: [
                {id: 1}, 
                {id:2},
                {id:3},
                {id:4}, 
                {id:5},
                {id:6},
                {id:7}, 
                {id:8},
                {id:9},
            ]
        }
    }

   }
</script>
