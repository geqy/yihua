$(function(){
	$(".al img").hover(function(){
		$(this).stop(true,false).animate({"width":"300px","height":"300px"},600)
	},function(){
		$(this).stop(true,false).animate({"width":"295px","height":"295px"},600)
	})
})
