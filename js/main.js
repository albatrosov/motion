$(function(){
  $(window).on('scroll', () => {
    $('header').toggleClass('header--min', $(this).scrollTop() > 50)
  })
})
$(function(){

  let startAnimation = (className) => {
    $(className).appear(function() {
      $(this).addClass('animation')
    })
  };

  startAnimation('#features');
  startAnimation('#team');
  startAnimation('#plans');

})
$(function(){

  $('.top-slider').flickity({
    autoPlay: true
  })

  $('.partners-slider').flickity({
    autoPlay: true,
    groupCells: true,
    groupCells: 4
  })

})