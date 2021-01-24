$(function(){
  $('input, select').styler();

  $('.advertising__sliderinner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    asNavFor: '.slider-dots',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  $('.slider-dots').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.advertising__sliderinner',
});
$('.parts__items').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows:false,
  dots:true,
  focusOnSelect: true,
  centerPadding: '50px',
  infinite: true,
  asNavFor: '.dots__items',
  responsive: [
    {
      breakpoint: 959,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
$('.dots__items').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  asNavFor: '.parts__items',
});





  $('.menu__btn').on('click' , function(){
    $('.menu__list').slideToggle();
  });





});