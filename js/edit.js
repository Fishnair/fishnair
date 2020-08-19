let screen = 0;

function changeViewport(type){
  if(type == screen){
    return
  }else if(screen == 0){
    $('#laptop-button').removeClass('selected');
  }else if(screen == 1){
    $('#tablet-button').removeClass('selected');
  }else if(screen == 2){
    $('#mobile-button').removeClass('selected');
  }

  if(type == 0){
    $('#screen').width(900);
    $('#screen').height(667);
    $('#laptop-button').addClass('selected');
    screen = 0;
  } else if(type == 1){
    $('#screen').width(578);
    $('#screen').height(667);
    $('#tablet-button').addClass('selected');
    screen = 1;
  } else if(type == 2){
    $('#screen').width(375);
    $('#screen').height(667);
    $('#mobile-button').addClass('selected');
    screen = 2;
  }
}

var teste = document.getElementById('screen').contentWindow.document.getElementById('subtitle-destaques');

$(document).ready(function () {
  $('.sidebar-toggle-title').click(function(){
    $(this).toggleClass('open');
	});

  $('#laptop-button').click(function(){
    changeViewport(0)
  });
  $('#tablet-button').click(function(){
    changeViewport(1)
  });
  $('#mobile-button').click(function(){
    changeViewport(2)
  });

  $('input').focus(function(){
    $(this).parentsUntil('.sidebar-toggle').prev().addClass("open");
  });
  $('textarea').focus(function(){
    $(this).parentsUntil('.sidebar-toggle').prev().addClass("open");
  });

  $('#screen').contents().find('#logo-header').click(function(){
    $('#logo-input').focus();
    $('#logo-input').trigger('click');
  });

  $('#screen').contents().find('#title-banner').click(function(){
    $('#title-banner-input').focus();
  });
  $('#screen').contents().find('#subtitle-banner').click(function(){
    $('#subtitle-banner-input').focus();
  });
  $('#screen').contents().find('#banner').click(function(e){
    $('#banner-input').focus();
    $('#banner-input').trigger('click');
  }).children().click(function() {
    return false;
  });;

  $('#screen').contents().find('#title-destaques').click(function(){
    $('#title-destaques-input').focus();
  });
  $('#screen').contents().find('#subtitle-destaques').click(function(){
    $('#subtitle-destaques-input').focus();
  });

  $('#screen').contents().find('#title-about').click(function(){
    $('#title-about-input').focus();
  });
  $('#screen').contents().find('#subtitle-about').click(function(){
    $('#subtitle-about-input').focus();
  });
  $('#screen').contents().find('#desc-about').click(function(){
    $('#desc-about-input').focus();
  });
  $('#screen').contents().find('#image-about').click(function(){
    $('#image-about-input').focus();
    $('#image-about-input').trigger('click');
  });

  $('#screen').contents().find('#desc-footer').click(function(){
    $('#desc-footer-input').focus();
  }); $('#screen').contents().find('#logo-footer').click(function(){
    $('#logo-input').focus();
    $('#logo-input').trigger('click');
  });
 
});