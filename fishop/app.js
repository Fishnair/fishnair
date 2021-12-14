$(document).ready(function () {
	$('#openCart').click(function () {
		$('#cart').removeClass('hidden');
	});
	$('#openCartMob').click(function () {
		$('#cart').removeClass('hidden');
		$('#page').removeClass('selected');
		$('#openCartMob').addClass('selected');
	});
	$('#close-cart').click(function () {
		$('#cart').addClass('hidden');
		$('#page').addClass('selected');
		$('#openCartMob').removeClass('selected');
	});
	
	$('.edit-prod-close-area').click(function(){
		$('#edit-prod').addClass('hidden');
	})

	$('.menu-item').click(function(){
		$('#edit-prod').removeClass('hidden');
	})
	$('#openEntrega').click(function () {
		$('#entrega').removeClass('hidden');
	});
	$('#close-entrega').click(function () {
		$('#entrega').addClass('hidden');
	});
  $('.header-nav-dropdown-toggle').click(function(){
    $(this).toggleClass('open');
  });
  $('#openUserMob').click(function () {
		$('#userMob').removeClass('hidden');
  });
  $('#userMob').click(function () {
		$('#userMob').addClass('hidden');
  });
  
  $('.delivery-item').click(function () {
		$('#delivery-details').removeClass('hidden');
  });
  $('#delivery-close').click(function () {
		$('#delivery-details').addClass('hidden');
	});

  $('.password-see').click(function(){
    if($(this).children('i').hasClass('fa-eye') == true){
      $(this).parent('.password-input-area').children('.password-input').attr('type', 'text');
      $(this).children('i').removeClass('fa-eye');
      $(this).children('i').addClass('fa-eye-slash')
    }else{
      $(this).parent('.password-input-area').children('.password-input').attr('type', 'password');
      $(this).children('i').removeClass('fa-eye-slash');
      $(this).children('i').addClass('fa-eye')
    }
  })
})

function mostrarSenha(element){
  console.log('Teste');
  document.getElementById(element).className = "far fa-eye-slash";
}