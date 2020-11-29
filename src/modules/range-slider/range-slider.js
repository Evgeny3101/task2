import '../../assets/js/libs/rangeSlider';

const fields = ['.prise-range__field1', '.prise-range__field2'];
const valueDOM = document.querySelector('.prise-range__value');
const fieldDOM = [];
const values = [];

fields.forEach((field, i) => {
  fieldDOM[i] = document.querySelector(field);
});

$('.js-range-slider__container').rangeSlider({
  sliderValues: [5000, 10000],
  sliderType: 'range',
  maxValue: 15500,
  step: 100,
  textField: fields,
});

// редактирование значений при создании
fieldDOM.forEach((item, i) => {
  const field = item;

  field.style.display = 'none';
  values[i] = Number(item.innerText).toLocaleString();
});

valueDOM.innerText = `${values[0]}₽ - ${values[1]}₽`;

// событие на обновление значений страницы
function handleFieldMutation(mutation) {
  mutation.forEach((item, i) => {
    values[i] = Number(item.target.innerText).toLocaleString();
  });

  valueDOM.innerText = `${values[0]}₽ - ${values[1]}₽`;
}
const observer = new MutationObserver((mutations) => handleFieldMutation(mutations));

// настраиваем наблюдатель
const config = {
  attributes: false,
  childList: true,
  characterData: true,
  subtree: false,
};

// установка событий
observer.observe(fieldDOM[0], config);
observer.observe(fieldDOM[1], config);
