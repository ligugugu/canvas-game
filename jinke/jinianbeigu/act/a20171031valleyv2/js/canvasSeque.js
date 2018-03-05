/**
 * Created by Programmer on 2017/3/21.
 */
/**
 * gc.start    鍒濆鍖�
 * gc.control  鎺у埗鍗曞紶搴忓垪甯� 榛樿寰幆
 * gc.i
 * gc.clearInterval    鍏抽棴搴忓垪甯�
 * @type {{initial: Function}}
 */

var canvasSeque={

    initial:function(useOption){
        var gc={};
        var width,height;
        var canvas,cxt;

        var option={
            sequence:true,// true鍗曞紶鍥� false 澶氬紶鍥�
            imgSrc:'', //鐓х墖鍦板潃 锛堝寮犲浘鍒版牴鐩綍锛�
            number:10,//搴忓垪甯ф暟閲�
            id:'test', //canvas id
            type:"png",
            loop:true,
            frame:10,   //   ms/
            first:1,   //   澶氬紶璧峰 榛樿1
        };
        var fps;
        var now;
        var then = Date.now();
        var interval;
        var delta;
        var stop=false; //搴忓垪甯х粨鏉熸爣璇嗙
        var pause=false; //搴忓垪甯ф殏瀹氭爣璇嗙
        var giReturn=false; //榛樿false true鍊掑洖锛�
        requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
            function(callback) {
                setTimeout(callback, 1000 / option.frame);
            };

        //鍗曞紶搴忓垪甯�
        function canvasSeque(){
            var img=new Image();
            img.src=option.imgSrc;
            img.onload=function(){

                cxt.clearRect(0,0,width,height);
                cxt.drawImage(img, 0, gc.i*height, width, height,0,0,width,height);
                gc.proceed();
                gc.control();
                if(pause){
                    gc.i=gc.i-1;
                }
            }
        }

        // 澶氬紶搴忓垪甯�
        function img_init(){
            var first=option.first;
            var last=option.number;
            var html="";
            var imgDiv=document.createElement("div");
            imgDiv.id="canvasImgBox";
            imgDiv.className="hidden";
            $("body").append(imgDiv);
            for(var i=first;i<=last;i++){
                html+="<img src='"+option.imgSrc+i+"."+option.type+"' id='"+option.id+i+"'/>";
            }
            $("#canvasImgBox").append(html);
            $("#"+option.id+first+"")[0].onload=function(){
                cxt.drawImage($("#"+option.id+first+"")[0], 0, 0, width, height);
            };
        }

        function fullScreen() {
            // console.log(gc.i)

            cxt.clearRect(0, 0, width, height);
            cxt.drawImage($("#"+option.id+gc.i+"")[0], 0, 0, width, height);
            gc.proceed();
            gc.control();
            if(pause){
                if(giReturn){
                    gc.i=gc.i+1;

                }else {
                    gc.i=gc.i-1;

                }
            }
            // console.log( gc.i)
        }
        function tick() {
            if(stop) return;
            requestAnimationFrame(tick);
            now = Date.now();
            delta = now - then;
            if (delta > interval) {
                then = now - (delta % interval);
                if(option.sequence){
                    // console.log("搴忓垪甯э細"+gc.i);
                    canvasSeque();
                }else {
                    // console.log("鍏ㄥ睆搴忓垪甯э細"+gc.i);
                    fullScreen();
                }
            }
        }

        function updateOption() {
            for(var key in useOption){
                option[key]=useOption[key];
            }
        }
        gc.proceed=function () {
            if(giReturn){
                gc.i --;
            }else {
                gc.i ++;
            }
        };
        gc.control=function(){
            if(option.loop){
                if(option.sequence){
                    if(gc.i==parseInt(option.number)){
                        gc.i=0;
                    }
                }else {
                    if(gc.i==(parseInt(option.number)+1)){
                        gc.i=option.first;
                    }
                }
            }else {
                if(option.sequence){
                    if(gc.i==parseInt(option.number)){
                        gc.stop();
                    }
                }else {
                    if(gc.i==(parseInt(option.number)+1)){
                        gc.stop();
                    }
                }
            }

        };

        /**
         * 浠ヤ笅涓哄姛鑳戒娇鐢ㄩ儴鍒�
         **/
        //鍒濆鍖�
        gc.picReady=function () {
            fps = option.frame;  //姣忓抚闂撮殧
            interval = 1000/fps;

            canvas=$("#"+option.id+"")[0];
            cxt=canvas.getContext("2d");
            width=canvas.width;
            height=canvas.height;

            if(option.sequence){
                gc.i=0;
            }else {
                img_init();
                gc.i= option.first;
            }

        };
        //寮€濮嬪姩鐢�  浠庣涓€寮犲紑濮�
        gc.start=function () {
            stop=false;
            if(option.sequence){
                gc.i=0;
            }else {
                // img_init();
                gc.i= option.first;
            }

            tick();
        };
        // 鏈€鍚庣粓姝�
        gc.stop=function(){
            stop=true;
        };
        // 褰撳墠鍋滄
        gc.pause=function(){
            pause=true;
        };
        //  寮€濮嬪姩鐢�  锛堢浉瀵逛簬鏆傚畾锛�
        gc.play=function(){
            pause=false;
        };
        //鍔ㄧ敾浠庡綋鍓嶈繑鍥�
        gc.return=function () {
            giReturn=true;
        };
        //鍔ㄧ敾 浠庡綋鍓� 姝ｅ父杩涜
        gc.go=function () {
            giReturn=false;
        };

        updateOption();
        return gc;
    }
};

