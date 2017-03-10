<template>
	<div>
		<audio> </audio>
	</div>
</template>

<script>
	
	import Conf from "../config.js" ;

	export default {
		data () {
			return {
				list : [
					{
						name : 'Jack' ,
						age	 : 15 ,
						score : 87
					} ,
					{
						name : 'Tom' ,
						age : 14 ,
						score : 90
					} ,
					{
						name : 'Rose' ,
						age : 16 ,
						score : 100
					}
				]
			}
		} ,

		components : {  } ,

		methods : {
			hello : function(){
				console.log("hello list!");
			} ,
			judgeData : function(code = void 0 , message = ""){
				if(code * 1 !== 0){
					alert(message);
					return false ;
				}
				return true ;
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

</style>
