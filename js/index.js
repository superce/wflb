$(function(){
  var i = 0;
  var clone = $('.pic .img li').first().clone();
  $('.pic .img').append(clone);
  var Li = $('.pic .img li').length;

    var moveL = function(){
      i++
      if(i == Li){
        $('.pic .img').css({left:0})
        i=1;
      }
      $('.pic .img').stop().animate({left:-i*300},500);
      if(i == Li-1){
        $('.picnum .num li').eq(0).addClass('on').siblings().removeClass('on')
      }else {
        $('.picnum .num li').eq(i).addClass('on').siblings().removeClass('on')
      }
    }

    var moveR = function(){
      i--
      if(i == -1){
        $('.pic .img').css({left:-(Li-1)*300})
        i=Li-2;
      }
      $('.pic .img').stop().animate({left:-i*300},500);
      $('.picnum .num li').eq(i).addClass('on').siblings().removeClass('on')
    }
    // 左按钮
    $('.pic .btn-l').click(function(){
      moveL()
    })
    // 右按钮
    $('.pic .btn-r').click(function(){
      moveR()
    })
    // 划入原点
      $('.picnum .num li').hover(function(){
        var index = $(this).index();
        $('.pic .img').stop().animate({left:-index*300});
        $(this).addClass('on').siblings().removeClass('on')
      })
      // 自动轮播
      // var t = setInterval(function(){
      //     moveL()
      // },2000)

      // 划入停止
        // $('.pic').hover(function(){
        //   clearInterval(t)
        // },function(){
        //   t = setInterval(function(){
        //      moveL()
        //  },2000)
        // })
})
