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

  $('#config-entrega-close').click(function(){
		$('#config-entrega').addClass('hidden');
	});
	$('#config-entrega-open').click(function(){
		$('#config-entrega').removeClass('hidden');
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
  $('.edit-prod-title').click(function(){
		$('#edit-categ').removeClass('hidden');
  });
  $('#edit-categ-close').click(function(){
		$('#edit-categ').addClass('hidden');
  });
  $('.edit-prod-option').click(function(){
		$('#edit-item').removeClass('hidden');
  });
  $('#edit-item-close').click(function(){
		$('#edit-item').addClass('hidden');
  });

  $('.delete-button').click(function(){
		$('#delete-alert').removeClass('hidden');
  });
  $('#alert-close').click(function(){
		$('#delete-alert').addClass('hidden');
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
  $('.accept-row').click(function(){
		$('#accept-prod').removeClass('hidden');
  });
  $('#accept-prod-close').click(function(){
		$('#accept-prod').addClass('hidden');
  });

  $('#info-prod-close').click(function(){
		$('#info-prod').addClass('hidden');
  });
  $('.order-row').click(function(){
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
  
  $('#forgot-password').click(function(){
    $('#change-password').removeClass('hidden');
  });
  $('#change-password-close').click(function(){
    $('#change-password').addClass('hidden');
  });


  $('#highlights').click(function(){
    $('#highlights-area').removeClass('hidden');
  });	
  $('#highlights-close').click(function(){
    $('#highlights-area').addClass('hidden');
  });


  $('.password-see').click(function(){
    if($(this).children('i').hasClass('fa-eye') == true){
      $(this).parent('.password-input-area').children('.password-input').attr('type', 'text');
      $(this).children('i').removeClass('fa-eye');
      $(this).children('i').addClass('fa-eye-slash')
    }else{
      $(this).parent('.password-input-area').children('.password-input').attr('type', 'password');
      $(this).children('i').removeClass('fa-eye-slash');
      $(this).children('i').addClass('fa-eye');
    }
  });
});

