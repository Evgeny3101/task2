function initHeaderMenu() {
  const $headerMenu = $('.js-header-menu');

  // burger menu
  const $burgerMenuButtons = $headerMenu.find('.js-header-menu__burger-menu');

  const handlerBurgerMenuClick = (event) => {
    const $menu = $(event.currentTarget.parentElement);

    $menu.toggleClass('header-menu_burger-active');
  };

  const handlerResize = () => {
    $headerMenu.removeClass('header-menu_burger-active');
  };

  window.addEventListener('resize', handlerResize);
  $burgerMenuButtons.on('click', handlerBurgerMenuClick);

  // dropdown menu
  const $dropdownMenuButton = $headerMenu.find('.js-header-menu__dropdown-menu-button');

  //  закрыть все открытые меню
  const $menus = $('.js-header-menu__dropdown-menu-links');
  $menus.slideUp(0);

  const handlerDropdownMenuClick = (event) => {
    const $menu = $(event.currentTarget.parentElement);
    const $links = $menu.find('.js-header-menu__dropdown-menu-links');

    $menu.toggleClass('header-menu__dropdown-menu_active');
    $links.slideToggle();
  };

  $dropdownMenuButton.on('click', handlerDropdownMenuClick);
}

jQuery(initHeaderMenu());
