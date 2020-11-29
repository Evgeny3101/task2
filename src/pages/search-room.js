// Stylus
import './search-room.styl';

// JS
import MenuForCount from '../modules/menu-for-count/menu-for-count';
import ImagesSlider from '../modules/hotel-item/images-slider';
import createDatePicker from '../modules/datepicker/datepicker';
import '../modules/checkbox-list/checkbox-list';
import '../modules/range-slider/range-slider';

// меню подсчета
// eslint-disable-next-line no-unused-vars
const menuForCountGuest = new MenuForCount('.js-menuForCountGuest', {
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
      value: 1,
    },
  ],

  descriptionTypes: [
    ['гость', 'гостя', 'гостей'],
    ['младенец', 'младенца', 'младенцев'],
  ],

  placeholder: 'Сколько гостей',
});

// eslint-disable-next-line no-unused-vars
const menuForCountAmenities = new MenuForCount('.js-menuForCount', {
  itemsCount: [
    {
      title: 'спальни',
      index: 0,
    },
    {
      title: 'кровати',
      minValue: 1,
      index: 1,
    },
    {
      title: 'ванные комнаты',
      index: 2,
    },
  ],

  descriptionTypes: [
    ['спальня', 'спальни', 'спален'],
    ['кровать', 'кровати', 'кроватей'],
    ['ванная комната', 'ванные комнаты', 'ванных комнаты'],
  ],
});

// календарь
const datepicker = createDatePicker(
  {
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
  },
  '.js-datepicker-main-field'
);
datepicker.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);

// слайдер изображений
const cardsDOM = document.querySelectorAll('.js-images-slider');
cardsDOM.forEach((card) => new ImagesSlider(card));

// // to make active
// menuForCountAmenities.switchMenu();

// document.querySelectorAll('.switch-arrows__prev')[0].style.zIndex = '1';
// document.querySelectorAll('.switch-arrows__next')[0].style.zIndex = '1';

// const checkboxList = document.querySelector('.checkbox-list');
// checkboxList.click();
