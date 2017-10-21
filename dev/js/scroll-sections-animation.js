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