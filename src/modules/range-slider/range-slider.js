import "./rangeSlider";

const fields = ['.prise-range__field1','.prise-range__field2'],
valueDOM = document.querySelector('.prise-range__value'),
fieldDOM = [],
values = []

fieldDOM[0] = document.querySelector(fields[0])
fieldDOM[1] = document.querySelector(fields[1])


$('.range-slider__container').rangeSlider({
  sliderValues: [5000, 10000],
  sliderType: 'range',
  maxValue: 15000,
  step: 100,
  textField: fields
})

// установка значений при создании
  fieldDOM.forEach((item, i) => {
    item.style.display = 'none'
    values[i] = Number(item.innerText).toLocaleString()
  });

  valueDOM.innerText = `${values[0]}₽ - ${values[1]}₽`

// событие на обновление значений страницы
const observer = new MutationObserver(mutations => handleFieldMutation(mutations));

// настраиваем наблюдатель
var config = {
  attributes: false,
  childList: true,
  characterData: true,
  subtree: false,
}

// установка событий
observer.observe(fieldDOM[0], config);
observer.observe(fieldDOM[1], config);

// обработчик
function handleFieldMutation(mutation) {
  mutation.forEach((item, i) => {
    values[i] = Number(item.target.innerText).toLocaleString()
  });

  valueDOM.innerText = `${values[0]}₽ - ${values[1]}₽`
}