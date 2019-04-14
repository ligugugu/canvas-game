<?php
if(isset($_GET['imgurl'])){
    $imgurl = $_GET['imgurl'];
}else{
    $imgurl = '';
}
$word_arr = array(1,2,3,4,5,6,7,8,9);
//1左边 2右边
$left_right = mt_rand(1,2);
$randp = get_one($word_arr);
function get_one($a){
    $key = array_rand($a,1);
    $value = $a[$key];
    unset($a[$key]);
    return $value;
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
    <link rel="stylesheet" href="css/swiper-4.2.2.min.css"/>
    <link rel="stylesheet" href="css/animate.min.css"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link rel="stylesheet" type="text/css" href="css/sweetalert.css"/>
    <title>母亲节</title>
</head>
<body>
<div class="container" >
    <a href="javascript:0" id="micBtn" class="micBtn rotate"></a>
    <div class="loading1 ">
        <div class="load-con">
            <img src="img/loading.png" alt="">
        </div>
        <div id="num">1</div>
    </div>
    <!-- 前5张图-->
    <div class="swiper-container hide">
        <div class="swiper-wrapper">
            <div class="swiper-slide page1">
                <div class="page1-p1 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"></div>
                <div class="page1-p2 ani" swiper-animate-effect="flower"></div>
                <div class="page1-p3 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"></div>
                <div class="page1-p4 ani" swiper-animate-effect="deng"></div>
                <div class="page1-p5 ani" swiper-animate-effect="slideInDown" swiper-animate-duration="1.5s" swiper-animate-delay="1.3s"></div>
            </div>
            <div class="swiper-slide page2">
                <div class="page2-p1 ani" swiper-animate-effect="slideInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"></div>
            </div>
            <div class="swiper-slide page3">
                <div class="page3-p1 ani" swiper-animate-effect="slideInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="0.3s"></div>
            </div>
            <div class="swiper-slide page4">
                <div class="page4-p1 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
            </div>
            <div class="swiper-slide page5">
                <div class="page5-p1 ani" swiper-animate-effect="slideInDown" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
            </div>
            <div class="swiper-slide page6">

            </div>
        </div>
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div> -->
            <div class="swiper-button-next btn"></div>
        </div>
     </div>
    <!-- 前5张图 end-->
    <div class="zhizuo">
        <a class="zhizuoBtn" href="javascript:;">
            <img src="img/zhizuoBtn.png" alt="">
        </a>
    </div>
        <div class="photo hide"> <!-- 上传图片 -->
          <div class="photo-img">
              <div class="photo-img-con">
                  <?php if($left_right==1): ?>
                        <img class="photo-img-t" src="<?php echo 'img/'.$randp.'.png'; ?>" alt=""> <!-- 左边的字 -->
                  <?php endif; ?>
                  <!--					<img id = "personal-headimg-con" src="img/bg.jpg">-->
                  <div id = "personal-headimg-con"  >
                      <?php if($left_right!=1): ?>
                          <img class="photo-img-t2" src="<?php echo 'img/'.$randp.'.png'; ?>" alt=""><!-- 右边的字 -->
                      <?php endif; ?>
                  </div>
              </div>
            </div>
            <div class="phone-t"></div>
            <a class="photo-btn1" href="javascript:;">
                <input id = "personal-headimg-input" type="file" onfocus="this.blur()" >
            </a>
            <a class="photo-btn2" href="javascript:;"></a>
            <a class="photo-btn3" href="javascript:;"></a>
        </div><!-- 上传图片 end-->
        <div class="result hide"> <!-- 生成海报 -->
            <div class="result-con">
                <div class="cross"></div>
                <img id="comp" src="img/bg.jpg" alt="">
                <p>长按保存图片</p>
            </div>
        </div><!-- 生成海报 end-->
        <div class="loading2 hide"><!-- loading2 页面 -->
            <div class="load2-con">
                <img src="img/loading.png" alt="">
            </div>
            <p>生成海报中...</p>
            <div id="num2">1</div>
        </div> <!-- loading2 页面 end-->
        <div class="share hide"> <!-- 分享 页面 -->
            <img src="img/share-img.png" alt="">
        </div> <!-- 分享 页面 end-->
    </div>
</body>
<script src="js/jquery-3.1.1.min.js"></script>
<script src="js/swiper-4.2.2.min.js"></script>
<script src="js/swiper.animate1.0.3.min.js"></script>
<script src="js/main.js"></script>
<script type="text/javascript" src="js/sweetalert.min.js"></script>
<script type="text/javascript" src="js/exif.js"></script>
<script>
    var swidth,sheight;
    $(".zhizuoBtn").on("click",function(){
        $(".photo").show();
        $(".photo-btn2").on("click",function(){
	     	var status = chktype();
            if(status == false){
                return;
            }
            $(".loading2").show();
            var num2v = document.getElementById("num2");
            var num=1;
            var timer = setInterval(function(){
                num +=2;
                num2v.innerHTML=num+"%";
                if(num>=99){
                    clearInterval(timer);
                    var formData = new FormData();
                    var randp = '<?php echo $randp; ?>';
                    var left_right = '<?php echo $left_right; ?>';
                    formData.append("upfile", $("#personal-headimg-input")[0].files[0]);
                    formData.append('randp',randp);
                    formData.append('left_right',left_right);
                    $.ajax({
                        url:'handle.php',
                        type:'POST',
                        data: formData,
                        dataType:'JSON',
                        processData: false,
                        contentType: false,
                        success:function(res){
                            if(res.status == 'success'){
                               $(".result").show();
                                $(".loading2").hide();
                                $("#comp").attr("src",res.imgurl);
                            }else{
                                swal({
                                    title: "",
                                    text:res.msg,
                                    type: "warning",
                                    confirmButtonColor: "#f18d00",
                                    confirmButtonText: "确定"
                                },function(){
                                	location.reload();
                                })
                            }
                        }
                    });
                }
            },100)
        })
    })
    $(".photo-btn3").on("click",function(){
	    var status = chktype();
        if(status == false){
            return;
        }
        $(".loading2").show();
        var num2v = document.getElementById("num2");
        var num=1;
        var timer = setInterval(function(){
            num +=2;
            num2v.innerHTML=num+"%";
            if(num>=99){
                clearInterval(timer);
                var formData = new FormData();
                var randp = '<?php echo $randp; ?>';
                var left_right = '<?php echo $left_right; ?>';
                formData.append("upfile", $("#personal-headimg-input")[0].files[0]);
                formData.append('randp',randp);
                formData.append('left_right',left_right);
                $.ajax({
                    url:'handle.php',
                    type:'POST',
                    data: formData,
                    dataType:'JSON',
                    processData: false,
                    contentType: false,
                    success:function(res){
                        if(res.status == 'success'){
                            location.href = res.jumpurl + '&type=share';
                            return false;
                        }else{
                              swal({
                                    title: "",
                                    text:res.msg,
                                    type: "warning",
                                    confirmButtonColor: "#f18d00",
                                    confirmButtonText: "确定"
                                },function(){
                                	location.reload();
                                })
                        }
                    }
                });
            }
        },100)
    })
    $('#personal-headimg-input').on('change', function() {
        var file = document.getElementById('personal-headimg-input').files[0];
        //设置限制图像的大小为10MB，这里你可以自己设置
        var fSize = 1024 * 1024 *10;
        if(file.type!='image/jpeg'){
            swal({
                title: "",
                text:"请上传jpg格式的图片",
                type: "warning",
                confirmButtonColor: "#f18d00",
                confirmButtonText: "确定"
            })
            return false;
        }
        if(file.size>fSize) {
            swal({
                title: "",
                text: "请上传小于10M的图片",
                type: "warning",
                confirmButtonColor: "#f18d00",
                confirmButtonText: "确定"
            })
            return;
        }
        var orientation;
        //EXIF js 可以读取图片的元信息 https://github.com/exif-js/exif-js
        EXIF.getData(file,function(){
            orientation = EXIF.getTag(this,'Orientation');
        });
        var reader = new FileReader();
        reader.onload = function(e) {
            getImgData(this.result,orientation,function(data){
                //这里可以使用校正后的图片data了
                var bwidth,bheight;
                if (swidth > sheight) {
                    bwidth = "auto";
                    bheight = "100%";
                }else{
                    bwidth = "100%";
                    bheight = "auto";
                }
                //负责显示预览图
                $('#personal-headimg-con').css("background-size"," "+bwidth +" "+ bheight+" ");
                $('#personal-headimg-con').css("background-image","url(" + data + ")");
                $('#personal-headimg-con').css("backgroundRepeat",'no-repeat');
                $('#personal-headimg-con').css("backgroundPosition",'center center');
            });
        }
        reader.readAsDataURL(file);
        //解决上传相同文件不触发onchange事件
//        var clone = this.cloneNode(true);
//        clone.onchange = arguments.callee; //克隆不会复制动态绑定事件
//        clone.value = '';
//        this.parentNode.replaceChild(clone, this);
//        console.log('重新上传了');
    })
    function chktype(){
        var img = $('#personal-headimg-input').val();
        var file = $("#personal-headimg-input")[0].files[0];
        //设置限制图像的大小为10MB，这里你可以自己设置
        var fSize = 1024 * 1024 *10;
        if(!img){
            swal({
                title: "",
                text:"请上传图片!",
                type: "warning",
                confirmButtonColor: "#f18d00",
                confirmButtonText: "确定"
            })
            return false;
        }else if(file.type!='image/jpeg'){
            swal({
                title: "",
                text:"请上传jpg格式的图片",
                type: "warning",
                confirmButtonColor: "#f18d00",
                confirmButtonText: "确定"
            })
            return false;
        }
        if(file.size>fSize){
            swal({
                title: "",
                text:"请上传小于10M的图片",
                type: "warning",
                confirmButtonColor: "#f18d00",
                confirmButtonText: "确定"
            })
            return false;
        }
        return true;
    }
    function getImgData(img,dir,next){
        var image=new Image();
        image.onload=function(){
            var degree=0,drawWidth,drawHeight,width,height;
            drawWidth=this.naturalWidth;
            drawHeight=this.naturalHeight;
            swidth = this.naturalWidth;
            sheight = this.naturalHeight;
            //以下改变一下图片大小
            var maxSide = Math.max(drawWidth, drawHeight);
           if (maxSide > 1024) {
               var minSide = Math.min(drawWidth, drawHeight);
               minSide = minSide / maxSide * 1024;
               maxSide = 1024;
               if (drawWidth > drawHeight) {
                   drawWidth = maxSide;
                   drawHeight = minSide;
               } else {
                   drawWidth = minSide;
                   drawHeight = maxSide;
               }
           }
            var canvas=document.createElement('canvas');
            canvas.width=width=drawWidth;
            canvas.height=height=drawHeight;
            var context=canvas.getContext('2d');
            //判断图片方向，重置canvas大小，确定旋转角度，iphone默认的是home键在右方的横屏拍摄方式
            switch(dir){
                //iphone横屏拍摄，此时home键在左侧
                case 3:
                    degree=180;
                    drawWidth=-width;
                    drawHeight=-height;
                    break;
                //iphone竖屏拍摄，此时home键在下方(正常拿手机的方向)
                case 6:
                    canvas.width=height;
                    canvas.height=width;
                    degree=90;
                    drawWidth=width;
                    drawHeight=-height;
                    swidth = this.naturalHeight;
                    sheight = this.naturalWidth;
                    break;
                //iphone竖屏拍摄，此时home键在上方
                case 8:
                    canvas.width=height;
                    canvas.height=width;
                    degree=270;
                    drawWidth=-width;
                    drawHeight=height;
                    break;
            }
            //使用canvas旋转校正
            context.rotate(degree*Math.PI/180);
            context.drawImage(this,0,0,drawWidth,drawHeight);
            //返回校正图片
            next(canvas.toDataURL("image/jpeg",.8));
        }
        image.src=img;
    }
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
        "tLink": "http://h5.ldcywh.com/mothersday/index.php",
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
</html>
