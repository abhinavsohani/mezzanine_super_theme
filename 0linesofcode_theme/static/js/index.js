$(function() {
  // start the icon carousel
  $('#iconCarousel').carousel({
    interval: 5000
  });

  // make code pretty
  window.prettyPrint && prettyPrint();

  // inject twitter & github counts
  $.ajax({
    url: 'http://api.twitter.com/1/users/show.json',
    data: {screen_name: '0linesofcode'},
    dataType: 'jsonp',
    success: function(data) {
      $('#followers').html(data.followers_count);
    }
  });
  $.ajax({
    url: 'https://api.github.com/users/markdotto/followers',
    dataType: 'jsonp',
    success: function(data) {
	
      $('#watchers').html(0);
      $('#forks').html(0);
    }
  });




});
