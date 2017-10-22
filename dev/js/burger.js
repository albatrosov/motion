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