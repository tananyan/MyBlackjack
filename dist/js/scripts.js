// document.addEventListener("DOMContentLoaded", () => {});
// document.addEventListener("DOMContentLoaded", function () {

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

rndCard.onclick = function () {
  cardOne.innerHTML = Number(Math.floor(Math.random() * 10));
};

rndCard.addEventListener("click", () => {
  // cardTwo.innerHTML = Number(Math.floor(Math.random() * 10));
  let n = Number(Math.floor(Math.random() * cards.length));
  cardTwo.innerHTML = cards[n].value + cards[n].suit;
});

// const lang = document.querySelector(".footer__lang");
// lang.addEventListener("click", () => {
//   langSelect.style.display = "block";
// });

//
// });
