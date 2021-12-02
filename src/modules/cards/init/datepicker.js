import DatePicker from '../../datepicker/datepicker';

const datepicker = new DatePicker({
  baseElement: '.js-datepicker-cards',
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
