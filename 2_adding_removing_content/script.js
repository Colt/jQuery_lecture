var list = $('ul').html();
$('ul').append(list);

var list_text = $('ul').text();
$('ul').append(list_text);

$('ul').append("<h1>" + list_text + "</h1>");

// $('li').text("OH NO YOU MESSED UP");

var gif = $('<img src="http://i.giphy.com/GesKJ8y7YAXII.gif">')
$('ul').append(gif)

// a.prepend(b) adds b to  a
// a.prependTo(b) adds a to b