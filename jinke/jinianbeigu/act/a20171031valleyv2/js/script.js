// var URL = window.location.href;
// var BASE_PATH = URL.substring(0, URL.lastIndexOf('/') + 1);
var BASE_PATH = "//game.gtimg.cn/images/mv2/act/a20171031valleyv2/";
var EVENT_TYPE=mobilecheck() ? 'tap' : 'click';
var __isAnimate=true;
var __isSoundOn=true;

var videoPlayer;
var __soundPart=1;
/**
 * 音乐icon & 提示箭头
 */
$(function(){
	// var musicHtml = "<img src=\""+BASE_PATH+"img/music.png\" class=\"musicicon musicplay\"/>";
	// $(".page").append(musicHtml);

	$(".musicicon").on(EVENT_TYPE, function() {
		__isSoundOn=!__isSoundOn;
		__isSoundOn?$(".musicicon").removeClass("on"):$(".musicicon").addClass("on");
		if(__isSoundOn){
		    if(__soundPart==2)videoPlayer.muted=false;

        }else {
            videoPlayer.muted=true;

        }
	});
});

/**
 * 图片预加载
 */
$(function(){
	// prevent iphone touchmove
	$(document).on("touchmove",function (event) {
    	event.preventDefault();
    });

    var loader = new PxLoader(),
	    // 把页面的图片列在这里
        fileList = [
        	'img/music.png',
        	'img/androDownLoad.png',
        	'img/androText.png',
        	'img/iosDownLoad.png',
        	'img/iosDownLoadLine.png',
        	'img/iosText.png',
        	'img/logo.png',
        	'img/startBtn.png',
        	'img/startBtnLine.png',
        	'img/androVideoBtn.png',
        	'img/iosVideoBtn.png',

        	'img/share.jpg',
        ];
    for (var i = 1; i <= 15; i++) {
        fileList.push("img/ending/" + i + ".jpg");
    }
    for (var i = 1; i <= 36; i++) {
        fileList.push("img/loading/" + i + ".jpg");
    }

	//把图片载入加载器

    for(var i = 0; i < fileList.length; i++){
        var pxImage = new PxLoaderImage(BASE_PATH + fileList[i]);

        pxImage.imageNumber = i + 1;
        loader.add(pxImage);
    }

	//当加载完成时
    loader.addCompletionListener(function(){
    	//console.log("预加载图片："+fileList.length+"张");
        PTTSendClick('loading','loadingcomplete','loading完毕');
    });

    //loading 进度监听
    loader.addProgressListener(function(e){
        var percent = Math.round( (e.completedCount / e.totalCount) * 100); //正序, 1-100
        realLoadingNum=percent;

    });
    var realLoadingNum=0;
    var fakeLoadingNum=0;
    var loadingNob;

    var isIntervalFinish=true;
    // var isIntervalFinish=true;
    function loadingFinish(){
        if(isIntervalFinish==false){
            return;
        }
        __isAnimate=false;
        $("#loading_inner").addClass("loading_inner_amin");
        $(".startBtnWrap").addClass("startBtnWrap_amin");
        $(".startBtnWrap").removeClass("noevent");
    }
    var myLoadingInterval=setInterval(function(){
        fakeLoadingNum++;
        if(fakeLoadingNum>realLoadingNum){
            $("#loading_inner").html(realLoadingNum+"%");
        }else {
            $("#loading_inner").html(fakeLoadingNum+"%");
        }
        if(fakeLoadingNum>=100 && realLoadingNum>=100){
            isIntervalFinish=true;
            loadingFinish();
            clearInterval(myLoadingInterval);
        }

    },50);

    //启动
    loader.start();
});
//判断用户机器
$(function(){
    var isMobileQQ = !!(typeof mqq != "undefined" && typeof mqq.QQVersion != "undefined" && mqq.QQVersion != 0 && !(/Qzone/.test(navigator.userAgent)));
    var userPhone=userAgent();

    var videoSrc="../../video/3031.mp4";
    videoPlayer=new MMD.VideoPlayer({
        videoElement:document.getElementById('video'),
        src:videoSrc,
        loop:false,
        muted:false,
        poster:'',
        tryMultipleVideoPlayAtTheSameTime:false,
        timesParam:[
            {name:'finalPoint',time:72},
        ],
        onTimes:function(name){
            switch (name) {
                case 'finalPoint':finalPoint();break;
            }
            function finalPoint() {
                __soundPart=1;

                $(".page-container").show();
                setTimeout(function () {
                    $(".video1").addClass("hidden");
                    $("#video").hide();
                },100)
                $(".logo").addClass("logo_amin");

                if(userPhone.isIphone){
                    $(".iosWrap").addClass("down_amin");
                    $(".iosVideoBtn").addClass("invisible");

                }else {
                    $(".androWrap").addClass("down_amin");
                    $(".androVideoBtn").addClass("invisible");

                }
                PTTSendClick('btn','videostart','视频开始');
            }
        },
        onStart:function(){
            __soundPart=2;
            if(__isSoundOn){
                videoPlayer.muted=false;
            }else {
                videoPlayer.muted=true;
            }
            // BGM.pause();
            if(userPhone.isIphone) {                   //ios
                $(".iosVideoBtn").removeClass("invisible");
            }else {
                $(".androVideoBtn").removeClass("invisible");
            }
                __isAnimate=false;
            $(".video1").removeClass("hidden");
            canvas_loading.stop();

            setTimeout(function () {
                $(".loading-container").hide();
                pageShow();
            },100)
        },
        onEnd:function(){
            __soundPart=1;
            $(".page-container").show();

            $(".video1").addClass("hidden");
            $("#video").hide();
            $(".logo").addClass("logo_amin");
            if(userPhone.isIphone){
                $(".iosWrap").addClass("down_amin");
                $(".iosVideoBtn").addClass("invisible");

            }else {
                $(".androWrap").addClass("down_amin");
                $(".androVideoBtn").addClass("invisible");

            }
            canvas_ending.start();
            PTTSendClick('video','videoend','视频播放完毕');

        }
    });


	var url="";
	if(userPhone.isIphone){                   //ios
        url="https://itunes.apple.com/cn/app/id1238778050";
        $(".iosWrap").removeClass("invisible");
        $(".iosLink").attr("href",url);
        $(".iosVideoLink").attr("href",url);
        // if(isMobileQQ){
        //     $(".loading-container").hide();
        //     $(".video1").removeClass("hidden");
        // }
        $(".startBtnWrap").hide();

        videoPlayer.play();

        TGMobileShare({
            shareTitle:'这世界上真的有纪念碑谷吗？', //不设置或设置为空时，页面有title，则调取title
            shareDesc:'想象的脚步，自此出发。纪念碑谷2iOS限时降价中！', //不设置或设置为空时，页面有Description，则调取Description
            shareImgUrl:'https://game.gtimg.cn/images/mv2/act/a20171031valleyv2/img/share.jpg', //分享图片尺寸200*200，且填写绝对路径
            shareLink:'', //分享链接要跟当前页面同域名(手Q分享有这个要求) ,不设置或设置为空时，默认调取当前URL
            actName:'a20171031valley' //点击流命名，用于统计分享量，专题一般采用目录名称如a20151029demo
        });
        PTTSendClick('page','iosindex','ios进入');

    }else {                                 //andro
        $(".androWrap").removeClass("invisible");
        if(isMobileQQ){
            url="http://m.gamecenter.qq.com/directout/detail/1106097521?ver=0&st=1509328617908&number=0&path=489&plat=qq&gamecenter=1&_wv=2147484679&gc_version=2&ADTAG=gamecenter&asyncMode=3&_wwv=4&notShowPub=1&appid=1106097521";
            PTTSendClick('page','androindexqq','安卓手Q进入');

        }else {
            url="https://game.weixin.qq.com/cgi-bin/h5/static/gamecenter/detail.html?appid=wx0f59b86a02d683f0";
            PTTSendClick('page','androindexwx','安卓微信进入');

        }
        $(".androLink").attr("href",url);
        $(".androVideoLink").attr("href",url);

        TGMobileShare({
            shareTitle:'这世界上真的有纪念碑谷吗？', //不设置或设置为空时，页面有title，则调取title
            shareDesc:'想象的脚步，自此出发。纪念碑谷2安卓版11月6日上线！', //不设置或设置为空时，页面有Description，则调取Description
            shareImgUrl:'https://game.gtimg.cn/images/mv2/act/a20171031valleyv2/img/share.jpg', //分享图片尺寸200*200，且填写绝对路径
            shareLink:'', //分享链接要跟当前页面同域名(手Q分享有这个要求) ,不设置或设置为空时，默认调取当前URL
            actName:'a20171031valley' //点击流命名，用于统计分享量，专题一般采用目录名称如a20151029demo
        });
    }
    $(".iosDownLoadLine").addClass("downLoadLine_amin");
    $(".videoBtn").on("touchstart",function () {
        $(this).addClass("on");

    });
    $(".videoBtn").on("touchend",function () {
        $(this).removeClass("on");
        if(userPhone.isIphone){
            url="https://itunes.apple.com/cn/app/id1238778050";
            window.location.href=url;
            PTTSendClick('btn','iosvideodownloadBtn','ios视频内下载按钮');

        }else {
            if(isMobileQQ){
                url="http://m.gamecenter.qq.com/directout/detail/1106097521?ver=0&st=1509328617908&number=0&path=489&plat=qq&gamecenter=1&_wv=2147484679&gc_version=2&ADTAG=gamecenter&asyncMode=3&_wwv=4&notShowPub=1&appid=1106097521";
                PTTSendClick('btn','androqqvideodownloadBtn','安卓手Q视频内下载按钮');

            }else {
                url="https://game.weixin.qq.com/cgi-bin/h5/static/gamecenter/detail.html?appid=wx0f59b86a02d683f0";
                PTTSendClick('btn','androwxvideodownloadBtn','安卓微信视频内下载按钮');

            }
        }
        window.location.href=url;

    });


});
/**
 * 交互事件监听
 */
$(function(){
    canvas_ending.picReady();
    canvas_loading.picReady();

    //temp
    // $(".skip").on("touchstart",function(){
    //     videoPlayer.playbackRate=5;
    // });
    //点击播放视频
    $(".startBtnWrap").on("touchstart",function(){
        $(".startBtnLine").removeClass("startBtnLine_amin");
        $(".startBtn").addClass("startBtn_amin");
        setTimeout(function () {
            $(".startBtn").removeClass("startBtn_amin");
        },300);
        videoPlayer.play();
    });
    var video1Play=true;
    var video1End=false;



    //ios 下载
    $(".iosDownLoadWrap").on("touchstart",function(){
        $(".iosDownLoad").addClass("downLoadBtn_amin");
        setTimeout(function () {
            $(".iosDownLoad").removeClass("downLoadBtn_amin");
        },350);
        PTTSendClick('btn','androdownloadBtn','安卓落版下载按钮');

    });
    //安卓点击 下载
    $(".androDownLoadWrap").on("touchstart",function(){
        $(".androDownLoad").addClass("downLoadBtn_amin");
        setTimeout(function () {
            $(".androDownLoad").removeClass("downLoadBtn_amin");
        },350);
        PTTSendClick('btn','iosdownloadBtn','ios落版内下载按钮');

    });

});
/**
 * ios 手机不能自动播放声音
 */
function bgm_init(){
	document.addEventListener("WeixinJSBridgeReady", function () {
        videoPlayer.play();
	}, false);
}
/**
 * 判断用户机器
 * @returns {{}}
 */
function userAgent() {
    var sUserAgent = navigator.userAgent.toLowerCase();

    var o = {};
    o.isIpad = /ipad/i.test(sUserAgent);
    o.isIphone = /iphone os/i.test(sUserAgent);
    o.isUc7 = /rv:1.2.3.4/i.test(sUserAgent);
    o.isUc = /ucweb/i.test(sUserAgent);
    o.isAndroid = /android/i.test(sUserAgent);
    o.isWM = /windows mobile/i.test(sUserAgent);

    o.isPhone = o.isIphone || o.isAndroid || o.isWM || o.isUc7 || o.isUc;
    o.isMobile = o.isIpad || o.isPhone || o.isAndroid;
    o.isPc = !o.isMobile;
    o.isIOS = o.isIpad || o.isIphone;

    return o;
}

function nextToPage(flag){

    if(__isAnimate) return;
    var pageNo=$(".cur").attr("data-page");

    __isAnimate=true;
    $(".cur").addClass("page-cur-fadeout");
    $(".p"+flag).addClass("page-next-fadein");
    setTimeout(function(){
        $(".cur").removeClass("cur");
        $(".p"+flag).addClass("cur");
    },200);
    setTimeout(function(){
        $(".page-cur-fadeout").removeClass("page-cur-fadeout");
        $(".page-next-fadein").removeClass("page-next-fadein");
        __isAnimate=false;
        pageShow();
    },500);
}

function pageShow(){
	var pageNo=$(".cur").attr("data-page");
	switch(pageNo){
		case "1":showPage1();break;
		default:showPage1();break;
	}
}

function showPage1() {

}


function mobilecheck() {
	var check = false;
	(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}

// style
$(window).resize(function(){
	setTimeout(function () {
        resize();
    },200);
});
$(document).ready(function(){
    setTimeout(function () {
        resize();
    },200);

});

function resize(){
    var resizeDiv=resizeTool.initial({
        portrait :"null",  //portrait 竖屏 landscape false 横屏
        windowWidth:320,  //默认屏幕320
    });
    resizeDiv.start();

    resizeDiv.resizeText("loading_inner","14","14");


    var w=$(window).width();
	var h=$(window).height();
	if(h < w){
        $(".musicicon").css({
            "-webkit-transform":"rotate(90deg) translate3d(0px,"+(w-90)+"px,0) scale(0.7)",
         });
         $(".videoBtn").css({
            "-webkit-transform":"rotate(-90deg) translate3d("+(h-80)+"px,0px,0) scale(0.7)",
         });

    }else {
        $(".musicicon").css({
            "-webkit-transform":"rotate(0deg) translate3d(0px,0,0) scale(1)",
         });
        $(".videoBtn").css({
            "-webkit-transform":"rotate(0deg) translate3d(0px,0,0) scale(1)",
         });

    }



}
