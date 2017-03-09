<template>
  <div id="app" >
      <transition name="path-fade" mode="out-in">
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>

const SetDpr = require("./util/dpr.js") ; 
let sd = new SetDpr() ;

export default {
  name: 'app',
  components: {
  } ,
  methods : {
    _onResize : function(){
      window.addEventListener("resize" , () => {
        sd.set() ;
      });
    }
  } ,
  mounted(){
    this._onResize() ;
    sd.set() ;
  }
}
</script>

<style>
html{
  background : url(./img/bg3.png) no-repeat ;
  background-size : cover ;
  height : 100% ;
  width : 100%;
  position : relative ;
}
body{
  background-color: rgba(255,255,255,0.3) ;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: white;
  height : auto ;
  width : 95% ;
  max-width : 1024px ;
  margin:0 auto ;
  border-radius : 15px ;
  overflow : hidden ;
  position : relative ;
  top : 50% ;
}

@keyframes myfirst
{
  from{
    height : 0 ;
  }
  to {
    height : 50% ;
  }
}

@-moz-keyframes myfirst /* Firefox */
{
  from{
    height : 0 ;
  }
  to {
    height : 50% ;
  }
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
  from{
    height : 0 ;
  }
  to {
    height : 50% ;
  }
}

@-o-keyframes myfirst /* Opera */
{
  from{
    height : 0 ;
  }
  to {
    height : 50% ;
  }
}

#app{
  animation: myfirst .5s linear 2s  alternate ;
  -moz-animation: myfirst .5s linear 2s  alternate; /* Firefox */
  -webkit-animation: myfirst .5s linear 2s  alternate;  /* Safari 和 Chrome */
  -o-animation: myfirst .5s linear 2s  alternate;
}

.path-fade-enter-active, .path-fade-leave-active {
  transition: opacity .3s;
}
.path-fade-enter, .path-fade-leave {
  opacity: 0;
}

</style>