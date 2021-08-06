// Stylus
import './ui-kit.styl';

// // libs
import 'inputmask/dist/jquery.inputmask.min';

// // JS
import '../../modules/checkbox-list/checkbox-list';
import '../../modules/range-slider/range-slider';
import '../../modules/sign-up-menu/sign-up-menu';
import '../../modules/hotel-list/hotel-list';
import '../../modules/search-hotel/search-hotel';
import '../../modules/payment/payment';
import MenuForCount from '../../modules/menu-count/menu-count';
import LikeButton from '../../modules/like-button/like-button';
import '../../layout/supporting';
import DatePicker from '../../modules/datepicker/datepicker';

// // подключение LikeButton
const likeButtonArr = [];
const buttonsDOM = document.querySelectorAll('.js-like-button');
buttonsDOM.forEach((button, i) => {
  likeButtonArr[i] = new LikeButton(button);
});

// // меню подсчета
const baseElementsMenuCount = document.querySelectorAll('.js-menu-count');
const menuCountConfigArr = [
  {
    itemsCount: [
      {
        title: 'спальни',
        index: 0,
        value: 2,
      },
      {
        title: 'кровати',
        index: 1,
        minValue: 1,
        value: 2,
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
  },
  {
    itemsCount: [
      {
        title: 'взрослые',
      },
      {
        title: 'дети',
      },
      {
        title: 'младенцы',
        index: 1,
      },
    ],

    descriptionTypes: [
      { type: 'guests', description: ['гость', 'гостя', 'гостей'] },
      { type: 'child', description: ['младенец', 'младенца', 'младенцев'] },
    ],

    placeholder: 'Сколько гостей',
    areControlButtons: true,
  },
  {
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
      { type: 'guests', description: ['гость', 'гостя', 'гостей'] },
      { type: 'child', description: ['младенец', 'младенца', 'младенцев'] },
    ],

    placeholder: 'Сколько гостей',
    areControlButtons: true,
  },
];
const menuCountArr = [];

// установка
menuCountConfigArr.forEach((config, i) => {
  const newConfig = config;
  newConfig.baseElement = baseElementsMenuCount[i];
  menuCountArr[i] = new MenuForCount(newConfig);
  menuCountArr[i].switchMenu();
});

// //checkbox-list
const checkboxList = document.querySelectorAll('.checkbox-list__button')[1];
checkboxList.click();

// // input mask
$('.js-masked-text-field').inputmask({
  placeholder: 'ДД.ММ.ГГГГ',
  alias: 'datetime',
  inputFormat: 'dd.mm.yyyy',
  min: '01.01.1900',
  max: '01.01.2021',
});

// calendar
const datepicker = new DatePicker({
  baseElement: '.js-ui-kit-calendar',
  dateFormat: 'dd M',
  multipleDatesSeparator: ' - ',
  startDate: new Date(2019, 7, 8),

  isSingleField: true,
  range: true,
  multipleDates: true,
  offset: -18,

  toggleSelected: true,

  showButtonPanel: true,
  clearButton: true,

  prevHtml: '<i class="month-selection__icon material-icons">arrow_back</i>',
  nextHtml: '<i class="month-selection__icon material-icons">arrow_forward</i>',

  navTitles: {
    days: 'MM yyyy',
  },
});

datepicker.plugin.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
datepicker.plugin.show();

const $currentDate = datepicker.plugin.$datepicker.find($('[data-date="8"][data-month="7"][data-year="2019"]'));
$currentDate.addClass('-current-');
