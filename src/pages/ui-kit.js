// Stylus
import "./ui-kit.styl"

// JS
import MenuForCount from '../modules/menu-for-count/menu-for-count.js';
import '../modules/checkbox-list/checkbox-list.js';
import "../modules/range-slider/range-slider.js";
import '../modules/like-button/like-button.js';


jQuery(function() {
  // меню подсчета
  const menuArrDOM = document.querySelectorAll('.js-menuForCount'),
  menuArr = [],
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

  // checkbox-list
  const checkboxList = document.querySelectorAll('.checkbox-list')[1]
  checkboxList.click()

  // hotel-item показать стрелки
  document.querySelectorAll('.switch-arrows__prev')[0].style.zIndex = '1'
  document.querySelectorAll('.switch-arrows__next')[0].style.zIndex = '1'

  // payment
  const paymentDOM = document.querySelector('.payment')
  paymentDOM.querySelector('.js-datepicker-main-field').value = '19.08.2019'
  paymentDOM.querySelector('.js-datepicker-second-field').value = '23.08.2019'
})