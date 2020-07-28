const buttons = document.querySelectorAll('button')
const cards = document.querySelectorAll('.card')
const counter = document.querySelector('.counter')

buttons.forEach(b=> b.addEventListener('click',(e) => buttonClickHandler(e)))


const buttonClickHandler = (e) => {
    cards[e.target.dataset.card-1].classList.toggle('card--disabled')

    if (cards[e.target.dataset.card-1].classList.contains('card--disabled')) {
        e.target.innerText = 'loop'
    }
}