// Stylus
import "./index.styl"

// JS
import createDatePicker from "../modules/datepicker/datepicker.js"
import MenuForCount from '../modules/menu-for-count/menu-for-count.js'


const datepicker = createDatePicker({
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

}, '.js-datepicker-main-field', '.js-datepicker-second-field');

const menuForCount = new MenuForCount('.js-menuForCount', {
  itemsCount: [
    {
      title             : 'взрослые',
    }, {
      title             : 'дети',
    }, {
      title             : 'младенцы',
      index             : 1,
    }
  ],
  descriptionTypes: [
    ['гость', 'гостя', 'гостей'],
    ['младенец', 'младенца', 'младенцев'],
  ],
  placeholder : 'Сколько гостей',
  areControlButtons : true
})


// to make active

// const menuCountDOM = document.querySelector('.dropdown-menu-count')
// dropdown.classList.add('current')

// datepicker.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)])
// const datepickerDOM = document.querySelector('.datepicker')
// datepickerDOM.classList.add('active')
// datepickerDOM.style.top = '330px'
// datepickerDOM.style.left = '170px'