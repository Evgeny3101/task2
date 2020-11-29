import 'air-datepicker/dist/js/datepicker.min';

function createDatePicker(config, mainField, secondField) {
  const $mainField = $(mainField);
  const $secondField = $(secondField);
  const datepicker = $mainField.datepicker(config).data('datepicker');
  const $clearButton = $('span.datepicker--button[data-action="clear"]');

  // создаю кнопку 'Применить' в контейнере кнопок
  // eslint-disable-next-line fsd/jq-use-js-prefix-in-selector
  $('.datepicker--buttons').append(
    '<span class="datepicker--button apply">Применить</span>'
  );
  const $applyButton = $('span.datepicker--button.apply');

  // вывод при выборе значений
  function onSelect(date) {
    const isDate = Boolean(date);

    if (isDate) {
      $clearButton.removeClass('datepicker--button_hide');
      const dateArray = date.split(',');
      $mainField.val(dateArray[0]);
      $secondField.val(dateArray[1]);
    } else {
      $clearButton.addClass('datepicker--button_hide');
      $mainField.val('');
      $secondField.val('');
    }
  }
  datepicker.update('onSelect', onSelect); // установка в плагин
  onSelect(); // выставит заданные значения

  // установка обработчиков
  function handleApplyButtonClick() {
    $mainField.datepicker().data('datepicker').hide();
    const dateArray = $mainField.val().split(',');
    $mainField.val(dateArray[0]);
  }
  function handleMainFieldFocusIn() {
    $secondField.addClass('text-field_checked');
  }
  function handleMainFieldFocusOut() {
    $secondField.removeClass('text-field_checked');
  }
  function handleSecondFieldFocusIn() {
    $mainField.addClass('text-field_checked');
  }
  function handleSecondFieldFocusOut() {
    $mainField.removeClass('text-field_checked');
  }
  function handleSecondFieldClick() {
    $mainField.datepicker().data('datepicker').show();
  }

  $applyButton.on('click', handleApplyButtonClick);
  $mainField
    .on('focusin', handleMainFieldFocusIn)
    .on('focusout', handleMainFieldFocusOut);
  $secondField
    .on('focusin', handleSecondFieldFocusIn)
    .on('focusout', handleSecondFieldFocusOut)
    .on('click', handleSecondFieldClick);

  return datepicker;
}

export default createDatePicker;
