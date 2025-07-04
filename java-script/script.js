AOS.init();

// Header script

// Navbar scrolling

// $(function(){
//     var navbar = $('sc-nav');
//     $($(window).scroll(function(){
//         if($(window).scrollTop()<=40){
//             navbar.removeClass('navbar-scroll');
//         }else{
//             navbar.addClass('navbar-scroll');
//         }
//     }));
// });


// Auto-run count number

$(document).ready(function () {
  $(".counter").counterUp();
});





$(document).ready(function () {
  $('#slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});