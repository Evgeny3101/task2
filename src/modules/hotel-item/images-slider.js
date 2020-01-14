

export default  function(id) {

  const sliderArray   = document.querySelectorAll(id);


  class HotelCard  {
    constructor(elemDOM) {
        this.imgsDOM = elemDOM.querySelectorAll('.images-slider__img');
        this.controlBtnsDOM = elemDOM.querySelectorAll('.control__btn');
        this.prevBtnDOM = elemDOM.querySelector('.slider-prev');
        this.nextBtnDOM = elemDOM.querySelector('.slider-next');
        let currentItem = 0;

      // показать выбранное изображение
      this.showSelectedImg = () => {
        elemDOM.querySelector(".circle-current").classList.remove('circle-current');
        elemDOM.querySelector(".img-current").classList.remove('img-current');
        this.imgsDOM[currentItem].classList.add('img-current');
        this.controlBtnsDOM[currentItem].classList.add('circle-current');
      }

      // события для кнопок
      // следующий
      this.nextBtnDOM.addEventListener('click',  () => {
        currentItem++;
        if(currentItem == this.imgsDOM.length)  currentItem = 0;
        this.showSelectedImg()
      }, false);

      // предыдущий
      this.prevBtnDOM.addEventListener('click',  () => {
        if(currentItem == 0)  currentItem = this.imgsDOM.length;
        currentItem--;
        this.showSelectedImg();
      }, false);

      // показать стрелки
      elemDOM.addEventListener('mouseover',  () => {
        this.nextBtnDOM.style.zIndex = 1;
        this.prevBtnDOM.style.zIndex = 1;
      }, false);

      // убрать стрелки
      elemDOM.addEventListener('mouseleave',  () => {
        this.nextBtnDOM.style.zIndex = 0;
        this.prevBtnDOM.style.zIndex = 0;
      }, false);

      // кнопки контроля
      for(let i = 0; i < this.imgsDOM.length; i++ ) {
        this.controlBtnsDOM[i].addEventListener('click',  () => {
          currentItem = i;
          this.showSelectedImg();
        }, false);
      }
    } // конструктор
  } // класс

  for(let i = 0; i < sliderArray.length; i++) {
    new HotelCard(sliderArray[i]);
  }

} // функция









