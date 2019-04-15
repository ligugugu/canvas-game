<!-- <?php
 require_once "jssdk.php";
 $appid = 'wx7aca97f524fe4ecc';
 $jssdk = new JSSDK($appid);
 $signPackage = $jssdk->GetSignPackage();
?> -->
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>芒果很忙忙忙忙忙忙忙忙忙忙忙忙忙忙...</title>
    <meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1, minimum-scale=1,maximum-scale=1,target-densitydpi=device-dpi">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link href="css/fun_com.min.css" type="text/css" rel="stylesheet" />
    <link rel="stylesheet" href="css/index.css" type="text/css">
</head>

<body>
    <div class="lastPage">
        <div class="lastP1 abs"></div>
        <div class="lastP2 abs"></div>
        <img src="assets/ewm.png" class="ewm abs">
        <div class="lastP3 abs"></div>
        <div class="lastP4 abs">
            <a href="tel:0715-8908666" class="tel"></a>
        </div>
        <div class="rightImg abs"></div>
    </div>
    <!-- 背景音乐 -->
    <!-- <audio id="music" loop src="music/bgm.mp3"></audio>
    音效
    <audio id="yx1" src="music/yx1.mp3"></audio>
    <audio id="yx2" src="music/yx2.mp3"></audio>
    <audio id="yx3" src="music/yx3.mp3"></audio>
    <audio id="yx4" src="music/yx4.mp3"></audio>
    <audio id="yx5" src="music/yx5.mp3"></audio>
    <audio id="yx6" src="music/yx6.mp3"></audio>
    <audio id="yx7" src="music/yx7.mp3"></audio>
    <audio id="yx8" src="music/yx8.mp3"></audio> -->
    <audio src="audio/bgm.mp4" id="page2" preload="metadata"></audio>
    <script>
        var audio = document.getElementById('music');
        var yx1 = document.getElementById('yx1');
        var yx2 = document.getElementById('yx2');
        var yx3 = document.getElementById('yx3');
        var yx4 = document.getElementById('yx4');
        var yx5 = document.getElementById('yx5');
        var yx6 = document.getElementById('yx6');
        var yx7 = document.getElementById('yx7');
        var yx8 = document.getElementById('yx8');
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
            yx1.play();
            yx1.pause();
            yx2.play();
            yx2.pause();
            yx3.play();
            yx3.pause();
            yx4.play();
            yx4.pause();
            yx5.play();
            yx5.pause();
            yx6.play();
            yx6.pause();
            yx7.play();
            yx7.pause();
            yx8.play();
            yx8.pause();
        }, false);


        var yx1play = false;
        var yx2play = false;
        var yx3play = false;
        var yx4play = false;
        var yx5play = false;
        var yx6play = false;
        var yx7play = false;
        var yx8play = false;
    </script>
    <!-- lib -->
    <script src="lib/jquery-1.8.3.min.js"></script>
    <script src="lib/pixi.js"></script>
    <script src="lib/tweenjs.min.js"></script>
    <script src="lib/Actions.js"></script>
    <!-- src -->
    <script src="src/main.js"></script>
    <script>
        // 优化分辨率
        // (function () {
        //     window.onresize = function () {
        //         document.documentElement.style.fontSize = document.documentElement.clientWidth / 6.4 + 'px';
        //     };
        //     onresize();
        // })();
    </script>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script type="text/javascript" src="http://weixin.juzhen.com/WebServices/matrix.weixin.share.2.0.1.js"></script>
<!--    <script src="script/WechatShare.js"></script>-->
    <!--流量统计-->
    <!--juzhen02.com-->
    <script>
    //audio
    var page2 = document.getElementById('page2');
    page2.loop = true;//音乐是否循环
    page2.play();
    document.addEventListener("WeixinJSBridgeReady", function () {
        page2.play();
    }, false);
    </script>
    <script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
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
               "imgUrl": "http://h5.ldcywh.com/mg/assets/share.jpg",
               "tLink": "http://h5.ldcywh.com/mg/index.php",
                "tTitle": "芒果很忙忙忙忙忙忙忙忙忙忙忙忙忙忙...",
                "tContent": '“芒”着度假⛱'
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
