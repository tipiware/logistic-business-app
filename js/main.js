$(document).ready(function () {
  // Menu Hamburger
  $('.burger-btn').on('click', function () {
    $('.menu-collapse').toggleClass('d-none');
    $(this).toggleClass('burger-btn__active');
  })

   
 // Smooth goto products
 $("#goto__findmore").click(function() {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 1000);
  return false;
  });

  // Smooth goto about
 $("#goto__about").click(function() {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 1000);
  return false;
  });

  // Smooth goto facts
 $("#goto__facts").click(function() {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 1000);
  return false;
  });

   // Smooth goto testimonials
 $("#goto__testimonials").click(function() {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 1000);
  return false;
  });

   // Smooth goto contacts
 $("#goto__contacts").click(function() {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 1000);
  return false;
  });

  // Modal window write review
  $('#write-review').click(function() {
    $('#exampleModal').arcticmodal();
    });

  // Slick-Slider for bestsellers Home Page
  $(".bestsellers__slider").slick({
    infinite: true,
    loop: true,
    dots: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 528,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

  // Slider for testimonials Home Page
  $('.testimonials__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
	  speed: 0,
    cssEase: 'linear'
  });

  // Slider for testimonials Cafe Page
  $('.testimonials__slider-cafe').slick({
    infinite: true,
    autoplaySpeed: 3500,
	  speed: 0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true
  });

  