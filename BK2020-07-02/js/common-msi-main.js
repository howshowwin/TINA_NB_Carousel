new WOW().init();
$(function(){
	
	//scroll to top
	$("#bt-scroll-top").click(function(){
	    $("html,body").animate({scrollTop:0},900);
	    return false;
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>50){
			$("#aside-tool").fadeIn();
		}
		else{
			$("#aside-tool").stop().fadeOut();
		}
	});

	//scroll to #
	 $(".bt-scroll").click(function(){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
    });

});
