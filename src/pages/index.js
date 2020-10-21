// Stylus
import "./index.styl"
import createDatePicker from "../modules/datepicker/datepicker.js"
import menuForCount from '../modules/menuForCount/menuForCount.js';


createDatePicker( {
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


const menuForCountGuests = new menuForCount('.js-menuForCount', {
  itemsCount: [
    {
      title             : 'взрослые',
      descriptionIndex  : 0,
    },  {
      title             : 'дети',
      descriptionIndex  : 0,
    }, {
      title             : 'младенецы',
      descriptionIndex  : 1,
    }
  ],

  descriptionTypes: [
    [
      {
        whenTo: 1,
        write: 'гость',
      }, {
        whenTo: 4,
        write: 'гостя',
      }, {
        whenTo: Infinity,
        write: 'гостей',
      },
    ], [
      {
        whenTo: 1,
        write: 'младенец',
      },
      {
        whenTo: 4,
        write: 'младенца',
      },
      {
        whenTo: Infinity,
        write: 'младенцев',
      },
    ],
  ],

  placeholder : 'Cколько гостей',
  btnsControl : true
});


