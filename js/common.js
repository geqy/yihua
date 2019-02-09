$(function(){
	$(".nav-1").hover(function(){
			$(".seclect1").stop(false,true).slideToggle();
	},function(){
			$(".seclect1").stop(false,true).slideToggle();
	});
/*-------以上是导航下拉效果-------------*/

	/*---------------------------*/
	$(".nav ul li .a1").click(function(){
		window.location.href = "index.html";
	})
	
	
	$(".seclect1 .ul1 .a-1").click(function(){
		
		window.location.href = "keting.html";
	})
	$(".seclect1 .ul1 .a-2").click(function(){
		
		window.location.href = "canting.html";
	})
	$(".seclect1 .ul1 .a-3").click(function(){
		
		window.location.href = "woshi.html";
	})
	$(".seclect1 .ul1 .a-4").click(function(){
		
		window.location.href = "shufang.html";
	})
	
	
	
	$(".seclect1 .ul2 .a-1").click(function(){
		
		window.location.href = "zizai.html";
	})
	$(".seclect1 .ul2 .a-2").click(function(){
		window.location.href = "rushi.html";
	})
	$(".seclect1 .ul2 .a-3").click(function(){
		
		window.location.href = "wanwu.html";
	})
	$(".seclect1 .ul2 .a-4").click(function(){
		window.location.href = "yishu.html";
	})
	$(".seclect1 .ul2 .a-5").click(function(){
		window.location.href = "shipin.html";
	})
	
	$(".nav ul li a .span1").click(function(){
		window.location.href = "login.html";
	})
	
	$(".nav ul li a .span2").click(function(){
		window.location.href = "regist.html";
	})
	
	$(".seclect1 .ul4 .a-2").click(function(){
		window.location.href = "liangfang.html";
	})
	$(".a8").click(function(){
		window.location.href = "wode.html";
	})
	
	
	$(".nav ul li .a4").click(function(){
		window.location.href = "dingzhi.html";
	})
	$(".nav ul li .a5").click(function(){
		window.location.href = "shangcheng.html";
	})
})

