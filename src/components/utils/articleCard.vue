<template>
    <a-col class="article_card" :span="span">
        <router-link :to="{name:'article', params:{id:article.id} }">
            <a-card hoverable style="width: 100%">
                <template #cover>
                    <img alt="imgArtcle" src='https://loremflickr.com/220/240/dog?id={{$article.id}}'>
                </template>
                <h3>many variations of passages of Lo</h3>
                <p>There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by injected humour.
                </p>

            </a-card>
        </router-link>
    </a-col>
</template>

<script>
   export default {
    props:["span", "index", "article"]

   }
   
</script>