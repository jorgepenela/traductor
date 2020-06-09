$(document).ready(function () {
    

    if (window.location.href.indexOf("en") != -1) {
        
        // renueva el contenido
        $('.en').css('display','inline-block');
        $('.es, .por').css('display','none');

        $.each($('.tradulink'), function(index, dato){
           var attr = $(dato).attr("href").split('?')[0];
            $(dato).attr("href", attr+ "?lang=en");
                          
        });
        
    } else if(window.location.href.indexOf("por") != -1){
    	// renueva el contenido
    	$('.por').css('display','inline-block');
    	$('.es, .en').css('display','none');

    	$.each($('.tradulink'), function(index, dato){
    	   var attr = $(dato).attr("href").split('?')[0];
    	    $(dato).attr("href", attr+ "?lang=por");
    	                  
    	});


    } else if(window.location.href.indexOf("es") != -1){
    	// renueva el contenido
    	$('.es').css('display','inline-block');
    	$('.por, .en').css('display','none');

    	$.each($('.tradulink'), function(index, dato){
    	   var attr = $(dato).attr("href").split('?')[0];
    	    $(dato).attr("href", attr+ "?lang=es");
    	                  
    	});
    }

    
    //cuando cliqueo el boton #goen:

    //agrega parametro ?lang=en a los links con la clase "tradulink"
    $('#goen').click (function(){      
          $.each($('.tradulink'), function(index, dato){
             var attr = $(dato).attr("href").split('?')[0];
              $(dato).attr("href", attr+ "?lang=en");
                            
          });

          // renueva el contenido
          $('.en').css('display','inline-block');
          $('.es, .por').css('display','none');
    })


    $('#gopor').click (function(){      

    	$.each($('.tradulink'), function(index, dato){
    	   var attr = $(dato).attr("href").split('?')[0];
    	    $(dato).attr("href", attr+ "?lang=por");
    	                  
    	});
         
		// renueva el contenido
		$('.por').css('display','inline-block');
		$('.es, .en').css('display','none');
    })

    $('#goes').click (function(){      

    		$.each($('.tradulink'), function(index, dato){
    		   var attr = $(dato).attr("href").split('?')[0];
    		    $(dato).attr("href", attr+ "?lang=es");
    		                  
    		});
          
			// renueva el contenido
			$('.es').css('display','inline-block');
			$('.en, .por').css('display','none');
    })


    
});