function headerMenuDropdown() {
  const $buttons = $('.js-header-menu-dropdown');
  $buttons.find('.js-header-menu__icon-up').hide();

  const handleCheckboxListClick = (event) => {
    const target = event.currentTarget;
    const $iconUp = $(target).find('.js-header-menu__icon-up');
    const $iconDown = $(target).find('.js-header-menu__icon-down');
    const $menu = $(target).find('.header-menu-dropdown__links');

    $menu.slideToggle('.header-menu-dropdown__links_active');
    $iconUp.toggle();
    $iconDown.toggle();
  };

  $buttons.on('click', handleCheckboxListClick);
}

jQuery(headerMenuDropdown());