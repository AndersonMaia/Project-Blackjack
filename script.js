const shuffleBtn = document.querySelector(".dice");
const player1Score = document.querySelector(".player1-score");
const player2Score = document.querySelector(".player2-score");
const player1Points = document.querySelector(".p1-points");
const player2Points = document.querySelector(".p2-points");
const p1Cards = document.querySelectorAll(".p1-card");
const p2Cards = document.querySelectorAll(".p2-card");

let p1Card1Value;
let p1Card2Value;
let p1Card3Value;
let p1Card4Value;
let p1Card5Value;
let p2Card1Value;
let p2Card2Value;
let p2Card3Value;
let p2Card4Value;
let p2Card5Value;

let p1TotalPoints = 0;
let p2TotalPoints = 0;

let p1CardsTurnedCount = 0;
let p2CardsTurnedCount = 0;

shuffleBtn.addEventListener("click", shuffleCards);

function flipCard() {
  for (let card of p1Cards) {
    card.disabled = false;
    card.addEventListener("click", () => {
      card.classList.add("card-flipped");
      card.classList.remove("hover-fx");
      p1CardsTurnedCount += 1;

      switch (card.id) {
        case "p1c1":
          card.innerText = p1Card1Value;
          p1TotalPoints += p1Card1Value;
          break;
        case "p1c2":
          card.innerText = p1Card2Value;
          p1TotalPoints += p1Card2Value;
          break;
        case "p1c3":
          card.innerText = p1Card3Value;
          p1TotalPoints += p1Card3Value;
          break;
        case "p1c4":
          card.innerText = p1Card4Value;
          p1TotalPoints += p1Card4Value;
          break;
        case "p1c5":
          card.innerText = p1Card5Value;
          p1TotalPoints += p1Card5Value;
          break;
      }

      player1Points.innerText = p1TotalPoints;
      checkResult();
    });
  }
  for (let card of p2Cards) {
    card.disabled = false;
    card.addEventListener("click", () => {
      card.classList.add("card-flipped");
      card.classList.remove("hover-fx");
      p2CardsTurnedCount += 1;

      switch (card.id) {
        case "p2c1":
          card.innerText = p2Card1Value;
          p2TotalPoints += p2Card1Value;
          break;
        case "p2c2":
          card.innerText = p2Card2Value;
          p2TotalPoints += p2Card2Value;
          break;
        case "p2c3":
          card.innerText = p2Card3Value;
          p2TotalPoints += p2Card3Value;
          break;
        case "p2c4":
          card.innerText = p2Card4Value;
          p2TotalPoints += p2Card4Value;
          break;
        case "p2c5":
          card.innerText = p2Card5Value;
          p2TotalPoints += p2Card5Value;
          break;
      }

      player2Points.innerText = p2TotalPoints;
      checkResult();
    });
  }
}

function shuffleCards() {
  reset();

  p1Card1Value = Math.floor(Math.random() * 10);
  p1Card2Value = Math.floor(Math.random() * 10);
  p1Card3Value = Math.floor(Math.random() * 10);
  p1Card4Value = Math.floor(Math.random() * 10);
  p1Card5Value = Math.floor(Math.random() * 10);
  p2Card1Value = Math.floor(Math.random() * 10);
  p2Card2Value = Math.floor(Math.random() * 10);
  p2Card3Value = Math.floor(Math.random() * 10);
  p2Card4Value = Math.floor(Math.random() * 10);
  p2Card5Value = Math.floor(Math.random() * 10);

  flipCard();
}

function checkResult() {
  if (p1TotalPoints === 21 && p2TotalPoints !== 21) {
    player1Score.classList.add("player-win");
    player2Score.classList.add("player-lose");
  } else if (p2TotalPoints === 21 && p1TotalPoints !== 21) {
    player1Score.classList.add("player-lose");
    player2Score.classList.add("player-win");
  } else if (p1TotalPoints > 21 && p2TotalPoints !== 21) {
    player1Score.classList.add("player-lose");
    player2Score.classList.add("player-win");
  } else if (p1TotalPoints !== 21 && p2TotalPoints > 21) {
    player1Score.classList.add("player-win");
    player2Score.classList.add("player-lose");
  } else if (
    p1TotalPoints !== 21 &&
    p2TotalPoints !== 21 &&
    p1CardsTurnedCount === 5 &&
    p2CardsTurnedCount === 5
  ) {
    if (p1TotalPoints % 21 < p2TotalPoints % 21) {
      player1Score.classList.add("player-win");
      player2Score.classList.add("player-lose");
    } else if (p2TotalPoints % 21 < p1TotalPoints % 21) {
      player1Score.classList.add("player-lose");
      player2Score.classList.add("player-win");
    }
  }
}

function reset() {
  p1Card1Value = 0;
  p1Card2Value = 0;
  p1Card3Value = 0;
  p1Card4Value = 0;
  p1Card5Value = 0;
  p2Card1Value = 0;
  p2Card2Value = 0;
  p2Card3Value = 0;
  p2Card4Value = 0;
  p2Card5Value = 0;

  p1TotalPoints = 0;
  player1Points.innerText = 0;
  p1CardsTurnedCount = 0;
  player1Score.classList.remove("player-lose");
  player1Score.classList.remove("player-win");

  p2TotalPoints = 0;
  player2Points.innerText = 0;
  p2CardsTurnedCount = 0;
  player2Score.classList.remove("player-lose");
  player2Score.classList.remove("player-win");

  for (let card of p1Cards) {
    card.disabled = true;
    card.classList.remove("card-flipped");
    card.classList.add("hover-fx");
    card.innerText = " ";
  }
  for (let card of p2Cards) {
    card.disabled = true;
    card.classList.remove("card-flipped");
    card.classList.add("hover-fx");
    card.innerText = " ";
  }
}
