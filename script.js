'use strict';

const player1 = document.querySelector('.player--0');
const player1ScoreEl = document.getElementById('score--0');
const player1CurrentScoreEl = document.getElementById('current--0');

const player2 = document.querySelector('.player--1');
const player2ScoreEl = document.getElementById('score--1');
const player2CurrentScoreEl = document.getElementById('current--1');

const dice = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');

const switchPlayer = function () {
  if (player1.classList.contains('player--active')) {
    player1CurrentScore = 0;
    player1CurrentScoreEl.textContent = player1CurrentScore;
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
  } else {
    player2CurrentScore = 0;
    player2CurrentScoreEl.textContent = player2CurrentScore;
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
  }
};

// state variables of game

let player1CurrentScore = 0;
let player2CurrentScore = 0;

let player1Score = 0;
let player2Score = 0;

// the start of the game
player1ScoreEl.textContent = 0;
player2ScoreEl.textContent = 0;
dice.classList.add('hidden');

// implementaion of rolling dice feature
rollDice.addEventListener('click', function () {
  const generatedRandomNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${generatedRandomNumber}.png`;
  dice.classList.remove('hidden');
  if (generatedRandomNumber !== 1) {
    if (player1.classList.contains('player--active')) {
      player1CurrentScore += generatedRandomNumber;
      player1CurrentScoreEl.textContent = player1CurrentScore;
    } else {
      player2CurrentScore += generatedRandomNumber;
      player2CurrentScoreEl.textContent = player2CurrentScore;
    }
  } else {
    switchPlayer();
  }
});

// implementation of holding score feature

holdScore.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    player1Score += player1CurrentScore;
    player1ScoreEl.textContent = player1Score;
    if (player1Score >= 100) {
      player1.classList.add('player--winner');
      rollDice.classList.add('hidden');
      holdScore.classList.add('hidden');
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  } else {
    player2Score += player2CurrentScore;
    player2ScoreEl.textContent = player2Score;
    if (player2Score >= 100) {
      player2.classList.add('player--winner');
      rollDice.classList.add('hidden');
      holdScore.classList.add('hidden');
      dice.classList.add('hidden');
    }
    switchPlayer();
  }
});

// implementation of new game features

newGame.addEventListener('click', function () {
  player1CurrentScore = 0;
  player2CurrentScore = 0;
  player1Score = 0;
  player2Score = 0;

  player1CurrentScoreEl.textContent = player1CurrentScore;
  player2CurrentScoreEl.textContent = player2CurrentScore;

  player1ScoreEl.textContent = player1Score;
  player2ScoreEl.textContent = player2Score;

  dice.classList.add('hidden');

  player1.classList.add('player--active');

  if (rollDice.classList.contains('hidden'))
    rollDice.classList.remove('hidden');

  if (holdScore.classList.contains('hidden'))
    holdScore.classList.remove('hidden');

  if (player1.classList.contains('player--winner')) {
    player1.classList.remove('player--winner');
  }
  if (player2.classList.contains('player--winner')) {
    player2.classList.remove('player--winner');
  }
});
