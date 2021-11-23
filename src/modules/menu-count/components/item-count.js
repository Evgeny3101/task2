class ItemCount {
  constructor(elem, config) {
    this._setConfig(config);
    elem.append(this._createHTML());

    this.handlerMinusBtnClick = this.minusOne.bind(this);
    this.handlerPlusBtnClick = this.plusOne.bind(this);
  }

  plusOne() {
    this.value += 1;
    this.isMinValue = false;
    this.resultDOM.innerText = this.value;

    // уберет класс если значение больше(на 1) минимального
    const isMoreMinValue = this.value >= 1 + this.minValue;

    if (isMoreMinValue) this.minusBtnDOM.classList.remove('item-count__minus-btn_deactive');
  }

  minusOne() {
    if (!this.isMinValue) this.value -= 1;
    if (this.value === this.minValue) {
      this.isMinValue = true;
      this.minusBtnDOM.classList.add('item-count__minus-btn_deactive');
    }

    this.resultDOM.innerText = this.value;
  }

  clearResult() {
    this.value = this.minValue;
    this.resultDOM.innerText = this.value;
    this.minusBtnDOM.classList.add('item-count__minus-btn_deactive');
  }

  _setConfig({
    title, minValue, value, index,
  }) {
    this.title = title || '';
    this.minValue = minValue || 0;
    this.value = value || this.minValue;
    this.descIndex = index || 0;
  }

  _createHTML() {
    const item = document.createElement('div');
    item.classList.add('item-count');
    item.innerHTML = `
    <div class="item-count__title">
      <h3 class="title title_size-3">${this.title}</h3>
    </div>
    <div class="item-count__container-button">
      <button class="item-count__minus-btn js-item-count__minus-btn" type="button">-</button>
      <div class="item-count__result js-item-count__result">${this.value}</div>
      <button class="item-count__plus-btn js-item-count__plus-btn" type="button">+</button>
    </div>`;

    this.minusBtnDOM = item.querySelector('.js-item-count__minus-btn');
    this.plusBtnDOM = item.querySelector('.js-item-count__plus-btn');
    this.resultDOM = item.querySelector('.js-item-count__result');

    this.isMinValue = this.value === this.minValue;
    if (this.isMinValue) {
      // добавит стиль item-count__minus-btn_deactive
      this.minusBtnDOM.classList.add('item-count__minus-btn_deactive');
    }

    return item;
  }
}

export default ItemCount;
