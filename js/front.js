$(document).ready(function () {
	$('.faq-block').click(function(){
    $(this).toggleClass('open');
  });
  $('.hamburguer-header').click(function(){
    $(this).toggleClass('active')
    $('#menu-nav').toggleClass('hidden')
  })
});

function scrollPlans(){
  var plans = document.getElementById("plans-section");
  plans.scrollIntoView('block', 'smooth'); 
}