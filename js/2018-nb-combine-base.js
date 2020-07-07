$(function () {
  // $('#sub-feature-content').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   asNavFor: '#sub-feature-nav',
  //   infinite: false
  // });
  // $('#sub-feature-nav').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   asNavFor: '#sub-feature-content',
  //   // dots: true,
  //   centerMode: true,
  //   focusOnSelect: true,
  //   infinite: false,
  //   arrows: false
  // });

  let $team_slider = $("#sub-feature-content");
  let team_slider_settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    touchMove: true,
    speed: 400,
    asNavFor: "#sub-feature-nav",
    // infinite: false,
  };

  $team_slider.slick(team_slider_settings);

  let $team_slider_2 = $("#sub-feature-nav");
  let team_slider_settings_2 = {
    dots: false,
    arrows: false,

    centerPadding: 0 ,

    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: "#sub-feature-content",
    swipe: true,
    touchMove: true,
    centerMode: true,
    focusOnSelect: true,

    prevArrow: `<div class="slider__class1-prev setbg"></div>`,
    nextArrow: `<div class="slider__class1-next setbg"></div>`,
    speed: 400,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  $team_slider_2.slick(team_slider_settings_2);

  $(window).on("resize", function () {
    if (!$team_slider.hasClass("slick-initialized")) {
      return $team_slider.slick(team_slider_settings);
    }
    if (!$team_slider.hasClass("slick-initialized")) {
      return $team_slider.slick(team_slider_settings);
    }
  });
});
