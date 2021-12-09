import DatePicker from '../../date-fields/date-fields';

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
