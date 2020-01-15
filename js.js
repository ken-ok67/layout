$(document).ready(function(){
  $("#slider_container").owlCarousel({

items: 3,
nav: true,
dots: false,
loop: true,

responsive: {
  320: {
    items: 1,
    dots: true,
    nav:false, 
},
  720: {
    items: 2,
    dots: true,
    nav:false
},
  1024: {
    items: 3,
    dots: false,
    nav:false
}
}

});

$('.main__slider').each(function () {    
// Создаем карусель   
var owl = $(this).find('.owl-carousel').owlCarousel();    
// При клике по кнопке Влево   
$(this).find('.js-prev').on('click', function () {     
// Перематываем карусель назад     
owl.trigger('prev.owl.carousel');   
});    
// При клике по кнопке Вправо   
$(this).find('.js-next').on('click', function () {     
// Перематываем карусель вперед     
owl.trigger('next.owl.carousel');   
}); 
});


$('.button_pink-border, .button_phone, .button_orange').click(function(){
      $('.popup-container').fadeIn();

});


$('.button_invisible').click(function(){
      $('.header__menu_left'). slideToggle();

});


$('.popup-container').click(function(event){
    if(event.target == this) {
      $(this).hide();
    }
});

$('.popup-button').click(function(event){
    if(event.target == this) {
      $('.popup-container').hide();
    }
});



 $(".header__navigation a").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

});