$(function(){

  var Li = $('.pic .img li').length;
  var i = 0;
  console.log(Li)
  $(function(){
    $('.pic .btn-l').click(function(){
      i++
      if(i == Li){
        i=0;
      }
      $('.pic .img').stop().animate({left:-i*600},500);
      $('.pic .num li').eq(i).addClass('on').siblings().removeClass('on')
    })

    $('.pic .btn-r').click(function(){
      i--
      if(i == -1){
        i=Li-1;
      }
      $('.pic .img').stop().animate({left:-i*600},500);
      $('.pic .num li').eq(i).addClass('on').siblings().removeClass('on')
    })
  })
})
