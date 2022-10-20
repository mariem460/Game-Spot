/* eslint-disable */
// I added eslint here because of START LOCation is not used yet
import {createRouter, createWebHistory, START_LOCATION} from 'vue-router' 

//components
import homeComp from './components/Home/homeComp.vue'
import headereComp from './components/header/headerComp.vue'
import article from './components/Articles/articleComp.vue'


const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', component:homeComp, name:'home'},
        {path:'/header', component:headereComp, name:'header'},
        {path:'/article/:id', component:article, name:'article'}

    ]
    
})

export default routes