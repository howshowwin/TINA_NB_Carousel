$(function () {
  function setRwdSub() {
    var sync1 = $("#sub-feature-content");
    var sync2 = $("#sub-feature-nav");
    var syncedSecondary = true;

    sync1
      .owlCarousel({
        items: 1,
        slideSpeed: 2000,
        autoplay: false,
        nav: false,
        dot: false,
        loop: true,
        mergeFit: false,
        mouseDrag: false,
        touchDrag: false,
        responsiveRefreshRate: 200,
      })
      .on("changed.owl.carousel", syncPosition);

    sync2
      .on("initialized.owl.carousel", function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })

      .on("changed.owl.carousel", syncPosition2);
    if ($(window).width() < 470) {
      sync2.owlCarousel({
        navigation: true,
        responsiveClass: true,
        nav: true,
        dot: false,
        loop: false,
        autoplay: false,
        center: true,
        items: 2,
      });
    }
    function syncPosition(el) {
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }

      //end block

      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find(".owl-item.active").length - 1;
      var start = sync2.find(".owl-item.active").first().index();
      var end = sync2.find(".owl-item.active").last().index();

      if (current > end) {
        sync2.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        sync2.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        sync1.data("owl.carousel").to(number, 100, true);
      }
    }

    sync2.on("click", ".owl-item", function (e) {
      e.preventDefault();
      var number = $(this).index();
      sync1.data("owl.carousel").to(number, 300, true);
      if ($(window).width() < 470) {
        sync2.data("owl.carousel").to(number, 300, true);
      }
    });

    $("#sub-feature-nav").owlCarousel({
      mouseDrag: false,
      touchDrag: false,
      autoWidth: true,
    });
  }
  setRwdSub();

  function checkarrow() {
    let c = $("#sub-feature-nav .owl-item").length - 1;

    let a = $("#sub-feature-nav .owl-item").eq(0).hasClass("current") ;
    let b = $("#sub-feature-nav .owl-item").eq(3).hasClass("current") ;
    if (a == true) {
      $("#sub-feature-nav .owl-nav .owl-prev").css({display:'none'})
    } else {
      $("#sub-feature-nav .owl-nav .owl-prev").css({display:'block'})
    }
    if (b == true) {
      $("#sub-feature-nav .owl-nav .owl-next").css({display:'none'})
    } else {
      $("#sub-feature-nav .owl-nav .owl-next").css({display:'block'})
    }
  }
  setInterval(() => {
    checkarrow();
  }, 100);
  checkarrow();
});
