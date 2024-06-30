$(document).ready(function(){
var now = 1;
var n = $('.slider-list').children().length;
//番号をただす。
function corrector(a, b){
if(a > b){
 return a-b;
}else if (a <= 0){
  return a+b;
}else{
return a;
}
};
//マリオを動かす
//スライドした直後に作動//
var after = function(){
$('.line-behind').animate({width:"100%"},6400);
};
var before = function(){
$(".line-behind").stop(true,true);
   $('.line-behind').animate({'width':'0%'},0);
};


//正しい丸を光らせる
    var light = function(q){
console.log(q);
$('.circle:not(:eq(q-1))').css("background-color","blue");
$('.circle').eq(q-1).css("background-color","red");
    };
//一つ一つのlistの横幅を決める。
$('.slider-list').css('width', n * 100 + '%');
//まるで移動するためのやつ
 var point = function(){
  clearTimeout(id);
  id = setTimeout(next,7000);
  $('.slider-list').animate({
   'margin-left' : -1*$('.slider-item').width()
  },function(){
   $('.slider-list').append($('.slider-item:first-child'));
   $('.slider-list').css('margin-left', '0');
  })
  before();
  after();
};

var dispoint = function(){
  clearTimeout(id);
  id = setTimeout(next,7000);
  $('.slider-list').prepend($('.slider-item:last-child'))
  .css('margin-left', -1*$('.slider-item').width())
 .animate({
   'margin-left' : 0
  });
  before();
  after();
};

//アニメーションの最中に動かない　次に動くやつ
var next = function(a){
	  clearTimeout(id);
	  id = setTimeout(next,7000);
	  $('.slider-list:not(:animated)').animate({
		   'margin-left' : -1*$('.slider-item').width()
		},function(){
		   $('.slider-list').append($('.slider-item:first-child'));
		   $('.slider-list').css('margin-left', '0');
		now++;
		now = corrector(now, n); light(now);
		})
		before();
		after();
};
//アニメーションの最中に動かない　後ろに動くやつ
var prev = function(){
	  	clearTimeout(id);
	  	id = setTimeout(next,7000);
		 now--;
		 now = corrector(now, n); light(now);
		   $('.slider-list:not(:animated)').prepend($('.slider-item:last-child'))
		   .css('margin-left', -1*$('.slider-item').width())
		  .animate({
		    'margin-left' : 0
		   })
		   before();
		   after();
};

$('.next').click(function(){
	next();
 });
 $('.prev').click(function(){
 prev();
 });

//下のボタンを生成
i = 1
while(i <= n){
// div要素を生成
var div = document.createElement('div');
// classを追加
div.className = 'circle';
// 生成したdiv要素を追加する
document.getElementById('wrapper').appendChild(div);
i++;
}
$('.circle').click(function(){
var count = 1;
$(this).css('background-color','red')
$('.circle').not(this).css('background-color','yellow');
var index = $('.circle').index(this) + 1;
var differ = index - now;
console.log(differ);
if(differ >= 0)
while(differ >= count){
point();
now++;
now = corrector(now, n); light(now);
count++;
}else{
while(differ < count-1){
dispoint();
now--;
now = corrector(now, n); light(now);
count--;
}
}
console.log(now);
});
light(now);
var id = setTimeout(next,5000);
});