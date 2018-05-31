//注册和登录页个别效果调用(宽度小于980的时候nav和footer隐藏)
$(function(){
	$(window).resize(function(){
		var width= $(window).width();
			if(width < 980){
				var height= $(window).height();
				$('#content>.container h4').removeClass('pull-right');
			}else{
				$('nav .aqj-top,footer').css('display','block');
				$('.aqj-menu  h4').css({'line-height':'35px'});
			}
	})
})
