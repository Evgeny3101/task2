class MenuForCount {
  constructor(elem, data) {
    const elemDOM           =   document.querySelector(elem);
    this.textFieldDOM       =   elemDOM.querySelector('input');
    this.itemCounts         =   [];
    this.descriptionTypes   =   data.descriptionTypes;
    this.placeholder        =   data.placeholder || '';
    this.btnsControl        =   (data.btnsControl !== undefined) ? data.btnsControl : true;
    this.textFieldLength    =   data.textFieldLength || Infinity;

    // создание обертки
    elemDOM.insertAdjacentHTML('beforeend', '<div class="dropdown-menu-count"><div class="dropdown-menu-count__wrapper"></div></div>');
    this.menuCountDOM = elemDOM.querySelector('.dropdown-menu-count')

    // слушатель для открыть, закрыть
    elemDOM.addEventListener('mouseleave', this.closeMenu.bind(this));
    this.textFieldDOM.parentNode.addEventListener('click', this.switchMenu.bind(this));


    // создание элементов подсчета
    for(let i = 0; i < data.itemsCount.length; i++) {
      this.itemCounts[i] = document.createElement('div');
      this.itemCounts[i].classList.add('dropdown-menu-count__container');
      this.itemCounts[i].innerHTML = `<div class="item-count"><h3 class="item-count__title">${data.itemsCount[i].title}</h3><div class="item-count__container-btn"><input class="item-count__minus-btn" type="button" value="-"><div class="item-count__result">${data.itemsCount[i].result}</div><input class="item-count__plus-btn" type="button" value="+"></div></div>`;
      elemDOM.querySelector('.dropdown-menu-count__wrapper').append(this.itemCounts[i]);
      this.itemCounts[i].resultDOM      = this.itemCounts[i].querySelector('.item-count__result');
      this.itemCounts[i].plusBtnDOM     = this.itemCounts[i].querySelector('.item-count__plus-btn');
      this.itemCounts[i].minusBtnDOM    = this.itemCounts[i].querySelector('.item-count__minus-btn');
      this.itemCounts[i].title          = data.itemsCount[i].title || '';
      this.itemCounts[i].minValue       = data.itemsCount[i].minValue || 0;
      this.itemCounts[i].result         = data.itemsCount[i].result || 0;
      this.itemCounts[i].descriptionId  = data.itemsCount[i].descriptionId;
      if(this.itemCounts[i].descriptionId === undefined) this.itemCounts[i].descriptionId = i;

      //  слушатели для + и -
      this.itemCounts[i].plusBtnDOM.addEventListener('click', plusOne.bind(this.itemCounts[i]));
      this.itemCounts[i].plusBtnDOM.addEventListener('click', this.toggleBtnClear.bind(this));


      this.itemCounts[i].minusBtnDOM.addEventListener('click', minusOne.bind(this.itemCounts[i]));
      this.itemCounts[i].minusBtnDOM.addEventListener('click', this.toggleBtnClear.bind(this));

      // выставляет значения в инпут если отключены кнопки контроля
      if(this.btnsControl == false) {
        this.itemCounts[i].plusBtnDOM.addEventListener( 'click', this.setResult.bind(this));
        this.itemCounts[i].minusBtnDOM.addEventListener('click', this.setResult.bind(this));
      }


      // при загрузке страницы
        if(this.itemCounts[i].result < this.itemCounts[i].minValue) {
          this.itemCounts[i].result = this.itemCounts[i].minValue;
        }

        // выставляет значения на страницу
        this.itemCounts[i].resultDOM.innerText = this.itemCounts[i].result;

        // добавит стиль btn-deactive
        if(this.itemCounts[i].result == this.itemCounts[i].minValue) this.itemCounts[i].minusBtnDOM.classList.add('btn-deactive');
    }

    function plusOne () {
      this.result++;
      this.resultDOM.innerText = this.result;
      if(this.result == 1 + this.minValue) this.minusBtnDOM.classList.remove('btn-deactive');
    };

    function minusOne() {
      if(this.result >= 1 + this.minValue) this.result--;
      this.resultDOM.innerText = this.result;
      if(this.result == 0 + this.minValue) this.minusBtnDOM.classList.add('btn-deactive');
    };


    // создание кнопок контроля
      elemDOM.querySelector('.dropdown-menu-count__wrapper').insertAdjacentHTML('beforeend', '<div class="dropdown-menu-count__container-btn"><div><input class="button button_fade05 js-clear" type="button" value="очистить"></div><div><input class="button button_blue js-apply" type="button" value="применить"></div></div>');

      if(this.btnsControl == false) {
        elemDOM.querySelector('.dropdown-menu-count__container-btn').style.display = 'none';
      }

      this.applyBtn = elemDOM.querySelector('.js-apply');
      this.clearBtn = elemDOM.querySelector('.js-clear');

      // слушатель для кнопка очистить и принять
      this.applyBtn.addEventListener('click', this.btnApplyResult.bind(this));
      this.clearBtn.addEventListener('click', function () {
        this.btnClearResult()
        this.hideBtnClear()
      }.bind(this));

    // при загрузке страницы
      // посчитает значения по умолчаню и выставит результат в инпут
      this.setResult();
      // скроет кнопку очистить если значения минимальны
      this.toggleBtnClear()

  } // конструктор



  // закрыть меню
  closeMenu() {
    this.menuCountDOM.classList.remove('current');
    this.textFieldDOM.classList.remove('count-active');
  };

  // открыть/закрыть меню
  switchMenu() {
    this.menuCountDOM.classList.toggle('current');
    this.textFieldDOM.classList.toggle('count-active');
  };


  // выставляет минимальные значения
  btnClearResult() {
    for(let item of this.itemCounts) {
      item.result = 0 + item.minValue;
      item.resultDOM.innerText = item.result;
      item.minusBtnDOM.classList.add('btn-deactive');
    };
  }


  // устанавливит значения и закроет меню
  btnApplyResult() {
    this.setResult()
    this.closeMenu()
  }

  showBtnClear() {
    this.clearBtn.style.display = "flex";
  }

  hideBtnClear() {
    this.clearBtn.style.display = "none";
  }

  // скрывает/показывает кнопку очистить
  // сравнивает результаты и минимальные значения
  toggleBtnClear() {
    let resultArr   = [],
        minValueArr = [];

    for(let item of this.itemCounts) {
      resultArr.push(item.result);
      minValueArr.push(item.minValue);
    }

    if( resultArr.toString() == minValueArr.toString() ) {
      this.hideBtnClear()
    }
    else this.showBtnClear()
  }




  // по индексу суммирует результаты
  getResultsByTypes() {
    this.resultsByType = [];
    for(let item of this.itemCounts) {
      let index = item.descriptionId;

      if(this.resultsByType[index] > 0 ) {
        this.resultsByType[index] += item.result
      } else {
        this.resultsByType[index]  = item.result
      }
    }
  }

  // добавляет описание к значениям по типам
  addDescriptionsByTypes() {
    this.resultsWithDescr = '';
    for(let i = 0; i < this.descriptionTypes.length; i++) {
      if(this.resultsByType[i] == 0) continue;

      for(let j = 0; j < this.descriptionTypes[i].length; j++) {
        if(this.resultsByType[i] <= this.descriptionTypes[i][j].whenTo) {
          this.resultsWithDescr += `${this.resultsByType[i]} ${this.descriptionTypes[i][j].write}, `;
          break;
        };
      };
    };
    this.resultsWithDescr = this.resultsWithDescr.slice(0, -2);
  }

  // установить результат
  setResult() {
    this.getResultsByTypes()
    this.addDescriptionsByTypes()
    if(this.resultsWithDescr == '') {
      this.textFieldDOM.value = this.placeholder;
    }
    else if( this.resultsWithDescr.length > this.textFieldLength ) {
      this.textFieldDOM.value = (this.resultsWithDescr.slice(0, this.textFieldLength) + ' ...');
    }
    else this.textFieldDOM.value = this.resultsWithDescr;

  };
}




export default  MenuForCount;
