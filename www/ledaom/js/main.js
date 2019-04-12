new Vue({
    el:"#app",
    data:{
        //案例数组
        anlieLists:'',
        anlieListId:'',
        CaseDetailImg:'',
    },
    mounted(){
        this.getDate();
    },
    methods:{
        //请求数据
        getDate(){
            this.$http.get('http://adwww.ldcywh.com/index.php/index/Api/brand_case')
            .then( (res) => {
                 this.anlieLists = res.data.data.brand_case;
                 this.anlieListId = res.data.data.brand_case.id;
                 // console.log(res.data.data.brand_case);
            })
        },
        CasetuF:function(){ //案例详情
            // $(".page4").find("ul").find("li").on("click",function(){
            //
            // })
            var data = $(event.currentTarget);
            var dataid = data.attr('data');
            console.log(dataid)
            this.CaseDetailId = dataid;
            this.$http.get('http://adwww.ldcywh.com/index.php/index/Api/getCaseDetail',{params: {id:dataid}})
            .then( (res) => {
                this.CaseDetailImg = res.data.data.brand_case.detail_pic;
                if(this.CaseDetailImg===''){
                    console.log(this.CaseDetailImg)
                    alert("资料还在完善中...")
                }else{

                    $(".page4_detail").find("img").attr("src",this.CaseDetailImg);
                    $(".page4_detail").fadeIn(1400);
                    $(".page4").css("height","100%");
                    $(".page4").css("overflow","hidden");
                    $("html,body").animate({
                           scrollTop:0
                       }, 1000)

                    $(".page4_detail").on("click",function(){
                        $(this).hide();
                        $(".page4").css("height","");
                    })
                }

            })
        }
    }
});
preload(
    "img/micBtn.png",
    "img/micBtn2.png",
    "img/home.png",
    "img/anlie.png",
    "img/p1_3.png",
    "img/p1_01.gif",
    "img/p1_5.png",
    "img/p2_1.gif",
    "img/p3_1.jpg",
    "img/p3_2.jpg",
    "img/p3_3.jpg",
    "img/p3_4.jpg",
    "img/p3_5.jpg",
    "img/p3_6.jpg",
    "img/p3_7.jpg",
    "img/p3_8.jpg",
    "img/p5_adress.png",
    "img/p5_phone.png",
    "img/p5_top.png",
    "img/p5_ma.jpg",
    "img/page1.png"
    );

    //预加载
    function preload() {
    	// var load = document.getElementById('load');
        var process = document.getElementById('num');

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
                // console.log(percent + "%")
                if(percent == 90){//全部加载完成后执行
                    percent = 100;
                    $(".loading").hide();
                    // swiperF();
                    $(".page1").show();
                };

            };
        };
    };
$(function(){
    // $(".p1_5").on("click",function(){
    //     $(".page1").fadeOut(300);
    //     $(".page2").fadeIn(300);
    // });
    $(".p2_btn1").on("click",function(){
        $(".page2").fadeOut(300);
        $(".page3").fadeIn(300);
    });
    $(".p2_btn2").on("click",function(){
        $(".page2").fadeOut(300);
        $(".page4").fadeIn(300);
    });
    $(".p2_btn4").on("click",function(){
        $(".page2").fadeOut(300);
        $(".page5").fadeIn(300);
    });
    $(".home").on("click",function(){
        $(".page2").fadeIn(300);
        $(".page3").fadeOut(300);
        $(".page4").fadeOut(300);
        $(".page5").fadeOut(300);
    });
    $(".p1_5").on("click",function(){
        $(".p1_bg").addClass("active_ani");
        setTimeout(function(){
            $(".page1").fadeOut(300);
            $(".page2").fadeIn(300);
        },100)
    });

    window.onresize = function(){
        console.log(window.screen.width)
        if (window.screen.width > 768) {
          console.log('移动设备');
          window.location.href =  'http://www.ldcywh.com'
        }
    }
})
