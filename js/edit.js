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

$(document).ready(function () {
  $('#laptop-button').click(function(){
    changeViewport(0)
  });
  $('#tablet-button').click(function(){
    changeViewport(1)
  });
  $('#mobile-button').click(function(){
    changeViewport(2)
  });
});