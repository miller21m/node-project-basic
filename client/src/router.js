import Vue from 'vue'
import VueRouter from 'vue-router'


import Somthing from './components/Somthing.vue'

Vue.use(VueRouter);

const routes = [
    {path:"/hello" , component:Somthing}
]

export default new VueRouter({mode:'history', routes});