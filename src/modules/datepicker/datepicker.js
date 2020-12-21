import 'air-datepicker/dist/js/datepicker.min';

class DatePicker {
  constructor(config, mainField, secondField) {
    this.createCalendar(config, mainField, secondField);
    this.setListeners();

    this.plugin.update('onSelect', this._onSelect.bind(this)); // установка в плагин
    this._onSelect(); // выставит заданные значения
  }

  createCalendar(config, mainField, secondField) {
    this.$mainField = $(mainField);
    this.$secondField = $(secondField);
    this.plugin = this.$mainField.datepicker(config).data('datepicker');
    this.$clearButton = $('span.datepicker--button[data-action="clear"]');

    // создаю кнопку 'Применить' в контейнере кнопок
    // eslint-disable-next-line fsd/jq-use-js-prefix-in-selector
    $('.datepicker--buttons').append(
      '<span class="datepicker--button js-datepicker--button-apply" data-action="apply">Применить</span>'
    );
    this.$applyButton = $('.js-datepicker--button-apply');
  }

  setListeners() {
    this.$applyButton.on('click', this._handleApplyButtonClick.bind(this));
    this.$mainField
      .on('focusin', this._handleMainFieldFocusIn.bind(this))
      .on('focusout', this._handleMainFieldFocusOut.bind(this));
    this.$secondField
      .on('focusin', this._handleSecondFieldFocusIn.bind(this))
      .on('focusout', this._handleSecondFieldFocusOut.bind(this))
      .on('click', this._handleSecondFieldClick.bind(this));
  }

  // вывод при выборе значений
  _onSelect(date) {
    const { $mainField, $secondField, $clearButton } = this;
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
