$(function () {
  $('.header__burger').click(function () {
    $('.header__burger').toggleClass('header__burger--close');
    $('.header__list').toggleClass('header__list--active');
  }) 
})