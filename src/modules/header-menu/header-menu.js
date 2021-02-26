function headerMenuDropdown() {
  const $buttons = $('.js-header-menu__dropdown-title');
  $buttons.find('.js-header-menu__dropdown-icon-up').hide();

  const handleCheckboxListClick = (event) => {
    const target = event.currentTarget;
    const $iconUp = $(target).find('.js-header-menu__dropdown-icon-up');
    const $iconDown = $(target).find('.js-header-menu__dropdown-icon-down');
    const $menu = $(target.parentElement).find('.js-header-menu__dropdown-links');

    $menu.slideToggle('.header-menu__dropdown-links_active');
    $iconUp.toggle();
    $iconDown.toggle();
  };

  $buttons.on('click', handleCheckboxListClick);
}

jQuery(headerMenuDropdown());