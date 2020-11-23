// Stylus
import "./ui-kit.styl"

// JS
import MenuForCount from '../modules/menu-for-count/menu-for-count.js';

// меню подсчета
const menuArrDOM = document.querySelectorAll('.js-menuForCount'),
menuArr = []
let menuConfigArr = []

menuConfigArr = [
  {
    itemsCount: [
      {
        title             : 'спальни',
        index             : 0,
        value             : 2,
      },  {
        title             : 'кровати',
        index             : 1,
        minValue          : 1,
        value             : 2,
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
  }, {
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
    areControlButtons : true
  }, {
    itemsCount: [
      {
        title          : 'взрослые',
        value          : 2
      },  {
        title          : 'дети',
        value          : 1
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
    areControlButtons : true
  }
];

for(let i = 0; i < 3; i +=1) {
  menuArr[i] = new MenuForCount(menuArrDOM[i], menuConfigArr[i]);
  menuArr[i].removeListeners()
  menuArr[i].switchMenu()
}
