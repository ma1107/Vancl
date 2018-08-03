    function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
    
    var hours=$("#s");
	var seconds=$("#f");
	var ms=$("#m");
	var myTimer=null;
	window.onload=function(){
		myTimer=setInterval(function(){
			ms--;
			if(ms<=0){
				ms=59;
				seconds--;
				if(seconds<=0){
					seconds=59;
					hours--;
				}
			}
			var mStr=("0"+hours).substr(-2);
			var sStr=("0"+seconds).substr(-2);
			var msStr=("0"+ms).substr(-2);
			document.getElementById("box").innerHTML=mStr+":"+sStr+":"+msStr;
		},1000);
	}
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}