$(document).ready(function(){
    var ww= $(window).width();
    var wh= $(window).height();

    $('#wrap').css({
        width: ww*3,
        height: wh*3,
        top: -wh,
        left: -ww
    });

    var color = ['#665e69', '#00ffff', '#fbec5d', '#bbfb5d', '#ff0ff0'];

    $('.page').css({
        width: ww,
        height: wh,
        backgroundColor: function(index)
        {
            return color[index];
        }
    });
    
    $('#width_align').css({
        width: ww*3,
        height: wh
    });

    $('#top_page, #bottom_page').css({
        left: ww
    });

    //이동
    $('#main_to_top').click(function(){
        $('#wrap').animate({
            top: 0
        }, 1000);
    });

    $('#top_to_main').click(function(){
        $('#wrap').animate({
            top: -wh
        }, 1000);
    });

    $('#main_to_bottom').click(function(){
        $('#wrap').animate({
            top: -wh*2
        }, 1000);
    });

    $('#bottom_to_main').click(function(){
        $('#wrap').animate({
            top: -wh
        }, 1000);
    });

    $('#main_to_right').click(function(){
        $('#wrap').animate({
            left: -ww*2
        }, 1000);
    });

    $('#right_to_main').click(function(){
        $('#wrap').animate({
            left: -ww
        }, 1000);
    });

    $('#main_to_left').click(function(){
        $('#wrap').animate({
            left: 0
        }, 1000);
    });

    $('#left_to_main').click(function(){
        $('#wrap').animate({
            left: -ww
        }, 1000);
    });

    
}); //end