// Stylus
import "./index.styl"

import DatePicker from "../modules/datepicker/datepicker.js"
new DatePicker('.js-datepicker-here', '.js-altField');

import menuForCount from '../modules/menuForCount/menuForCount.js';
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
