/**
 * Created by Programmer on 2017/10/31.
 */




var canvas_loading=canvasSeque.initial({
    sequence:false,// true闆ⅶ鍥� false 鍏ㄥ睆
    imgSrc:BASE_PATH+'img/loading/', //鍥剧墖璺緞
    number:36,//搴忓垪甯ф暟閲�  i=1 1-75
    id:"loading",// canvas idName
    loop:true,
    type:"jpg",  //鍏ㄥ睆鏃惰缃�
    first:1,   //   澶氬紶璧峰 榛樿1
    frame:10,   //   ms/

});
canvas_loading.start();


var canvas_ending=canvasSeque.initial({
    sequence:false,// true闆ⅶ鍥� false 鍏ㄥ睆
    imgSrc:BASE_PATH+'img/ending/', //鍥剧墖璺緞
    number:15,//搴忓垪甯ф暟閲�  i=1 1-75
    id:"ending",// canvas idName
    loop:true,
    type:"jpg",  //鍏ㄥ睆鏃惰缃�
    first:1,   //   澶氬紶璧峰 榛樿1
    frame:10,   //   ms/

});

canvas_ending.control=function () {
  if(canvas_ending.i==15){
      canvas_ending.return();
  }
    if(canvas_ending.i==1){
        canvas_ending.go();
    }
};










