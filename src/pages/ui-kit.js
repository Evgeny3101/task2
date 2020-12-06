// Stylus
import './ui-kit.styl';

// JS
import MenuForCount from '../modules/menu-count/menu-count';
import '../modules/checkbox-list/checkbox-list';
import '../modules/range-slider/range-slider';
import '../modules/like-button/like-button';

// меню подсчета
const menuArrDOM = document.querySelectorAll('.js-menu-count');
const menuArr = [];
const menuConfigArr = [
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
      ['спальня', 'спальни', 'спален'],
      ['кровать', 'кровати', 'кроватей'],
      ['ванная комната', 'ванные комнаты', 'ванных комнаты'],
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
      ['гость', 'гостя', 'гостей'],
      ['младенец', 'младенца', 'младенцев'],
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
      ['гость', 'гостя', 'гостей'],
      ['младенец', 'младенца', 'младенцев'],
    ],

    placeholder: 'Сколько гостей',
    areControlButtons: true,
  },
];

// установит на 3 первых (нужных)
for (let i = 0; i < 3; i += 1) {
  menuArr[i] = new MenuForCount(menuArrDOM[i], menuConfigArr[i]);
  menuArr[i].removeListeners();
  menuArr[i].switchMenu();
}

// checkbox-list
const checkboxList = document.querySelectorAll('.checkbox-list__button')[1];
checkboxList.click();

// hotel-item показать стрелки
document.querySelectorAll('.images-slider-arrows__prev')[0].style.zIndex = '1';
document.querySelectorAll('.images-slider-arrows__next')[0].style.zIndex = '1';

// payment
const paymentDOM = document.querySelector('.payment');
paymentDOM.querySelector('.js-datepicker-main-field').value = '19.08.2019';
paymentDOM.querySelector('.js-datepicker-second-field').value = '23.08.2019';
