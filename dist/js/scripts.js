// document.addEventListener("DOMContentLoaded", () => {});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const suits = ["♠", "♣", "♥", "♦"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  // Закрытие меню и начало игры
  const startGame = document.querySelector("#newGame");
  const menuGame = document.querySelector(".game__menu");
  const boxGame = document.querySelector(".game__start");

  const restartBtn = document.querySelector("#StartBtn");

  // Player cards
  const cardONE = document.querySelector("#cardOne");
  const cardTWO = document.querySelector("#cardTwo");
  const cardTHREE = document.querySelector("#cardThree");
  const cardFOUR = document.querySelector("#cardFour");
  const cardFIVE = document.querySelector("#cardFive");
  // Dealer cards
  const cardONEd = document.querySelector("#cardOneD");
  const cardTWOd = document.querySelector("#cardTwoD");
  const cardTHREEd = document.querySelector("#cardThreeD");
  const cardFOURd = document.querySelector("#cardFourD");
  const cardFIVEd = document.querySelector("#cardFiveD");
  // Cards top mid bot /dealer 0-4 /player 5-9
  const cardTop = document.querySelectorAll(".game__card-top");
  const cardMid = document.querySelectorAll(".game__card-mid");
  const cardBot = document.querySelectorAll(".game__card-bot");
  // Score and buttons
  const startBtn = document.querySelector("#HitBtn");
  const stopBtn = document.querySelector("#EnoughBtn");
  const score = document.querySelector(".game__score");
  // Общий счетчик побед
  const winner = document.querySelector(".game__over");
  const win = document.querySelector(".game__win");
  const lose = document.querySelector(".game__loser");
  const draww = document.querySelector(".game__draww");
  const winsD = document.querySelector("#DealerWins");
  const wins = document.querySelector("#PlayerWins");
  let counterD = 0;
  let counter = 0;
  // Очки раунда
  const playerS = document.querySelector("#PlayerScore");
  const dealerS = document.querySelector("#DealerScore");

  // Загрузка /
  function gameLoader() {
    // Колода
    function buildCards(suitsArr, valuesArr) {
      let cardsArr = [];
      suitsArr.forEach((itemSuit) => {
        valuesArr.forEach((itemValue) => {
          let card = {};
          card.suit = itemSuit;
          card.value = itemValue;
          cardsArr.push(card);
        });
      });
      return cardsArr;
    }
    let cards = buildCards(suits, values);

    // Номер карты
    let numD = 0;
    startGame.addEventListener("click", () => {
      menuGame.style.display = "none";
      boxGame.style.display = "block";
      setTimeout(() => {
        getCardDealer(numD);
      }, 500);
    });

    // Номер карты игрока
    let num = 5;
    let cardNUM = [
      cardONEd,
      cardTWOd,
      cardTHREEd,
      cardFOURd,
      cardFIVEd,
      cardONE,
      cardTWO,
      cardTHREE,
      cardFOUR,
      cardFIVE,
    ];

    function getCardDealer(numD) {
      getCard(numD);
    }

    function getCard(num) {
      let n = Number(Math.floor(Math.random() * cards.length));
      if (cards[n].suit == "♥" || cards[n].suit == "♦") {
        cardNUM[num].style.color = "#ff3300";
        cardNUM[num].classList.add("game__card-style_active");
      } else {
        cardNUM[num].style.color = "#000000";
        cardNUM[num].classList.add("game__card-style_active");
      }

      cardTop[num].innerHTML = cards[n].value;
      cardMid[num].innerHTML = cards[n].suit;
      cardBot[num].innerHTML = cards[n].value;
    }

    // function scoreSum(n, num, flag) {
    //   if (num == 5 && flag === true) {
    //     score.innerHTML = cards[n].value;
    //   } else if (flag === true) {
    //     score.innerHTML += "+" + cards[n].value;
    //   }
    // }

    function summaCards(vals, flag) {
      let summa = 0;
      let counter = 0;
      // Счет игрока
      vals.forEach((elem) => {
        if (!isNaN(parseFloat(Number(elem))) && isFinite(Number(elem))) {
          summa += Number(elem);
          if (summa > 21 && counter > 0) {
            summa -= counter * 10;
            counter -= counter;
          }
        } else if (elem == "K" || elem == "Q" || elem == "J") {
          summa += 10;
          if (summa > 21 && counter > 0) {
            summa -= counter * 10;
            counter -= counter;
          }
        } else if (elem == "A") {
          counter++;
          summa += 11;
          if (summa > 21 && counter > 0) {
            summa -= counter * 10;
            counter -= counter;
          }
        }
      });

      setTimeout(() => {
        if (flag == true) {
          score.innerHTML = summa;
        }
      }, 300);

      return summa;
    }

    let arrSum = [];
    let arrSumD = [];
    let flag = true;

    startBtn.addEventListener("click", () => {
      if (num < 10) {
        getCard(num, true);
        arrSum.push(cardBot[num].innerHTML);
        num++;
        summaCards(arrSum, true);
      } else {
        alert("У вас максимум карт");
      }

      if (flag === true) {
        arrSumD.push(cardBot[0].innerHTML);
        flag = false;
      }

      if (summaCards(arrSum) >= 21) {
        stopEvent();
      }
    });

    // stp
    function stopEvent() {
      if (num > 6 && numD < 4) {
        while (summaCards(arrSumD, false) < 17) {
          numD++;
          getCardDealer(numD);
          arrSumD.push(cardBot[numD].innerHTML);
        }
        startBtn.disabled = true;
        stopBtn.disabled = true;

        setTimeout(() => {
          winner.style.display = "flex";
        }, 500);

        let sumD = summaCards(arrSumD);
        let sum = summaCards(arrSum);

        if (sum < 22 && sumD > 21) {
          win.style.display = "block";
          winner.style.background = "linear-gradient(black, 90%, limegreen)";
          counter++;
        } else if (sum > sumD && sum < 22) {
          win.style.display = "block";
          winner.style.background = "linear-gradient(black, 90%, limegreen)";
          counter++;
        } else if (sum == sumD) {
          draww.style.display = "block";
          winner.style.background = "linear-gradient(black, 90%, #ffe735)";
          counter++;
          counterD++;
        } else {
          lose.style.display = "block";
          winner.style.background = "linear-gradient(black, 90%, #ff3300)";
          counterD++;
        }

        playerS.innerHTML = sum;
        dealerS.innerHTML = sumD;

        setTimeout(() => {
          wins.innerHTML = counter;
          winsD.innerHTML = counterD;
        }, 300);
      }
    }
    stopBtn.addEventListener("click", () => {
      stopEvent();
    });

    // del
    function delCards() {
      winner.style.display = "none";

      win.style.display = "none";
      lose.style.display = "none";
      draww.style.display = "none";

      cardNUM.forEach((element, index) => {
        element.classList.remove("game__card-style_active");
        element.style.color = "transparent";
        cardTop[index].innerHTML = "";
        cardMid[index].innerHTML = "";
        cardBot[index].innerHTML = "";
      });

      num = 5;
      numD = 0;
      arrSum = [];
      arrSumD = [];
      flag = true;

      setTimeout(() => {
        getCardDealer(numD);
        score.innerHTML = "0";
      }, 500);
      startBtn.disabled = false;
      stopBtn.disabled = false;
    }

    restartBtn.addEventListener("click", () => {
      delCards();
    });
  }

  // Начинаниезаклятие
  gameLoader();
  //
});
