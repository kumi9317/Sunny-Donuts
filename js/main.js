$(function () {
  
  //toggleボタンが表示される設定//
  const $hamburger = $('#toggle');

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 80) {
      $hamburger.addClass('fixed');
    } else {
      $hamburger.removeClass('fixed');
    }
  });


  //toggleボタンをクリックしたら、右サイドにメニューが表示される設定//
  $('.toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.hamburger-nav').toggleClass('open'); 
  });
  $('.hamburger-nav a').on('click', function() {
    $('.toggle').toggleClass('open');
    $('.hamburger-nav').toggleClass('open'); 
  });


  /*=================================================
  画面に表示されたタイミングで処理を実行
  ===================================================*/
  $(window).scroll(function () {
    $(".FadeIn, .greenFadeIn, .sunFadeIn, .pickup-Fadein").each(function () {

      var scroll = $(window).scrollTop();

      var target = $(this).offset().top;

      var windowHeight = $(window).height();

      if (scroll > target - windowHeight + $(this).outerHeight()) {
        // outerHeight()はpaddingを含めた高さを取得する
        // 要素ごとに対応するクラスを付与
        if ($(this).hasClass('FadeIn')) {
          $(this).addClass('FadeInstart');
        }
        if ($(this).hasClass('greenFadeIn')) {
          $(this).addClass('greenFadeInstart');
        }
        if ($(this).hasClass('sunFadeIn')) {
          $(this).addClass('sunFadeInstart');
        }
        if ($(this).hasClass('pickup-Fadein')) {
          $(this).addClass('pickup-Fadeinstart');
        }
      }
    });
  });





});