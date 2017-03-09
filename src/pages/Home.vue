<template>
	<h1 class="title">{{title}}</h1>
</template>

<script>
	import Conf from "../config" ;
	import VueResource from "vue-resource" ;

	export default {
		data () {
			return {
				title : "Liuding Web Page" 
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
.title {
	text-align : center ;
	opacity : 1 ;
	font-size : .5rem ;
}
.title:hover {
	color : #2c3e50 ;
}
</style>