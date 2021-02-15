import '../checkbox-list/checkbox-list';
import '../range-slider/range-slider';

import MenuForCount from '../menu-count/menu-count';
import DatePicker from '../datepicker/datepicker';


// меню подсчета
const menuCountArr = [];
menuCountArr[0] = new MenuForCount({
  baseElement: '.js-menu-count-filter-guest',
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
});

menuCountArr[1] = new MenuForCount({
  baseElement: '.js-menu-count-filter-amenities',
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
});


// календарь
const datepicker = new DatePicker({
  baseElement: '.js-datepicker-filter',
  dateFormat: 'dd M',
  multipleDatesSeparator: ' - ',

  isSingleField: true,
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
});
datepicker.plugin.selectDate([new Date(2019, 7, 19), new Date(2019, 7, 23)]);
