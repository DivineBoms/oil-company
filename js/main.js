$(document).ready(function(){
  $('.fa-bars').click(function(){
  $(this).toggleClass('fa-times');
  $('nav').toggleClass('nav-toggle');
  });
  $('nav ul li a').click(function(){
   $('.fa-bars').removeClass('fa-times');
  $('nav').removeClass('nav-toggle');
  });
  $(window).on('scroll load',function(){
      if($(window).scrollTop() > 10){
        $('#header').addClass('header-active');
      }else{
        $('#header').removeClass('header-active');
      }
  });
});

$('.clients-carousel').owlCarousel({
  autoplay: true,
  loop: true,
  margin: 15,
  dots: false,
  slideTransition: 'linear',
  autoplayTimeout: 4500,
  autoplayHoverPause: true,
  autoplaySpeed: 4500,
  responsive: {
    0: {
      items: 2
    },
    500: {
      items: 3
    },
    600: {
      items: 4
    },
    800: {
      items: 4
    },
    1200: {
      items: 4
    }

  }
});
