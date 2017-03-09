import Vue from "vue" ;
import VueRouter from "vue-router" ;
import Home from "./pages/home.vue" ;
import List from "./pages/list.vue" ;

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
  	{ path: '/' , redirect: '/home' } ,			// 默认路由
    { 
    	path: '/home' , 
    	component: Home } ,
    { path: '/list' , component: List }
  ]
})
