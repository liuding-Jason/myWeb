
/*
* set dpr
*/
module.exports = {

	is_android : false ,
	is_ios : false ,
	is_winPhone : false ,
	is_pc : false ,

	getUserAgent : function(){
		let appV = window.navigator.appVersion ;
		if(appV.toUpperCase().indexOf("IPHONE") != -1){
			this.is_ios = true
			return ;
		}
		if(appV.toUpperCase().indexOf("ANDROID") != -1){
			this.is_android = true ;
			return ;
		}
		if(appV.toUpperCase().indexOf("WINDOWS PHONE") != -1){
			this.is_winPhone = true ;
			return ;
		}
		if(appV.toUpperCase().indexOf("WINDOWS") != -1){
			this.is_pc = true ;
			return ;
		}
	} ,	

	get : function(key){
		let t ;
		key && this.hasOwnProperty(key) ? t = this.key : t = null ;
		return t ;
	},

	getAll : function(){
		return { 
			is_android : this.is_android , 
			is_ios : this.is_ios , 
			is_winPhone : this.is_winPhone , 
			is_pc : this.is_pc 
		}
	} ,

	set : function(){
		this.getUserAgent();
		let dpr = window.devicePixelRatio ,
          	width = window.screen.availHeight  > window.screen.availWidth  ? window.screen.availWidth  : window.screen.availHeight  ,
          	html = document.getElementsByTagName('html')[0] ;
        html.setAttribute("data-dpr" , dpr) ;

        if(!this.is_pc){
        	html.style.fontSize = window.parseInt(width / dpr) + 'px' ;
        }else{
        	html.style.fontSize = '78px' ;
        }
	}
}