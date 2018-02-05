// check off todo by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// delete todo by clicking x
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// add listener to input for enter key
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// extract string from input
		var todoText = $(this).val();
		// clear input
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

// add click listener for + icon
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});