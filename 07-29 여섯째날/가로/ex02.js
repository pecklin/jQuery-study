$(document).ready(function(){
    // 1. 윈도우의 가로세로 크기 변수에 저장
    // 2. 배열의 색을 5가지 지정하여 방에 저장
    // 3. #wrap 내부의 모든 페이지를 감쌀 수 있는 가로와 세로사이즈를 지정
    // 4. .page 가로세로 윈도우 영역 크기만큼 사이즈 지정
    // 4-1. 배경색을 순서대로 나눠받기
    // 5. #width_align 내부의 모든 페이지를 모두 감쌀 수 있는 가로세로 사이즈 지정
    // 6. .in_page 가로 윈도우의 가로크기 0.8비율값
    // 6-1. .in_page 세로 윈도우의 세로크기 0.8비율값
    // 6-2. 자신의 크기 /2 한 음수값으로 이동하여 부모박스 기준으로 가로 세로 정중앙에 위치.

    // 이벤트 영역
    // 첫번째 페이지 #but_1클릭하면 두번째 페이지가 보임
    // 두번째 페이지 #but_2클릭하면 세번째 페이지가 보임
    // 세번째 페이지 #but_3클릭하면 네번째 페이지가 보임
    // 네번째 페이지 #but_4클릭하면 다섯번쨰 페이지가 보임
    // 다섯번째 페이지 #but_5클릭하면 다시 첫번쨰 페이지가 보임.
    // 위치변화가 5초동안 일어나도록 설정
    var ww = $(window).width();
    var wh = $(window).height();
    var cB = ['#665e69', '#00ffff', '#fbec5d', '#bbfb5d', '#fb9d5d'];
    
    $('#wrap').css({
        width: ww*3,
        height: wh*3
    })

    $('.page').css({
        width: ww,
        height: wh,
        backgroundColor: function(idx){
            return cB[idx];
        }
    });

    $('#width_align').css({
        width: ww*3,
        height: wh
    })

    $('.in_page').css({
        width: ww*0.8,
        height: wh*0.8,
        marginTop: -(wh*0.8/2),
        marginLeft: -(ww*0.8/2)
    });

    $('#but_1').click(function(){
        $('#wrap').animate({
            top: -wh
        },1000);
    });

    $('#but_2').click(function(){
        $('#wrap').animate({
            top: -wh*2
        },1000);
    });

    $('#but_3').click(function(){
        $('#wrap').animate({
            left: -ww
        },1000);
    });

    $('#but_4').click(function(){
        $('#wrap').animate({
            left: -ww*2
        },1000);
    });

    $('#but_5').click(function(){
        $('#wrap').animate({
            top: 0,
            left: 0
        }, 5000);
    });

}); //end