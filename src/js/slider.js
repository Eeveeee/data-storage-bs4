$(document).ready(function () {
  $(".reviews-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: "ease",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
        },
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
