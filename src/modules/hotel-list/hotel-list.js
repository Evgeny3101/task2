import ImagesSlider from '../images-slider/images-slider';

// слайдер изображений
const cardsDOM = document.querySelectorAll('.js-images-slider');
cardsDOM.forEach((card) => new ImagesSlider(card));
