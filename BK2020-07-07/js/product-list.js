
$(function(){
	//filter
    $(".bt-filter-group").click(function(){
        var sel = $(this).parent().find("ul,.bt-showmore");
        if(sel.is(":visible")){
            sel.slideUp();            
            $(this).addClass("close");
        }
        else{
            sel.slideDown();
            $(this).removeClass("close");
        }
    });  
    $(".filter-group-title").click(function(){
        var sel = $(this).next("ul");
        $(".filter-group .filter-options").slideUp(); 
        if(sel.is(":visible")){
            sel.slideUp();            
        }
        else{
            sel.slideDown();
        }
    });
    $("#bt-filter-show").click(function(){
        var selbox = $(".aside-nav");
        if(selbox.is(":visible")){
            selbox.slideUp();
            $(this).removeClass("on");        
        }
        else{
            selbox.slideDown();
            $(this).addClass("on"); 
        }
    });
    $(".bt-showmore").each(function() {
        $(this).prev("ul").find("li:gt(4)").hide();
    });
    $(".bt-showmore").click(function(){
        var list = $(this).prev("ul").find("li:gt(4)");
        if(list.is(":hidden")){
           list.slideDown();
           $(this).addClass("show");
        }
        else{
           list.slideUp();
           $(this).removeClass("show");
        }
    });
    filter_rwd();
    $(window).resize(function(){
        filter_rwd();
    });

    //banner
    $("#banner").owlCarousel({
        loop:true,
        dots:true,
        nav:false,
        items:1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
});

function filter_rwd(){
    if($(window).width()>960){
        $("#bt-filter-show").hide();
        $(".aside-nav").show();
    }
    else{
        $("#bt-filter-show").show();
        $(".aside-nav").hide();
    }
}