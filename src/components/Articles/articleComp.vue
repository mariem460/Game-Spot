<template>
    <div class="container p_top article_page" v-if="article">
        <div class="game_tag">
            {{article.game}}
        </div>
        <div class="article_featured" :style="{backgroundImage: `url(${article.img})`}">
        </div>
        <div class="article_content">
            <div class="owner">
                Article written by : <b>{{article.owner.firstName}} {{article.owner.lastName}}</b> 
            </div>
            <hr>
            <h1>{{article.title}}</h1>
            <div class="editor" v-html="article.editor">
            </div>
            <hr>
            <div class="article_rating">
                Our rating is: <b>{{article.rating}}</b> 
            </div>

        </div>

    </div>
</template>

<script>
   export default {
    data(){
        return{
            article: {
                id: "2723t7422",
                owner:{
                            firstName: "babou",
                            lastName: "oueslati",
                            uid: "There are many variations of passages of Lorem Ipsum available"
    },
                game: "The last of us 2",
                title: "There are many variations of passagesb",
                rating: 5,
                timestamp: "02/12/02",
                img: "https://loremflickr.com/220/240/dog",
                exerpt: "There are many variations of passages of Lorem Ipsum available",
                editor: "<p>There are many There are many variations of passages There are many variations of passages There are many variations of passages v There are many variations of passages There are many variations of passages There are many variations of passages v  There are many variations of passagesvariations of There are many variations of passages passages of There are many variations of passages Lorem Ipsum available, There are many variations of passages of Lorem Ipsum available</p>"
}
        }
    }
   }
</script>

