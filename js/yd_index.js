let imgs=["2018_7_26_11_12_33_9562_640x402.jpg","2018_7_26_14_28_43_9009_640x402.jpg","2018_8_1_15_28_38_3383_640x402.jpg","2018_8_1_15_28_48_6646_640x402.jpg","2018_8_1_15_28_57_5015_640x402.jpg","2018_8_1_15_29_9_8295_640x402.jpg"];
	let ord=0;
	let myTimer=null;
	function initUI(){
		$("#btns li:first").css({"background-color":"red"});
		$("#box img").slice(1).css({"display":"none"});
	}
	function changeImg(){
		myTimer=setInterval(function(){
			let outOrd=ord;
			ord=ord+1;
			showImg(outOrd,ord);
		},2000);
	}
	function showImg(outOrd,transOrd){
		ord=transOrd;
		if(ord>imgs.length-1 || ord<0){
			ord=0;
		}
		fadeInOut(outOrd,ord);
		$("#btns li").css({"backgroundColor":"orange"});
		$("#btns li").eq(ord).css({"backgroundColor":"red"});
	}

	function fadeInOut(outOrd,inOrd){
		if(outOrd==inOrd){
			return;
		}
		$("#box img").eq(outOrd).fadeOut(1000);
		$("#box img").eq(inOrd).fadeIn(1000);
	}
	window.onload=function(){
		initUI();
		time();
		$("#box img").click(function(){
			let index=$("#box img").index(this);
			window.location.href=hrefs[index];
		});
		changeImg();
		$("#box").mouseover(function(){
			clearInterval(myTimer);
		});
		$("#box").mouseout(function(){
			changeImg();
		});

		$("#btns li").click(function(){
			clearInterval(myTimer);
			$("#box img").eq(ord).stop(true,true);
			let index=$("#btns li").index(this);
			showImg(ord,index);
		});
	}


	function time(){

		var hours;
		var minutes;
		var seconds;
		var my=null;

		 hours=parseInt(document.getElementById("getHours").innerHTML);
	     minutes=parseInt(document.getElementById("getMinutes").innerHTML);
	     seconds=parseInt(document.getElementById("getSeconds").innerHTML);
			if(my==null){
			my=setInterval(changeTime,1000);
		}
			function changeTime(){
			seconds--;
			if(seconds<0){
	           if(minutes<=0){
	           	if(hours<=0){
	           		clearInterval(my);
	           		my=numll;
	           	}else{
	           		hours--;
	                minutes=59;
	                seconds=59;
	           	}
	           }
				else{
					minutes--;
				  seconds=59;
			   }
			}
				
			document.getElementById("getHours").innerHTML=hours;
			hours=("0"+hours).substr(-2);
			document.getElementById("getMinutes").innerHTML=minutes;
			minutes=("0"+minutes).substr(-2);
			document.getElementById("getSeconds").innerHTML=seconds;
			seconds=("0"+seconds).substr(-2);
		}

	}
