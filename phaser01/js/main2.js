$(function(){
    preload(
        "img/bg.jpg",
        "img/bg2.jpg",
        "img/boom.png",
        "img/boom2.png",
        "img/red.png",
        "img/red2.png",
        "img/load1.png",
        "img/load2.png",
        "img/load3.png",
        "img/load4.png",
        "img/end1.jpg",
        "img/end2.png",
        "img/end3.png",
        "img/load4.png",
        "img/p1.jpg",
        "img/p2.jpg",
        "img/p3.png",
        "img/p6.jpg",
        "img/p1_1.png",
        "img/p1_2.png",
        "img/p1_3.png",
        "img/p2_1.png",
        "img/p3_1.png",
        "img/p3_2.png",
        "img/p5.png",
        "img/p5_1.png",
        "img/p5_1.png",
        "img/player.png"
        );

        //预加载
        function preload() {
        	var load = document.getElementById('load');
            var process = $('#num');

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
                    console.log(percent + "%")
                    if(percent == 90){//全部加载完成后执行
                        percent = 100;
                        $(".load-msg").hide();
                        $(".page1").show();
                        setTimeout(function(){
                            // console.log("123");
                            $('.page1').fadeOut(500);
                        },3000);
                    };

                };
            };
        };

})
