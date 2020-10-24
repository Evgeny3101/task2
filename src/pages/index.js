// Stylus
import "./index.styl"
import createDatePicker from "../modules/datepicker/datepicker.js"
import MenuForCount from '../modules/menuForCount/menuForCount.js';


const datePicker = createDatePicker({
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

const menuForCountGuests = new MenuForCount('.js-menuForCount', {
  itemsCount: [
    {
      title             : 'взрослые',
    },  {
      title             : 'дети',
    }, {
      title             : 'младенцы',
      index             : 1,
    }
  ],
  descriptionTypes: [
    ['гость', 'гостя', 'гостей'],
    ['младенец', 'младенца', 'младенцев'],
  ],
  placeholder : 'Сколько гостей',
  areControlButtons : true
})
