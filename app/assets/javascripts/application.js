// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require activestorage
//= require_tree .

// $(document).ready(function () {
//   $("#theTarget").skippr({
//     // スライドショーの変化 ("fade" or "slide")
//     transition : 'slide',
//     // 変化に係る時間(ミリ秒)
//     speed : 1000,
//     // easingの種類
//     easing : 'easeOutQuart',
//     // ナビゲーションの形("block" or "bubble")
//     navType : 'block',
//     // 子要素の種類('div' or 'img')
//     childrenElementType : 'div',
//     // ナビゲーション矢印の表示(trueで表示)
//     arrows : true,
//     // スライドショーの自動再生(falseで自動再生なし)
//     autoPlay : true,
//     // 自動再生時のスライド切替間隔(ミリ秒)
//     autoPlayDuration : 3000,
//     // キーボードの矢印キーによるスライド送りの設定(trueで有効)
//     keyboardOnAlways : true,
//     // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
//     hidePrevious : false
//   });
// });

// #下記の表記が正しい

$(document).ready(function () {
  $('.slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]  });
});

// $(document).on('turbolinks:load', function(){
//   $('.slider').slick({
//     autoplay:true,
//     dots:true,
//   });
// });

// $(function() {
//   $('.slider').slick();
// });

// $(function() {
//   $('.slider').slick();
// });