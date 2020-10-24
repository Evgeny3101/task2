// Stylus
import "./room-details.styl"
import createDatePicker from "../modules/datepicker/datepicker.js"


const datepicker = createDatePicker({
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

}, '.js-datepicker-main-field', '.js-datepicker-second-field');
datepicker.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)])

import '../assets/js/chart/chart.js';



// меню подсчета
import MenuForCount from '../modules/menuForCount/menuForCount.js';
const menuForCountGuests = new MenuForCount('.js-menuForCount', {
  itemsCount: [
        {
          title          : 'взрослые',
        },  {
          title          : 'дети',
        }, {
          title          : 'младенцы',
          index          : 1,
        }
  ],

  descriptionTypes: [
    ['гость', 'гостя', 'гостей'],
    ['младенец', 'младенца', 'младенцев'],
  ],

  placeholder : 'Сколько гостей',
});