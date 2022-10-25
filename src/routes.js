/* eslint-disable */
import { createRouter, createWebHistory, START_LOCATION } from 'vue-router';

// COMPONENTS
import homeComp from './components/Home/homeComp.vue';
import article from './components/Articles/articleComp.vue';
import signinUser from './components/User/signinUser.vue'


const routes = createRouter({
    history: createWebHistory(),
    routes:[
        { path:'/', component: homeComp, name:'home'},
        { path:'/article/:id', component:article, name:'article' },
        { path:'/signin', component: signinUser, name:'signin'}

    ]
})


export default routes;