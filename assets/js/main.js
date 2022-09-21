jQuery(document).ready(function($) {


	var mastheadheight = $('.header').outerHeight();
	console.log(mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.header').addClass('fixed-header');
	    }
	    else {
	        $('.header').removeClass('fixed-header');
	    }
	}).scroll();

	$(".menu").click(function(){
	  $(".main_nav").toggleClass("opened");
	});
	$(".scroll").click(function(){
	  $(".main_nav,.menu ").removeClass("opened");
	});

	$( "#accordion" ).accordion();

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
	  
	
	    

});