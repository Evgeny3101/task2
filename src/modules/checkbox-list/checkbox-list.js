function initCheckboxList() {
  const $buttons = $('.checkbox-list__button');
  $buttons.find('.checkbox-list-button__icon-up').hide();

  const handleCheckboxListClick = (event) => {
    const target = event.currentTarget;
    const $iconUp = $(target).find('.checkbox-list-button__icon-up');
    const $iconDown = $(target).find('.checkbox-list-button__icon-down');
    const $menu = $(target.parentElement).find('.checkbox-list__menu');

    $menu.slideToggle('.active');
    $iconUp.toggle();
    $iconDown.toggle();
  };

  $buttons.on('click', handleCheckboxListClick);
}

jQuery(initCheckboxList());
