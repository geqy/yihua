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
	
	
	$(".seclect1 .ul2 .a-1").click(function(){
		console.log("Aaa")
		window.location.href = "zizai.html";
	})
	$(".seclect1 .ul2 .a-2").click(function(){
		window.location.href = "rushi.html";
	})
	
	$(".nav ul li a .span1").click(function(){
		window.location.href = "login.html";
	})
	
	$(".nav ul li a .span2").click(function(){
		window.location.href = "regist.html";
	})
})

