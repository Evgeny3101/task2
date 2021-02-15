import DatePicker from '../datepicker/datepicker';
import MenuForCount from '../menu-count/menu-count';

// eslint-disable-next-line no-unused-vars
const datepicker = new DatePicker({
  baseElement: '.js-datepicker-search-hotel',
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

// eslint-disable-next-line no-unused-vars
const menuForCount = new MenuForCount({
  baseElement: '.js-menu-count-search-hotel',
  itemsCount: [
    {
      title: 'взрослые',
      // value: 2
    },
    {
      title: 'дети',
      // value: 1
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
});
