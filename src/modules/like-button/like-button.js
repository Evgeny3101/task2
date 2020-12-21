class LikeButton {
  constructor(mainDOM) {
    this.mainDOM = mainDOM;
    this._findElement();
    this._setListeners();
  }

  _findElement() {
    this.iconDOM = this.mainDOM.querySelector('.js-like-button__icon');
    this.numberDOM = this.mainDOM.querySelector('.js-like-button__number');
  }

  _setListeners() {
    this.mainDOM.addEventListener('click', this._handleLikeButtonClick.bind(this));
  }

  _handleLikeButtonClick() {
    const { mainDOM, iconDOM, numberDOM } = this;

    mainDOM.classList.toggle('like-button_checked');
    const isChecked = mainDOM.classList.contains('like-button_checked');
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
