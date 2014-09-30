$(function() {
  var ids = '';
  var listItems = $('li');

  listItems.on('mouseover', function() {
    ids = this.id;
    // listItems.children('span').remove();
    $(this).append('<span class="priority">' + ids + '</span>');
  });

  listItems.on('mouseout', function() {
    $(this).children('span').remove();
  });
  
  listItems.on('click', function(){
    $(this).toggleClass("selected")
  })

  $('li').click(function(){
    alert("HELLO");
  });

});