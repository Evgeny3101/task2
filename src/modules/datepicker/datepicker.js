import 'air-datepicker/dist/js/datepicker.min';

class DatePicker {
  constructor(config) {
    this.createCalendar(config); // isSingleField
    this.plugin.update('onSelect', this._onSelect.bind(this));
    this._onSelect();
    this.setListeners();
  }

  createCalendar(config) {
    const { baseElement, isSingleField } = config;
    const $el = $(baseElement);

    this.$mainField = $el.find('.js-datepicker-field:eq(0)');
    if (!isSingleField) this.$secondField = $el.find('.js-datepicker-field:eq(1)');

    this.plugin = this.$mainField.datepicker(config).data('datepicker');

    this.$clearButton = this.plugin.$datepicker.find('.datepicker--button[data-action="clear"]');

    // создаю кнопку 'Применить' в контейнере кнопок
    this.plugin.$datepicker.find('.datepicker--buttons').append(
      '<span class="datepicker--button js-datepicker--button-apply" data-action="apply">Применить</span>'
    );
    this.$applyButton = this.plugin.$datepicker.find('.js-datepicker--button-apply');
  }

  setListeners() {
    const { $applyButton, $mainField, $secondField } = this;

    $applyButton.on('click', this._handleApplyButtonClick.bind(this));

    if ($secondField) {
      $mainField
        .on('focusin', this._handleMainFieldFocusIn.bind(this))
        .on('focusout', this._handleMainFieldFocusOut.bind(this));

      $secondField
        .on('focusin', this._handleSecondFieldFocusIn.bind(this))
        .on('focusout', this._handleSecondFieldFocusOut.bind(this))
        .on('click', this._handleSecondFieldClick.bind(this));
    }
  }

  // вывод при выборе значений
  // в date прилетают выбранные значения 
  _onSelect(date) {
    const { $mainField, $secondField, $clearButton } = this;
    const isDate = Boolean(date);

    if (isDate) {
      $clearButton.removeClass('datepicker--button_hide');
      const dateArray = date.split(',');
      $mainField.val(dateArray[0]);
      if ($secondField) $secondField.val(dateArray[1]);
    } else {
      $clearButton.addClass('datepicker--button_hide');
      $mainField.val('');
      if ($secondField) $secondField.val('');
    }
  }

  // установка обработчиков
  _handleApplyButtonClick() {
    this.plugin.hide();
    const dateArray = this.$mainField.val().split(',');
    this.$mainField.val(dateArray[0]);
  }

  _handleMainFieldFocusIn() {
    this.$secondField.addClass('text-field_checked');
  }

  _handleMainFieldFocusOut() {
    this.$secondField.removeClass('text-field_checked');
  }

  _handleSecondFieldFocusIn() {
    this.$mainField.addClass('text-field_checked');
  }

  _handleSecondFieldFocusOut() {
    this.$mainField.removeClass('text-field_checked');
  }

  _handleSecondFieldClick() {
    this.plugin.show();
  }
}

export default DatePicker;
