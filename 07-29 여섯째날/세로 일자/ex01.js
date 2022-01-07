$(document).ready(function(){
    // 1. 윈도우의 가로크기 설정
    var ww = $(window).width();
    // 2. 윈도우의 세로크기 설정
    var wh = $(window).height();
    $('#wrap').css({
        width: ww,
        height: wh*4
    });
    
    // .page 배열을 활용하여 각각 다른 배경색 지정
    var colorBox = ['#ff0000','#ffff00', '#00ffff','#ff00ff'];

    $('.page').css({
        width: ww,
        height: wh,
        backgroundColor:function(index){
            return colorBox[index];
        }
    });

    // .in_page
    // => 가로 윈도우의 가로크기 0.8비율값
    // => 세로 윈도우의 세로크기 0.8비율값
    $('.in_page').css({
        width: ww*0.8,
        height: wh * 0.8,
        marginTop: -(wh*0.8)/2,
        marginLeft: -(ww*0.8)/2
    });

    // .but
    // => 가로세로 100px
    // 부모에게 정중앙
    $('.but').css({
        width: 100,
        height: 100,
        marginTop: -50,
        marginLeft: -50
    });

    // 이벤트영역
    // 1. #but_1 클릭하면 #wrap -wh만큼 위쪽으로 움직임
    $('#but_1').click(function(){
        $('#wrap').animate({
            top: -wh
        },1000);
    })
    // 2. #but_2 클릭하면 #wrap -wh*2만큼 위쪽으로 움직임
    $('#but_2').click(function(){
        $('#wrap').animate({
            top: -(wh*2)
        },1000);
    })
    // 3. #but_3 클릭하면 #wrap -wh*3만큼 위쪽으로 움직임
    $('#but_3').click(function(){
        $('#wrap').animate({
            top: -(wh*3)
        },1000);
    })
    // 4. #but_4 클릭하면 #wrap 0으로 원상복귀
    $('#but_4').click(function(){
        $('#wrap').animate({
            top: 0
        },1000);
    })
}); //end