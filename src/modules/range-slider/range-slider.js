export default function(id, data) {

  const elemDOM             =   document.querySelector(id);
  elemDOM.insertAdjacentHTML('beforeend', '<div class="range-slider"><div class="widget1"></div><div class="range-between"></div><div class="widget2"></div></div>');
  const rangeSliderDOM      =   elemDOM.querySelector('.range-slider');
  const rangeDOM            =   elemDOM.querySelector('.range-between');
  const widget1DOM          =   elemDOM.querySelector('.widget1');
  const widget2DOM          =   elemDOM.querySelector('.widget2');

  widget1DOM.addEventListener('mousedown', moveWidget1)
  widget2DOM.addEventListener('mousedown', moveWidget2)


  function moveWidget1(evt) {
    const baseShift       =   evt.pageX;
    const rangeSlider     =   rangeSliderDOM.offsetWidth - widget1DOM.offsetWidth;
    const widget1         =   widget1DOM.offsetLeft;
    const widget2         =   widget2DOM.offsetLeft;

    document.onmousemove  = (event) => {
      // опредиление позиции курсора
      let widgetPos       =   widget1 - (baseShift - event.pageX);

      // ограничение перемещения
      if (widgetPos < 0)
          widgetPos       =   0;

      if (widgetPos > rangeSlider)
          widgetPos       =   rangeSlider;

      // ширина между виджетов
      let width           =   widget2 - widgetPos;

      // позиционирование элементов
      widget1DOM.style.left     =  widgetPos;
      widget2DOM.style.left     =  widgetPos + width;

      if(widgetPos <= widget2) {
        rangeDOM.style.left     =  widgetPos;

      } else {
        width                   =  Math.abs(width)
        rangeDOM.style.left     =  widget2;
      }

      rangeDOM.style.width      =  width;
    }

    document.onmouseup = function() {
      document.onmousemove = null;
    };

  }

  function moveWidget2(evt) {
    const baseShift       =   evt.pageX
    const rangeSlider     =   rangeSliderDOM.offsetWidth - widget1DOM.offsetWidth;
    const widget1         =   widget1DOM.offsetLeft
    const widget2         =   widget2DOM.offsetLeft

    document.onmousemove  = (event) => {
      // опредиление позиции курсора
      let widgetPos       =   widget2 - (baseShift - event.pageX);

      // ограничение перемещения
      if (widgetPos < 0)
          widgetPos       =   0;

      if (widgetPos > rangeSlider)
          widgetPos       =   rangeSlider ;

      // ширина между виджетов
      let width           =   widgetPos - widget1


      // позиционирование элементов
      widget1DOM.style.left   =  widget1;
      widget2DOM.style.left   =  widgetPos;
      rangeDOM.style.left     =  widget1;

      if(widgetPos <= widget1) {
        rangeDOM.style.left   =  widgetPos;
        width                 =  widget1 - widgetPos;
      }

      rangeDOM.style.width    =  width;

    }

    document.onmouseup = function() {
      document.onmousemove = null;
    };

  }

} // функция



