class ItemCount {
  constructor(elem, config) {
    this.setConfig(config);

    this.handleMinusBtnClick = this.minusOne.bind(this);
    this.handlePlusBtnClick = this.plusOne.bind(this);

    elem.append(this.createHTML());
  }

  setConfig(config) {
    this.title = config.title || '';
    this.minValue = config.minValue || 0;
    this.value = config.value || this.minValue;
    this.descIndex = config.index || 0;
  }

  createHTML() {
    const item = document.createElement('div');
    item.classList.add('menu-count-item');
    item.innerHTML = `
    <div class="menu-count-item__title">
      <h3 class="title title_size-3">${this.title}</h3>
    </div>
    <div class="menu-count-item__container-button">
      <button class="menu-count-item__minus-btn js-menu-count-item__minus-btn" type="button">-</button>
      <div class="menu-count-item__result js-menu-count-item__result">${this.value}</div>
      <button class="menu-count-item__plus-btn js-menu-count-item__plus-btn" type="button">+</button>
    </div>`;

    this.minusBtnDOM = item.querySelector('.js-menu-count-item__minus-btn');
    this.plusBtnDOM = item.querySelector('.js-menu-count-item__plus-btn');
    this.resultDOM = item.querySelector('.js-menu-count-item__result');

    this.isMinValue = this.value === this.minValue;
    if (this.isMinValue) {
      // добавит стиль btn-deactive
      this.minusBtnDOM.classList.add('btn-deactive');
    }

    return item;
  }

  plusOne() {
    this.value += 1;
    this.isMinValue = false;
    this.resultDOM.innerText = this.value;

    // уберет класс если значение больше(на 1) минимального
    if (this.value === 1 + this.minValue)
      this.minusBtnDOM.classList.remove('btn-deactive');
  }

  minusOne() {
    if (this.value >= 1 + this.minValue) this.value -= 1;
    if (this.value === this.minValue) this.isMinValue = true;

    this.resultDOM.innerText = this.value;

    // добавит класс если значение равно минимальному
    if (this.value === this.minValue) this.minusBtnDOM.classList.add('btn-deactive');
  }

  clearResult() {
    this.value = this.minValue;
    this.resultDOM.innerText = this.value;
    this.minusBtnDOM.classList.add('btn-deactive');
  }
}

export default ItemCount;
