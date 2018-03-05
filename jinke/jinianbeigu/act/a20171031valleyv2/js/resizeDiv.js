/**
 * Created by Programmer on 2017/5/22.
 */
/**
 * 	锟斤拷锟斤拷锟斤拷锟� 元锟斤拷锟斤拷示锟斤拷锟斤拷 锟接达拷锟诫：-webkit-transform: translate3d(0,0,0); transform: translate3d(0,0,0);
 * portrait  锟斤拷幕强锟狡猴拷锟斤拷锟斤拷false锟斤拷/锟斤拷锟斤拷锟斤拷true锟斤拷
 * windowWidth  锟斤拷幕默锟较匡拷320
 * target  目锟斤拷class
 * nowH    锟斤拷始锟斤拷锟斤拷叨锟�
 * tarW    目锟斤拷锟� 锟斤拷px锟斤拷
 * tarH    目锟斤拷撸锟絧x锟斤拷
 *  gc.resizeText  锟斤拷锟斤拷锟叫★拷锟斤拷锟�
 *  gc.resizeWpb   锟侥憋拷目锟斤拷锟竭斤拷锟斤拷锟斤拷锟斤拷
 *  gc.resizeScale  scale锟斤拷锟斤拷  webkit-transform-origin: 50% 0%;
 *  gc.resizeMarinTop  通锟斤拷marginTop 锟斤拷锟斤拷锟斤拷锟斤拷锟狡斤拷
 *  gc.resizeMarginCenter  通锟斤拷margin 锟斤拷锟斤拷
 *  gc.resizePosCover  通锟斤拷position 锟截讹拷锟斤拷锟竭撅拷锟斤拷
 *  gc.resizePosContain  通锟斤拷position 锟斤拷锟铰伙拷锟斤拷锟揭讹拷锟斤拷 锟斤拷锟斤拷锟斤拷锟斤拷
 *  gc.resizeMarginContain  magion 锟斤拷锟铰伙拷锟斤拷锟揭讹拷锟斤拷 锟斤拷锟斤拷锟斤拷锟斤拷
 *  gc.resizeHorizontalPos  通锟斤拷position 水平锟斤拷锟斤拷
 * @type {{initial: resizeTool.initial}}
 */

var resizeTool={
    initial:function (useOption) {
        var gc = {};
        var w = $(window).width();
        var h = $(window).height();
        var tempH;
        var tempW;

        var option = {
            portrait :true,  //portrait true 锟斤拷锟斤拷 landscape false锟斤拷锟斤拷 null 没锟斤拷锟轿猴拷效锟斤拷
            windowWidth:320,  //默锟斤拷锟斤拷幕320

        };
        /**
         * 锟斤拷锟斤拷锟斤拷锟斤拷锟叫�
         * @param target  目锟斤拷class
         * @param fontSize
         * @param lineHeight
         */
        function resizeText(target,fontSize,lineHeight) {
            $("." + target).css({
                fontSize: fontSize / option.windowWidth * tempW + "px",
                lineHeight: lineHeight / option.windowWidth * tempW + "px"
            });
        }
        /**
         *  * 通锟斤拷锟斤拷锟斤拷width paddingBottom锟斤拷小
         *  target 目锟斤拷class
         *  nowH 锟斤拷始锟斤拷锟斤拷时锟斤拷锟斤拷幕锟竭度ｏ拷px锟斤拷
         *  tarW 锟斤拷始锟斤拷锟斤拷时锟斤拷目锟斤拷元锟截的匡拷px锟斤拷
         *  tarH 锟斤拷始锟斤拷锟斤拷时锟斤拷目锟斤拷元锟截高度ｏ拷px锟斤拷
         *
         * @param target
         */
        function resizeWpb(target,nowH,tarW,tarH) {

            if(tempH/tempW<(nowH/option.windowWidth)){
                $("."+target).css({
                    width:((tempH-(nowH-tarH)/option.windowWidth*tempW)*tarW/tarH)+"px",
                    paddingBottom:(tempH-(nowH-tarH)/option.windowWidth*tempW)+"px",
                });
            }else {
                $('.'+target).css({
                    width:tarW/option.windowWidth*100+"%",
                    paddingBottom:tarH/option.windowWidth*100+"%"
                })
            }
        }
        /**
         *  元锟斤拷锟斤拷锟脚讹拷位 -webkit-transform-origin: 50% 0%;
         * 通锟斤拷锟斤拷锟脚碉拷锟斤拷锟斤拷小
         *  target 目锟斤拷class
         *  nowH  锟斤拷始锟斤拷锟斤拷叨锟�
         *  tarW 锟斤拷始锟斤拷锟斤拷时锟斤拷目锟斤拷元锟截的匡拷px锟斤拷
         *  tarH 锟斤拷始锟斤拷锟斤拷时锟斤拷目锟斤拷元锟截高度ｏ拷px锟斤拷
         */
        function resizeScale(target,nowH,tarW,tarH) {
            if((tempH/tempW)<(nowH/option.windowWidth)){
                $("."+target).css({
                    "-webkit-transform":"scale("+((tempH-(nowH-tarH)/option.windowWidth*tempW)*tarW/tarH)/(tarW/option.windowWidth*tempW)+")",
                });
            }else {
                $('.'+target).css({
                    "-webkit-transform":"scale(1)",
                });
            }

        }
        /**
         * 通锟斤拷marginTop 锟斤拷锟斤拷锟斤拷锟斤拷锟狡斤拷
         *  target 目锟斤拷class
         *  nowH  锟斤拷始锟斤拷锟斤拷叨锟�
         *  tarH 锟斤拷始锟斤拷锟斤拷时锟斤拷目锟斤拷 元锟截高讹拷+元锟斤拷锟斤拷锟铰凤拷锟竭度ｏ拷px锟斤拷
         *  orMarg 原始marginTop锟斤拷px锟斤拷
         */
        function resizeMarinTop(target,nowH,tarH,orMarg) {
            if(tempH/tempW<(nowH/option.windowWidth)){
                $("."+target).css({
                    marginTop:(tempH-tarH/option.windowWidth*tempW)+"px",
                });
            }else {
                $('.'+target).css({
                    marginTop:orMarg+"%",

                })
            }
        }
        /**
         * 通锟斤拷margin 锟斤拷锟斤拷
         *  target 目锟斤拷class
         *  nowH  锟斤拷始锟斤拷锟斤拷叨锟�
         *  tarW 锟斤拷始锟斤拷锟斤拷时锟斤拷目锟斤拷 元锟截的匡拷px锟斤拷
         *  tarH 锟斤拷始锟斤拷锟斤拷时锟斤拷目锟斤拷 元锟截高度ｏ拷px锟斤拷
         *  status=1 目锟斤拷锟饺★拷 / 锟斤拷锟斤拷幕
         *  status=2 目锟斤拷锟斤拷==锟斤拷幕
         */
        function resizeMarginCenter(status,target,tarW,tarH) {
            if(status==1){   //目锟斤拷锟饺★拷/锟斤拷锟斤拷幕
                $("." + target).css({
                    "margin-top": -(tarH / option.windowWidth * tempW - tempH) / 2 + "px",
                    "margin-left": -(tarW / option.windowWidth * tempW - tempW) / 2 + "px",
                });
            }
            if(status==2){   //目锟斤拷锟斤拷=锟斤拷幕
                $("."+target).css({
                    "margin-top":-(tarH/option.windowWidth*tempW-tempH)/2+"px",
                });
            }

        }
        /**
         * 通锟斤拷position 锟截讹拷锟斤拷锟竭撅拷锟斤拷
         *  target 目锟斤拷class
         *  nowH  锟斤拷始锟斤拷锟斤拷叨锟�
         *  tarW 锟斤拷始锟斤拷锟斤拷时锟斤拷目锟斤拷 元锟截的匡拷px锟斤拷
         *  tarH 锟斤拷始锟斤拷锟斤拷时锟斤拷目锟斤拷 元锟截高度ｏ拷px锟斤拷
         */
        function resizePosCover(target,tarW,tarH) {
            // 锟斤拷页锟斤拷锟斤拷
            if((tempW/tempH)<(tarW/tarH)){
                $("."+target).css({               //锟斤拷锟斤拷
                    height:"100%",
                    width:tempH*tarW/tarH+"px",
                    top:0,
                    left:-(tempH*tarW/tarH-tempW)/2+"px"
                })
            }else {
                //锟斤拷锟斤拷
                $("."+target).css({
                    width:"100%",
                    height:tempW*tarH/tarW+"px",
                    left:0,
                    top:-(tempW*tarH/tarW-tempH)/2+"px"
                })
            }
        }
        /**
         * 通锟斤拷position 锟斤拷锟铰伙拷锟斤拷锟揭讹拷锟斤拷 锟斤拷锟斤拷锟斤拷锟斤拷
         *  target 目锟斤拷class
         *  tarW 锟斤拷始锟斤拷锟斤拷时锟斤拷目锟斤拷 元锟截的匡拷px锟斤拷
         *  tarH 锟斤拷始锟斤拷锟斤拷时锟斤拷目锟斤拷 元锟截高度ｏ拷px锟斤拷
         */
        function resizePosContain(target,tarW,tarH) {
            // 锟斤拷页锟斤拷锟斤拷
            if((tempW/tempH)<(tarW/tarH)){
                //锟斤拷锟斤拷
                $("."+target).css({
                    width:"100%",
                    height:tempW*tarH/tarW+"px",
                    left:0,
                    top:-(tempW*tarH/tarW-tempH)/2+"px"
                })
            }else {
                $("."+target).css({               //锟斤拷锟斤拷
                    height:"100%",
                    width:tempH*tarW/tarH+"px",
                    top:0,
                    left:-(tempH*tarW/tarH-tempW)/2+"px"
                })

            }
        }
        /**
         * margin 锟斤拷锟铰伙拷锟斤拷锟揭讹拷锟斤拷 锟斤拷锟斤拷锟斤拷锟斤拷
         *  target 目锟斤拷class
         *  tarW 锟斤拷始锟斤拷锟斤拷时锟斤拷目锟斤拷 元锟截的匡拷px锟斤拷
         *  tarH 锟斤拷始锟斤拷锟斤拷时锟斤拷目锟斤拷 元锟截高度ｏ拷px锟斤拷
         */
        function resizeMarginContain(target,tarW,tarH) {
            // 锟斤拷页锟斤拷锟斤拷
            if((tempW/tempH)<(tarW/tarH)){
                //锟斤拷锟斤拷
                $("."+target).css({
                    width:"100%",
                    height:tempW*tarH/tarW+"px",
                    margin:-(tempW*tarH/tarW-tempH)/2+"px auto 0"
                })
            }else {
                $("."+target).css({               //锟斤拷锟斤拷
                    height:"100%",
                    width:tempH*tarW/tarH+"px",
                    margin:"0 "+(-(tempH*tarW/tarH-tempW)/2)+"px 0"
                })
            }
        }

        /**
         *  pos 水平锟斤拷锟斤拷
         * @param target
         * @param tarW
         */
        function resizeHorizontalPos(target,tarW) {
            $("."+target).css({
                left:(tempW-tarW)/2+"px"
            })
        }

        function updataType() {
            if(option.portrait==true){
                // //强锟斤拷锟斤拷锟斤拷
                tempH=w<h?h:w;
                tempW=w<h?w:h;
                if (h < w) {//锟斤拷锟斤拷
                    $("#wrapbox").css({ "width": tempW,"height":tempH, "webkitTransform": "rotate(-90deg) translate("+(-h)+"px,0px)", "transform": "rotate(-90deg) translate("+(-h)+"px,0px)" });
                }
                else {//锟斤拷锟斤拷
                    $("#wrapbox").css({ "width": "100%","height":"100%", "webkitTransform": "rotate(0deg)", "transform": "rotate(0deg)" });
                }

            }
            if(option.portrait==false){
                //强锟狡猴拷锟斤拷
                tempH=w<h?w:h;
                tempW=w<h?h:w;
                if (h < w) {//锟斤拷锟斤拷
                    $("#wrapbox").css({ "width": "100%","height":"100%", "webkitTransform": "rotate(0deg)", "transform": "rotate(0deg)" });
                }
                else {//锟斤拷锟斤拷
                    $("#wrapbox").css({ "width": tempW,"height":tempH, "webkitTransform": "rotate(90deg) translate(0," + (-w) + "px)", "transform": "rotate(90deg) translate(0," +(-w)  + "px)" });
                }
            }
            if(option.portrait=="null"){
                tempH=h;
                tempW=w;
            }

        }
        function updata() {
            for (var key in useOption) {
                option[key] = useOption[key];
            }
        }
        gc.start = function () {
            updata();
            updataType();
        };
        gc.resizeText=function (target,fontSize,lineHeight) {
            resizeText(target,fontSize,lineHeight);
        };
        gc.resizeWpb=function (target,nowH,tarW,tarH) {
            resizeWpb(target,nowH,tarW,tarH);
        };
        gc.resizeScale=function (target,nowH,tarW,tarH) {
            resizeScale(target,nowH,tarW,tarH);
        };
        gc.resizeMarinTop=function (target,nowH,tarH,orMarg) {
            resizeMarinTop(target,nowH,tarH,orMarg);
        };
        gc.resizeMarginCenter=function (status,target,tarW,tarH) {
            resizeMarginCenter(status,target,tarW,tarH);
        };
        gc.resizePosCover=function (target,tarW,tarH) {
            resizePosCover(target,tarW,tarH);
        };
        gc.resizePosContain=function (target,tarW,tarH) {
            resizePosContain(target,tarW,tarH);
        };
        gc.resizeHorizontalPos=function (target,tarW) {
            resizeHorizontalPos(target,tarW);
        };
        gc.resizeMarginContain=function (target,tarW,tarH) {
            resizeMarginContain(target,tarW,tarH);
        };


        return gc;
    }
};
