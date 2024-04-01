var $item = $('.carousel-item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});

$(document).ready(function() {
  // 判断窗口的滚动条是否处于顶部
  if ($(window).scrollTop() === 0) {
      $('#top-navbar').hide(); // 如果在顶部，则隐藏导航栏
  }

  // 监听窗口的滚动事件
  $(window).on('scroll', function() {
      // 当窗口的滚动条离开顶部时，显示导航栏
      if ($(window).scrollTop() > 0) {
          $('#top-navbar').fadeIn('fast');
      } else {
          // 否则，如果用户滚动回顶部，隐藏导航栏
          $('#top-navbar').fadeOut('fast');
      }
  });
});
