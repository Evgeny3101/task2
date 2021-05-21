class ImagesSlider {
  constructor(baseElement) {
    this.baseElement = baseElement;
    this._init();
  }

  setListeners() {
    this.controlBtnsDOM.forEach((item, i) => item.addEventListener('click', this.handlerControlButtonClick(i)));
    this.prevBtnDOM.addEventListener('click', this.handlerButtonPrevClick);
    this.nextBtnDOM.addEventListener('click', this.handlerButtonNextClick);
    this.baseElement.addEventListener('mouseover', this.handlerImagesSliderMouseover);
    this.baseElement.addEventListener('mouseleave', this.handlerImagesSliderMouseleave);
  }

  toPrevImage() {
    if (this.currentImageNumber === 0) this.currentImageNumber = this.imgsDOM.length;
    this.currentImageNumber -= 1;

    this._setSelectedImage();
  }

  toNextImage() {
    this.currentImageNumber += 1;
    if (this.currentImageNumber === this.imgsDOM.length) this.currentImageNumber = 0;

    this._setSelectedImage();
  }

  goToImage(index) {
    this.currentImageNumber = index;

    this._setSelectedImage();
  }

  // показать стрелки
  showArrows() {
    this.nextBtnDOM.classList.add('images-slider__arrows-next_active');
    this.prevBtnDOM.classList.add('images-slider__arrows-prev_active');
  }

  // убрать стрелки
  hideArrows() {
    this.nextBtnDOM.classList.remove('images-slider__arrows-next_active');
    this.prevBtnDOM.classList.remove('images-slider__arrows-prev_active');
  }

  _init() {
    this.currentImageNumber = 0;
    this._findElements();
    this._setHandlers();
    this.setListeners();
  }

  // показать выбранное изображение
  _setSelectedImage() {
    const { currentImageNumber } = this;

    const oldImage = this.baseElement.querySelector('.js-images-slider__image_current');

    oldImage.classList.remove(
      'js-images-slider__image_current',
      'images-slider__image_current',
    );
    this.imgsDOM[currentImageNumber].classList.add(
      'js-images-slider__image_current',
      'images-slider__image_current',
    );

    const oldCircle = this.baseElement.querySelector('.js-images-slider__circles-button_current');
    oldCircle.classList.remove(
      'js-images-slider__circles-button_current',
      'images-slider__circles-button_current',
    );
    this.controlBtnsDOM[currentImageNumber].classList.add(
      'js-images-slider__circles-button_current',
      'images-slider__circles-button_current',
    );
  }

  _findElements() {
    const { baseElement } = this;

    this.imgsDOM = baseElement.querySelectorAll('.js-images-slider__image');
    this.controlBtnsDOM = baseElement.querySelectorAll('.js-images-slider__circles-button');
    this.prevBtnDOM = baseElement.querySelector('.js-images-slider__arrows-prev');
    this.nextBtnDOM = baseElement.querySelector('.js-images-slider__arrows-next');
  }

  _setHandlers() {
    this.handlerControlButtonClick = (index) => this.goToImage.bind(this, index);
    this.handlerButtonPrevClick = this.toPrevImage.bind(this);
    this.handlerButtonNextClick = this.toNextImage.bind(this);
    this.handlerImagesSliderMouseover = this.showArrows.bind(this);
    this.handlerImagesSliderMouseleave = this.hideArrows.bind(this);
  }
} // класс

export default ImagesSlider;
