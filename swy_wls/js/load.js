preload(
    // "image/share.jpg",
    // "image/arraw.png",
    // "image/micBtn.png",
    // "image/micBtn2.png",
    "images/1_5.png",

    "images/6_1.png",
    "images/6_2.png",
    "images/6_3.png",


    "images/7_1.png",
    "images/7_2.png",
    "images/7_3.png",
    "images/7_4.png",
    "images/7_5.png",
    "images/7_6.png",
    "images/7_7.png",


    "images/8_1.png",
    "images/8_2.png",
    "images/8_3.png",
    "images/8_4.png",
    "images/8_5.png",

    "images/9_1.png",
    "images/9_2.png",
    "images/9_3.png",
    "images/9_4.png",
    "images/9_5.png",
    "images/9_6.png",

    "images/10_1.png",
    "images/10_2.png",
    "images/10_3.png",
    "images/10_4.png",
    "images/10_5.png",

    "images/11_1.png",
    "images/11_2.png",
    "images/11_3.png",
    "images/11_4.png",
    "images/11_5.png",
    "images/11_6.png",

    "images/12_1.png",
    "images/12_2.png",
    "images/12_3.png",
    "images/12_4.png",
    "images/12_5.png",
    "images/12_6.png",
    "images/12_7.png",

    "images/13_1.png",
    "images/13_2.png",
    "images/13_3.png",
    "images/13_4.png",
    "images/13_5.png",
    "images/13_6.png",

    "images/14_1.png",
    "images/14_2.png",
    "images/14_3.png",
    "images/14_4.png",
    "images/14_5.png",
    "images/14_6.png",
    "images/14_7.png",

    "images/page6.png",
    "images/page7.png",
    "images/page8.png",
    "images/start.png"

    );

    //预加载
    function preload() {
    	// var load = document.getElementById('load');
        var process = document.getElementById('loadtext');

        var percent = 0;//显示百分比
        var loadedimg = 0;//已加载图片数量
        var images = new Array()
        var n = preload.arguments.length;//预加载图片总数
        for (i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image()
            images[i].src = preload.arguments[i]
            images[i].onload = function(){//每张图片加载成功后执行
                loadedimg++;
                percent = Math.round( loadedimg/n*90 );
                process.innerHTML = percent + "%";
                // console.log(percent + "%")
                console.log(percent);
                if(percent == 90){//全部加载完成后执行
                    percent = 100;
                    $('#loading').hide();
                    $(".videos").show();
                };

            };
        };
    };
