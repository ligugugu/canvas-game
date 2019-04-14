$(function(){
    preload(
        "img/bbg.jpg",
        "img/bg.jpg",
        "img/micBtn.png",
        "img/micBtn2.png",
        "img/btn.png",
        "img/btn1.png",
        "img/btn2.png",
        "img/cross.png",
        "img/p1.jpg",
        "img/p2.jpg",
        "img/p3.jpg",
        "img/p4.jpg",
        "img/p5.jpg",
        "img/p11.png",
        "img/p12.png",
        "img/p13.png",
        "img/p14.png",
        "img/p15.png",
        "img/p21.png",
        "img/p31.png",
        "img/p41.png",
        "img/p51.png",
        "img/phone-t.png",
        "img/put.png"
        );

        //预加载
        function preload() {
            var load = document.getElementById('load');
            // var loadgif = document.getElementById('load-gif');
            var process = document.getElementById('num');
            var audio4 = document.getElementById('audio4');

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
                    // load.style.width = percent + "%";
                    // loadgif.style.left = percent-20 + "%";
                    // console.log(percent + "%")
                    if(percent == 90){//全部加载完成后执行
                        percent = 100;
                        $(".loading1").hide();
                        $(".swiper-container").show();
                        swiper();
                };
            };
        };

        //
        // swiper
        //
        var swiper = function(){
            var mySwiper = new Swiper ('.swiper-container', {
            // direction: 'vertical',
            // loop: true,

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            on: {
                click: function(){





                    //Swiper初始化了
                    // console.log("12")
                    console.log(this.activeIndex)
                    var num = this.activeIndex
                    if(num == 5){
                        // console.log("23")
                        $(".swiper-container").hide();
                        $(".zhizuo").show();
                    }
                },
                init: function(){
                    swiperAnimateCache(this); //隐藏动画元素
                    swiperAnimate(this); //初始化完成开始动画
                },
                slideChangeTransitionEnd: function(){
                    swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                },
            }
            })
            };
        }


      $(".cross").on("click",function(){
          // console.log($(".cross").parents());
          $(".cross").parent().parent().hide();
      });

      var loading2 = function(){
          var num2v = document.getElementById("num2");
          // var num2 = $("#num2").html();
          var num=0;
          // for(var i=0;i<99;i++){
          var timer = setInterval(function(){
              num +=1;
              // console.log('num',num)
              // num2=num;
              // console.log(num2)
              num2v.innerHTML=num+"%";
              if(num>=99){
                  clearInterval(timer);
              }
          },100)
          // }
      }
      //loading2();
      $(".share").on("click",function(){
          $(this).hide();
      })
})
