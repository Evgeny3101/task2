class LikeButton {
  constructor(elem) {
    this.elem = elem;
    this._findElement();
    this._setListeners();
  }

  _findElement() {
    this.iconDOM = this.elem.querySelector('.js-like-button__icon');
    this.numberDOM = this.elem.querySelector('.js-like-button__number');
  }

  _setListeners() {
    this.elem.addEventListener('click', this._handleLikeButtonClick.bind(this));
  }

  _handleLikeButtonClick() {
    const { elem, iconDOM, numberDOM } = this;

    elem.classList.toggle('like-button_checked');
    const isChecked = elem.classList.contains('like-button_checked');
    iconDOM.innerText = isChecked ? 'favorite' : 'favorite_border';

    const numberText = numberDOM.innerText;
    if (isChecked) {
      numberDOM.innerText = Number(numberText) + 1;
    } else {
      numberDOM.innerText = Number(numberText) - 1;
    }
  }
}

export default LikeButton;
