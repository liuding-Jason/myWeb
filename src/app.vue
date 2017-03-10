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
  height : 100% ;
  width : 100%;
}

body{
  background-color: #f3f3d3;
  background : url(./img/bg.png) no-repeat ;
  background-attachment: fixed;
  background-position: 50% 50%;
  background-size : cover ;
  height : 100% ;
  width : 100%;
  
  -webkit-transition: All 2s ease;
  -moz-transition: All 2s ease;
  -o-transition: All 2s ease;
  -ms-transition: All 2s ease;
  transition: All 2s ease;
}

#app{

  background-color: rgba(255,255,255,0.3) ;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: white;
  height : auto ;
  width : 95% ;
  max-width : 1024px ;
  border-radius : 15px ;
  overflow : hidden ;
  position: absolute;
  left: 50%;
  top: 50%;

  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  transition: height 1s ease;
  transition: top 1s ease;

}

id{
  display: -webkit-box;  /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
  display: -moz-box;     /* 老版本语法: Firefox (buggy) */
  display: -ms-flexbox;  /* 混合版本语法: IE 10 */
  display: flex;         /* 新版本语法: Opera 12.1, Firefox 22+ */
  display: -webkit-flex; /* 新版本语法: Chrome 21+ */

  justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  -o-justify-content: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  
  align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  -o-align-items: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
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

.path-fade-enter-active, .path-fade-leave-active {
  transition: opacity .3s;
}
.path-fade-enter, .path-fade-leave {
  opacity: 0;
}

</style>