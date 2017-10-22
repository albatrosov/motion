$(function(){

  const menu = $('nav ul');
  const overlay = $('.mobile-overlay');

  const toggleMobileMenu = (target) => {
    $(target).on('click', () => {
      menu.toggleClass('mobile');
      overlay.toggle();
    })
  };

  toggleMobileMenu('.burger');
  toggleMobileMenu(overlay);
  toggleMobileMenu('nav ul');

})
$(function(){
  $(window).on('scroll', () => {
    $('header').toggleClass('header--min', $(this).scrollTop() > 50)
  })
})
$(function(){

  $('#header a').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - 60 }, 1000);
    e.preventDefault();
  });

  let startAnimation = (className, offset) => {
    $(className).appear(function() {
      $(this).addClass('animation')
    }, {accX: 0, accY: offset})
  }

  startAnimation('#features', -200);
  startAnimation('#team', -200);
  startAnimation('#plans', -50);

})
$(function(){

  $('.top-slider').flickity({
    autoPlay: true
  })

  $('.partners-slider').flickity({
    autoPlay: true
  })

})