// CHECK ON/OFF TASKS
$("ul").on("click", "li", function() {
	$(this).toggleClass("strikethrough");
});

// REMOVE TASKS
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(function() {
		$(this).remove();
	});
	event.stopPropagation();
})

// ADD NEW TASKS
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		var task = $(this).val();
		$("ul").append("<li><span><i class='fa fa-heartbeat'></i></span> " + task + "</li>");
		$(this).val("");
	}
})

// TOGGLE BUTTON
$(".fa-plus-circle").click(function() {
	$("input[type='text']").fadeToggle();
});