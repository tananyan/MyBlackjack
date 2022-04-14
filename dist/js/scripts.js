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

  // Закрытие меню и начало игры
  const startGame = document.querySelector("#newGame");
  const menuGame = document.querySelector(".game__menu");
  const boxGame = document.querySelector(".game__start");
  startGame.addEventListener("click", () => {
    menuGame.style.display = "none";
    boxGame.style.display = "block";
  });

  // Игра
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
  // const cardStyles = document.querySelectorAll(".")
  // Score and buttons
  const startBtn = document.querySelector("#HitBtn");
  const stopBtn = document.querySelector("#EnoughBtn");
  const score = document.querySelector(".game__score");

  let num = 0;
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

    if (num == 0) {
      score.innerHTML = cards[n].value;
    } else {
      score.innerHTML += "+" + cards[n].value;
    }
  }

  startBtn.addEventListener("click", () => {
    getCard(num);
    num++;
  });

  //
});
