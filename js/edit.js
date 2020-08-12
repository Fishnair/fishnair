function changeViewport(type){
  if(type == screen){
    return
  }
  
  if(type == 0){
    $('#screen').width(900);
    $('#screen').height(600);
    $('#laptop-button').addClass('selected');
  } else if(type == 1){
    $('#screen').width(578);
    $('#screen').height(650);
    $('#tablet-button').addClass('selected');
  } else if(type == 2){
    $('#screen').width(300);
    $('#screen').height(507);
    $('#mobile-button').addClass('selected');
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