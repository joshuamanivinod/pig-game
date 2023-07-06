'use strict';
// selecting elements

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, playing;

const init = function () {
  // initiallizing

  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  // 1.change color
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  // 2.add dice
  // 3.enable 2 btn
  // 4.set score to 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. generating a random dice number
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dice);
    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.Add current score to score of active player
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    console.log(score[activePlayer]);
    //   2.Check if score is atleast 100
    if (score[activePlayer] >= 30) {
      // finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //   jump to next person
      switchPlayer();
    }
  }
});

// New game
btnNew.addEventListener('click', init);

// begin_______________________________________________________________

let popup = document.getElementById('popup');
function openPopup() {
  popup.classList.add('open-popup');
  overlay.classList.remove('hidden');
}
function closePopup() {
  popup.classList.remove('open-popup');
  overlay.classList.add('hidden');
}

// const openModal = function () {
//   console.log('opened');
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };
// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// // open modal
// btnInstruct.addEventListener('click', openModal);
// // close modal
// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });
// end________________________________________________________________
