const buttons = document.querySelectorAll("button");
const cards = document.querySelectorAll(".card");
const counter = document.querySelector(".cart__counter");

let currentCart = 0;

const updateCart= () => {
  counter.innerText = currentCart;
  counter.style.display = currentCart > 0 ? "block" : "none";
}

buttons.forEach((b) =>
  b.addEventListener("click", (e) => buttonClickHandler(e))
);

const buttonClickHandler = (e) => {
  const card = cards[e.target.dataset.card - 1];
  const cardChecked = card.querySelector(".card__checked");
  card.classList.toggle("card--disabled");

  if (card.classList.contains("card--disabled")) {
    currentCart += 1;
    cardChecked.style.display = "block";
    e.target.innerText = "Удалить из заявки";
  } else {
    currentCart -= 1;
    cardChecked.style.display = "none";
    e.target.innerText = "Добавить";
  }

  updateCart();
};
