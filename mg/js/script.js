/*
 * @name script.js
 * @author Fyz
 * @time 2017.08.24
 * @QQ 530272318
 */

var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    img_cache = {},
    //1竖屏，2横屏
    is_screen = 1,
    //第几关
    word = 0,
    //第二页
    page2_id = 0,
    //文本
    t_1 = 0,
    t_2 = 0,
    t_3 = 0,
    t_4 = 0,
    t_5 = 0,
    t_6 = 0,
    t_7 = 0,
    t_8 = 0,
    //落叶
    y_1 = 0,
    y_2 = 0,
    y_2_x = 0,
    y_3 = 0,
    y_3_x = 0,
    //雪花
    xuehua = 0,
    //花瓣
    huaban = 0,
    //返回
    back = 0,
    zhiliao_dongzuo = 0,
    zhiliao_run = 0,
    zhiliao_run2 = 0,

    mangguo_dongzuo = 0,
    mangguo_run = 0,
    mangguo_run2 = 0,
    count = 0,
    y = 0,
    state = 0,
    fly = 0,


    tt_1=0,
    tt_1_x=0,
    tt_2=0,
    tt_2_x=0,
    tt_3=0,
    tt_3_x=0,
    tt_4=0,
    tt_4_x=0,
    tt_42=0,
    tt_42_x=0,
    tt_5=0,
    tt_5_x=0,
    tt_52=0,
    tt_52_x=0,
    tt_6=0,
    tt_6_x=0,
    tt_62=0,
    tt_62_x=0,
    tt_7=0,
    tt_7_x=0,
    tt_72=0,
    tt_72_x=0,
    tt_8=0,
    tt_8_x=0,
    tt_82=0,
    tt_82_x=0,
    paiqiu_run = 1,
    paiqiu = 1;


//禁止下拉露底
document.addEventListener('touchmove',function(e){
    e.preventDefault();
});




//begin 初始状态
function begin() {
    //屏幕判断
    if(window.innerWidth > window.innerHeight){
        is_screen = 2;//横屏
        $('#canvas').attr({width: window.innerWidth, height: window.innerHeight});
    }else{
        is_screen = 1; //竖屏
    };

    if(is_screen == 2){
        clearInterval(begin_play);
        var imgs = [
            "images/long_page.jpg",
            // "images/btn_r.png",
            "images/back.png",
            // "images/zl_1.png",
            // "images/zl_2.png",
            // "images/zl_3.png",
            // "images/t_1.png",
            // "images/t_2.png",
            // "images/t_3.png",
            // "images/t_4.png",
            // "images/t_5.png",
            // "images/t_6.png",
            // "images/xuehua.png",
            // "images/huaban.png",
            // "images/ye_1.png",
            // "images/ye_2.png",
            // "images/ye_3.png",

            // "images/icon.png",
            "images/icon21.png",
            "images/mg.png",
            "images/01.png",
            "images/02.png",
            "images/03.png",
            "images/16.png",
            "images/17.png",
            "images/18.png",
            "images/19.png",
            "images/20.png",
            "images/21.png",
            "images/22.png",
            "images/23.png",
            "images/24.png",
            "images/25.png",
            "images/26.png",
            "images/27.png",
            "images/28.png",
            "images/29.png",
            "images/30.png",
            "images/31.png",
            "images/32.png",
            "images/33.png",
            "images/pai1.png",
            "images/pai2.png",
            "images/pai3.png",
            "images/pai4.png",
            "images/pai5.png",
            "images/pai6.png",
            "images/pai7.png",
            "images/pai8.png",
            "images/pai9.png",
            "images/pai10.png",
            "images/pai11.png",
            "images/pai12.png",
            "images/pai13.png",
            "images/pai14.png",
            "images/pai15.png",
            "images/pai16.png",
            "images/pai17.png",
            "images/pai18.png",
            "images/pai19.png",
            "images/pai20.png",
            "images/pai21.png",
            "images/pai22.png",
            "images/pai23.png",
            "images/pai24.png",
            "images/pai25.png",
            "images/pai26.png",
            "images/pai27.png",
            "images/pai28.png",
            "images/pai29.png"
            // "images/share.png"
        ];
        loading(imgs);
    };
};

//drawImg  画图
function drawImg(sx, sy, sw, sh, dx, dy, imgSrc) {
    var _dx = dx * w_bili,
        _dy = dy * h_bili,
        _dw = sw * w_bili,
        _dh = sh * h_bili;
    if (imgSrc) {
        ctx.drawImage(img_cache[imgSrc], sx, sy, sw, sh, _dx, _dy, _dw, _dh);
    };
};

//loading进度条
function loading(images) {
    //loading images
    var imgNums = images.length,
        imgNum = 0,
        percent = 0;
    for (var i = 0; i < imgNums; i++) {
        img_cache[images[i]] = new Image();
        img_cache[images[i]].onload = function () {
            imgNum++;
            percent = Math.round(imgNum / imgNums * 100);
            $('.percent').text(percent + '%');
            if (percent == 100) {
                $('#loading').addClass('hide');
                w_canvas = window.innerWidth,
                    h_canvas = window.innerHeight,
                    // w_bili = w_canvas / 1140,//1140 - 画布的宽度
                    w_bili = w_canvas / 1334,//1140 - 画布的宽度
                    h_bili = h_canvas / 750,//750 - 画布的高度
                    //$("#canvas").attr({width:w_canvas, height:h_canvas});
                word = 1;
            };
        };
        img_cache[images[i]].src = images[i];
    };
};

function page() {
    if(word) page2();
};

//page2
function page2() {
    //背景
    drawImg(0, 0, 10679, 750, page2_id, 0, 'images/long_page.jpg');

    //text1
    if(t_1 < 25) t_1++;
    // if(t_1 > 5) drawImg(2095, 655, 850, 391, 82,60, 'images/icon21.png');
    if(t_1 > 10) drawImg(454, 111, 183, 143, (659+page2_id),370, 'images/icon21.png');

    //text2 "醉美"
    if(Math.abs(page2_id) >1000){
        if(t_2 < 10) t_2++;
        if(t_2 > 5){
            tt_2 < 136? (tt_2 = tt_2 + 10) : (tt_2 = 136);
            if(tt_2_x < 186) tt_2_x = tt_2_x + 10;
            if(tt_2 > 136) tt_2_x = 0;
            drawImg(117, 712, 351, 114, (1596+page2_id),(0+tt_2), 'images/icon21.png');

        }

    };
    //text3 “游泳”
    if(Math.abs(page2_id) >1500){
        if(t_3 < 10) t_3++;
        if(t_3 > 5){
            tt_3 < 300? (tt_3 = tt_3 + 10) : (tt_3 = 300);
            if(tt_3_x < 350) tt_3_x = tt_3_x + 5;
            if(tt_3 > 300) tt_3_x = 0;
            drawImg(793, 208, 180, 160, (1986+page2_id+tt_3),580, 'images/icon21.png');
        }
        // drawImg(793, 208, 180, 160, (2286+page2_id),580, 'images/icon21.png');
    };
    //text4 “帆船”
    if(Math.abs(page2_id) >2650){
        if(t_4 < 5) t_4++;
        if(t_4 > 1){
            tt_4 < 249? (tt_4 = tt_4 + 10) : (tt_4 = 249);
            if(tt_4_x < 299) tt_4_x = tt_4_x + 10;
            if(tt_4 > 249) tt_4_x = 0;
            drawImg(202, 954, 300, 110, (3244+page2_id),(0+tt_4), 'images/icon21.png');
        }
        // drawImg(202, 954, 300, 110, (3244+page2_id),249, 'images/icon21.png');
        if(t_4 > 3) {
            tt_42 < 300? (tt_42 = tt_42 + 2) : (tt_42 = 300);
            if(tt_42_x < 350) tt_42_x = tt_42_x + 2;
            if(tt_42 > 300) tt_42_x = 0;
            drawImg(1493, 182, 115, 210, (3514+page2_id+tt_42),528, 'images/icon21.png');
        }
            // drawImg(1493, 182, 115, 210, (3514+page2_id),528, 'images/icon21.png');
    };
    //text5 热气球
    if(Math.abs(page2_id) >4000){
        if(t_5 < 10) t_5++;
        if(t_5 > 3) {
            tt_5 < 299? (tt_5 = tt_5 + 10) : (tt_5 = 299);
            if(tt_5_x < 339) tt_5_x = tt_5_x + 10;
            if(tt_5 > 299) tt_5_x = 0;
            drawImg(683, 717, 372, 115, (4549+page2_id),(0+tt_5), 'images/icon21.png');
        }
        // drawImg(683, 717, 372, 115, (4549+page2_id),299, 'images/icon21.png');
        if(t_5 > 5){
            tt_52 < 60? (tt_52 = tt_52 + 10) : (tt_52 = 60);
            if(tt_52_x < 110) tt_52_x = tt_52_x + 10;
            if(tt_52 > 60) tt_52_x = 0;
            drawImg(1114, 160, 186, 247, (5150+page2_id-tt_52),(-30+tt_52), 'images/icon21.png');
        }
        // drawImg(1114, 160, 186, 247, (4849+page2_id),30, 'images/icon21.png');
    };
    //text6 "风筝"
    if(Math.abs(page2_id) >5100){
        if(t_6 < 15) t_6++;
        if(t_6 > 3){
            tt_6 < 137? (tt_6 = tt_6 + 10) : (tt_6 = 137);
            if(tt_6_x < 137) tt_6_x = tt_6_x + 10;
            if(tt_6 > 137) tt_6_x = 0;
            drawImg(716, 928, 490, 115, (5706+page2_id),(0+tt_6), 'images/icon21.png');
        }
        // drawImg(716, 928, 490, 115, (5806+page2_id),137, 'images/icon21.png');
        if(t_6 > 8){
            tt_62 < 300? (tt_62 = tt_62 + 10) : (tt_62 = 300);
            if(tt_62_x < 350) tt_62_x = tt_62_x + 10;
            if(tt_62 > 300) tt_62_x = 0;
            drawImg(1781, 141, 297, 267, (6090+page2_id-tt_62),(338), 'images/icon21.png');
        }
        // drawImg(1781, 141, 297, 267, (6090+page2_id),338, 'images/icon21.png');
    };
    //text7 “排球”
    if(Math.abs(page2_id) >6100){
        if(t_7 < 15) t_7++;
        if(t_7 > 1){
            tt_7 < 103? (tt_7 = tt_7 + 10) : (tt_7 = 103);
            if(tt_7_x < 103) tt_7_x = tt_7_x + 10;
            if(tt_7 > 103) tt_7_x = 0;
            drawImg(1271, 754, 711, 111, (6687+page2_id),(0+tt_7), 'images/icon21.png');
        }
        // drawImg(1230, 525, 454, 96, (6540+page2_id), 106, 'images/t_5.png');
        if(t_7 > 4){
            tt_72 < 200? (tt_72 = tt_72 + 10) : (tt_72 = 200);
            if(tt_72_x < 200) tt_72_x = tt_72_x + 10;
            if(tt_72 > 200) tt_72_x = 0;
            drawImg(2621, 228, 178, 211, (7417+page2_id+tt_72),448, 'images/icon21.png');
        }
        // drawImg(1271, 754, 711, 111, (6687+page2_id),203, 'images/icon21.png');
    };
    //text8 last
    if(Math.abs(page2_id) >7440){
        if(t_8 < 15) t_8++;
        if(t_8 > 1){
            // tt_8 < 28? (tt_8 = tt_8 + 10) : (tt_8 = 28);
            // if(tt_8_x < 28) tt_8_x = tt_8_x + 10;
            // if(tt_8 > 28) tt_8_x = 0;
            drawImg(2095, 655, 850, 391, (7904+page2_id),60, 'images/icon21.png');
            $(".ma").show();
        }

        // if(t_8 > 4){
        //     tt_82 < 200? (tt_82 = tt_82 + 10) : (tt_82 = 200);
        //     if(tt_82_x < 200) tt_82_x = tt_82_x + 10;
        //     if(tt_82 > 200) tt_82_x = 0;
        //     drawImg(2951, 195, 336, 267, (8740+page2_id-tt_82_x),425, 'images/icon21.png');
        // }
    };

    //text8
    if(Math.abs(page2_id) >7580){
        //知了飞走
        zhiliao_dongzuo = 2;
        fly = fly + 30;
        // back = 1;
        $(".ma").show();
        if(t_8 < 15) t_8++;
        // if(t_8 > 1) drawImg(193, 0, 136, 104, (10022+page2_id), 136, 'images/t_6.png');
        // if(t_8 > 4) drawImg(0, 184, 522, 49, (9825+page2_id), 315, 'images/t_6.png');
        // if(t_8 > 7) drawImg(78, 290, 367, 37, (9912+page2_id), 418, 'images/t_6.png');
        // if(t_8 > 10) drawImg(80, 348, 363, 38, (9912+page2_id), 480, 'images/t_6.png');
        // if(t_8 > 13) drawImg(81, 407, 361, 36, (9912+page2_id), 536, 'images/t_6.png');
    };

    switch (paiqiu) {
        case 1:
            switch (paiqiu_run){
                case  0:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai1.png');
                    // drawImg(0, 0, 500, 457,7838+page2_id+page2_id,146, 'images/pai1.png');
                    // paiqiu_run = 1;
                    break;
                case  1:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai2.png')
                    paiqiu_run = 2;
                    break;
                case  2:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai3.png')
                    paiqiu_run = 3;
                    break;
                case  3:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai4.png')
                    paiqiu_run = 4;
                    break;
                case  4:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai5.png')
                    paiqiu_run = 5;
                    break;
                case  5:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai6.png')
                    paiqiu_run = 6;
                    break;
                case  6:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai7.png')
                    paiqiu_run = 7;
                    break;
                case  7:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai8.png')
                    paiqiu_run = 8;
                    break;
                case  8:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai9.png')
                    paiqiu_run = 9;
                    break;
                case  9:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai10.png')
                    paiqiu_run = 10;
                    break;
                case  10:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai11.png')
                    paiqiu_run = 11;
                    break;
                case  11:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai12.png')
                    paiqiu_run = 12;
                    break;
                case  12:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai13.png')
                    paiqiu_run = 13;
                    break;
                case  13:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai14.png')
                    paiqiu_run = 14;
                    break;
                case  14:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai15.png')
                    paiqiu_run = 15;
                    break;
                case  15:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai16.png')
                    paiqiu_run = 16;
                    break;
                case  16:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai17.png')
                    paiqiu_run = 17;
                    break;
                case  17:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai18.png')
                    paiqiu_run = 18;
                    break;
                case  18:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai19.png')
                    paiqiu_run = 19;
                    break;
                case  19:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai20.png')
                    paiqiu_run = 20;
                    break;
                case  20:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai21.png')
                    paiqiu_run = 21;
                    break;
                case  21:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai22.png')
                    paiqiu_run = 22;
                    break;
                case  22:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai23.png')
                    paiqiu_run = 23;
                    break;
                case  23:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai24.png')
                    paiqiu_run = 24;
                    break;
                case  24:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai25.png')
                    paiqiu_run = 25;
                    break;
                case  25:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai26.png')
                    paiqiu_run = 26;
                    break;
                case  26:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai27.png')
                    paiqiu_run = 27;
                    break;
                case  27:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai28.png')
                    paiqiu_run = 28;
                    break;
                case  28:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/pai29.png')
                    paiqiu_run = 0;
                    break;
                case  29:
                    drawImg(0, 0, 500, 457,6838+page2_id,246, 'images/30.png')
                    mangguo_run = 30;
                    break;
            };

    };

    //标题1
    tt_1 < 109? (tt_1 = tt_1 + 10) : (tt_1 = 109);
    if(tt_1_x < 159) tt_1_x = tt_1_x + 10;
    if(tt_1 > 109) tt_1_x = 0;
    drawImg(159, 421, 815, 189, (209+page2_id),(0+tt_1), 'images/icon21.png');

    //标题2
    // tt_1 < 200? (tt_1 = tt_1 + 10) : (tt_1 = 200);
    // if(tt_1_x < 250) tt_1_x = tt_1_x + 10;
    // if(tt_1 > 200) tt_1_x = 200;
    // drawImg(159, 421, 815, 189, (9+page2_id+tt_1),109, 'images/icon21.png');


    //yezi1
    y_1 < 750 ? (y_1 = y_1 + 20) : (y_1 = 0);
    // drawImg(0, 0, 281, 178, (477+page2_id), (5+y_1), 'images/ye_1.png');
    //yezi2
    y_2 < 750 ? (y_2 = y_2 + 20) : (y_2 = 0);
    if(y_2_x < 380) y_2_x = y_2_x + 10;
    if(y_2 > 750) y_2_x = 0;
    // drawImg(0, 0, 226, 292, (975+page2_id + y_2_x), (0+y_2), 'images/ye_2.png');


    //xuehua
    // xuehua < 550 ? (xuehua = xuehua + 20) : (xuehua = 0);
    // drawImg(0, 0, 229, 295, (5817+page2_id), (105+xuehua), 'images/xuehua.png');





    //mangguo
    switch (mangguo_dongzuo) {
        case 0:
            switch (mangguo_run){
                case  0:
                    if(t_1 > 1) drawImg(0, 0, 311, 311, (450+page2_id),409, 'images/mg.png')
                    break;
                default :
                    if(mangguo_run2 == 0){
                        if(t_1 > 1) drawImg(0, 0, 311, 311, 450,409, 'images/mg.png')
                        // mangguo_run2 = 1;
                    };
                    break;
            };
            break;
        case 1:
            if(state == 0) y = y + 10;
            if(y == 100) state = 1;
            if(state == 1 && y>-100) y = y - 10;
            if(y == -100) state = 0;
            switch (mangguo_run){
                case  0:
                    drawImg(0, 0,311,311,450,409, 'images/01.png')
                    mangguo_run = 1;
                    break;
                case  1:
                    drawImg(0, 0,311,311,450,409, 'images/02.png')
                    mangguo_run = 2;
                    break;
                case  2:
                    drawImg(0, 0,311,311,450,409, 'images/03.png')
                    mangguo_run = 3;
                    break;
                case  3:
                    drawImg(0, 0,311,311,450,409, 'images/01.png')
                    mangguo_run = 4;
                    break;
                case  4:
                    drawImg(0, 0,311,311,450,409, 'images/02.png')
                    mangguo_run = 5;
                    break;
                case  5:
                    drawImg(0, 0,311,311,450,409, 'images/03.png')
                    mangguo_run = 6;
                    break;
                case  6:
                    drawImg(0, 0,311,311,450,409, 'images/01.png')
                    mangguo_run = 7;
                    break;
                case  7:
                    drawImg(0, 0,311,311,450,409, 'images/02.png')
                    mangguo_run = 8;
                    break;
                case  8:
                    drawImg(0, 0,311,311,450,409, 'images/03.png')
                    mangguo_run = 9;
                    break;

                case  9:
                    drawImg(0, 0,311,311,450,409, 'images/01.png')
                    mangguo_run = 10;
                    break;
                case  10:
                    drawImg(0, 0,311,311,450,409, 'images/02.png')
                    mangguo_run = 11;
                    break;
                case  11:
                    drawImg(0, 0,311,311,450,409, 'images/03.png')
                    mangguo_run = 12;
                    break;
                case  12:
                    drawImg(0, 0,311,311,450,409, 'images/01.png')
                    mangguo_run = 13;
                    break;
                case  13:
                    drawImg(0, 0,311,311,450,409, 'images/02.png')
                    mangguo_run = 14;
                    break;
                case  14:
                    drawImg(0, 0,311,311,450,409, 'images/03.png')
                    mangguo_run = 15;
                    break;
                case  15:
                    drawImg(0, 0,311,311,450,409, 'images/01.png')
                    mangguo_run = 16;
                    break;
                case  16:
                    drawImg(0, 0,311,311,450,409, 'images/02.png')
                    mangguo_run = 17;
                    break;
                case  17:
                    drawImg(0, 0,311,311,450,409, 'images/03.png')
                    mangguo_run = 18;
                    break;

                case  18:
                    drawImg(0, 0,311,311,450,409, 'images/01.png')
                    mangguo_run = 19;
                    break;
                case  19:
                    drawImg(0, 0,311,311,450,409, 'images/02.png')
                    mangguo_run = 20;
                    break;
                case  20:
                    drawImg(0, 0,311,311,450,409, 'images/03.png')
                    mangguo_run = 21;
                    break;
                case  21:
                    drawImg(0, 0,311,311,450,409, 'images/01.png')
                    mangguo_run = 22;
                    break;
                case  22:
                    drawImg(0, 0,311,311,450,409, 'images/02.png')
                    mangguo_run = 23;
                    break;
                case  23:
                    drawImg(0, 0,311,311,450,409, 'images/03.png')
                    mangguo_run = 24;
                    break;
                case  24:
                    drawImg(0, 0,311,311,450,409, 'images/16.png')
                    mangguo_run = 25;
                    break;
                case  25:
                    drawImg(0, 0,311,311,450,409, 'images/17.png')
                    mangguo_run = 26;
                    break;
                case  26:
                    drawImg(0, 0,311,311,450,409, 'images/18.png')
                    mangguo_run = 27;
                    break;
                case  27:
                    drawImg(0, 0,311,311,450,409, 'images/19.png')
                    mangguo_run = 28;
                    break;
                case  28:
                    drawImg(0, 0,311,311,450,409, 'images/20.png')
                    mangguo_run = 29;
                    break;
                case  29:
                    drawImg(0, 0,311,311,450,409, 'images/21.png')
                    mangguo_run = 30;
                    break;
                case  30:
                    drawImg(0, 0,311,311,450,409, 'images/22.png')
                    mangguo_run = 31;
                    break;
                case  31:
                    drawImg(0, 0,311,311,450,409, 'images/23.png')
                    mangguo_run = 32;
                    break;
                case  32:
                    drawImg(0, 0,311,311,450,409, 'images/24.png')
                    mangguo_run = 33;
                    break;
                case  33:
                    drawImg(0, 0,311,311,450,409, 'images/25.png')
                    mangguo_run = 34;
                    break;
                case  34:
                    drawImg(0, 0,311,311,450,409, 'images/26.png')
                    mangguo_run = 35;
                    break;
                case  35:
                    drawImg(0, 0,311,311,450,409, 'images/27.png')
                    mangguo_run = 36;
                    break;
                case  36:
                    drawImg(0, 0,311,311,450,409, 'images/28.png')
                    mangguo_run = 37;
                    break;
                case  37:
                    drawImg(0, 0,311,311,450,409, 'images/29.png')
                    mangguo_run = 38;
                    break;
                case  38:
                    drawImg(0, 0,311,311,450,409, 'images/30.png')
                    mangguo_run = 39;
                    break;
                case  39:
                    drawImg(0, 0,311,311,450,409, 'images/31.png')
                    mangguo_run = 40;
                    break;
                case  40:
                    drawImg(0, 0,311,311,450,409, 'images/32.png')
                    mangguo_run = 41;
                    break;
                case  41:
                    drawImg(0, 0,311,311,450,409, 'images/33.png')
                    mangguo_run = 42;
                    break;
                case  42:
                    drawImg(0, 0,311,311,450,409, 'images/01.png')
                    mangguo_run = 0;
                    // break;
            };

            if ( Math.abs(page2_id) < 7580) {
                page2_id = page2_id - 20;
                console.log(page2_id);
            }
            break;
        // case 2:
        // case  0:
        //     // drawImg(0, 0, 80,80, 70+Math.abs(page2_id)/15, 120+y, 'images/zl_1.png');
        //     drawImg(0, 0, 500, 500,59+Math.abs(page2_id)/15,209, 'images/1.png')
        //     mangguo_run = 1;
        //     break;
        // case  1:
        //     drawImg(0, 0, 500, 500,59+Math.abs(page2_id)/15,209, 'images/2.png')
        //     mangguo_run = 2;
        //     break;
        // case  2:
        //     drawImg(0, 0, 500, 500,59+Math.abs(page2_id)/15,209, 'images/3.png')
        //     mangguo_run = 0;
        //     break;
    };


    //button
    if(back == 0){
        drawImg(1347, 938, 163, 110, 30, 610, 'images/icon21.png');
    }else{
        drawImg(0, 0, 165, 100,((w_canvas/w_bili)-185), 630, 'images/back.png');
    };
};


$(function(){
    //audio
    var page2 = document.getElementById('page2');
    page2.loop = true;//音乐是否循环
    page2.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        page2.play();
    }, false);

    //loading
    begin_play = setInterval('begin()',50);
    //page
    setInterval('page()',150);

    $("#canvas").on({
        touchstart: function (e) {
            var x = e.touches[0].pageX,
                y = e.touches[0].pageY,
                dx = Math.ceil(parseInt(x) / w_bili),// x = dx * w_bili -> dx = x/w_bili
                dy = Math.ceil(parseInt(y) / h_bili);// y = dy * h_bili -> dy = y/h_bili

            //btn right
            if ((30 < dx && dx < 193) && (610 < dy && dy < 720)) {
                mangguo_dongzuo = 1;
                paiqiu_run =1;
            };

            //back
            if ((((w_canvas/w_bili)-185) < dx && dx < ((w_canvas/w_bili)-25)) && (670 < dy && dy < 742)) {
                    page2_id = 0;
                    //文本
                    t_1 = 0;t_2 = 0;
                    t_3 = 0;t_4 = 0;t_5 = 0;t_6 = 0;t_7 = 0;t_8 = 0,
                    //落叶
                    y_1 = 0;y_2 = 0;y_2_x = 0;y_3 = 0;y_3_x = 0;
                    //雪花
                    // xuehua = 0;
                    //返回
                    back = 0;
                    zhiliao_dongzuo = 0;
                    zhiliao_run = 0;
                    fly = 0;
            };

        },
        touchend: function () {
            mangguo_dongzuo = 0;
        }
    });

});
