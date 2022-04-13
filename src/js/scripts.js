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

  const cardONE = document.querySelector("#cardOne");
  const cardTWO = document.querySelector("#cardTwo");
  const cardTop = document.querySelectorAll(".game__card-top");
  const cardMid = document.querySelectorAll(".game__card-mid");
  const cardBot = document.querySelectorAll(".game__card-bot");
  const startBtn = document.querySelector("#start");
  const score = document.querySelector(".game__score");

  let num = 0;
  let cardNUM = [cardONE, cardTWO];

  function getCard(num) {
    let n = Number(Math.floor(Math.random() * cards.length));
    if (cards[n].suit == "♥" || cards[n].suit == "♦") {
      cardNUM[num].style.color = "#ff3300";
    } else {
      cardNUM[num].style.color = "#000000";
    }

    cardTop[num].innerHTML = cards[n].value;
    cardMid[num].innerHTML = cards[n].suit;
    cardBot[num].innerHTML = cards[n].value;

    score.innerHTML += cards[n].value;
  }

  startBtn.addEventListener("click", () => {
    getCard(num);
    num++;
  });
  // const lang = document.querySelector(".footer__lang");
  // lang.addEventListener("click", () => {
  //   langSelect.style.display = "block";
  // });

  //
});
