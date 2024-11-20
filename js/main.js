
$(document).ready(function () {

  //Активные ссылки
  $('.header-menu a[href^="#"]').click(function () {
    $('.header-menu a[href^="#"]').removeClass('active');
    $(this).addClass('active');
  });

  //Слайдер
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'fade',


    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    on: {
      init: function () {
        $('.swiper-slide_text h1').addClass('animated fadeIn');
        $('.swiper-slide_text h1').css('opacity', '1');
        $('.swiper-slide_text p').addClass('animated fadeInUp');
        $('.swiper-slide_text p').css('opacity', '1');

      },
    }

  });


  //Подключение класса из Animated.css
  swiper.on('slideChangeTransitionStart', function () {
    // console.log('slideChangeTransitionStart');
    $('.swiper-slide_text h1').removeClass('animated fadeIn');
    $('.swiper-slide_text h1').css('opacity', '0');
    $('.swiper-slide_text p').removeClass('animated fadeInUp');
    $('.swiper-slide_text p').css('opacity', '0');
  });

  swiper.on('slideChangeTransitionEnd', function () {
    // console.log('slideChangeTransitionEnd');
    $('.swiper-slide_text h1').addClass('animated fadeIn');
    $('.swiper-slide_text h1').css('opacity', '1');
    $('.swiper-slide_text p').addClass('animated fadeInUp');
    $('.swiper-slide_text p').css('opacity', '1');
  });

  //Слайдер партнёров
  $('.partners__slider').slick({
    arrows: false,
    infiniti: true,
    loop: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    draggable: true,
    autoplay: true,
    swipeToSlide: true,
    speed: 300,
    autoplaySpeed: 1000,
  });


  //Скролл по ссылкам

  $('.flowing-scroll').on('click', function () {
    var el = $(this);
    var offSet = 70; //Высота хедера
    var dest = el.attr('href'); // получаем направление
    if (dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({
        scrollTop: $(dest).offset().top - offSet // прокручиваем страницу к требуемому элементу - вычитаем высоту меню, чтобы не закрывало контент
      }, 1000); // скорость прокрутки
    }
    return false;
  });




  function burgerMenu(selector) {
    let menu = $(selector);
    let button = $('.burger-menu__button');
    let linkItem = $('.burger-menu__link-item');
    let overlay = $('.burger-menu_overlay');
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overflow', 'hidden');
      } else {
        $('body').css('overflow', 'visible');
      }
    }

    button.on('click', () => toggleMenu());
    linkItem.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
  }
  
  burgerMenu('.burger-menu');

});