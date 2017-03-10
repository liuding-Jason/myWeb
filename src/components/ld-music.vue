<template>
	<div class="mod-music" title="change song" v-on:click="changeSong">
		<audio id="music-play" src="" loop autoplay ></audio>
	</div>
</template>

<script>
	
	import Conf from "../config.js" ;

	export default {
		data () {
			return {
				play : true ,
				songs : [
					
				]
			}
		} ,

		components : {  } ,

		methods : {
			hello : function(){
				console.log("hello music!");
			} ,
			judgeData : function(code = void 0 , message = ""){
				if(code * 1 !== 0){
					alert(message);
					return false ;
				}
				return true ;
			} ,
			changeSong : function(){
				if(!this.play) return ;
				this.play = false ;
				let time = setTimeout(() => {
					let t  = Math.floor(Math.random() * this.songs.length);
					let mp = document.getElementById("music-play") ;
					mp.src = this.songs[t] ;

					this.play = true ;
					clearTimeout(time);
					console.log("change song");
				} , 300);
			}
		} ,

		watch : {
			list : function(val){
				console.log("list value is changed!");
			}
		} ,

		mounted (){

			//this.$http.post('' , {})
			//.then(({code = void 0 ,data = {} , message = "请求失败！"}) => {
			//	if(!this.judgeDate(code , message)) return ;
			//	let {
			//		list = []
			//	} = data ;
			//	this.list = list ;
			//});

			this.hello();
		}

	}
</script>

<style scoped>
.mod-music {
	position : absolute ;
	height : .65rem ;
	width : .65rem ;
	top : 10px;
	right : 15px ;
	background : url(../img/music.png) no-repeat ;
	background-size : cover ;
	cursor : pointer ;

	animation: myfirst 5s linear 2s infinite ;
	/* Firefox: */
	-moz-animation: myfirst 5s linear 2s infinite ;
	/* Safari 和 Chrome: */
	-webkit-animation: myfirst 5s linear 2s infinite ;
	/* Opera: */
	-o-animation: myfirst 5s linear 2s infinite ;
}

.mod-music:active{
	border : 1px solid #fbfbfb ;
}

@keyframes myfirst
{
  0% {
  	transform: rotateY(0deg);
	-webkit-transform: rotateY(0deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(0deg);	/* Firefox */
  }
  25% {
  	transform: rotateY(90deg);
	-webkit-transform: rotateY(90deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(90deg);	/* Firefox */
  }
  50%{
  	transform: rotateY(180deg);
	-webkit-transform: rotateY(180deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(180deg);	/* Firefox */
  }
  75%{
  	transform: rotateY(270deg);
	-webkit-transform: rotateY(270deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(270deg);	/* Firefox */
  }
  100%{
  	transform: rotateY(360deg);
	-webkit-transform: rotateY(360deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(360deg);	/* Firefox */
  }
}

@-moz-keyframes myfirst /* Firefox */
{
  0% {
  	transform: rotateY(0deg);
	-webkit-transform: rotateY(0deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(0deg);	/* Firefox */
  }
  25% {
  	transform: rotateY(90deg);
	-webkit-transform: rotateY(90deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(90deg);	/* Firefox */
  }
  50%{
  	transform: rotateY(180deg);
	-webkit-transform: rotateY(180deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(180deg);	/* Firefox */
  }
  75%{
  	transform: rotateY(270deg);
	-webkit-transform: rotateY(270deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(270deg);	/* Firefox */
  }
  100%{
  	transform: rotateY(360deg);
	-webkit-transform: rotateY(360deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(360deg);	/* Firefox */
  }
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
  0% {
  	transform: rotateY(0deg);
	-webkit-transform: rotateY(0deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(0deg);	/* Firefox */
  }
  25% {
  	transform: rotateY(90deg);
	-webkit-transform: rotateY(90deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(90deg);	/* Firefox */
  }
  50%{
  	transform: rotateY(180deg);
	-webkit-transform: rotateY(180deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(180deg);	/* Firefox */
  }
  75%{
  	transform: rotateY(270deg);
	-webkit-transform: rotateY(270deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(270deg);	/* Firefox */
  }
  100%{
  	transform: rotateY(360deg);
	-webkit-transform: rotateY(360deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(360deg);	/* Firefox */
  }
}

@-o-keyframes myfirst /* Opera */
{
  0% {
  	transform: rotateY(0deg);
	-webkit-transform: rotateY(0deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(0deg);	/* Firefox */
  }
  25% {
  	transform: rotateY(90deg);
	-webkit-transform: rotateY(90deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(90deg);	/* Firefox */
  }
  50%{
  	transform: rotateY(180deg);
	-webkit-transform: rotateY(180deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(180deg);	/* Firefox */
  }
  75%{
  	transform: rotateY(270deg);
	-webkit-transform: rotateY(270deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(270deg);	/* Firefox */
  }
  100%{
  	transform: rotateY(360deg);
	-webkit-transform: rotateY(360deg);	/* Safari 和 Chrome */
	-moz-transform: rotateY(360deg);	/* Firefox */
  }
}

</style>
