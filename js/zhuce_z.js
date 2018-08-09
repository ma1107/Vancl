$("#yz").onblur=function(){
	$("#yz_a").innerHTML="";
	var reg=/^[a-zA-Z0-9]{6}$/;
	if(reg.test(this.value)==false){
		$("#yz_a").innerHTML="您输入的验证码有误";
		$("#yz_a").style.color="red";
	}else{
		// $("#yz_a").innerHTML="√";
		$("#yz_a").style.color="#15fb25";
	}
}

$("#userphone").onblur=function(){
	$("#phone_a").innerHTML="";
	var reg=/^1{3|4|5|7|8|9}\d{9}$/;
	if(reg.test(this.value)==false){
		$("#phone_a").innerHTML="您输入的手机号有误";
		$("#phone_a").style.color="red";
	}else{
		$("#phone_a").innerHTML="√";
		$("#phone_a").style.color="#15fb25";
	}
}
$("#userpass").onblur=function(){
	var str=$("#userpass").value;
	$("#pass_a").innerHTML="";
	var reg=/^[A-Za-z0-9]\w{6,15}$/;
	if(reg.test(this.value)==false){
		$("#pass_a").innerHTML="您输入的密码有误";
		$("#pass_a").style.color="red";
		$("#pass_d").style.display="none";
	}else {
		if(str.length<=8){
			$("#pass_b").style.display="block";
		}else if(str.length<=12){
			$("#pass_c").style.display="block";
			$("#pass_b").style.display="none";
		}else if(str.length<=15){
			$("#pass_d").style.display="block";
			$("#pass_c").style.display="none";
		}
	}
}
$("#zpass").onblur=function(){
		var str=$("#zpass").value;
		if(str==""){
			$("#zpass_a").innerHTML="请输入密码";
		}else if(str!=$("#userpass").value){
			$("#zpass_a").innerHTML="输入的密码不一致";
			$("#zpass_a").style.color="red";
		}else{
			$("#zpass_a").innerHTML="√";
			$("#zpass_a").style.color="#15fb25";
		}
	}