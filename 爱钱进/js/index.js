$(function(){
	$('#header').load("header.html #header");
    $('#footer').load("header.html #footer");
    // var width=$(window).width();
    // // alert(width)
    // if(width<780){
    //     window.location="login.html"
    // }else{
    //     window.localtion="index.html"
    // }
//   轮播图宽度
			//页面加载执行一次划入banner,出现左右翻页
         $('#banner').hover(function(){
         	$('#banner .carousel-control').css('display','block')
         });
    $(window).resize(function(){
        var width=$(window).width();
        console.log('当前宽度为:'+width+'px');
        $('#banner').hover(function(){
            if(width < 1250 ){
                $('#banner .carousel-control').css({
                    'display':'none'
                })
            }else{
                $('#banner .carousel-control').css({
                    'display':'block'
                })
            }
        },function(){
            $('#banner .carousel-control').css({
                'display':'none'
            })
        })
    })


})

