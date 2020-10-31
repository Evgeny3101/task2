class ItemCount {
  constructor(elem, config) {
    this.title = config.title || '';
    this.minValue = config.minValue || 0;
    this.value = config.value || this.minValue;
    this.descIndex = config.index || 0;

    this.handleMinusBtnClick = this.minusOne.bind(this);
    this.handlePlusBtnClick = this.plusOne.bind(this);

    elem.append(this.createHTML());
  }

  createHTML() {
    const item = document.createElement('li');
    item.classList.add('item-count');

    item.innerHTML = `
    <h3 class="item-count__title">${this.title}</h3>
    <div class="item-count__container-btn">
      <input class="item-count__minus-btn" type="button" value="-"></input>
      <div class="item-count__result">${this.value}</div>
      <input class="item-count__plus-btn" type="button" value="+"></input>
    </div>`

    this.minusBtnDOM = item.querySelector('.item-count__minus-btn');
    this.plusBtnDOM = item.querySelector('.item-count__plus-btn');
    this.resultDOM = item.querySelector('.item-count__result');

    this.isMinValue = this.value == this.minValue
    if(this.isMinValue) {
      // добавит стиль btn-deactive
      this.minusBtnDOM.classList.add('btn-deactive');
    }

    return item
  }

  plusOne() {
    this.value += 1;
    this.isMinValue = false
    this.resultDOM.innerText = this.value;

    // уберет класс если значение больше(на 1) минимального
    if(this.value == 1 + this.minValue) this.minusBtnDOM.classList.remove('btn-deactive');
  }

  minusOne() {
    if(this.value >= 1 + this.minValue) this.value -= 1;
    if(this.value == this.minValue) this.isMinValue = true

    this.resultDOM.innerText = this.value;

    // добавит класс если значение равно минимальному
    if(this.value == this.minValue) this.minusBtnDOM.classList.add('btn-deactive');
  }

  clearResult() {
    this.value = this.minValue;
    this.resultDOM.innerText = this.value;
    this.minusBtnDOM.classList.add('btn-deactive');
  }
}


export default ItemCount;