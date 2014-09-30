$(function() {

	$('button').on('click', function(e) {
    $('ul').append("<li>I'm a list element!</li>");
  });

  // $('li').on('click', function(e) {
  //   $(this).remove();
  // });

  $('ul').on('click', function(e) {
  	console.dir(e)
    $(e.target).remove();
  });
});