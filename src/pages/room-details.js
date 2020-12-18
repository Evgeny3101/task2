// Stylus
import './room-details.styl';

// JS
import MenuForCount from '../modules/menu-count/menu-count';
import DatePicker from '../modules/datepicker/datepicker';
import '../modules/chart/chart';
import '../modules/like-button/like-button';

const datepicker = new DatePicker(
  {
    range: true,
    multipleDates: true,
    offset: 5,

    toggleSelected: true,

    showButtonPanel: true,
    clearButton: true,

    prevHtml: '<i class="month-selection__icon material-icons">arrow_back</i>',
    nextHtml: '<i class="month-selection__icon material-icons">arrow_forward</i>',

    navTitles: {
      days: 'MM yyyy',
    },
  },
  '.js-datepicker-main-field',
  '.js-datepicker-second-field'
);
datepicker.plugin.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);

// меню подсчета
// eslint-disable-next-line no-unused-vars
const menuForCount = new MenuForCount('.js-menu-count', {
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
    ['гость', 'гостя', 'гостей'],
    ['младенец', 'младенца', 'младенцев'],
  ],

  placeholder: 'Сколько гостей',
});
