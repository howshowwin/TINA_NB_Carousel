
$(function(){
    var box = $("#comparebox"),
        btn = $("#bt-open-compare");
	btn.click(function(){
        $(this).addClass("close");
        box.addClass("show");
    });
    $("#bt-close-compare").click(function(){
        box.removeClass("show");
        setTimeout(function(){btn.removeClass("close");},200);
        
    });
});
