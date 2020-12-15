import '../../assets/js/libs/range-slider';

const fields = ['.range-slider__field1', '.range-slider__field2'];
const fieldDOM = [];

fields.forEach((field, i) => {
  fieldDOM[i] = document.querySelector(field);
});

$('.js-range-slider__container').rangeSlider({
  sliderValues: [5000, 10000],
  sliderType: 'range',
  maxValue: 15500,
  minValue: 0,
  step: 100,
  textField: fields,

  updateValues(values) {
    const valuesArr = values.map((name) => `${name.toLocaleString()}₽`);
    valuesArr[0] += ' - ';
    return valuesArr;
  },
});
