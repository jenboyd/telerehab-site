$(document).ready(function() {
 $(".owl-carousel").owlCarousel({
   items: 2,
   loop: true,
   margin: 0,
   lazyLoad: true,
   autoplay: 20000,
   autoplayTimeout: 5000,
   responsiveClass:true,
   responsive:{
      0:{
          items: 1,
          nav: false
      },
      901:{
          items: 2,
          nav: false
      }
   }
 });

  let isActive = false;

  $('.mobile-nav-button').on('click', function() {
    	if (isActive) {
    		$(this).removeClass('active');
    		$('body').removeClass('menu-open');
    	} else {
    		$(this).addClass('active');
    		$('body').addClass('menu-open');
    	}
    	isActive = !isActive;
  });

  $('.option').on('click', function() {
      $('.mobile-nav-button').removeClass('active');
      $('body').removeClass('menu-open');
      isActive = !isActive;
  });
});
