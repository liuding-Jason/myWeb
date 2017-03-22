<template>
	<div>
		<h1 class="mod-title">{{title}}</h1>
		<ul class="mod-index">
			<li v-for="link in linkArr">
				<a :href="link['url']" target="_blank">{{link['content']}}</a>
				<span class="mod-img-con"><img :src="link['src']"/></span>
			</li>
		</ul>
	</div>
</template>

<script>
	import Conf from "../config" ;
	import VueResource from "vue-resource" ;

	export default {
		data () {
			return {
				title 	: "Liuding Web Page" ,
				linkArr : [
					{
						content : "Zhihu" ,
						url : "https://www.zhihu.com/people/liu-ding-jasonchen" ,
						src : require("../img/zhihu.png")
					} ,
					{
						content : "Github" ,
						url : "https://github.com/liuding-Jason" ,
						src : require("../img/github.png")
					} ,
				]
			}
		} ,
		methods : {
			hello (){
				console.log("hello");
			} ,
			judgeData(code , message){
				if(code * 1 !== 0){
					alert(message);
					return false ;
				}
				return true ;
			}
		} ,
		watch : {
			title : function(val){
				console.log(`title has changed , and new value is ${val}`);
			}
		} ,
		mounted (){
			// your data format : 
			// {
			//		code : 0 ,
			//		data : {
			//			title : ''
			//		} ,
			//		message : ok
			// }
			//

			//this.$http.post(Conf.BASEURL)
			//.then(({code = void 0 , data = {} , message = "请求失败！"}) => {
			//	if(!this.judgeData(code , message)) return ;
			//	let {
			//		title = ''
			//	} = data ;	
			//	title === '' ? title : this.title = title ;
			//});

			console.log("hello home");
		} 
	}
</script>

<style>
.mod-title {
	text-align : center ;
	font-size : .8rem ;
	margin-bottom : 5px;
	height: 1rem ;
	line-height: 1rem ;
}
.mod-title:hover {
	color : #2c3e50 ;
}

.mod-index {
	width : 100% ;
	overflow : hidden ;
	list-style : none ;
	text-align : center ;
}

.mod-index li {
	margin-bottom : 5px ;
	border-radius : 15px ;
}

.mod-index li:hover{
	 background-color: rgba(200, 200, 200, 0.3) ;
}

.mod-index li:active {
	background-color: rgba(200, 200, 200, 0.3) ;
}
.mod-index li a {
	color :  white ;
	text-decoration : none ;
	font-size : .7rem ;
	height: .9rem ;
	line-height: .9rem;
}

.mod-index .mod-img-con {
	display : inline-block ;
	height : .5rem ;
	width : .5rem ;
}

.mod-index .mod-img-con img {
	width : 100% ;
}

.mod-index li:hover a {
	color : #2c3e50 ;
}
.mod-index li a:hover {
	text-decoration : underline ;
}

</style>