$(function () {
  /* Scroll event handler */
  $(window).bind('scroll', function (e) {
    parallaxScroll();
    console.log('test');

  });
  /* Scroll the background layers */
  function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('#parallax-bg1').css('top', (0 - (scrolled * .3)) + 'px');
    $('#parallax-bg2').css('top', (0 - (scrolled * .6)) + 'px');
    $('#parallax-bg3').css('top', (0 - (scrolled * 0.9)) + 'px');
  }

});