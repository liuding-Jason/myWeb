<template>
  <div id="app" >
      <ld-music />
      <transition name="path-fade" mode="out-in">
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>

import ldMusic from "./components/ld-music.vue" ;
const SetDpr = require("./util/dpr.js") ; 
let sd = new SetDpr() ;
let t = 0 ;

export default {
  name: 'app',
  data (){
    return {
      bgList : [
        require("./img/bg1.png") ,
        require("./img/bg2.png") ,
        require("./img/bg3.png") 
      ]
    }
  } ,
  components: {
    ldMusic
  } ,
  methods : {
    _onResize : function(){
      window.addEventListener("resize" , () => {
        sd.set() ;
      });
    } ,
    changeBackground : function(){
      let l = this.bgList.length ;
      let temp = 0 ;
      t = setInterval(() => {
        ++temp >= l ? temp = 0 : "" ;
        let bg = this.bgList[temp] ;
        document.body.style.background = `#f3f3d3 url(${bg}) 50% 50%/cover no-repeat fixed`;
      } , 10000);

    }
  } ,
  mounted(){
    this._onResize() ;
    sd.set() ;
    this.changeBackground() ;
  } ,
  // 当组件摧毁时，解除相关事件
  beforeDestroy(){
    clearInterval(t);
  }
}
</script>

<style>
html{
  height : 100% ;
  width : 100%;
}

body{
  background : #f3f3d3 url(./img/bg1.png) 50% 50%/cover no-repeat fixed;
  height : 100% ;
  width : 100%;
  position : relative ;

  -webkit-transition: All 2s ease;
  -o-transition: All 2s ease;
  -ms-transition: All 2s ease;
  -moz-transition: All 2s ease;
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
  padding:5px 0 ;

  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

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

.path-fade-enter-active, .path-fade-leave-active {
  transition: opacity .3s;
}
.path-fade-enter, .path-fade-leave {
  opacity: 0;
}

</style>