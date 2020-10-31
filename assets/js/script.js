$('.main').slick({
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 4000,
    prevArrow: $('.main__control-left'),
    nextArrow: $('.main__control-right')
  });
$('.principles__slider__item').slick({
    dots: false,
    // autoplay: true,
    // autoplaySpeed: 6000,
    prevArrow: $('.principles__control-left'),
    nextArrow: $('.principles__control-right')
  });

$('.reviews__list').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    prevArrow: $('.reviews__list__control__arrows-left'),
    nextArrow: $('.reviews__list__control__arrows-right'),
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
    ]
  });

  //1. После загрузки страницы,  когда все элементы будут доступны выполнить...
$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone").mask("+375 (99) 999-99-99", {placeholder: "X" });
});