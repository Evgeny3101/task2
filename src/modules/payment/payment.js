import DatePicker from '../datepicker/datepicker';
import MenuForCount from '../menu-count/menu-count';

const datepicker = new DatePicker({
  baseElement: '.js-datepicker-payment',
  range: true,
  multipleDates: true,
  offset: 5,
  keyboardNav: false,

  toggleSelected: true,
  showButtonPanel: true,
  clearButton: true,

  prevHtml: '<i class="month-selection__icon material-icons">arrow_back</i>',
  nextHtml: '<i class="month-selection__icon material-icons">arrow_forward</i>',

  navTitles: {
    days: 'MM yyyy',
  },
});
datepicker.plugin.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);

// // меню подсчета
// eslint-disable-next-line no-unused-vars
const menuForCount = new MenuForCount({
  baseElement: '.js-menu-count-payment',
  itemsCount: [
    {
      title: 'взрослые',
      value: 2,
    },
    {
      title: 'дети',
      value: 1,
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
});


// // input mask
$('.js-datepicker-payment').find('input').inputmask({
  placeholder: 'ДД.ММ.ГГГГ',
  alias: 'datetime',
  inputFormat: 'dd.mm.yyyy',
  min: '01.01.2018',
  max: '01.01.2029',
});
