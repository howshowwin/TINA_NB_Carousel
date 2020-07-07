$(document).ready(function() {
    //
    var demo = new iro.ColorPicker("#demoWheel", {
        width: 180,
        height: 180,
        markerRadius: 8,
        color: "#f00",
        borderWidth: 2,
        padding: 4,

        anticlockwise: true,
        css: {
            ".lightsvg": {
                "background": "$color",
            }
        }
    });
    //click function
    $('.iconxxx').click(function() {
        $('.iconxxx').removeClass('btnActive').addClass('iconfilter');
        $(this).addClass('btnActive');
    });
    $('.closeBtn').on('click', function() {
        $("#rgbimgshow .lightsvg").remove();
        $('.effect-gif.effect-show').removeClass('effect-show');
        $('.effect-gif.streaming-gif').removeClass('effect-show');
        $('.effect-gif.whirling-gif').removeClass('effect-show');
        $('.effect-gif.patrolling-gif').removeClass('effect-show');
    });
    $('.rainbowBtn').on('click', function() {
        $("#rgbimgshow .lightsvg").remove();
        $("#rgbimgshow").append('<div class="lightsvg effect-rainbow"></div>');
        $('.effect-gif.effect-show').removeClass('effect-show');
    });
    $('.steadyBtn').on('click', function() {
        $("#rgbimgshow .lightsvg").remove();
        $("#rgbimgshow").append('<div class="lightsvg effect-steady"></div>');
        $('.effect-gif.effect-show').removeClass('effect-show');
    });
    $('.breathingBtn').on('click', function() {
        $("#rgbimgshow .lightsvg").remove();
        $("#rgbimgshow").append('<div class="lightsvg effect-breathing"></div>');
        $('.effect-gif.effect-show').removeClass('effect-show');
    });
    $('.flashBtn').on('click', function() {
        $("#rgbimgshow .lightsvg").remove();
        $("#rgbimgshow").append('<div class="lightsvg effect-flash"></div>');
        $('.effect-gif.effect-show').removeClass('effect-show');
    });
    $('.doublelflashBtn').on('click', function() {
        $("#rgbimgshow .lightsvg").remove();
        $("#rgbimgshow").append('<div class="lightsvg effect-doubleflash"></div>');
        $('.effect-gif.effect-show').removeClass('effect-show');
    });
    $('.patrollingBtn').on('click', function() {
        $("#rgbimgshow .lightsvg").remove();
        $('.effect-gif.effect-show').removeClass('effect-show');
        $('.effect-gif.patrolling-gif').addClass('effect-show');
    })
    $('.whirlingBtn').on('click', function() {
        $("#rgbimgshow .lightsvg").remove();
        $('.effect-gif.effect-show').removeClass('effect-show');
        $('.effect-gif.whirling-gif').addClass('effect-show');
    });
     $('.streamingBtn').on('click', function() {
        $("#rgbimgshow .lightsvg").remove();
        $('.effect-gif.effect-show').removeClass('effect-show');
        $('.effect-gif.streaming-gif').addClass('effect-show');
    });
});