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

const menuForCountAmenities = new MenuForCount('.js-menuForCount', {
  itemsCount: [
    {
      title             : 'спальни',
      index             : 0,
    },  {
      title             : 'кровати',
      minValue          : 1,
      index             : 1,
    }, {
      title             : 'ванные комнаты',
      index             : 2,
    }
  ],

  descriptionTypes: [
    ['спальня', 'спальни', 'спален'],
    ['кровать', 'кровати', 'кроватей'],
    ['ванная комната', 'ванные комнаты', 'ванных комнаты'],
  ],

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
// import rangeSlider from "../modules/range-slider/range-slider.js";
// import { data } from "autoprefixer";
// const priceRange = rangeSlider("lkj")
// console.log(rangeSlider)
// console.log(priceRange)

