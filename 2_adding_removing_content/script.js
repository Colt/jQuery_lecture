var list = $('ul').html();
alert("about to double");
$('ul').append(list);

alert("about to add text");

var list_text = $('ul').text();
$('ul').append(list_text);


$('ul').append("<h1>" + list_text + "</h1>");

// $('li').text("OH NO YOU MESSED UP");

var gif = $('<img src="http://i.giphy.com/GesKJ8y7YAXII.gif">')
$('ul').append(gif)

// a.prepend(b) adds b to  a
// a.prependTo(b) adds a to b