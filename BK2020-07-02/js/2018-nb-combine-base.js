$(function(){
	$('#sub-feature-content').owlCarousel({
        items:1,
        loop:false,
        center:true,
        margin:0,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });
});
