<?php
require_once "jssdk.php";
$jssdk = new JSSDK("wx773395307a83393e", "bf5007a3121b5ecf1f1fd9e12479fd21");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>中国金科 华南品牌发布会  邀请函</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

    <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="dist/css/swiper.min.css">
    <link rel="stylesheet" href="dist/css/animate.min.css">
    <link rel="stylesheet" href="dist/css/index.css">

    <!-- Demo styles -->
    <style>
    html, body {
        position: relative;
        height: 100%;
    }
    body {
        background: #eee;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color:#000;
        margin: 0;
        padding: 0;
    }
    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    /*音乐*/
    .micBtn {
      position:fixed; left:10px; top:10px; z-index:999;
      width:30px; height:30px;
      background:url(image/micBtn.png) no-repeat;
      display:block;
        background-size: 100% 100%;
    }
    .micBtn2 {
        background:url(image/micBtn2.png) no-repeat;
        background-size: 100% 100%;
    }

    .rotate{
      -webkit-animation: rotate 4s linear infinite;
      animation: rotate 4s linear infinite;
    }
    @-webkit-keyframes rotate {
        from { transform: rotate(0deg);}
        to { transform: rotate(360deg);}
    }
    @keyframes rotate {
        from { transform: rotate(0deg);}
        to { transform: rotate(360deg);}
    }




    </style>
</head>
<body>
    <!-- music -->
    <a href="javascript:0" id="micBtn" class="micBtn rotate"></a>
    <!-- 提示页面下翻 箭头 -->
    <!-- <div class="arraw"></div> -->

    <!-- Swiper -->
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="page page-1 ">
                    <div class="ani page page-1" swiper-animate-effect="pulse" swiper-animate-duration="2s"></div>

                </div>
            </div>

            <div class="swiper-slide">
                <div class="page page-2">

                    <div class="ani page page-2" swiper-animate-effect="pulse" swiper-animate-duration="2s"></div>

                </div>
            </div>

            <div class="swiper-slide">
                <div class="page page-3">

                     <div class="ani page page-3" swiper-animate-effect="pulse" swiper-animate-duration="2s"></div>

                </div>
            </div>


            <div class="swiper-slide">
                <div class="page page-4" >

                    <div class="ani page page-4" swiper-animate-effect="pulse" swiper-animate-duration="2s"></div>
                    <div class="line"></div>

                </div>
            </div>

            <div class="swiper-slide">
                <div class="page page-5">

                    <div class="ani page page-5" swiper-animate-effect="pulse" swiper-animate-duration="2s"></div>

                </div>
            </div>
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
    </div>

    <!-- Swiper JS -->
    <script src="dist/js/swiper.min.js"></script>
    <script src="dist/js/swiper.animate1.0.2.min.js"></script>
    <script src="dist/js/jquery-1.9.1.min.js"></script>


    <!-- Initialize Swiper -->
    <script>

    $('.menu').on('click', function(){
         $('.mask-view').fadeIn(500);
    })

    $('div[data-id]').on('click',function(){

        $('.mask-view').fadeOut();
        var num = $(this).attr('data-id');
        swiper.slideTo(num, 100, false);//切换到第一个slide，速度为1秒

        swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
    })

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        preloadImages: true,
        updateOnImagesReady : true,
        resistanceRatio:0,
        paginationClickable: true,
        direction: 'horizontal',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            if(swiper.isEnd){
                $('.arraw').fadeOut(100);
            }else{
                $('.arraw').fadeIn();
            }
        },

    });
    </script>

    <script type="text/javascript">
        var audio = document.createElement('audio');
        audio.src = "audio/bgm.mp3";//音乐链接
        audio.loop = true;//音乐是否循环
        audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
        $(".micBtn").on("click",function(){
            if (audio.paused == true) {
                audio.play();
                $(this).addClass("rotate").removeClass("micBtn2");
            } else {
                audio.pause();
                $(this).removeClass("rotate").addClass("micBtn2");
            }
        });
    </script>

    <!-- 微信分享js begin -->
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script type="text/javascript">
      wx.config({
        debug: false,
        appId: '<?php echo $signPackage["appId"];?>',
        timestamp: '<?php echo $signPackage["timestamp"];?>',
        nonceStr: '<?php echo $signPackage["nonceStr"];?>',
        signature: '<?php echo $signPackage["signature"];?>',
        jsApiList: [
          // 所有要调用的 API 都要加到这个列表中
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo'
        ]
      });
        window.shareData = {
            "imgUrl": "http://test.ihotd.com/lixiao/zzctweiloushu0626_2017-06-25/image/share.png",
            "tLink": "http://test.ihotd.com/lixiao/zzctweiloushu0626_2017-06-25/index.php",
            "tTitle": "中庄翠庭微楼书",
            "tContent": "繁华之上，品味人生"
            };
      wx.ready(function () {
        // 在这里调用 API
        wx.checkJsApi({
        jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
        ]
      });
        wx.onMenuShareAppMessage({
        title: window.shareData.tTitle,
        desc: window.shareData.tContent,
        link: window.shareData.tLink,
        imgUrl: window.shareData.imgUrl,
        success: function (res) {
            //alert('已分享');
        },
        cancel: function (res) {
           //alert('已取消');
        }
    });

        wx.onMenuShareTimeline({
            title: window.shareData.tTitle,
            link: window.shareData.tLink,
            imgUrl: window.shareData.imgUrl,
            success: function (res) {
                //alert('已分享');
            },
            cancel: function (res) {
               //alert('已取消');
            }
        });
    });
</script>
</body>
</html>
