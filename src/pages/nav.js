// Stylus
import "./nav.styl"


// регулятор диапазона
import createRangeSlider from "../modules/range-slider/range-slider.js";

const priceRange = createRangeSlider(".js-priceRange",{
  step: 5,
  range: true,
  maxValue: 500,
  minValue: 0,
  values: [100, 400]
})

