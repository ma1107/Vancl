$(function(){
			$(".option_a2").hover(function(){
			$(this).children(".option_a2_a").slideDown(500);
		},function(){
			$(this).children(".option_a2_a").slideUp(500);
		});

		$("#a").click(function(){
			$("#a").css({"border":"2px solid #a10000","background":"url(img/detail/4.png) no-repeat right bottom"});
			$("#b").css({"border":"none","background":"none"})
		});
		$("#b").click(function(){
			$("#b").css({"border":"2px solid #a10000","background":"url(img/detail/4.png) no-repeat right bottom"});
			$("#a").css({"border":"none","background":"none"})
		});

		$("#bk1 p").click(function(){
			$("#bk1 p").css({"width":"22px","height":"22px","border":"2px solid #a10000","background":"url(img/detail/4.png) no-repeat right bottom"});
			$("#bk2 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk3 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk4 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk5 p").css({"border":"1px solid #c8c8c8","background":"none"})
		})
		$("#bk2 p").click(function(){
			$("#bk2 p").css({"width":"22px","height":"22px","border":"2px solid #a10000","background":"url(img/detail/4.png) no-repeat right bottom"});
			$("#bk1 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk3 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk4 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk5 p").css({"border":"1px solid #c8c8c8","background":"none"})
		})
		$("#bk3 p").click(function(){
			$("#bk3 p").css({"width":"22px","height":"22px","border":"2px solid #a10000","background":"url(img/detail/4.png) no-repeat right bottom"});
			$("#bk1 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk2 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk4 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk5 p").css({"border":"1px solid #c8c8c8","background":"none"})
		})
		$("#bk4 p").click(function(){
			$("#bk4 p").css({"width":"22px","height":"22px","border":"2px solid #a10000","background":"url(img/detail/4.png) no-repeat right bottom"});
			$("#bk1 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk2 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk3 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk5 p").css({"border":"1px solid #c8c8c8","background":"none"})
		})
		$("#bk5 p").click(function(){
			$("#bk5 p").css({"width":"22px","height":"22px","border":"2px solid #a10000","background":"url(img/detail/4.png) no-repeat right bottom"});
			$("#bk1 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk2 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk3 p").css({"border":"1px solid #c8c8c8","background":"none"})
			$("#bk4 p").css({"border":"1px solid #c8c8c8","background":"none"})
		})


});
//吸顶效果
$(function () {
    var ie6 = document.all;
    var dv = $('.mc');
    var st;
    dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离  
    $(window).scroll(function () {
        st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
        if (st > parseInt(dv.attr('otop'))+500) {
            if (ie6) {//IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果  
                dv.css({ position: 'absolute', top: st });
            }
            else if (dv.css('position') != 'fixed') dv.css({ 'position': 'fixed', top: "0",'z-index':'999' });
        } else if (dv.css('position') != 'static') dv.css({ 'position': 'static', 'border-bottom': 'none' });
    });
}); 


	