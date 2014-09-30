$('button').on("click", function(){
	//grab data from form
	var data = $('input').val();
	console.log(data)
	//make new li and append it to ul
	var li = "<li>" + data + "</li>"
	$('ul').append(li);
	//clear the form
	$('input').val('');
});