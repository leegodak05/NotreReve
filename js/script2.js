$( document ).ready( function() {
    var jbOffset = $( '#heaer_wrap' ).offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > 30) {//여기 지정된 길이 이후부터 적용됩니다
        $( '#heaer_wrap' ).addClass("on");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
      else {
        $( '#heaer_wrap' ).removeClass("on");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
    });
  });


// 햄버거
  $(function(){
    $('.hamburger_button').click(function(){
        $(this).toggleClass('active');
        $('.overlay').toggleClass('visible')
    });
});
// 

//   sub 스르르
$(function(){
    $(".sub").hide();
    $(".nav>li").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".sub_wrap").stop().slideDown();
    });
    $(".nav>li").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".sub_wrap").stop().slideUp();
    });
});

$(function () {
    $(".tap>li").click(function () {
      $(this).addClass("on").siblings().removeClass("on");
    });
  
  });

  $(function(){
	$(".notice>li").click(function(){
		$(this).children("div.answer").slideDown();
		$(this).siblings().children("div.answer").slideUp();
	});
});