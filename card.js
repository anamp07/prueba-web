const flipBtn = document.querySelector('#flipBtn');
const backBtn = document.querySelector('#backBtn');
const cardFront = document.querySelector('.card__front');
const cardBack = document.querySelector('.card__back');
const card = document.querySelector('.card');
console.log(flipBtn);

flipBtn.addEventListener('click', function (e) {
  console.log('clicked');
  card.classList.add('flipped');
});

backBtn.addEventListener('click', (e) => {
  card.classList.remove('flipped');
});