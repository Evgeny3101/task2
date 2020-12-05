class ImagesSlider {
  constructor(mainDOM) {
    this.mainDOM = mainDOM;
    this.currentItem = 0;
    this.findElements();
    this.setHandlers();
    this.setListeners();
  } // конструктор

  findElements() {
    const { mainDOM } = this;

    this.imgsDOM = mainDOM.querySelectorAll('.container-images__image');
    this.controlBtnsDOM = mainDOM.querySelectorAll('.control__button');
    this.prevBtnDOM = mainDOM.querySelector('.switch-arrows__prev');
    this.nextBtnDOM = mainDOM.querySelector('.switch-arrows__next');
  }

  setHandlers() {
    this.handleControlButtonClick = (index) => this.goToImage.bind(this, index);
    this.handleButtonPrevClick = this.toPrevImage.bind(this);
    this.handleButtonNextClick = this.toNextImage.bind(this);
    this.handleImagesSliderMouseover = this.showArrows.bind(this);
    this.handleImagesSliderMouseleave = this.hideArrows.bind(this);
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
    if (this.currentItem === 0) this.currentItem = this.imgsDOM.length;
    this.currentItem -= 1;

    this.showSelectedImage();
  }

  toNextImage() {
    this.currentItem += 1;
    if (this.currentItem === this.imgsDOM.length) this.currentItem = 0;

    this.showSelectedImage();
  }

  goToImage(index) {
    this.currentItem = index;

    this.showSelectedImage();
  }

  // показать стрелки
  showArrows() {
    this.nextBtnDOM.style.zIndex = 1;
    this.prevBtnDOM.style.zIndex = 1;
  }

  // убрать стрелки
  hideArrows() {
    this.nextBtnDOM.style.zIndex = 0;
    this.prevBtnDOM.style.zIndex = 0;
  }

  // показать выбранное изображение
  showSelectedImage() {
    const { currentItem } = this;

    this.mainDOM.querySelector('.circle-current').classList.remove('circle-current');
    this.mainDOM.querySelector('.image-current').classList.remove('image-current');

    this.imgsDOM[currentItem].classList.add('image-current');
    this.controlBtnsDOM[currentItem].classList.add('circle-current');
  }
} // класс

export default ImagesSlider;
