function initCheckboxList() {
  const $elements = $('.checkbox-list');
  $elements.find('.checkbox-list__icon-up').hide();

  const handleCheckboxListClick = (event) => {
    const target = event.currentTarget;
    const $iconUp = $(target).find('.checkbox-list__icon-up');
    const $iconDown = $(target).find('.checkbox-list__icon-down');
    const $menu = $(target).find('.checkbox-list__menu');

    $menu.slideToggle('.active');
    $iconUp.toggle();
    $iconDown.toggle();
  };

  $elements.on('click', handleCheckboxListClick);
}

jQuery(initCheckboxList());
