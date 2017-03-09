
import Vue from "vue" ;
import VueResource from "vue-resource" ;
import Router from "./routes" ;

import App  from "./app.vue" ; 

const app = new Vue({
  router: Router,
  render: h => h(App)
}).$mount('#app') ;
