$(function(){
	
/*----小图标区域------*/
$(".tubiao2-1 .span2").hover(function(){
	$(".tubiao2-1 .span2").html("客厅").css({"background":"#b52029"})
},function(){
	$(".tubiao2-1 .span2").html("").css({"background":"static"})
})
$(".tubiao2-1 .span3").hover(function(){
	$(".tubiao2-1 .span3").html("餐厅").css({"background":"#2f2f2f"})
},function(){
	$(".tubiao2-1 .span3").html("").css({"background":"static"})
})
$(".tubiao2-1 .span4").hover(function(){
	$(".tubiao2-1 .span4").html("卧室").css({"background":"#424242"})
},function(){
	$(".tubiao2-1 .span4").html("").css({"background":"static"})
})
$(".tubiao2-1 .span5").hover(function(){
	$(".tubiao2-1 .span5").html("厨房").css({"background":"#2f2f2f"})
},function(){
	$(".tubiao2-1 .span5").html("").css({"background":"static"})
})
$(".tubiao2-1 .span6").hover(function(){
	$(".tubiao2-1 .span6 ul").css({"display":"block"});
},function(){
	$(".tubiao2-1 .span6 ul").css({"display":"none"});
})
$(".tubiao2-1 .span6 li").hover(function(){
	$(this).css({"background":"#cecece"}).siblings().css({"background":"static"})
},function(){
	$(this).css({"background":"static"})
})
$(".tubiao2-1 .span6 li").on("click",function(){

	$(".tubiao2-1 .span6-1").html($(this).html())
})


$(".content .big-ul li").hover(function(){
   $(this).find(".font1").addClass("bg-li");
// $(this).find(".font1 ").css("color: #fff");
 
},function(){
	
	$(this).find(".font1").removeClass("bg-li");
})



})