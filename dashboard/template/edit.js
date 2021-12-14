$(document).ready(function () {
	$('#banner').hover(function () {
    $('#banner').addClass('hover');
  });
  $('#banner').mouseleave(function () {
    $('#banner').removeClass('hover');
  });

  $('.paralax-title').mouseenter(function () {
    $('#banner').removeClass('hover');
  });
  $('.paralax-subtitle').mouseenter(function () {
    $('#banner').removeClass('hover');
  });

  $('.paralax-title').mouseleave(function () {
    if($('#banner').hover()){
      $('#banner').addClass('hover');
    }
  });
  $('.paralax-subtitle').mouseleave(function () {
    if($('#banner').hover()){
      $('#banner').addClass('hover');
    }
  });
});