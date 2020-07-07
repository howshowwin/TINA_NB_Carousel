
$(function(){

    //wow
    new WOW().init();
    
	// //gallery loop 
    $('#pd-slideshow').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        items:1,
        loop:true,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        thumbs: true,
        thumbImage: false,
        thumbsPrerendered: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item'
    });


    //pd nav show    
    var pdnav = $("#pdnavtab");
    $("#bt-pdnavtab-show").click(function(){        
        if (pdnav.is(":hidden")) {
            pdnav.slideDown();
        }
        else{
            pdnav.slideUp();
        }
    });

    pdnav.find("a").click(function(){
        if($(window).width() < 1024){
           pdnav.slideUp();
       }        
    });

    $(window).resize(function(){
        if($(window).width() >= 1024){
            pdnav.show();
        }
    });


    //pd nav scroll fixed
    var pdnavbar = $("#product-main-nav .navbar-container"),        
        navoffset = pdnavbar.offset().top;
    $(window).scroll(function(){
        var scrollpos=$(window).scrollTop();
        if(scrollpos >=navoffset){
            pdnavbar.addClass("fixed");
            var hi = pdnavbar.height();
            $("#product-main-detail").css("margin-top",hi);
        }else{
            pdnavbar.removeClass("fixed");
            $("#product-main-detail").css("margin-top","0px");
        }
    });




    
});
