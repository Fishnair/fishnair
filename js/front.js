$(document).ready(function () {
	$('.faq-block').click(function(){
    $(this).toggleClass('open');
  });
});

function scrollPlans(){
  var plans = document.getElementById("plans-section");
  plans.scrollIntoView('block', 'smooth'); 
}