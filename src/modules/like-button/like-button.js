const buttons = document.querySelectorAll('.js-like-button')

buttons.forEach(button => button.addEventListener('click', handleLikeButtonClick))

function handleLikeButtonClick() {
  // event может попадать на дочерний элемент
  this.classList.toggle('like-button_checked')
}