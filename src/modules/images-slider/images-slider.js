class ImagesSlider {
  constructor(mainDOM) {
    this.mainDOM = mainDOM;
    this._init();
  }

  setListeners() {
    this.controlBtnsDOM.forEach((item, i) =>
      item.addEventListener('click', this.handleControlButtonClick(i))
    );
    this.prevBtnDOM.addEventListener('click', this.handleButtonPrevClick);
    this.nextBtnDOM.addEventListener('click', this.handleButtonNextClick);
    this.mainDOM.addEventListener('mouseover', this.handleImagesSliderMouseover);
    this.mainDOM.addEventListener('mouseleave', this.handleImagesSliderMouseleave);
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
    this.nextBtnDOM.classList.add('images-slider-arrows__next_active');
    this.prevBtnDOM.classList.add('images-slider-arrows__prev_active');
  }

  // убрать стрелки
  hideArrows() {
    this.nextBtnDOM.classList.remove('images-slider-arrows__next_active');
    this.prevBtnDOM.classList.remove('images-slider-arrows__prev_active');
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

    const oldImage = this.mainDOM.querySelector('.js-image-current');

    oldImage.classList.remove(
      'js-image-current',
      'images-slider-container__image_current'
    );
    this.imgsDOM[currentImageNumber].classList.add(
      'js-image-current',
      'images-slider-container__image_current'
    );

    const oldCircle = this.mainDOM.querySelector('.js-circle-current');
    oldCircle.classList.remove(
      'js-circle-current',
      'images-slider-circles__button_current'
    );
    this.controlBtnsDOM[currentImageNumber].classList.add(
      'js-circle-current',
      'images-slider-circles__button_current'
    );
  }

  _findElements() {
    const { mainDOM } = this;

    this.imgsDOM = mainDOM.querySelectorAll('.js-images-slider-container__image');
    this.controlBtnsDOM = mainDOM.querySelectorAll('.js-images-slider-circles__button');
    this.prevBtnDOM = mainDOM.querySelector('.js-images-slider-arrows__prev');
    this.nextBtnDOM = mainDOM.querySelector('.js-images-slider-arrows__next');
  }

  _setHandlers() {
    this.handleControlButtonClick = (index) => this.goToImage.bind(this, index);
    this.handleButtonPrevClick = this.toPrevImage.bind(this);
    this.handleButtonNextClick = this.toNextImage.bind(this);
    this.handleImagesSliderMouseover = this.showArrows.bind(this);
    this.handleImagesSliderMouseleave = this.hideArrows.bind(this);
  }
} // класс

export default ImagesSlider;
