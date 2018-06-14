$(document).ready(function(e) {   

	// click on list item to disable
	// using "on" instead of "click" event helps to apply the listener to al future elements
	// it should be apply on elements which exist when the page loads for the first time
	// therefore, we add this listener on ul and not on li directly
	$("ul").on("click", "li", function(){
		$(this).toggleClass("completed");
	});

	// click on X to delete todo
	$("ul").on("click","span", function(event) {
		$(this).parent().fadeOut(500, function() {
			// remove will happend after the fade out because it is called in the callback function
			$(this).remove();
		});
		event.stopPropagation();
	});

	$("input[type='text']").keypress(function(event) {
		if(event.which === 13) {
			var todoText = $(this).val();
			$(this).val("");
			// create a new li and add it to ul
			$("ul").append("<li><span><i class='fa fa-trash'></i></span>&nbsp;"+todoText+"</li>");
		}
	});

	$(".fa-plus").click(function(){
		$("input[type='text']").fadeToggle();
	});
});