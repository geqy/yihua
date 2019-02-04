$(function(){
	
	(function(){
		let i = 0;
		var timer = null;
		function lunbo1(){
			timer = setInterval(function(){

				i++;
				if (i>=4) {
					$(".lunbo1 ul").css({"left":0})
					i=1;
				}
				
				//此为轮播图标随图走
				
				$(".lunbo1-spot span").eq(i).addClass("bgspot")
				.siblings().removeClass("bgspot");
				$(".lunbo1 ul").show().stop().animate({"left":-(i)*441+"px"})
				if (i==3) {
					$(".lunbo1-spot span").eq(0).addClass("bgspot")
					.siblings().removeClass("bgspot");
				}
				$(".lunbo1-spot span").on("click",function(){
					$(".lunbo1 ul").show().stop().animate({"left":-($(this).index())*441+"px"})
					i = $(this).index();
					$(".lunbo1-spot span").eq(i).addClass("bgspot")
					.siblings().removeClass("bgspot");
				})	
			},3000)	
		}
		lunbo1();
		
		$(".lunbo1-spot").hover(function(){
			clearInterval(timer);
		},function(){
			lunbo1()
		})
	})();
	/*---------以上是轮播js--------------*/
	
	
	$(".tu1").hover(function(){
		$(".tu1 img").stop(true,false).animate({"width":"255px","height":"388px"},600)
	},function(){
		$(".tu1 img").stop(true,false).animate({"width":"235px","height":"368px"},600)
	})
	$(".tu2").hover(function(){
		$(".tu2 img").stop(true,false).animate({"width":"424px","height":"298px"},600)
	},function(){
		$(".tu2 img").stop(true,false).animate({"width":"404px","height":"278px"},600)
	})
	$(".tu3").hover(function(){
		$(".tu3 img").stop(true,false).animate({"width":"366px","height":"258px"},600)
	},function(){
		$(".tu3 img").stop(true,false).animate({"width":"346px","height":"238px"},600)
	})
	$(".tu6").hover(function(){
		$(".tu6 img").stop(true,false).animate({"width":"199px","height":"299px"},600)
	},function(){
		$(".tu6 img").stop(true,false).animate({"width":"179px","height":"279px"},600)
	})
	$(".tu7").hover(function(){
		$(".tu7 img").stop(true,false).animate({"width":"580px","height":"335px"},600)
	},function(){
		$(".tu7 img").stop(true,false).animate({"width":"560px","height":"315px"},600)
	})
	window.onload = function(){//图片放大 以及滑动效果
		let flag = true;
		let flag1 = true;
		$(".tu1").css({"top":"1178px"}).fadeOut();
		$(".tu2").css({"top":"1108px"}).fadeOut();
		$(".tu3").css({"left":"1008px"}).fadeOut();
		$(".tu6").css({"left":"1508px"}).fadeOut();
		$(".tu7").css({"left":"1408px"}).fadeOut();
		
			$(window).scroll(function(){
				if (flag) {
					if ($(document).scrollTop()>=900) {
						$(".tu1").show().fadeIn().stop().animate({"top":"1580px"},800)
						.animate({"top":"1528px"},1000);
						
						$(".tu2").show().fadeIn().stop().animate({"top":"1538px"},1300)
						.animate({"top":"1484px"},1000);
						
						$(".tu3").show().fadeIn().stop().animate({"left":"544px"},1300)
						.animate({"left":"554px"},1000);
						flag = false;
					}
					
				}
				
				if (flag1) {
						if ($(document).scrollTop()>=1600) {
		
							$(".tu6").show().fadeIn().stop(true,false).animate({"left":"149px"},900)
								.animate({"left":"199px"},1000);
								setTimeout(function(){
									$(".tu7").show().fadeIn().stop(true,false).animate({"left":"362px"},1300)
							.animate({"left":"392px"},1000);
							flag1 = false;
								},300)

						}
					
					}

			});
			
			
		
	}
	
	
	
})
