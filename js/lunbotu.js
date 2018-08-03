
	let imgs=["1200-535.jpg","c1200-535.jpg","s1200x535.jpg","x1200x535.jpg","d1200-535.jpg","m1200x535.jpg"];
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
		},3000);
	}
	function showImg(outOrd,transOrd){
		ord=transOrd;
		if(ord>imgs.length-1 || ord<0){
			ord=0;
		}
		fadeInOut(outOrd,ord);
		$("#btns li").css({"backgroundColor":"#ffffff"});
		$("#btns li").eq(ord).css({"backgroundColor":"red"});
	}

	function fadeInOut(outOrd,inOrd){
		if(outOrd==inOrd){
			return;
		}
		$("#box img").eq(outOrd).fadeOut(100);
		$("#box img").eq(inOrd).fadeIn(800);
	}
		function lot(){
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
		
	// window.onload=function(){
	// 	initUI();
	// 	lot()

	// }

