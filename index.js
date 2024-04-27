const cards = document.querySelectorAll('.card');
const showClothBtn = document.querySelector('.show-cloth');
const showRingBtn = document.querySelector('.show-ring');
const showAllBtn = document.querySelector('.show-all');
const btns = document.querySelectorAll('.btn');

showClothBtn.addEventListener('click', () => {
    if(cards.length) {
        cards.forEach(card => {
            card.style.display = 'flex'
            const cardAttr = card.dataset.type;
            if(cardAttr !== 'cloth') {
                card.style.display = 'none';
            }
        });
        setActiveButton(showClothBtn);
    }
});
showRingBtn.addEventListener('click', () => {
    if(cards.length) {
        cards.forEach(card => {
            card.style.display = 'flex'
            const cardAttr = card.dataset.type;
            if(cardAttr !== 'ring') {
                card.style.display = 'none';
            }
        });
        setActiveButton(showRingBtn);
    }
});
showAllBtn.addEventListener('click', () => {
    if(cards.length) {
        cards.forEach(card => {
            card.style.display = 'flex'
        });
        setActiveButton(showAllBtn);
    }
});

function setActiveButton(button) {
    btns.forEach(button => { button.classList.remove('active-btn'); });
    button.classList.add('active-btn');
}