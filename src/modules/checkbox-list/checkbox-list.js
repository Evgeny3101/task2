function initCheckboxList() {
  const $buttons = $('.js-checkbox-list__button');

  const handlerCheckboxListClick = (event) => {
    const checkboxList = event.currentTarget.parentElement.parentElement;
    const $list = $(checkboxList).find('.js-checkbox-list__list');

    checkboxList.classList.toggle('checkbox-list_active');
    $list.slideToggle();
  };

  $buttons.on('click', handlerCheckboxListClick);
}

jQuery(initCheckboxList());
