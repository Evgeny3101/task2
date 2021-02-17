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

// // подключение LikeButton
const likeButtonArr = [];
const buttonsDOM = document.querySelectorAll('.js-like-button');
buttonsDOM.forEach((button, i) => {
  likeButtonArr[i] = new LikeButton(button);
});

// // меню подсчета
const baseElementsMenuCount = document.querySelectorAll('.js-menu-count');
const menuCountArr = [];
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

// установка
menuCountConfigArr.forEach((config, i) => {
  config.baseElement = baseElementsMenuCount[i]
  menuCountArr[i] = new MenuForCount(config);
  menuCountArr[i].switchMenu();
})

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
