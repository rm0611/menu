$(function() {
  $('#menu dt').click(function() {
    $('#menu dd').slideToggle();
  });
});

var str = 'This is a sample text' + '<br>';
document.getElementById('repeat').innerHTML = str.repeat(50);




//initialize scrollTop Button
var topBtn = $('#scrollTop');
topBtn.hide();


//show the button if the page is being scrolled
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    topBtn.fadeIn(); //show while fade in
  } else {
    topBtn.fadeOut(); //fade out
  }
});

//click and scroll up
topBtn.click(function(event) {
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});