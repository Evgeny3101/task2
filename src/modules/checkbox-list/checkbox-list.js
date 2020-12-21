function initCheckboxList() {
  const $buttons = $('.js-checkbox-list__button');
  $buttons.find('.js-checkbox-list-button__icon-up').hide();

  const handleCheckboxListClick = (event) => {
    const target = event.currentTarget;
    const $iconUp = $(target).find('.js-checkbox-list-button__icon-up');
    const $iconDown = $(target).find('.js-checkbox-list-button__icon-down');
    const $menu = $(target.parentElement).find('.js-checkbox-list__menu');

    $menu.slideToggle('.active');
    $iconUp.toggle();
    $iconDown.toggle();
  };

  $buttons.on('click', handleCheckboxListClick);
}

jQuery(initCheckboxList());
