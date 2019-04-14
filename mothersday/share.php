<?php
if(isset($_GET['imgurl'])){
    $imgurl = $_GET['imgurl'];
}else{
    $imgurl = 'http://h5.ldcywh.com/mothersday/img/bg.jpg';
}
if(isset($_GET['type'])&&$_GET['type']=='share'){
    $show = 1;
}else{
    $show = 0;
}
require_once "jssdk.php";
$appid = 'wx7aca97f524fe4ecc';
$jssdk = new JSSDK($appid);
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="application/xhtml+xml;charset=UTF-8" http-equiv="Content-Type">
    <meta content="no-cache,must-revalidate" http-equiv="Cache-Control">
    <meta content="no-cache" http-equiv="pragma">
    <meta content="0" http-equiv="expires">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="viewport" content="width=375, user-scalable=no">
    <meta name="format-detection" content="telephone=no,email=no,date=no,address=no">
    <link rel="stylesheet" href="css/style.css"/>
    <title>母亲节</title>
</head>
<body>
    <div class="container">
        <div class="share-to">
            <img src="<?php echo $imgurl; ?>" alt="">
        </div>
        <a class="share-to-btn" href="index.php"></a>
        <div class="share hide"> <!-- 分享 页面 -->
            <img src="img/share-img.png" alt="">
        </div> <!-- 分享 页面 end-->
    </div>
</body>
<script src="js/jquery-3.1.1.min.js"></script>
<script src="js/main.js"></script>
<script>
    var show = '<?php echo $show; ?>';
    if(show == 1){
        $(".share").show();
    }
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
        "imgUrl": "http://h5.ldcywh.com/mothersday/img/share.jpg",
        "tLink": "<?php echo 'http://h5.ldcywh.com/mothersday/share.php?imgurl='.$imgurl;?>",
        "tTitle": "母亲节",
        "tContent": '五月浓情 感恩母亲节'
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
</html>
