// libs
import 'inputmask/dist/jquery.inputmask.min';

// JS
import DatePicker from '../../datepicker/datepicker';

// eslint-disable-next-line no-unused-vars
const datepicker = new DatePicker({
  baseElement: '.js-datepicker-payment',
  range: true,
  multipleDates: true,
  offset: 5,
  toggleSelected: true,
  keyboardNav: false,
  minDate: new Date(),
  showButtonPanel: true,
  clearButton: true,

  prevHtml: '<i class="month-selection__icon material-icons">arrow_back</i>',
  nextHtml: '<i class="month-selection__icon material-icons">arrow_forward</i>',

  navTitles: {
    days: 'MM yyyy',
  },
});

// input mask for datepicker
$('.js-datepicker-search-hotel').find('input').inputmask({
  placeholder: 'ДД.ММ.ГГГГ',
  alias: 'datetime',
  inputFormat: 'dd.mm.yyyy',
  min: '01.12.2021',
  max: '01.01.2029',
});
