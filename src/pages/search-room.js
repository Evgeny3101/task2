// Stylus
import "./search-room.styl";


// вырадающие меню
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
import DatePicker from "../modules/datepicker/datepicker.js";
new DatePicker('.js-datepicker-here');
$('.js-datepicker-here').datepicker({
  dateFormat: 'dd M',
  multipleDatesSeparator: ' - ',
});


// слайдер изображений
import setImagesSlider from "../modules/hotel-item/images-slider.js";
setImagesSlider('.js-images-slider');


// регулятор диапазона
import rangeSlider from "../modules/range-slider/range-slider.js";
const priceRange = rangeSlider("lkj")
console.log(rangeSlider)
console.log(priceRange)

