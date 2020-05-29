$(function () {
  var imgSrcArr = [
    "img/pre.jpg",
    "img/pre.gif"
  ];

  var imgWrap = [];

  function preloadImg (arr) {
    for (var i = 0; i < arr.length; i++) {
      imgWrap[i] = new Image();
      imgWrap[i].src = arr[i];
      images[i].onload
    }
  }
  function preload () {
    var loadImg = [
      'img/01.jpg',
      'img/02.png',
      'img/03.png',
      'img/04.png',
      'img/05.png',
      'img/06.png',
      'img/07.png',
      'img/08.png',
      'img/10.jpg',
      'img/22.png',
      'img/13.png',
      'img/14.png',
      'img/15.png',
      'img/16.png',
      'img/17.png',
      'img/18.png',
      'img/19.png',
      'img/20.jpg',
      'img/22.png',
      'img/23.png',
      'img/24.png',
      'img/25.png',
      'img/26.png',
      'img/27.png',
      'img/28.png',
      'img/29.png',
      'img/30.jpg',
      'img/32.png',
      'img/31.png',
      'img/33.png',
      'img/34.png',
      'img/40.png',
      'img/42.png',
      'img/41.png',
      'img/43.png',
      'img/44.png',
      'img/45.png',
      'img/46.png',
      'img/47.png',
      'img/48.png',
      'img/49.png',
      'img/50.jpg',
      'img/52.png',
      'img/51.png',
      'img/53.png',
      'img/55.png',
      'img/60.jpg',
      'img/62.png',
      'img/61.png',
      'img/63.png',
      'img/64.png',
      'img/65.png',
      'img/70.jpg',
      'img/72.png',
      'img/71.png',
      'img/73.png',
      'img/74.png',
      'img/75.png',
      'img/76.png',
      'img/77.png',
      'img/78.png',
      'img/110.png',
      'img/210.png',
      'img/point.png',
    ]
    function load () {

      var precess = 0;
      var loadedImg = 0;
      var images = new Array();
      var n = load.arguments[0].length;
      for (let i = 0; i < n; i++) {
        images[i] = new Image()
        images[i].src = load.arguments[0][i]
        images[i].onload = function () {
          loadedImg++
          precess = Math.round(loadedImg / n * 90);
          if (precess === 90) {
            console.log('c');
            $('.pre').hide();
            $('.loading').fadeIn(1000)
            swiper1()
          }
        }
      }
    }
    load(loadImg)
  }
  preload()
  let clientW = document.documentElement.clientWidth
  let clientH = document.documentElement.clientHeight
  let swiper1H = (clientW * 221) / 375
  $('.swiper-container1').css('height', swiper1H + 'px')
  // $('.swiperPage').css('top', clientH * 25 / 100 + 'px')
  $('.page0_1').css('height', (clientW * 128) / 375 + 'px')
  // console.log(swiper1H);
  var swiper1 = function () {
    var mySwiper = new Swiper('.swiper-container1', {
      on: {
        slideChangeTransitionEnd: function () {
          // console.log(this.activeIndex);
          if (this.activeIndex === 2) {
            $('.loading').fadeOut(1500)
            $('.page').fadeIn(1500)
            swiper2()
          }
        },
      },
    })
  }

  let swiper2 = function () {
    var mySwiper2 = new Swiper('.swiper-container2', {
      on: {
        init: function () {
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        }
      }
    })
  }

  $('.page1_2,.page2_2,.page3_2,.page4_2').on('click', function () {
    $('.page').hide()
    $('.light').show()
  })
  $('.page1_2').on('click', function () {
    $('.light10').show()
  })
  $('.page2_2').on('click', function () {
    $('.light20').show()
  })
  $('.page3_2').on('click', function () {
    $('.light30').show()
  })
  $('.page4_2').on('click', function () {
    $('.light40').show()
  })
  // page1
  $('.light1_0').on('click', function () {
    $('.light1').addClass('gray')
    $('.light1_8').remove()
    $('.light1_1,.light1_2,.light1_3,.light1_bottom,.share').fadeIn(1200)
    $('.light1_2').addClass('fadeIn')
    $('.light1_3').addClass('hua')
    $('.light1_4').addClass('left')
    $('.light1_5').addClass('left')
    $('.light1_6').addClass('right')
  })
  // page2
  $('.light2_0').on('click', function () {
    $('.light2').addClass('gray')
    $('.light2_8').remove()
    $('.light2_1').addClass('fadeIn')
    $('.light2_1,.light2_2,.light2_bottom,.share').fadeIn(1200)
    $('.light2_4').addClass('left')
    $('.light2_5').addClass('right')
    $('.light2_6').addClass('left')
  })
  // page3
  $('.light3_10').on('click', function () {
    $('.light3').addClass('gray')
    $('.light3_11').remove()
    $('.light3_1,.light3_3,.light3_4,.light3_5,.light3_6').fadeIn(1200)
    $('.light3_2').addClass('yi')
    $('.light3_bottom').fadeIn(1200)
    $('.light3_1').addClass('fadeIn')
    $('.light3_6').addClass('piao')
    $('.light3_7').addClass('left')
    $('.light3_8').addClass('right')
    $('.light3_9').addClass('left')
    $('.share').fadeIn(1200)
  })
  // page4
  $('.light4_1').on('click', function () {
    $('.light4_1').fadeOut(1200)
    $('.light4_7').remove()
    $('.light4_color,.light4_4,.light4_5,.light4_6,.light4_bottom').fadeIn(1200)
    $('.light3_bottom').fadeIn(1200)
    $('.light4_3').addClass('fadeIn')
    $('.light4_4').addClass('left')
    $('.light4_5').addClass('left')
    $('.light4_6').addClass('right')
    $('.share').fadeIn(1200)
  })
  $('.share').on('click', function () {
    $('.light').hide()
    $('.swiper-container3').fadeIn(1000)
    var mySwiper3 = new Swiper('.swiper-container3', {
      direction: 'vertical',
    })
  })
})