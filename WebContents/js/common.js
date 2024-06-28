$(document).ready(function(){


$('.top').slideUp(0);
$('html').fadeIn(2000);

$(function() {
	  var h = $(window).height();

	  $('#wrap').css('display','none');
	  $('#loader-bg ,#loader').height(h).css('display','block');
	});

$(window).on("load",function(){
	  $('#wrap').css('display','block');
	  $('#loader-bg').delay(900).fadeOut(800);
	  $('#loader').delay(600).fadeOut(300);
});

	//10秒たったら強制的にロード画面を非表示
	$(function(){
	  setTimeout(stopload, 10000);
	});

	var stopload = function(){
	  $('#wrap').css('display','block');
	  $('#loader-bg').delay(900).fadeOut(800);
	  $('#loader').delay(600).fadeOut(300);
	};

//スクロール禁止関数
	function handleTouchMove(event) {
	    event.preventDefault();
	}

//上のメニューボタン//
$('.barger').click   (
function(){
console.log("aa");
$('.barger').animate({opacity:0},500);
$('.batu,.menu-word').animate({opacity:1},500);
$('.batu').css('z-index','3');
$('.barger').css('z-index','0');
$('.menu-content').animate({width:"100%"},300);
$('.menu-content').animate({height:"100%"},300);
$('.menu-word').animate({top:"15%"},200);
$('.menu-content').css({'top':'0px','bottom':'auto'});
$('.menu-content').animate({top:"-5%"},250);
$('.menu-content').animate({top:"0%"},250);
});


$('.batu').click(
function(){
$('.batu,.menu-word').animate({opacity:0},500);
$('.barger').animate({opacity:1},500);
$('.batu').css('z-index','0');
$('.barger').css('z-index','3');
$('.menu-content').animate({height:"0%"},500);
$('.menu-content').animate({width:"0%"},500);
$('.menu-content').css({'top':'auto','bottom':'0px'});
});


//ヘッドが引っ込む//
$(window).scroll(function(){
	var scroll = $(window).scrollTop();
	if(scroll >= 100){
		$(".top").slideDown();
		}else{
		$(".top").slideUp();
		}
});

//すーぱマリオブラザーズの説明のリンクがある画像//
$('#a').hover(
function(){
$('#a').animate({opacity:0},500)
},
function(){
$('#a').animate({opacity:1},500)
}
);

$('#b').hover(
function(){
$('#b').animate({opacity:0},500)
},
function(){
$('#b').animate({opacity:1},500)
}
);

//広がるやつ//


$('#family-computer,#rokuyonn,#wii,#U,#switch').click(
function(){
console.log("in!");
$(this).animate({width:"80%"},500);
$('.change').children().not(this).animate({width:"5%"},500);
$(this).find('a').css({transform: 'rotate(-90deg)'});
$('.kari').fadeIn(200);
$(this).children('.kari').css('display','none');
$('.change').children().not(this).find('a').css({transform: 'rotate(0deg)'});
$(this).children('.list').fadeIn();
$('.change').children().not(this).find('.list').fadeOut();
/*$("#rokuyonn a,#wii a,#U a,#switch a").css('display','none')*/
}
);


 //新しいスクロール

$(function(){
    var isDisplay = false
var top=$('.top');
    TopBtn.css('bottom', '-200px');
$(window).scroll(function() {
if($(this).scrollTop()>100){
if(isDisplay ==false){
isDisplay =true
TopBtn.stop().animate({'bottom':'-10px'})
}
}
});


});


//上に行くボタン//
$(function() {
    var isDisplay = false;
    var TopBtn= $('#PageTopBtn');
    TopBtn.css('bottom', '-200px');
    var isDisplay = false;
    //スクロール位置が100でボタンを表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            if (isDisplay == false) {
                isDisplay = true;
                TopBtn.stop().animate({'bottom' : '-10px'}, 200);
            }
        }
        else {
            if (isDisplay) {
                isDisplay = false;
                TopBtn.stop().animate({'bottom' : '-200px'}, 200);
            }
        }
    });
    //ボタンを押下するとトップへ移動
    TopBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

});