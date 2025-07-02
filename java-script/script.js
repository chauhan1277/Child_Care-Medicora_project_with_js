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

$(document).ready(function() {
  $(".counter").counterUp();
});





$('.pi-img').parallax({imageSrc: './images/behavior-health.jpg'});

// animation on scroll


// slider

$('#slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
//   asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});