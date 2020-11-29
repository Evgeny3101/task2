const buttons = document.querySelectorAll('.js-like-button');

// functions
function setIcon(buttonDOM) {
  const isChecked = buttonDOM.classList.contains('like-button_checked');
  const iconDOM = buttonDOM.querySelector('i');

  if (isChecked) iconDOM.innerText = 'favorite';
  else iconDOM.innerText = 'favorite_border';
}

function handleLikeButtonClick() {
  // event может попадать на дочерний элемент
  this.classList.toggle('like-button_checked');

  setIcon(this);
}

buttons.forEach((button) => {
  setIcon(button);
  button.addEventListener('click', handleLikeButtonClick);
});
