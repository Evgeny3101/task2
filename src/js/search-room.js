// Stylus
import "../pages/search-room.styl";


import "../modules/checkbox-list/checkbox-list.js";
import "../modules/dropdown-menu/dropdown-menu.js";



import DatePicker from "../modules/datepicker/datepicker.js";
new DatePicker('.js-datepicker-here');

$('.js-datepicker-here').datepicker({
  dateFormat: 'dd M',
  multipleDatesSeparator: ' - ',
});



import setImagesSlider from "../modules/hotel-item/images-slider.js";

  setImagesSlider('.js-images-slider');