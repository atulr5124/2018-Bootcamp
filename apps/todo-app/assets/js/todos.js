$(document).ready(function(e) {   
	$("li").click(function(){
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	});
});