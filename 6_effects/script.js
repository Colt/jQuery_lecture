$(function() {

  $('h2').hide().slideDown();

  var li = $('li');

  li.hide().each(function(index) {
    $(this).delay(700 * index).fadeIn(5000);
  });

  li.on('click', function() {
    $(this).fadeOut(700);
  });

});