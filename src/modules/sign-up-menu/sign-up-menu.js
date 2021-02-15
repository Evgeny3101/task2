// libs
import 'inputmask/dist/jquery.inputmask.min';

// js
$('.js-date-birth-text-field').inputmask({
  placeholder: 'ДД.ММ.ГГГГ',
  alias: 'datetime',
  inputFormat: 'dd.mm.yyyy',
  min: '01.01.1900',
  max: '01.01.2021',
});