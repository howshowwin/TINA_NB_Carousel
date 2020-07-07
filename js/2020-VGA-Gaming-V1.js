
$(function(){

    //page nav scroll fixed
    var pnav = $("#page-tab-nav"),        
        pnavoffset = pnav.offset().top - $("#product-main-nav .navbar-container").height();
    $(window).scroll(function(){
        var pscrollpos=$(window).scrollTop();
        if(pscrollpos >=pnavoffset){
            pnav.addClass("fixed");
            var hi = $("#product-main-nav .navbar-container").height(),
                hi2 = pnav.height() + $(".page-tab-nav").height() ;
            $("#product-main-detail").css("margin-top",hi2);
            pnav.addClass("fixed").css("top",hi);
            console.log("on");
        }else{
            $("#product-main-detail").css("margin-top","0px");
            pnav.removeClass("fixed").css("top","auto");
            console.log("off");
        }
    });
    

    //page nav    
    page_nav_scroll();
    $(window).resize(function(){
        page_nav_scroll();
    });

    $("#page-tab-nav li a").click(function(){
        event.preventDefault();
        var this_offset = $(this.hash).offset().top - ( $("#product-main-nav .navbar-container").height() + $("#page-tab-nav").height() );
        $('html,body').animate({scrollTop:this_offset},1200);
    });

    $("#pdnavtab .sub-nav li a").click(function(){
        event.preventDefault();
        var this_offset = $(this.hash).offset().top - ($("#product-main-nav .navbar-container .title").height() + 30);
        $('html,body').animate({scrollTop:this_offset},1200);
    });


    //sub box silder autoHeight:true
    $('.sub-box-sildeshow').owlCarousel({
        nav:true,
        dot:true,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                autoHeight:true
            },
            600:{
                items:1,
                nav:false,
                autoHeight:true
            },
            1000:{
                items:1,
                nav:true
            }
        }     
    });



    //explosion
    explosion();
    $("#explosion-show .titlebox a").click(function(){
        event.preventDefault();
        var this_offset = $(this.hash).offset().top - ( $("#product-main-nav .navbar-container").height() + $("#page-tab-nav").height() );
        $('html,body').animate({scrollTop:this_offset},1200);
    });
    $(window).resize(function(){
        explosion();
    });

    //nv
    $('#nv').owlCarousel({
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                dot:true
            },
            1000:{
                items:3,
                nav:true,
                loop:false,
                margin:30,
            }
        }
    });

});

function explosion(){
    var that = $("#explosion-show");
    $(window).scroll(function(){
        var thatoffeset = that.offset().top * 0.8;
        var nextoffeset = that.offset().top + that.height();
        var scrollpos = $(window).scrollTop(); 
        if(scrollpos >= thatoffeset && scrollpos <= nextoffeset){
            if(!(that.hasClass("on"))){
                that.addClass("on");   
            }
        }
        else{
            that.removeClass("on");
        }
    });
}



function page_nav_scroll(){
    var page = $(".main-block-box"),
        pagenav = $("#page-tab-nav li"),
        pagenavsub = $("#pdnavtab .sub-nav li"),
        pageoffeset = $(".main-block-box:first-child").offset().top,
        pageprev = $(".main-block-box:first-child").offset().top - $(".main-block-box:first-child").height(),
        pagenext = $(".main-block-box:last-child").offset().top + $(".main-block-box:last-child").height();
    $(window).scroll(function(){
        var pagescrollpos = $(window).scrollTop(); 
        page.each(function() {
            var thisoffeset = $(this).offset().top * 0.85;
            var index = $(this).index();
            if (pagescrollpos >= pageprev && pagescrollpos <= pagenext){
                if(pagescrollpos >= thisoffeset){
                   pagenav.eq(index).addClass("active").siblings().removeClass("active");   
                   pagenavsub.eq(index).addClass("active").siblings().removeClass("active");   
                }                
            }
            else{
                pagenav.removeClass("active"); 
                pagenavsub.removeClass("active"); 
            }
        });

    });    
}