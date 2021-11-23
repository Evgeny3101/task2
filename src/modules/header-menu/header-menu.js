function initHeaderMenu() {
  const $headerMenu = $('.js-header-menu');

  // Burger menu
  const configBurger = {
    menuClass: '.js-header-menu',
    menuClassActive: 'header-menu_burger-active',
    buttonClass: '.js-header-menu__burger-menu',
  };

  function initBurgerMenu(config) {
    const {
      menuClass,
      menuClassActive,
      buttonClass,
    } = config;

    const $button = $headerMenu.find(buttonClass);

    const handlerBurgerMenuClick = (event) => {
      const $menu = $(event.currentTarget).closest(menuClass);
      $menu.toggleClass(menuClassActive);
    };

    const handlerDocumentClick = (event) => {
      if ($(event.target).closest(menuClass).length) {
        return;
      }
      $headerMenu.removeClass(menuClassActive);
    };

    $(document).on('click', handlerDocumentClick);
    $button.on('click', handlerBurgerMenuClick);
  }

  initBurgerMenu(configBurger);

  // Dropdown
  const configDropdown = {
    menuClass: '.js-header-menu__dropdown-menu',
    menuClassActive: 'header-menu__dropdown-menu_active',
    buttonClass: '.js-header-menu__menu-button',
    linksClass: '.js-header-menu__menu-links',
  };

  const initDropdownMenu = (value, config) => {
    const {
      menuClass,
      menuClassActive,
      buttonClass,
      linksClass,
    } = config;
    const $menu = $(value);
    const $button = $menu.find(buttonClass);
    const $links = $menu.find(linksClass);
    $links.slideUp(0);

    // // clicked button
    const handlerDropdownMenuClick = () => {
      $menu.toggleClass(menuClassActive);
      $links.slideToggle();
    };
    $button.on('click', handlerDropdownMenuClick);

    // // clicked not button
    const handlerDocumentClick = (event) => {
      const isClicked = $(event.target).closest(menuClass)[0] === $menu[0];
      if (isClicked) {
        return;
      }

      $menu.addClass(menuClassActive);
      $links.slideUp();
    };

    $(document).on('click', handlerDocumentClick);
  };

  $(configDropdown.menuClass).each((index, value) => {
    initDropdownMenu(value, configDropdown);
  });
}

jQuery(initHeaderMenu());
