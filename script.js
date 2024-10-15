$(document).ready(function(){
  $('.title').click(function(){
    $('.container').addClass('open');
  });
  
  
  $('.close').click(function(){
    $('.container').removeClass('open');
  });
});
$(document).ready(function() {
  $('#play-button').click(function() {
    var audio = document.getElementById('love-audio');
    audio.play();  // Reproduce el sonido al hacer clic
    $('.endtext').fadeIn(1000);  // Muestra el texto después de hacer clic
  });

  $('.close').click(function() {
    $('.endtext').fadeOut(1000);
  });
});
