import LikeButton from './like-button';

// подключение LikeButton
const likeButtonArr = [];
const buttonsDOM = document.querySelectorAll('.js-like-button');
buttonsDOM.forEach((button, i) => {
  likeButtonArr[i] = new LikeButton(button);
});
