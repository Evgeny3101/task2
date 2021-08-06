// libs
import 'inputmask/dist/jquery.inputmask.min';

// JS
import DatePicker from '../datepicker/datepicker';
import MenuForCount from '../menu-count/menu-count';

// // DatePicker
// eslint-disable-next-line no-unused-vars
const datepicker = new DatePicker({
  baseElement: '.js-datepicker-search-hotel',
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

// // MenuForCount
// eslint-disable-next-line no-unused-vars
const menuForCount = new MenuForCount({
  baseElement: '.js-menu-count-search-hotel',
  itemsCount: [
    {
      title: 'взрослые',
    },
    {
      title: 'дети',
    },
    {
      title: 'младенцы',
      index: 1,
    },
  ],
  descriptionTypes: [
    { type: 'guests', description: ['гость', 'гостя', 'гостей'] },
    { type: 'child', description: ['младенец', 'младенца', 'младенцев'] },
  ],
  placeholder: 'Сколько гостей',
  areControlButtons: true,
});

// // input mask
$('.js-datepicker-search-hotel').find('input').inputmask({
  placeholder: 'ДД.ММ.ГГГГ',
  alias: 'datetime',
  inputFormat: 'dd.mm.yyyy',
  min: '01.01.2021',
  max: '01.01.2029',
});
