import '../../assets/js/libs/range-slider/range-slider';

$('.js-range-slider__container').rangeSlider({
  sliderValues: [5000, 10000],
  sliderType: 'range',
  maxValue: 15500,
  minValue: 0,
  step: 100,
  textField: ['.js-range-slider__field1', '.js-range-slider__field2'],

  updateValues(values) {
    const valuesArr = values.map((name) => `${name.toLocaleString()}₽`);
    valuesArr[0] += ' - ';
    return valuesArr;
  },
});
