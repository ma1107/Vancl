$(function(){
			$(".option_a2").hover(function(){
			$(this).children(".option_a2_a").slideDown(500);
		},function(){
			$(this).children(".option_a2_a").slideUp(500);
		});
});


$(function(){
	 $(".rush-top .rr").mouseover(function(){
	 	  var index1=$(this).index();
	 	  $(".rush-bot>div").eq(index1).show().siblings().hide();
          // $(this).addClass("bb").siblings().removeClass("bb"); 
          $(this).addClass("bb").siblings().removeClass("bb");
          $(this).children().css("color","#fff"); 
	 	  $(this).siblings().children().css("color","#000");
	 })
})
