$(function(){
			$(".option_a2").hover(function(){
			$(this).children(".option_a2_a").slideDown(500);
		},function(){
			$(this).children(".option_a2_a").slideUp(500);
		});
});
