// Stylus
import './search-room.styl';

// JS
import MenuForCount from '../../modules/menu-count/menu-count';
import ImagesSlider from '../../modules/images-slider/images-slider';
import DatePicker from '../../modules/datepicker/datepicker';
import '../../modules/checkbox-list/checkbox-list';
import '../../modules/range-slider/range-slider';

// меню подсчета
const menuCountConfigArr = [];
menuCountConfigArr[0] = {
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
    { type: 'guests', description: ['гость', 'гостя', 'гостей'] },
    { type: 'child', description: ['младенец', 'младенца', 'младенцев'] },
  ],

  placeholder: 'Сколько гостей',
};
menuCountConfigArr[1] = {
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
    { type: 'bedrooms', description: ['спальня', 'спальни', 'спален'] },
    { type: 'beds', description: ['кровать', 'кровати', 'кроватей'] },
    {
      type: 'bathrooms',
      description: ['ванная комната', 'ванные комнаты', 'ванных комнаты'],
    },
  ],
};

const menusCountDOM = document.querySelectorAll('.js-menu-count');
menusCountDOM.forEach((menu, i) => new MenuForCount(menu, menuCountConfigArr[i]));

// календарь
const datepicker = new DatePicker(
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
datepicker.plugin.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);

// слайдер изображений
const cardsDOM = document.querySelectorAll('.js-images-slider');
cardsDOM.forEach((card) => new ImagesSlider(card));

// // to make active
// menuForCountAmenities.switchMenu();

// document.querySelectorAll('.images-slider-arrows__prev')[0].style.zIndex = '1';
// document.querySelectorAll('.images-slider-arrows__next')[0].style.zIndex = '1';

// const checkboxList = document.querySelector('.js-checkbox-list__button');
// checkboxList.click();
