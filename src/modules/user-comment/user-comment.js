import LikeButton from '../like-button/like-button';

// подключение
const likeButtonArr = [];
const buttonsDOM = document.querySelectorAll('.js-like-button');
buttonsDOM.forEach((button, i) => {
  likeButtonArr[i] = new LikeButton(button);
});
