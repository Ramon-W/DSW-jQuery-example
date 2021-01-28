$(document).ready(function() {
	$("h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
	});
	$("#p1").click(function() {
		$(".disappear").hide();
		$("body").css({"background-color": "purple"});
		$("p").css({"color": "green"});
	});
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});
	$("img").mouseenter(function(){
                $("img").animate({left: '250px'});
        });
	$(".disappear").mouseenter(function() {
		alert("Annoying pop-up");
	});
});
