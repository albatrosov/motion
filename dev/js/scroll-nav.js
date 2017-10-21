$(function(){
  $(window).on('scroll', () => {
    $('header').toggleClass('header--min', $(this).scrollTop() > 50)
  })
})