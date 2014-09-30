// A function called jQuery lets us find elements on the page
jQuery("h1").css("color", "purple");

// $ is the shorthand for the jQuery function
$('ul').css("border", "2px solid grey");
$('li').addClass("todo");
$('li:last').addClass("done");

// A simple click event using jQuery
$('li').on('click', function(){
	$(this).remove();
});

