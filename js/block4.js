$(document).ready(function () {
   if ($(window).width() <= 630) {
      $('.block4__slider').slick({
         infinite: false,
         arrows: false,
         dots: true,
         appendDots: '.block4__slider-dots',
         variableWidth: true,
         centerMode: true,
      });
   } else {
      if ($.isFunction($.fn.slick) && $('.block4__slider').hasClass('slick-initialized')) {
         $('.block4__slider').slick('unslick');
      }
   }
});