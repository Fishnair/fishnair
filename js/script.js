$(document).ready(function () {
	$('.sidebar-nav-dropdown-toggle').click(function(){
    $(this).toggleClass('open');
	});

  $('.header-nav-dropdown-toggle').click(function(){
    $(this).toggleClass('open');
	});
	$('#sidebar-toggle').click(function(){
    $('#sidebar').toggleClass('sidebar-active');
  });	
  
  $('.sidebar-fade').click(function(){
    $('#sidebar').toggleClass('sidebar-active');
  });	




  $('.edit-prod-close').click(function(){
		$('#edit-prod').addClass('hidden');
	});

	$('#edit-prod-button').click(function(){
		$('#edit-prod').removeClass('hidden');
  });    

  $('.edit-prod-add-categ').click(function(){
		$('#add-categ').removeClass('hidden');
  });
  $('#add-categ-open').click(function(){
		$('#add-categ').removeClass('hidden');
  });
  $('#add-categ-close').click(function(){
		$('#add-categ').addClass('hidden');
  });

  $('.addition-add-item').click(function(){
		$('#add-item').removeClass('hidden');
  });

  $('#add-item-close').click(function(){
		$('#add-item').addClass('hidden');
  });

  $('#info-prod-close').click(function(){
		$('#info-prod').addClass('hidden');
  });
  $('.table-row').click(function(){
		$('#info-prod').removeClass('hidden');
  });

  $('#entregador-close').click(function(){
		$('#confirmar-envio').addClass('hidden');
  });
  $('#enviar-pedido').click(function(){
		$('#confirmar-envio').removeClass('hidden');
  });

  $('#entregador-envio').click(function(){
    $('#confirmar-envio').addClass('hidden');
    $('#info-prod').addClass('hidden');
  });



  $('#giftcard-add').click(function(){
    $('#add-giftcard').removeClass('hidden');
  });	

  $('#add-giftcard-close').click(function(){
    $('#add-giftcard').addClass('hidden');
  });	
  

});

