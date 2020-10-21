// Stylus
import "./search-room.styl";
import createDatePicker from "../modules/datepicker/datepicker.js"

// выпадающие меню
import "../modules/checkbox-list/checkbox-list.js";


// меню подсчета
import MenuForCount from '../modules/menuForCount/menuForCount.js';
const menuForCountGuests = new MenuForCount('.js-menuForCountGuest', {
  itemsCount: [
        {
          title             : 'взрослые',
          descriptionId     : 0,
        },  {
          title             : 'дети',
          descriptionId     : 0,
        }, {
          title             : 'младенецы',
          descriptionId     : 1,
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
  btnsControl : true,
});

const menuForCountAmenities = new MenuForCount('.js-menuForCount', {
  itemsCount: [
    {
      title             : 'спальни',
    },  {
      title             : 'кровати',
      minValue          : 1,
    }, {
      title             : 'ванные комнаты',
    }
  ],

  descriptionTypes: [
    [
      {
        whenTo: 1,
        write: 'спальня',
      },
      {
        whenTo: 4,
        write: 'спальни',
      },
      {
        whenTo: Infinity,
        write: 'спален',
      },
    ], [
      {
        whenTo: 1,
        write: 'кровать',
      },
      {
        whenTo: 4,
        write: 'кровати',
      },
      {
        whenTo: Infinity,
        write: 'кроватей',
      },
    ], [
      {
        whenTo: 1,
        write: 'ванная комната',
      },
      {
        whenTo: 4,
        write: 'ванные комнаты',
      },
      {
        whenTo: Infinity,
        write: 'ванных комнаты',
      },
    ],
  ],

  btnsControl :    false,
  textFieldLength: 22,
});


// календарь
const datepicker = createDatePicker( {
  dateFormat: 'dd M',
  multipleDatesSeparator: ' - ',

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

}, '.js-datepicker-main-field');
datepicker.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)])


// слайдер изображений
import setImagesSlider from "../modules/hotel-item/images-slider.js";
setImagesSlider('.js-images-slider');


// регулятор диапазона
import rangeSlider from "../modules/range-slider/range-slider.js";
import { data } from "autoprefixer";
const priceRange = rangeSlider("lkj")
console.log(rangeSlider)
console.log(priceRange)

