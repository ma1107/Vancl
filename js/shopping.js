 //加
 $('.add').click(function(){
	//数量
	var t = $(this).parents('.gwc_c2').find('.vals');
	//单价
	var p = $(this).parents('.gwc_c2').find('.dj');
	//小计
	var s = $(this).parents('.gwc_c2').find('.xj');
	t.val(parseInt(t.val())+1);
	s.html( (parseInt(t.val()) * parseFloat(p.html())).toFixed(2));
	sum();
})
 //减
$('.min').click(function(){
	//数量
	var t = $(this).parents('.gwc_c2').find('.vals');
	//单价
	var p = $(this).parents('.gwc_c2').find('.dj');
	//小计
	var s = $(this).parents('.gwc_c2').find('.xj');
	t.val(parseInt(t.val())-1);
	if(t.val() <=1){
		t.val(1)
	}
	s.html( (parseInt(t.val()) * parseFloat(p.html())).toFixed(2))
	sum();
})
//单选
$('.checkgoods').click(function(){
	if($('.checkgoods:checked').length == $('.checkgoods').length){
		del();
		$('.checkAll').prop('checked',true);
		sum();
		
	}else{
		$('.checkAll').prop('checked',false);
		sum();
	}
})
$('.checkAll').click(function(){
	if($(this).is(':checked')){ 
		$(':checkbox').prop('checked',true);
		sum();
		del();
	}else{
		$(':checkbox').prop('checked',false);
		sum();
	}
})
$('.delete').click(function(){
	if(window.confirm("您确定要删除吗？")==true){
		$(this).parentsUntil(".gwc_c").detach(".gwc_c2");
	}
})
function del(){
	$('.deletes').click(function(){
	if(window.confirm("您确定要删除吗？")==true){
		$(".gwc_c").detach(".gwc_c2");
	}
})
}
	


function sum(){
	var total_num = 0;
	var total_price = 0;
	$('.checkgoods').each(function(){
		if($(this).is(':checked')){
			var nums = parseInt($(this).parents('.gwc_c2').find('.vals').val());
			var sums = parseFloat($(this).parents('.gwc_c2').find('.xj').html());
			total_num += nums;
			total_price += sums;
		}
		$('.already').html(total_num);
		$('.total').html((total_price).toFixed(2))
	})
}
