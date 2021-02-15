class LikeButton {
  constructor(baseElement) {
    this.baseElement = baseElement;
    this._findElement();
    this._setListeners();
  }

  _findElement() {
    this.iconDOM = this.baseElement.querySelector('.js-like-button__icon');
    this.numberDOM = this.baseElement.querySelector('.js-like-button__number');
  }

  _setListeners() {
    this.baseElement.addEventListener('click', this._handleLikeButtonClick.bind(this));
  }

  _handleLikeButtonClick() {
    const { baseElement, iconDOM, numberDOM } = this;

    baseElement.classList.toggle('like-button_checked');
    const isChecked = baseElement.classList.contains('like-button_checked');
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
